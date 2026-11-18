export function HeroSection() {
  return (
    <section className="hero glow" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <h1 id="hero-title" className="hero-h1">You create. <span className="mx-accent">Mixio helps finish.</span></h1>
          <p className="lead">Professional mixing and mastering, shaped to your track, right inside your DAW. <strong>The Assistant</strong> lets you describe the change you want in plain words, and you stay in control of the result.</p>
          <div className="cta-block">
            <a className="mx-btn mx-btn-primary" href="/plans/" data-cta="hero">Start Your&nbsp;<span data-offer="trialDays"></span>-Day Free Trial</a>
            <a className="text-link" href="#demo" data-cta-secondary="hero_watch">Hear It In Action <span aria-hidden="true">↓</span></a>
          </div>
          <p className="trust-line"><span className="mx-badge mx-badge-tag">12x Grammy</span><span>Built on the ear of <strong>Mark “Spike” Stent</strong>, 12x Grammy-winning mix engineer.</span></p>
        </div>
        <figure className="hero-stack">
          <div className="ui-glow" aria-hidden="true"></div>
          <div className="lines-wrap">
            <img className="ui-lines" src="/assets/img/ui-lines.jpg" width="900" height="285" fetchPriority="high"
                 alt="Mixio's frequency analyzer: colored lines showing the bass, guitars, vocals and other instruments across the spectrum from 20Hz to 20kHz." />
          </div>
          <img className="ui-card ui-mode" src="/assets/img/ui-mode.jpg" width="466" height="60" alt="" />
          <img className="ui-card ui-prompt" src="/assets/img/ui-prompt.jpg" width="478" height="92" alt="A Mixio chat prompt: “Give the guitars more presence”, set to 32%, with Edit and Remove." />
          <img className="ui-card ui-knobs" src="/assets/img/ui-knobs.jpg" width="362" height="156" alt="Mixio's Reanalyze button with glue and width knobs." />
        </figure>
      </div>
    </section>
  );
}

export function AudioDemoSection() {
  return (
    <section id="demo" className="section on-deep" aria-labelledby="demo-title">
      <div className="wrap demo-grid">
        <div className="mx-sh mx-sh-center">
          <p className="mx-eyebrow">Before and after</p>
          <h2 id="demo-title" className="mx-h2">Same song. <span className="mx-accent">Pro mix.</span></h2>
          <p className="mx-sh-body">One track, before and after Mixio. Compare the waveforms and listening notes for both versions, with or without sound.</p>
        </div>

        <div className="mx-player">
          <div className="mx-seg" role="tablist" aria-label="Demo stages">
            <button className="mx-seg-btn" role="tab" id="tab-1" aria-controls="stage-1" aria-selected="true" tabIndex={0}>Your mix</button>
            <button className="mx-seg-btn" role="tab" id="tab-2" aria-controls="stage-2" aria-selected="false" tabIndex={-1}>Mixio</button>
            <button className="mx-seg-btn" role="tab" id="tab-3" aria-controls="stage-3" aria-selected="false" tabIndex={-1}>Assistant</button>
          </div>

          <div role="tabpanel" id="stage-1" aria-labelledby="tab-1" className="demo-panel">
            <div className="demo-stage-top"><p className="demo-stage-name">01 · Initial mix</p><span className="mx-badge mx-badge-creator">Your mix</span></div>
            <div data-wave="cream" data-wave-id="initial-mix" aria-label="Waveform of the original mix, with wide swings in level"></div>
            <p className="demo-caption"><b>What you hear:</b> Vocals sit too far back. Bass and low mids are muddy.</p>
          </div>
          <div role="tabpanel" id="stage-2" aria-labelledby="tab-2" className="demo-panel" hidden>
            <div className="demo-stage-top"><p className="demo-stage-name">02 · Mixio result</p><span className="mx-badge mx-badge-tag">Mixio pass</span></div>
            <div data-wave="purple" data-wave-id="mixio-result" aria-label="Waveform of the Mixio version: louder and more even"></div>
            <p className="demo-caption"><b>What changed:</b> A balanced, commercial mix. Clearer vocals and a tighter low end.</p>
          </div>
          <div role="tabpanel" id="stage-3" aria-labelledby="tab-3" className="demo-panel" hidden>
            <div className="demo-stage-top"><p className="demo-stage-name">03 · Assistant adjustment</p><span className="mx-badge mx-badge-tag">Assistant</span></div>
            <div data-wave="purple" data-seed="23" aria-label="Illustrative waveform: refined result after the Assistant adjustment"></div>
            <p className="demo-caption"><b>What you asked for:</b> <span className="ph">Assistant comparison unavailable until a verified audio file is supplied</span></p>
          </div>

          <div className="demo-transport">
            <button className="mx-play" type="button" data-demo-play aria-label="Play">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M4 2l10 6-10 6z"/></svg>
            </button>
            <div className="demo-scrub">
              <input className="demo-range" type="range" min="0" max="1000" value="0" aria-label="Seek within the demo" />
              <div className="mx-times"><span data-demo-now>0:00</span><span data-demo-total>0:30</span></div>
            </div>
          </div>
          <p className="mx-player-note" data-demo-preview-note>Silent preview: no audio is loaded for this stage yet.</p>
          <p className="mx-player-note">Audio never plays on its own. The waveforms show the real audio.</p>
          <p className="sr-only" role="status" aria-live="polite" data-demo-live></p>
        </div>

        <div className="section-cta">
          <a className="mx-btn mx-btn-primary" href="/plans/" data-cta="demo">Start Your&nbsp;<span data-offer="trialDays"></span>-Day Free Trial</a>
        </div>
      </div>
    </section>
  );
}

