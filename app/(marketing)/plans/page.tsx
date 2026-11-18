import type { Metadata } from "next";
import "./plans.css";
import { PlansEffects } from "@/components/mixio/PlansEffects";

export const metadata: Metadata = {
  title: "Choose your plan — Mixio",
};

export default function PlansPage() {
  return (
    <>
      <PlansEffects />
<main id="main">
  <ol className="steps" aria-label="Sign-up progress">
    <li aria-current="step"><span className="n">1</span><span className="lbl">Choose plan</span></li>
    <li><span className="n">2</span><span className="lbl">Start trial</span></li>
    <li><span className="n">3</span><span className="lbl">Download</span></li>
  </ol>

  <div className="wrap">
    <div className="hero">
      <p className="eyebrow">14-day free trial</p>
      <h1>Choose your Mixio plan.<span>Start free for 14 days.</span></h1>
      <p className="lead">Both plans include <b>Mixio</b> and <b>Mixio Assistant</b>. Nothing to pay today.</p>
    </div>

    <div className="plans">
      <article className="plan" aria-labelledby="monthly">
        <div className="plan-top"><h2 className="tier" id="monthly">Monthly</h2></div>
        <p className="price"><strong>$14.99</strong><span>/ month</span></p>
        <p className="equiv">Billed monthly after your trial</p>
        <p className="trialnote"><b>14 days free</b>, then $14.99 each month. Cancel before your trial ends and you won't be charged.</p>
        <a className="btn btn-ghost" href="/checkout/?plan=monthly" data-plan-select="monthly">Try Mixio Monthly</a>
      </article>

      <article className="plan featured" aria-labelledby="annual">
        <div className="plan-top"><h2 className="tier" id="annual">Annual</h2><span className="save">2 months free</span></div>
        <p className="price"><strong>$149.99</strong><span>/ year</span></p>
        <p className="equiv">Works out at <b>$12.50 a month</b>, billed yearly</p>
        <p className="trialnote"><b>14 days free</b>, then $149.99 for the year. Cancel before your trial ends and you won't be charged.</p>
        <a className="btn btn-primary" href="/checkout/?plan=annual" data-plan-select="annual">Try Mixio Annually</a>
      </article>
    </div>
  </div>

  <section aria-labelledby="inc-h">
    <div className="wrap">
      <div className="section-head"><h2 id="inc-h">Included with both plans.<br /><span>No add-ons. No tiers.</span></h2></div>
      <div className="included">
        <div className="inc"><h3>Mixio</h3><p>Mix and master inside your DAW, across individual tracks, buses or the full mix.</p></div>
        <div className="inc"><h3>Describe the change you want</h3><p>Ask for changes in plain language, then shape and refine the result. You stay in control.</p></div>
        <div className="inc"><h3>Mixio Assistant</h3><p>Help preparing and routing your session, so you're ready to mix faster.</p></div>
      </div>
      <div className="daws" aria-label="Supported DAWs">
        <span className="label">Works in</span>
        <span className="tag">Pro Tools</span><span className="tag">Ableton Live</span><span className="tag">Logic Pro</span><span className="tag">FL Studio</span><span className="tag">Cubase</span>
        <span className="label" style={{ marginLeft: "6px" }}>· Mac &amp; Windows</span>
      </div>
    </div>
  </section>

  <section aria-labelledby="bill-h">
    <div className="wrap">
      <div className="section-head"><h2 id="bill-h">How your trial works.</h2></div>
      <ol className="timeline">
        <li><span className="dot"></span><p className="when">TODAY · $0</p><h3>Start your trial</h3><p>Add a card to start. Nothing is charged today, and you get full access to Mixio and Mixio Assistant.</p></li>
        <li><span className="dot"></span><p className="when">DAY 1–14</p><h3>Use it on your music</h3><p>Try it on real sessions. Cancel any time during the trial and you won't pay a thing.</p></li>
        <li><span className="dot"></span><p className="when">DAY 15</p><h3>Your plan begins</h3><p>Your first payment is taken and your plan renews monthly or yearly until you cancel.</p></li>
      </ol>
      <p className="fine">Prices are in USD. Taxes may apply depending on where you live. You can manage or cancel your subscription from your account at any time. <a href="https://mixio.music/terms">Terms</a> · <a href="https://mixio.music/privacy">Privacy</a></p>
    </div>
  </section>
</main>

    </>
  );
}
