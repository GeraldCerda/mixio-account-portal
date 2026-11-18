import type { Metadata } from "next";
import "./checkout.css";
import { CheckoutEffects } from "@/components/mixio/CheckoutEffects";

export const metadata: Metadata = {
  title: "Start your 14-day free trial — Mixio",
};

export default function CheckoutPage() {
  return (
    <>
      <CheckoutEffects />
      <div className="band">
  <header className="nav"><div className="wrap">
    <a className="logo" href="/"><img src="/assets/img/mixio-logo.svg" alt="Mixio" /></a>
    <a className="nav-help" href="mailto:info@mixio.music">Questions? <b>Contact support</b></a>
  </div></header>
  <ol className="steps" aria-label="Sign-up progress">
    <li className="done"><span className="n">✓</span><a className="lbl" href="/plans/">Choose plan</a></li>
    <li aria-current="step"><span className="n">2</span><span className="lbl">Start trial</span></li>
    <li><span className="n">3</span><span className="lbl">Download</span></li>
  </ol>
  <div className="wrap head">
    <h1>Start your 14-day <span>free trial.</span></h1>
    <p><b>Mixio</b> and <b>Mixio Assistant</b> included. Nothing to pay today.</p>
  </div>
</div>

<main className="grid" id="main">
  <form className="form" id="checkout" noValidate>
    <p className="mx-integration-notice" role="status" tabIndex={-1}>Source preview only. Checkout and subscriptions are not connected. No payment or free trial can be started here.</p>
    <div className="alert" role="alert" id="alert"><b>!</b><div><b>Your card was declined.</b> Nothing has been charged. Try another card or contact your bank.</div></div>

    <section className="block" aria-labelledby="acc-h">
      <div className="block-head"><h2 id="acc-h">Your account</h2><p>Already have one? <a href="/login">Sign in</a></p></div>
      <label className="field"><span className="label">Email</span><input disabled type="email" autoComplete="email" placeholder="you@example.com" required /></label>
      <label className="field"><span className="label">Create a password</span><input disabled type="password" autoComplete="new-password" placeholder="At least 8 characters" required /></label>
      <p className="hint">You'll use these to sign in to your Mixio account and manage your subscription.</p>
    </section>

    <section className="block" aria-labelledby="pay-h">
      <div className="block-head"><h2 id="pay-h">Payment details</h2>
        <p className="stripe"><svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M4 7V5a4 4 0 1 1 8 0v2h1v8H3V7h1zm2 0h4V5a2 2 0 1 0-4 0v2z"/></svg>Secure payment via Stripe</p></div>
      <label className="field"><span className="label">Card number</span><input disabled className="card-field" type="text" inputMode="numeric" autoComplete="cc-number" placeholder="1234 1234 1234 1234" /></label>
      <div className="row field">
        <label><span className="label">Expiry</span><input disabled className="card-field" type="text" autoComplete="cc-exp" placeholder="MM / YY" /></label>
        <label><span className="label">CVC</span><input disabled className="card-field" type="text" inputMode="numeric" autoComplete="cc-csc" placeholder="123" /></label>
      </div>
      <div className="row field">
        <label><span className="label">Country</span><select disabled autoComplete="country-name"><option>United States</option><option>United Kingdom</option><option>Canada</option><option>Other</option></select></label>
        <label><span className="label">Postcode / ZIP</span><input disabled type="text" autoComplete="postal-code" placeholder="90210" /></label>
      </div>
      <p className="hint">Your card won't be charged today. It's needed so your plan can start when the trial ends.</p>
      <label className="consent"><input disabled type="checkbox" id="marketing-consent" /><span>Send me tips, product updates and offers from Mixio. Optional, and you can unsubscribe any time.</span></label>
    </section>

    <div className="cta">
      <button className="btn" type="submit" id="go" disabled><span className="spinner" aria-hidden="true"></span><span id="go-label">Start My 14-Day Free Trial</span></button>
      <p className="legal">By starting your trial you agree to the <a href="https://mixio.music/terms">Terms</a> and <a href="https://mixio.music/privacy">Privacy Policy</a>, and allow Mixio to charge <span data-price></span> on <span data-charge></span> and every <span data-period></span> after that until you cancel.</p>
      <p className="help">Stuck? <a href="mailto:info@mixio.music">Contact support</a></p>
    </div>
  </form>

  <aside className="summary block" aria-labelledby="sum-h">
    <h2 id="sum-h" className="sr" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>Order summary</h2>
    <div className="plan-line">
      <div><p className="plan-name" data-name>Annual</p><p className="plan-price"><strong data-price-big></strong> <span data-per></span></p></div>
      <a className="change" href="/plans/">Change plan</a>
    </div>
    <ul className="includes"><li>Mixio for mixing &amp; mastering</li><li>Mixio Assistant</li><li>Mac &amp; Windows · all supported DAWs</li></ul>
    <ul className="bill">
      <li className="today"><span>Due today</span><span>$0.00</span></li>
      <li><span>Free trial</span><span data-trial></span></li>
      <li><span>First payment</span><span><span data-price></span> on <span data-charge></span></span></li>
      <li><span>Then</span><span data-renew></span></li>
    </ul>
    <p className="note">Cancel any time before <span data-charge></span> and you won't be charged. Prices in USD. Taxes may apply.</p>
  </aside>
</main>

<footer><div className="wrap">
  <span>© 2026 Mixio</span>
  <nav aria-label="Footer"><a href="mailto:info@mixio.music">Support</a><a href="https://mixio.music/terms">Terms</a><a href="https://mixio.music/privacy">Privacy</a></nav>
</div></footer>
    </>
  );
}
