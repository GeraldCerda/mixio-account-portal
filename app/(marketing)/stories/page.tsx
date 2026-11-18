import type { Metadata } from "next";
import { PageIntro, TrialBanner } from "@/components/mixio/PageParts";
import { ProofSection } from "@/components/mixio/OriginalSections";

export const metadata: Metadata = { title: "Stories | Mixio" };
export default function StoriesPage() { return <main id="main"><PageIntro eyebrow="From the original source" title="Hear from the" accent="music makers." description="Testimonials carried forward exactly from the supplied Mixio website. Publication rights and approvals should be checked before a public release." /><ProofSection /><TrialBanner /></main>; }
