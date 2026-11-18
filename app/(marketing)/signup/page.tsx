import Link from "next/link";
import type { Metadata } from "next";
import { PageIntro } from "@/components/mixio/PageParts";

export const metadata: Metadata = { title: "Create your account | Mixio" };

export default function SignupPage() {
  return (
    <main id="main">
      <PageIntro
        eyebrow="Create an account"
        title="Make Mixio"
        accent="your own."
        description="Account registration is being connected to our existing sign-up service. No information is collected or account created on this preview yet."
      >
        <Link className="mx-btn mx-btn-primary" href="/login">Already have an account? Sign in</Link>
        <Link className="mx-btn mx-btn-ghost" href="/plans">Explore plans</Link>
      </PageIntro>
    </main>
  );
}
