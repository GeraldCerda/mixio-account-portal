import type { Metadata } from "next";
import "./confirmation.css";
import { getStripeClient } from "@/lib/mixio/stripe";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Subscription confirmation | Mixio" };

type ConfirmationQuery = { session_id?: string };

export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<ConfirmationQuery>;
}) {
  const { session_id: sessionId } = await searchParams;
  const stripe = getStripeClient();
  let confirmed = false;
  let trialEnds: string | null = null;
  let plan = "Mixio subscription";
  let subscriptionState = "Unverified";

  if (stripe && sessionId && /^cs_(test_)?[a-zA-Z0-9]+$/.test(sessionId)) {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ["subscription"] });
      const subscription = session.subscription;
      if (session.mode === "subscription" && session.status === "complete" &&
          subscription && typeof subscription !== "string" &&
          (subscription.status === "trialing" || subscription.status === "active")) {
        confirmed = true;
        subscriptionState = subscription.status === "trialing" ? "Trial active" : "Subscription active";
        const type = session.metadata?.mixio_plan;
        plan = type === "yearly" ? "Mixio Yearly" : type === "monthly" ? "Mixio Monthly" : "Mixio subscription";
        if (subscription.trial_end) {
          trialEnds = new Date(subscription.trial_end * 1000).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
        }
      }
    } catch (error) {
      console.error("Mixio Stripe confirmation verification failed", error instanceof Error ? error.message : "Unknown verification error");
    }
  }

  return (
    <>
      <div className="band">
        <header className="nav"><div className="wrap">
          <a className="logo" href="/"><img src="/assets/img/mixio-logo-white.png" alt="Mixio" width={761} height={158} /></a>
          <a className="nav-help" href="mailto:info@mixio.music">Questions? <b>Contact support</b></a>
        </div></header>
        <div className="wrap head">
          <p className="live">{confirmed ? "Stripe checkout verified" : "Verification required"}</p>
          <h1>{confirmed ? "Checkout complete." : "Checkout not verified."}<span>{confirmed ? "Your subscription is registered." : "No subscription confirmed."}</span></h1>
          <p>{confirmed ? "Stripe confirmed your subscription checkout. Activation and license issuance are handled separately." : "This page cannot confirm a completed Stripe Checkout session. No access or license is issued by this page."}</p>
        </div>
      </div>
      <main>
        <div>
          <section className="block" aria-labelledby="status-h">
            <h2 id="status-h">{confirmed ? "Stripe subscription status" : "Unable to verify checkout"}</h2>
            <p className="sub">{confirmed ? subscriptionState : "Return to checkout to complete registration, or contact support if you finished checkout but see this message."}</p>
            {confirmed ? (
              <>
                <p className="sub">{plan}</p>
                {trialEnds && <p className="sub">Trial scheduled to end: {trialEnds}</p>}
                <p className="mx-integration-notice" role="status">Payment registration is confirmed with Stripe. Your Mixio account, license key, installer access, and entitlement email are not provisioned by this standalone marketing website.</p>
                <p className="sub">Contact support for account activation if you do not already have access.</p>
              </>
            ) : (
              <a className="btn btn-primary" href="/plans">Return to plans</a>
            )}
          </section>
          <section className="block" aria-labelledby="next-h">
            <h2 id="next-h">Next steps</h2>
            <p className="sub"><a href="/resources/installation">Installation guidance</a> · <a href="/account">Account information</a> · <a href="mailto:info@mixio.music">Contact support</a></p>
          </section>
        </div>
        <aside>
          <section className="block" aria-labelledby="help-h">
            <h2 id="help-h">Need a hand?</h2>
            <ul className="helplist">
              <li><a href="/support">Support</a></li>
              <li><a href="/resources/subscriptions">Subscription information</a></li>
              <li><a href="mailto:info@mixio.music">Email Mixio</a></li>
            </ul>
          </section>
        </aside>
      </main>
      <footer><div className="wrap">
        <span>© 2026 Mixio</span>
        <nav aria-label="Footer"><a href="mailto:info@mixio.music">Support</a><a href="https://mixio.music/terms">Terms</a><a href="https://mixio.music/privacy">Privacy</a></nav>
      </div></footer>
    </>
  );
}
