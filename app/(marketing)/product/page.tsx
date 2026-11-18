import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, TrialBanner } from "@/components/mixio/PageParts";
import { ProductSection, UseCasesSection } from "@/components/mixio/OriginalSections";

export const metadata: Metadata = { title: "Mixio Audio Engine | Mixio", description: "Explore the Mixio audio engine and its plugin interface." };

export default function ProductPage() {
  return <main id="main"><PageIntro eyebrow="The Mixio engine" title="Built for the moment" accent="your mix gets stuck." description="The audio engine stays inside your DAW. Start with a balanced foundation, listen critically, and refine the result yourself."><Link className="mx-btn mx-btn-primary" href="/listen">Hear the comparison</Link></PageIntro><ProductSection /><section className="section on-deep"><div className="wrap mx-display-grid"><figure><img src="/assets/img/ui-lines.jpg" alt="Mixio frequency analyzer interface" width="900" height="285" /><figcaption className="mx-visual-caption">Mixio frequency analyzer</figcaption></figure><div><p className="mx-section-label">See the mix</p><h2>What is happening across the spectrum?</h2><p>Mixio's interface surfaces frequency relationships and provides controls for further adjustment. The interface highlights spectral balance, dynamics, gain staging, and stereo image management.</p><ul className="mx-feature-list"><li><span>01</span><b>Spectral balance</b></li><li><span>02</span><b>Dynamics</b></li><li><span>03</span><b>Stereo width</b></li><li><span>04</span><b>Gain staging</b></li></ul></div></div></section><UseCasesSection /><TrialBanner heading="A better starting point. Your decisions." /></main>;
}
