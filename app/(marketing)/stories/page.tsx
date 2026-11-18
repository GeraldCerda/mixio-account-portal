import type { Metadata } from "next";
import { PageIntro, TrialBanner } from "@/components/mixio/PageParts";
import { ProofSection } from "@/components/mixio/OriginalSections";

export const metadata: Metadata = { title: "Stories | Mixio" };
export default function StoriesPage() { return <main id="main"><PageIntro eyebrow="Producer perspectives" title="Hear from the" accent="music makers." description="Hear what producers and songwriters have shared about working with Mixio." /><ProofSection /><TrialBanner /></main>; }
