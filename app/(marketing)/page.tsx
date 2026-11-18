import { AudioDemoSection, ExpertiseSection, FinalSection, HeroSection } from "@/components/mixio/OriginalSections";

export default function MixioHomePage() {
  return (
    <main id="main">
      <HeroSection />
      <AudioDemoSection />
      <section className="mx-bridge section" aria-label="Explore Mixio">
        <div className="wrap mx-bridge-grid">
          <a href="/product" className="mx-bridge-link"><span>01 / Sound</span><strong>The Mixio engine</strong><span>See the original plugin interface and explore the processing approach.</span></a>
          <a href="/assistant" className="mx-bridge-link"><span>02 / Workflow</span><strong>The Assistant</strong><span>Explore plain-language adjustments and session preparation.</span></a>
          <a href="/how-it-works" className="mx-bridge-link"><span>03 / Setup</span><strong>How it works</strong><span>Follow the process from installing to refining a mix.</span></a>
        </div>
      </section>
      <ExpertiseSection />
      <FinalSection />
    </main>
  );
}
