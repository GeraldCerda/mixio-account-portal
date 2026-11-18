import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/mixio/PageParts";

export const metadata: Metadata = { title: "Download | Mixio" };
export default function DownloadPage() { return <main id="main"><PageIntro eyebrow="Download Mixio" title="Make space for" accent="your next mix." description="Installer downloads are not currently available through this preview. Contact support for installation or account assistance."><Link href="/plans" className="mx-btn mx-btn-primary">See trial plans</Link><Link href="/support" className="mx-btn mx-btn-ghost">Installation support</Link></PageIntro><section className="section on-deep"><div className="wrap mx-display-grid"><figure><img width="466" height="268" src="/assets/img/ui-rack.jpg" alt="Original Mixio channel rack screenshot" /></figure><div><p className="mx-section-label">Installation help</p><h2>Get the right installer.</h2><p>For current Mac and Windows installers, activation, and account access, contact Mixio support.</p></div></div></section></main>; }
