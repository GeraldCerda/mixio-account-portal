import type { Metadata } from "next";
import { AudioDemoSection } from "@/components/mixio/OriginalSections";
import { PageIntro, TrialBanner } from "@/components/mixio/PageParts";

export const metadata: Metadata = { title: "Listen: Before and After | Mixio", description: "Compare the two supplied, time-aligned dance mix recordings in Mixio's original player." };

export default function ListenPage() {
  return <main id="main"><PageIntro eyebrow="The listening room" title="One song." accent="Two versions." description="Compare the original and Mixio-processed audio using the recordings supplied with this website. Switch between stages while keeping the same playback position." /><AudioDemoSection /><section className="section"><div className="wrap mx-display-grid"><div><p className="mx-section-label">The source recordings</p><h2>No synthesized examples. No invented results.</h2><p>Both playable stages use the actual MP3 files included in the supplied archive. The Assistant-only stage remains unavailable until an authenticated third recording is provided.</p></div><figure><img src="/assets/img/ui-lines.jpg" width="900" height="285" alt="Original Mixio frequency analyzer interface" /><figcaption className="mx-visual-caption">Original product interface included in the source package</figcaption></figure></div></section><TrialBanner heading="Hear it. Then make your call." /></main>;
}