export function ProductSection() {
  return (
    <section className="section" aria-labelledby="product-title">
      <div className="wrap">
        <div className="mx-sh mx-sh-center">
          <p className="mx-eyebrow">Mixio + Assistant</p>
          <h2 id="product-title" className="mx-h2">Mixio shapes. <span className="mx-accent">You decide.</span></h2>
        </div>
        <div className="grid-2">
          <article className="mx-card">
            <h3 className="card-title">Mixio: the sound</h3>
            <p className="card-body">Mixio listens to your session and shapes each bus with Spike's mixing and mastering approach, so you get a balanced, polished starting point.</p>
            <ul className="card-list">
              <li>Checks spectral balance, stereo field, dynamics and frequency relationships across every track</li>
              <li>Gain-stages from each stem through to the master bus</li>
              <li>Masters for streaming by monitoring LUFS levels and optimizing stereo loudness</li>
            </ul>
          </article>
          <article className="mx-card">
            <h3 className="card-title">The Assistant: the guidance</h3>
            <p className="card-body">Describe the change you want in plain language. The Assistant suggests how to get there and can make the adjustment for you.</p>
            <div className="mx-chat" role="log" aria-label="Example Assistant exchange">
              <div className="mx-msg mx-msg-user"><div className="mx-msg-who">You</div>Give the guitars more presence</div>
              <div className="mx-msg mx-msg-mixio"><div className="mx-msg-who">Mixio</div>I have adjusted the EQ to bring more presence to the guitars.</div>
            </div>
          </article>
        </div>
        <div className="control-note">
          <h3 className="card-title">You stay in control.</h3>
          <p>Every suggestion is editable. Nothing is applied that you can't change or undo, and the creative decisions stay yours.</p>
        </div>
      </div>
    </section>
  );
}

