import type { Metadata } from "next";
import { PageIntro, TrialBanner } from "@/components/mixio/PageParts";
import { StepsSection } from "@/components/mixio/OriginalSections";

export const metadata: Metadata = { title: "How Mixio Works | Mixio", description: "Walk through setup, analysis and refinement in a supported DAW." };

const steps = [
  ["Install Mixio", "Use the download and installation instructions provided after your account and subscription have been activated."],
  ["Open a supported DAW", "Work in a session in Pro Tools, Ableton Live, or Logic Pro, according to your installation."],
  ["Prepare the session", "Organize tracks and buses before running the Mixio processing workflow."],
  ["Analyze", "Use the plugin's Analyze control to evaluate the current session."],
  ["Apply supported processing", "Use the available plugin controls and Assistant operations to shape the mix."],
  ["Refine the result", "Adjust the outcome manually or describe a change to the Assistant."],
  ["Finish the workflow", "Review the final mix using the tools available in your DAW."],
] as const;

export default function HowPage() {
  return <main id="main"><PageIntro eyebrow="The workflow" title="From session to" accent="your finished mix." description="Work in the DAW you already use. Mixio gives you a starting point, with room to shape the result yourself." /><StepsSection /><section className="section"><div className="wrap"><p className="mx-section-label">End-to-end</p><h2 className="mx-large-heading" style={{marginBottom:34}}>Seven moments in a Mixio workflow</h2><ol className="mx-stage-list">{steps.map(([heading,description])=><li key={heading}><h3>{heading}</h3><p>{description}</p></li>)}</ol></div></section><section className="section on-deep"><div className="wrap"><p className="mx-section-label">DAW guidance</p><h2 className="mx-large-heading" style={{marginBottom:32}}>Your DAW. Your process.</h2><div className="mx-daW-grid"><article className="mx-daw-card"><h3>Pro Tools</h3><p>Install the supported plugin, organize the session routing, and use the Mixio workflow from within the session.</p></article><article className="mx-daw-card"><h3>Ableton Live</h3><p>Use the supported plugin format and check the current Mixio release guidance for Assistant support and instance limitations.</p></article><article className="mx-daw-card"><h3>Logic Pro</h3><p>Open Mixio in a compatible channel or bus and consult version-specific guidance for session automation.</p></article></div><p className="mx-reference">Exact DAW-specific controls and screenshots must be verified against the release being distributed. This source ZIP includes interface images but no DAW-specific installation manual.</p></div></section><TrialBanner /></main>;
}
