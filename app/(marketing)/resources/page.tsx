import type { Metadata } from "next";
import { PageIntro } from "@/components/mixio/PageParts";
import { ResourceBrowser } from "@/components/mixio/ResourceBrowser";

export const metadata: Metadata = { title: "Resources | Mixio", description: "Mixio documentation and source-backed support guides." };
export default function ResourcesPage() { return <main id="main"><PageIntro eyebrow="Resources" title="Find your" accent="next step." description="Source-backed guides for setup, the plugin, supported DAWs, and subscriptions. Unverified details are identified rather than invented." /><section className="section"><div className="wrap"><ResourceBrowser /></div></section></main>; }
