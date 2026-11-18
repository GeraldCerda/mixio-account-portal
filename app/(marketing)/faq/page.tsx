import type { Metadata } from "next";
import { FaqSection } from "@/components/mixio/FaqSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Mixio",
  description: "Find answers about Mixio compatibility, privacy, mastering, educational discounts, workflow, and gain staging.",
};

export default function FaqPage() {
  return (
    <main id="main">
      <FaqSection headingLevel="h1" />
    </main>
  );
}
