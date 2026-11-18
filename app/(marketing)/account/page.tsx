import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/mixio/PageParts";

export const metadata: Metadata = { title: "Account | Mixio" };
export default function AccountPage() { return <main id="main"><PageIntro eyebrow="Account access" title="Your Mixio" accent="account." description="Account sign-in and subscription management are not connected to this preview. Contact support if you need help accessing your account."><Link className="mx-btn mx-btn-primary" href="/login">Account help</Link><Link className="mx-btn mx-btn-ghost" href="/support">Contact support</Link></PageIntro></main>; }
