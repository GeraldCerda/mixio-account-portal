import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/mixio/PageParts";

export const metadata: Metadata = { title: "Sign in | Mixio" };

export default function LoginPage() {
  return (
    <main id="main">
      <PageIntro
        eyebrow="Sign in"
        title="Welcome"
        accent="back."
        description="Sign-in is waiting for integration with the existing Mixio authentication service. This preview does not accept credentials or create a login session."
      >
        <Link className="mx-btn mx-btn-primary" href="/signup">Create an account</Link>
        <Link className="mx-btn mx-btn-ghost" href="/support">Account support</Link>
      </PageIntro>
    </main>
  );
}
