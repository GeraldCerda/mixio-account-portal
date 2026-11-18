import "server-only";
import Stripe from "stripe";
import { OFFER } from "@/lib/mixio/offer";

export type MixioPlan = "monthly" | "yearly";

export function getStripeClient(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY?.trim();
  if (!key || !/^sk_(test|live)_/.test(key)) return null;
  return new Stripe(key);
}

export function getStripePriceId(plan: MixioPlan): string | null {
  const value = (plan === "monthly" ? process.env.STRIPE_MONTHLY_PRICE_ID : process.env.STRIPE_YEARLY_PRICE_ID)?.trim();
  return value && value.startsWith("price_") ? value : null;
}

export async function validateStripePrice(stripe: Stripe, plan: MixioPlan, priceId: string): Promise<boolean> {
  const price = await stripe.prices.retrieve(priceId);
  const expected = OFFER.plans[plan];
  return price.active && price.type === "recurring" &&
    price.currency.toLowerCase() === OFFER.currency.toLowerCase() &&
    price.unit_amount === Math.round(expected.price * 100) &&
    price.recurring?.interval === (plan === "monthly" ? "month" : "year");
}
