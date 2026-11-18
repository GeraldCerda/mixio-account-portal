import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/mixio/PageParts";

export const metadata: Metadata = { title: "Sign In | Mixio" };
export default function LoginPage() { return <main id="main"><PageIntro eyebrow="Sign in" title="Account access" accent="is not available yet." description="Sign-in is not connected to this preview. If you already have an account or need help accessing Mixio, contact support."><Link className="mx-btn mx-btn-primary" href="/support">Contact support</Link></PageIntro></main>; }
