import type { Metadata } from "next";
import { PageIntro } from "@/components/mixio/PageParts";
import { ResourceBrowser } from "@/components/mixio/ResourceBrowser";

export const metadata: Metadata = { title: "Resources | Mixio", description: "Mixio guides for getting started, using the plugin, and finding support." };
export default function ResourcesPage() { return <main id="main"><PageIntro eyebrow="Resources" title="Find your" accent="next step." description="Find guidance for installation, supported DAWs, plugin controls, Assistant workflows, and subscriptions." /><section className="section"><div className="wrap"><ResourceBrowser /></div></section></main>; }
