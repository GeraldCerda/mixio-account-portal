import type { Metadata } from "next";
import "./checkout.css";
import { OFFER, formatPrice } from "@/lib/mixio/offer";
import { getStripeClient, getStripePriceId } from "@/lib/mixio/stripe";
import type { MixioPlan } from "@/lib/mixio/stripe";

export const metadata: Metadata = { title: "Start your Mixio trial | Secure checkout" };

type CheckoutQuery = { plan?: string; error?: string; state?: string };

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<CheckoutQuery>;
}) {
  const query = await searchParams;
  const plan: MixioPlan = query.plan === "monthly" ? "monthly" : "yearly";
  const offer = OFFER.plans[plan];
  const configured = Boolean(getStripeClient() && getStripePriceId(plan));
  const messages: Record<string, string> = {
    configuration: "Stripe Checkout is not yet configured for this plan. Please contact support.",
    pricing: "The configured Stripe Price does not match this advertised plan. Checkout is paused to prevent incorrect billing.",
    checkout: "Stripe Checkout could not be started. No payment has been taken. Please try again.",
  };
  const error = query.error ? messages[query.error] : null;

  return (
    <>
      <div className="band">
        <header className="nav"><div className="wrap">
          <a className="logo" href="/"><img src="/assets/img/mixio-logo-white.png" alt="Mixio" width={761} height={158} /></a>
          <a className="nav-help" href="mailto:info@mixio.music">Questions? <b>Contact support</b></a>
        </div></header>
        <ol className="steps" aria-label="Sign-up progress">
          <li className="done"><span className="n">✓</span><a className="lbl" href="/plans">Choose plan</a></li>
          <li aria-current="step"><span className="n">2</span><span className="lbl">Start trial</span></li>
          <li><span className="n">3</span><span className="lbl">Confirmation</span></li>
        </ol>
        <div className="wrap head">
          <h1>Start your {OFFER.trialDays}-day <span>free trial.</span></h1>
          <p><b>Mixio</b> and <b>Mixio Assistant</b> included. Nothing to pay today.</p>
        </div>
      </div>
      <main className="grid" id="main">
        <div>
          {error && <p className="mx-integration-notice" role="alert">{error}</p>}
          {query.state === "cancelled" && <p className="mx-integration-notice" role="status">Checkout was cancelled. No new subscription was created by this attempt.</p>}
          <section className="block" aria-labelledby="pay-h">
            <div className="block-head">
              <h2 id="pay-h">Secure checkout</h2>
              <p className="stripe">Powered by Stripe</p>
            </div>
            <p>Continue to Stripe to enter your email and payment details securely. Mixio does not collect or store your card number on this website.</p>
            <p className="hint">Your subscription begins with a {OFFER.trialDays}-day trial. Stripe securely collects a payment method for billing after the trial ends unless you cancel.</p>
            {!configured && <p className="mx-integration-notice" role="status">Checkout will become available when the Stripe keys and Price ID for this plan are configured in Vercel.</p>}
            <form action="/api/stripe/checkout" method="post" className="cta">
              <input type="hidden" name="plan" value={plan} />
              <button type="submit" className="btn" disabled={!configured}>Continue to secure Stripe checkout</button>
              <p className="legal">By continuing, you agree to the <a href="https://mixio.music/terms">Terms</a> and <a href="https://mixio.music/privacy">Privacy Policy</a>. If your trial is not cancelled, Stripe will bill {formatPrice(offer.price)} every {offer.period} after {OFFER.trialDays} days, plus applicable tax.</p>
            </form>
            <p className="help">Already have an account? <a href="/login">Sign in</a> · <a href="mailto:info@mixio.music">Contact support</a></p>
          </section>
        </div>
        <aside className="summary block" aria-labelledby="summary-h">
          <h2 id="summary-h">Order summary</h2>
          <div className="plan-line">
            <div><p className="plan-name">{offer.name}</p><p className="plan-price"><strong>{formatPrice(offer.price)}</strong> <span>/ {offer.period}</span></p></div>
            <a className="change" href="/plans">Change plan</a>
          </div>
          <ul className="includes">
            <li>Mixio for mixing and mastering</li>
            <li>Mixio Assistant</li>
            <li>Supported DAWs on Mac and Windows</li>
          </ul>
          <ul className="bill">
            <li className="today"><span>Due today</span><span>{formatPrice(0)}</span></li>
            <li><span>Trial period</span><span>{OFFER.trialDays} days</span></li>
            <li><span>After trial</span><span>{formatPrice(offer.price)} / {offer.period}</span></li>
          </ul>
          <p className="note">Prices are in {OFFER.currency}. Taxes, if any, are calculated by Stripe. The checkout page will show the final terms before you confirm.</p>
        </aside>
      </main>
      <footer><div className="wrap">
        <span>© 2026 Mixio</span>
        <nav aria-label="Footer"><a href="mailto:info@mixio.music">Support</a><a href="https://mixio.music/terms">Terms</a><a href="https://mixio.music/privacy">Privacy</a></nav>
      </div></footer>
    </>
  );
}
