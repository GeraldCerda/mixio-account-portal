import type { Metadata } from "next";
import { PageIntro } from "@/components/mixio/PageParts";
import { FaqSection } from "@/components/mixio/OriginalSections";

export const metadata: Metadata = { title: "Support | Mixio" };
export default function SupportPage() { return <main id="main"><PageIntro eyebrow="Support" title="Questions about" accent="Mixio?" description="Read the frequently asked questions below or contact Mixio support directly."><a className="mx-btn mx-btn-primary" href="mailto:info@mixio.music?subject=Mixio%20Support">Contact Support</a></PageIntro><FaqSection /></main>; }
