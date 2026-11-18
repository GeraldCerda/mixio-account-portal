import { getStripeClient } from "@/lib/mixio/stripe";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<Response> {
  const stripe = getStripeClient();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET?.trim();
  if (!stripe || !webhookSecret) {
    return Response.json({ error: "Webhook not configured" }, { status: 503 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) return Response.json({ error: "Signature missing" }, { status: 400 });

  try {
    const event = stripe.webhooks.constructEvent(await request.text(), signature, webhookSecret);
    console.info("Mixio verified Stripe event", event.id, event.type);
    return Response.json({ received: true });
  } catch {
    return Response.json({ error: "Invalid webhook signature" }, { status: 400 });
  }
}