export function StepsSection() {
  return (
    <section className="section on-deep" aria-labelledby="how-title">
      <div className="wrap">
        <div className="mx-sh mx-sh-center">
          <p className="mx-eyebrow">How it works</p>
          <h2 id="how-title" className="mx-h2">Three steps. <span className="mx-accent">Your sound.</span></h2>
        </div>
        <ol className="steps-open">
          <li className="step-open">
            <div className="mx-num" aria-hidden="true">01</div>
            <h3 className="card-title">Set up in your DAW</h3>
            <p className="card-body">Install Mixio and open it as a plugin in the session you're working on.</p>
          </li>
          <li className="step-open">
            <div className="mx-num" aria-hidden="true">02</div>
            <h3 className="card-title">Analyse and shape</h3>
            <p className="card-body">Press Analyze. Mixio listens to your buses and shapes the sound into a balanced mix.</p>
          </li>
          <li className="step-open">
            <div className="mx-num" aria-hidden="true">03</div>
            <h3 className="card-title">Refine and finish</h3>
            <p className="card-body">Ask the Assistant for changes, tweak anything by hand, and finish the mix your way.</p>
          </li>
        </ol>
        <div className="compat">
          <p className="compat-label">Works with</p>
          <ul className="compat-list">
            <li className="mx-badge mx-badge-tag chip">Pro Tools</li><li className="mx-badge mx-badge-tag chip">Ableton Live</li><li className="mx-badge mx-badge-tag chip">Logic Pro</li><li className="mx-badge mx-badge-tag chip">FL Studio</li><li className="mx-badge mx-badge-tag chip">Cubase</li>
            <li className="mx-badge mx-badge-tag chip">VST3 · AU</li>
            <li className="mx-badge mx-badge-tag chip">Mac (Intel + Apple Silicon)</li><li className="mx-badge mx-badge-tag chip">Windows 10/11</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ExpertiseSection() {
  return (
    <section className="section glow" aria-labelledby="expertise-title">
      <div className="wrap editorial">
        <div>
          <div className="mx-sh">
            <p className="mx-eyebrow">The expertise</p>
            <h2 id="expertise-title" className="mx-h2">Decades of experience. <span className="mx-accent">In your DAW.</span></h2>
            <p className="mx-sh-body">Mixio was developed from decades of Spike's knowledge, experience and ear. From first mix to final master, his expertise covers the full journey.</p>
          </div>
          <div className="mx-stat"><div className="mx-stat-num">12X</div><div className="mx-stat-text">Grammy-winning<br />mix engineer</div></div>
          <div className="mx-credits" role="list">
            <div className="mx-credit" role="listitem">Beyoncé</div>
            <div className="mx-credit" role="listitem">Ed Sheeran</div>
            <div className="mx-credit" role="listitem">Coldplay</div>
            <div className="mx-credit" role="listitem">Harry Styles</div>
            <div className="mx-credit" role="listitem">Dua Lipa</div>
            <div className="mx-credit" role="listitem">Post Malone</div>
          </div>
        </div>
        <figure className="mx-quote">
          <div className="mx-quote-mark" aria-hidden="true">”</div>
          <blockquote className="mx-quote-text">It's 45 years of knowledge put into something that everyone can access and use.</blockquote>
          <div className="mx-quote-rule"></div>
          <figcaption>
            <div className="mx-quote-name">Mark “Spike” Stent</div>
            <div className="mx-quote-role">Grammy-winning mix engineer · Founder</div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function UseCasesSection() {
  return (
    <section className="section on-deep" aria-labelledby="uses-title">
      <div className="wrap">
        <div className="mx-sh mx-sh-center">
          <p className="mx-eyebrow">Where it helps</p>
          <h2 id="uses-title" className="mx-h2">Stuck on a mix? <span className="mx-accent">Finish it.</span></h2>
        </div>
        <div className="uc-rows">
          <article className="uc-row">
            <div className="uc-visual uc-rack">
              <div className="ui-glow" aria-hidden="true"></div>
              <img className="ui-card uc-a" src="/assets/img/ui-rack.jpg" width="466" height="268" loading="lazy" alt="Mixio's channel rack, with bass and guitar tracks grouped into buses." />
              <img className="ui-card uc-b" src="/assets/img/ui-mode.jpg" width="466" height="60" loading="lazy" alt="The Analyze button." />
            </div>
            <div className="uc-copy">
            <h3 className="uc-title">An unfinished mix</h3>
            <p className="uc-body">Track stuck at 80%? Get a balanced mix back and a clear idea of what to tweak next.</p>
            </div>
          </article>
          <article className="uc-row">
            <div className="uc-visual uc-chat">
              <div className="ui-glow" aria-hidden="true"></div>
              <img className="ui-card uc-a" src="/assets/img/ui-prompts.jpg" width="480" height="200" loading="lazy" alt="Chat prompts such as “Give the guitars more presence” and “Make it sound exciting!”, each with an adjustable amount." />
              <img className="ui-card uc-b" src="/assets/img/ui-knobs.jpg" width="362" height="156" loading="lazy" alt="The Reanalyze button with glue and width knobs." />
            </div>
            <div className="uc-copy">
            <h3 className="uc-title">A difficult track</h3>
            <p className="uc-body">Something sounds off and you can't say why. Describe it, and the Assistant suggests a fix.</p>
            </div>
          </article>
          <article className="uc-row">
            <div className="uc-visual uc-release">
              <div className="ui-glow" aria-hidden="true"></div>
              <img className="uc-lines" src="/assets/img/ui-lines.jpg" width="900" height="285" loading="lazy" alt="Mixio's frequency analyzer showing each instrument's balance across the spectrum." />
              <img className="ui-card uc-b" src="/assets/img/ui-knobs.jpg" width="362" height="156" loading="lazy" alt="The Reanalyze button with glue and width knobs." />
            </div>
            <div className="uc-copy">
            <h3 className="uc-title">Preparing for release</h3>
            <p className="uc-body">Polish the mix and master so it's ready to send out.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ProofSection() {
  return (
    <section className="section" aria-labelledby="proof-title">
      <div className="wrap">
        <div className="mx-sh mx-sh-center">
          <p className="mx-eyebrow">From the beta</p>
          <h2 id="proof-title" className="mx-h2">Renowned producers. <span className="mx-accent">In their words.</span></h2>
        </div>
        <div className="proof-grid">
          <figure className="mx-quote mx-quote-lead">
            <div className="mx-quote-mark" aria-hidden="true">”</div>
            <blockquote className="mx-quote-text">I think Mixio could be the most useful plug in you'll ever buy! Whether you use it on the whole mix, the lead vocal or that “problem” track that you just can't get to sit right, Mixio solves all your problems in mere seconds!</blockquote>
            <div className="mx-quote-rule"></div>
            <figcaption>
              <div className="mx-quote-name">Rob Cavallo</div><div className="mx-quote-role">Grammy-winning producer · Advisor</div>
            </figcaption>
          </figure>
          <figure className="mx-quote">
            <div className="mx-quote-mark" aria-hidden="true">”</div>
            <blockquote className="mx-quote-text">This is one of those rare tools that embeds itself into your workflow. It surprises me every time and feels like a secret weapon.</blockquote>
            <div className="mx-quote-rule"></div>
            <figcaption>
              <div className="mx-quote-name">Harry Kipner</div><div className="mx-quote-role">Hit songwriter</div>
            </figcaption>
          </figure>
          <figure className="mx-quote">
            <div className="mx-quote-mark" aria-hidden="true">”</div>
            <blockquote className="mx-quote-text">It's 45 years of knowledge put into something that everyone can access and use.</blockquote>
            <div className="mx-quote-rule"></div>
            <figcaption>
              <div className="mx-quote-name">Mark “Spike” Stent</div><div className="mx-quote-role">Grammy-winning mix engineer · Founder</div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="section on-deep" aria-labelledby="pricing-title">
      <div className="wrap pricing-split">
        <div className="mx-sh mx-sh-center">
          <p className="mx-eyebrow">Pricing</p>
          <h2 id="pricing-title" className="mx-h2">Try it free. <span className="mx-accent"><span data-offer="trialDays"></span> days on us.</span></h2>
          <p className="mx-sh-body"><span data-offer="includes"></span> included on both plans.</p>
        </div>
        <div className="pricing-grid">
          <article className="mx-price-card" data-plan="monthly">
            <div className="mx-price-head"><h3 className="mx-price-tier" data-plan-field="name"></h3></div>
            <p className="mx-price" data-plan-field="price"></p>
            <p className="mx-price-period"><span data-plan-field="periodLabel"></span> · <span data-plan-field="billing"></span></p>
            <div className="mx-price-rule"></div>
            <ul className="mx-price-list" data-offer-list="planFeatures"></ul>
            <a className="mx-btn mx-btn-ghost" data-cta="pricing" data-cta-plan="monthly" href="/checkout/?plan=monthly">Start Monthly Trial</a>
          </article>
          <article className="mx-price-card mx-featured" data-plan="yearly">
            <div className="mx-price-head"><h3 className="mx-price-tier" data-plan-field="name"></h3><span className="mx-badge mx-badge-tag" data-plan-field="note"></span></div>
            <p className="mx-price" data-plan-field="price"></p>
            <p className="mx-price-period"><span data-plan-field="periodLabel"></span> · <span data-plan-field="billing"></span></p>
            <div className="mx-price-rule"></div>
            <ul className="mx-price-list" data-offer-list="planFeatures"></ul>
            <a className="mx-btn mx-btn-primary" data-cta="pricing" data-cta-plan="yearly" href="/checkout/?plan=yearly">Start Yearly Trial</a>
          </article>
        </div>
        <ul className="trial-terms" data-offer-list="trialTerms"></ul>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="mx-sh mx-sh-center">
          <p className="mx-eyebrow">FAQ</p>
          <h2 id="faq-title" className="mx-h2">Your questions <span className="mx-accent">answered.</span></h2>
          <p className="mx-sh-body">Can't find your answer? <a className="inline-link" href="mailto:info@mixio.music?subject=Help%20Inquiry">Email support</a>.</p>
        </div>
        <div className="faq">
          <details className="mx-faq"><summary className="mx-faq-q">Which DAWs does Mixio work with?<span className="mx-faq-icon" aria-hidden="true">+</span></summary>
            <p className="mx-faq-a">Mixio supports Pro Tools, Ableton Live, Logic Pro, FL Studio, and Cubase. Plugin formats and Assistant capabilities can vary by DAW.</p></details>
          <details className="mx-faq"><summary className="mx-faq-q">Does it run on Mac and Windows?<span className="mx-faq-icon" aria-hidden="true">+</span></summary>
            <p className="mx-faq-a">Yes. Mixio works on Mac (Intel and Apple Silicon) and Windows 10/11.</p></details>
          <details className="mx-faq"><summary className="mx-faq-q">How do I install it?<span className="mx-faq-icon" aria-hidden="true">+</span></summary>
            <p className="mx-faq-a">Download and activation access is not connected to this preview yet. Contact Mixio support for installation help. <a className="inline-link" href="/resources/installation">Installation guide</a></p></details>
          <details className="mx-faq"><summary className="mx-faq-q">What does the Assistant do?<span className="mx-faq-icon" aria-hidden="true">+</span></summary>
            <p className="mx-faq-a">Accept the mix as it is, or describe the change you want in plain language, like “give the guitars more presence”, and refine it in real time.</p></details>
          <details className="mx-faq"><summary className="mx-faq-q">Will Mixio override my decisions?<span className="mx-faq-icon" aria-hidden="true">+</span></summary>
            <p className="mx-faq-a">No. Every suggestion is editable, and nothing is applied that you can't change or undo. You decide what stays in your mix.</p></details>
          <details className="mx-faq"><summary className="mx-faq-q">Do I need a card for the free trial?<span className="mx-faq-icon" aria-hidden="true">+</span></summary>
            <p className="mx-faq-a" data-offer-text="faqCard"></p></details>
          <details className="mx-faq"><summary className="mx-faq-q">How do I cancel?<span className="mx-faq-icon" aria-hidden="true">+</span></summary>
            <p className="mx-faq-a">To avoid a charge, cancel before your trial ends. Account-based cancellation is not yet available on this preview; contact support for assistance. <a className="inline-link" href="/resources/subscriptions">Account and subscription information</a></p></details>
          <details className="mx-faq"><summary className="mx-faq-q">What happens when the trial ends?<span className="mx-faq-icon" aria-hidden="true">+</span></summary>
            <p className="mx-faq-a" data-offer-text="faqTrialEnd"></p></details>
        </div>
      </div>
    </section>
  );
}

export function FinalSection() {
  return (
    <section className="section final-cta" aria-labelledby="final-title">
      <div className="wrap narrow">
        <h2 id="final-title" className="final-h2">Finish your mix. <span className="mx-accent">Keep your sound.</span></h2>
        <a className="mx-btn mx-btn-primary" href="/plans/" data-cta="final">Start Your&nbsp;<span data-offer="trialDays"></span>-Day Free Trial</a>
        <p className="terms-line" data-offer-text="terms"></p>
      </div>
    </section>
  );
}
