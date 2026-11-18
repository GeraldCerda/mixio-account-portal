import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/mixio/PageParts";

export const metadata: Metadata = { title: "Sign In | Mixio" };
export default function LoginPage() { return <main id="main"><PageIntro eyebrow="Sign in" title="Authentication" accent="integration required." description="The supplied marketing ZIP contains no login service, OAuth configuration, or authenticated account interface. The existing login route in the destination repository must be preserved during integration."><Link className="mx-btn mx-btn-primary" href="/support">Contact support</Link></PageIntro></main>; }
