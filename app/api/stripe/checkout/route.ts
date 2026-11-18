import { NextResponse } from "next/server";
import { OFFER } from "@/lib/mixio/offer";
import { getStripeClient, getStripePriceId, validateStripePrice } from "@/lib/mixio/stripe";
import type { MixioPlan } from "@/lib/mixio/stripe";

export const runtime = "nodejs";

function back(request: Request, plan: MixioPlan, error: string): NextResponse {
  const url = new URL("/checkout", request.url);
  url.searchParams.set("plan", plan);
  url.searchParams.set("error", error);
  return NextResponse.redirect(url, { status: 303 });
}

export async function POST(request: Request): Promise<NextResponse> {
  const requestOrigin = new URL(request.url).origin;
  const providedOrigin = request.headers.get("origin");
  if (providedOrigin && providedOrigin !== requestOrigin) {
    return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
  }

  let submitted: FormData;
  try {
    submitted = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form" }, { status: 400 });
  }
  const value = submitted.get("plan");
  const plan: MixioPlan | null = value === "monthly" || value === "yearly" ? value : null;
  if (!plan) return NextResponse.json({ error: "Invalid plan" }, { status: 400 });

  const stripe = getStripeClient();
  const priceId = getStripePriceId(plan);
  if (!stripe || !priceId) return back(request, plan, "configuration");

  try {
    if (!(await validateStripePrice(stripe, plan, priceId))) {
      return back(request, plan, "pricing");
    }
    const successUrl = new URL("/confirmation", requestOrigin);
    successUrl.searchParams.set("session_id", "{CHECKOUT_SESSION_ID}");
    const cancelUrl = new URL("/checkout", requestOrigin);
    cancelUrl.searchParams.set("plan", plan);
    cancelUrl.searchParams.set("state", "cancelled");
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      payment_method_collection: "always",
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      subscription_data: {
        trial_period_days: OFFER.trialDays,
        metadata: { mixio_plan: plan },
      },
      metadata: { mixio_plan: plan },
      success_url: successUrl.toString(),
      cancel_url: cancelUrl.toString(),
    });
    if (!session.url) return back(request, plan, "checkout");
    return NextResponse.redirect(session.url, { status: 303 });
  } catch (error) {
    console.error("Mixio Stripe Checkout Session creation failed", error instanceof Error ? error.message : "Unknown Stripe error");
    return back(request, plan, "checkout");
  }
}
