import Link from "next/link";
import type { ReactNode } from "react";

export function PageIntro({ eyebrow, title, accent, description, children }: { eyebrow: string; title: string; accent?: string; description: string; children?: ReactNode }) {
  return <section className="mx-page-lead"><div className="wrap"><p className="mx-eyebrow">{eyebrow}</p><h1>{title} {accent ? <em>{accent}</em> : null}</h1><p>{description}</p>{children ? <div className="mx-lead-actions">{children}</div> : null}</div></section>;
}

export function TrialBanner({ heading = "Finish your mix. Keep your sound." }: { heading?: string }) {
  return <section className="mx-cta-banner"><div className="wrap"><h2>{heading}</h2><Link className="mx-btn mx-btn-primary" href="/plans">Explore plans</Link></div></section>;
}
