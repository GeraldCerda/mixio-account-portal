import Link from "next/link";

type FaqItem = {
  question: string;
  answer: string;
};

const questions: readonly FaqItem[] = [
  {
    question: "What DAWs does Mixio support?",
    answer: "Mixio works inside Pro Tools, Ableton Live, Logic Pro, FL Studio, and Cubase. If your DAW supports VST3 or AU plugins, Mixio will work.",
  },
  {
    question: "Is Mixio available on Mac and Windows?",
    answer: "Yes! Mixio is compatible with both Mac (Intel and Apple Silicon) and Windows 10/11.",
  },
  {
    question: "Is my music safe with Mixio?",
    answer: "Always. We will never train our model on your audio, sessions, or any creative data. Your music stays on your local system with you. Completely private and secure at all times.",
  },
  {
    question: "Does Mixio include mastering?",
    answer: "Yes. Once your mix is done, Mixio's mastering engine prepares your track for streaming by monitoring LUFS levels and optimizing stereo loudness, giving your music the final polish it needs before release.",
  },
  {
    question: "Will Mixio offer a student discount upon launch?",
    answer: "Yes, Mixio will offer educational discounting upon launch.",
  },
  {
    question: "Do I need mixing experience to use Mixio?",
    answer: "Not at all. Mixio is designed for every level, from new producers mixing their first track to professional engineers looking to accelerate their workflow. If you can open a DAW, you can use Mixio.",
  },
  {
    question: "How much processing does Mixio apply to my stems?",
    answer: "Mixio uses a three-tier gain-staging system that works from the individual stem level through to the master bus. For the best result, we recommend leaving ample headroom before processing so Mixio can respond naturally across the full mix. Hybrid mixes are also encouraged, and users are welcome to integrate Mixio wherever it best fits their workflow.",
  },
];

type FaqSectionProps = {
  headingLevel?: "h1" | "h2";
  showViewAll?: boolean;
};

export function FaqSection({ headingLevel = "h2", showViewAll = false }: FaqSectionProps) {
  const heading = "Everything you need to know.";
  return (
    <section className="mx-faq-section" aria-labelledby="mixio-faq-heading" id="faq">
      <div className="mx-faq-shell">
        <p className="mx-faq-kicker">FAQ</p>
        {headingLevel === "h1" ? (
          <h1 className="mx-faq-heading" id="mixio-faq-heading">{heading}</h1>
        ) : (
          <h2 className="mx-faq-heading" id="mixio-faq-heading">{heading}</h2>
        )}
        <div className="mx-faq-list">
          {questions.map(({ question, answer }) => (
            <details className="mx-faq-card" name="mixio-faq" key={question}>
              <summary className="mx-faq-toggle">
                <span>{question}</span>
                <span className="mx-faq-symbol" aria-hidden="true" />
              </summary>
              <div className="mx-faq-content"><p>{answer}</p></div>
            </details>
          ))}
        </div>
        {showViewAll && (
          <div className="mx-faq-view-all">
            <Link href="/faq">View all frequently asked questions</Link>
          </div>
        )}
        <p className="mx-faq-support">Still have a question? <Link href="/support">Contact support</Link>.</p>
      </div>
    </section>
  );
}
