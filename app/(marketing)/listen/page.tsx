import type { Metadata } from "next";
import { AudioDemoSection } from "@/components/mixio/OriginalSections";
import { PageIntro, TrialBanner } from "@/components/mixio/PageParts";

export const metadata: Metadata = { title: "Listen: Before and After | Mixio", description: "Compare the original and Mixio-processed versions of the same recording." };

export default function ListenPage() {
  return <main id="main"><PageIntro eyebrow="The listening room" title="One song." accent="Two versions." description="Hear the original and Mixio-processed versions side by side. Switch between them without losing your place." /><AudioDemoSection /><section className="section"><div className="wrap mx-display-grid"><div><p className="mx-section-label">Listen closely</p><h2>Two versions of the same recording.</h2><p>Listen to the original and Mixio-processed recordings. A separate Assistant audio example is not available yet.</p></div><figure><img src="/assets/img/ui-lines.jpg" width="900" height="285" alt="Original Mixio frequency analyzer interface" /><figcaption className="mx-visual-caption">Mixio frequency analyzer</figcaption></figure></div></section><TrialBanner heading="Hear it. Then make your call." /></main>;
}
