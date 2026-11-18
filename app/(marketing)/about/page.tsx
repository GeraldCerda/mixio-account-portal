import type { Metadata } from "next";
import { PageIntro, TrialBanner } from "@/components/mixio/PageParts";
import { ExpertiseSection } from "@/components/mixio/OriginalSections";

export const metadata: Metadata = { title: "About Mixio | Mixio" };
export default function AboutPage() { return <main id="main"><PageIntro eyebrow="About Mixio" title="Experience behind" accent="the engine." description="Mixio draws on the mixing experience and creative judgment of Mark “Spike” Stent." /><ExpertiseSection /><TrialBanner /></main>; }
