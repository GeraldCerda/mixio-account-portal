import type { Metadata } from "next";
import "./confirmation.css";
import { ConfirmationEffects } from "@/components/mixio/ConfirmationEffects";

export const metadata: Metadata = {
  title: "Confirmation layout preview — Mixio",
};

export default function ConfirmationPage() {
  return (
    <>
      <ConfirmationEffects />
      <div className="band">
  <header className="nav"><div className="wrap">
    <a className="logo" href="/"><img src="/assets/img/mixio-logo.svg" alt="Mixio" /></a>
    <a className="nav-help" href="mailto:info@mixio.music">Questions? <b>Contact support</b></a>
  </div></header>
  <ol className="steps" aria-label="Sign-up progress">
    <li><span className="n">✓</span><span className="lbl">Choose plan</span></li>
    <li><span className="n">✓</span><span className="lbl">Start trial</span></li>
    <li aria-current="step"><span className="n">3</span><span className="lbl">Download</span></li>
  </ol>
  <div className="wrap head">
    <p className="live">Confirmation layout preview</p>
    <h1>Connect your account system.<span>Then activate Mixio.</span></h1>
    <p><b>Mixio</b> and <b>Mixio Assistant</b> are shown below for layout review. No payment, email, or license has been created.</p>
  </div>
</div>

<main>
  <div>
    <div className="handoff" role="note"><b>On your phone?</b> We've emailed your download link and licence key. Open it on the computer you make music on.</div>

    <section className="block" aria-labelledby="dl-h">
      <h2 id="dl-h">Download Mixio</h2>
      <p className="sub">Review the setup selector. Installers are not connected in this source bundle.</p>
      <div className="picker">
        <div className="pick"><span>Operating system</span>
          <div className="seg" data-group="os"><button type="button" aria-pressed="true">macOS</button><button type="button" aria-pressed="false">Windows</button></div></div>
        <div className="pick" data-mac-only><span>macOS version</span>
          <div className="seg" data-group="ver"><button type="button" aria-pressed="false">11.7 – 13</button><button type="button" aria-pressed="true">13 or later</button></div></div>
        <div className="pick"><span>Plugin format</span>
          <div className="seg" data-group="fmt"><button type="button" aria-pressed="true">VST3</button><button type="button" aria-pressed="false" data-mac-only>AU</button><button type="button" aria-pressed="false">AAX</button></div>
          <p className="compat" id="compat">VST3 works in Ableton Live, Cubase, Reaper &amp; FL Studio.</p></div>
      </div>
      <div className="dl">
        <span className="btn btn-primary" aria-disabled="true"><svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M7 1h2v8.2l2.8-2.8 1.4 1.4L8 13 2.8 7.8l1.4-1.4L7 9.2zM2 14h12v2H2z"/></svg>Download unavailable</span>
        <span className="btn btn-ghost" aria-disabled="true"><svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M7 1h2v8.2l2.8-2.8 1.4 1.4L8 13 2.8 7.8l1.4-1.4L7 9.2zM2 14h12v2H2z"/></svg>Assistant unavailable</span>
      </div>
      <p className="req"><a href="/resources/installation">Setup documentation</a> · Mac (Intel &amp; Apple Silicon) and Windows 10 / 11</p>
    </section>

    <section className="block" aria-labelledby="key-h">
      <h2 id="key-h">Your licence key</h2>
      <p className="sub">Mixio and Mixio Assistant will ask for this the first time you open them.</p>
      <div className="key"><code id="key">Not issued</code><button className="copy" type="button" id="copy" disabled>Unavailable</button></div>
    </section>

    <section className="block" aria-labelledby="set-h">
      <h2 id="set-h">Set up in four steps</h2>
      <ol className="setup">
        <li><div><h3>Download</h3><p>Grab Mixio and Mixio Assistant for your system above.</p></div></li>
        <li><div><h3>Install</h3><p>Run both installers. Restart your DAW if it was open, so it picks up the new plugin.</p></div></li>
        <li><div><h3>Activate</h3><p>Open Mixio or Mixio Assistant and paste in your licence key.</p></div></li>
        <li><div><h3>Open in your DAW</h3><p>Load a session you're working on, add Mixio, and hear what it does to your mix.</p></div></li>
      </ol>
      <p className="emailed">Email delivery requires the connected account and checkout systems.</p>
    </section>
  </div>

  <aside>
    <section className="block" aria-labelledby="trial-h">
      <h2 id="trial-h" className="tier" data-name>Annual plan</h2>
      <ul className="sum">
        <li><span>Free until</span><span data-lastfree></span></li>
        <li><span>First payment</span><span><span data-price></span> on <span data-charge></span></span></li>
        <li><span>Then</span><span data-renew></span></li>
      </ul>
      <a className="manage" href="/account">Account integration</a>
    </section>
    <section className="block" aria-labelledby="help-h">
      <h2 id="help-h">Need a hand?</h2>
      <ul className="helplist">
        <li><a href="/resources/installation">Setup guide</a></li>
        <li><span>Video walkthrough not supplied</span></li>
        <li><a href="mailto:info@mixio.music">Contact support</a></li>
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
