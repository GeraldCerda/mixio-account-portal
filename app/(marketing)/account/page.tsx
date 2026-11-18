import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/mixio/PageParts";

export const metadata: Metadata = { title: "Account | Mixio" };
export default function AccountPage() { return <main id="main"><PageIntro eyebrow="Account access" title="Your Mixio" accent="account." description="This standalone source bundle has no authentication backend. Sign-in and subscription management belong to the existing connected account application."><Link className="mx-btn mx-btn-primary" href="/login">Sign-in information</Link><Link className="mx-btn mx-btn-ghost" href="/support">Contact support</Link></PageIntro></main>; }
