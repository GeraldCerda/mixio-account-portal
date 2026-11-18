import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AccountContent } from "@/components/mixio/account/AccountPortal";
import { getAccountSnapshot, getVerifiedAccountSession, accountSections, type AccountSection } from "@/lib/mixio/account";

type PageProps = { params: Promise<{ section: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { section } = await params;
  const entry = accountSections.find(item => item.id === section);
  return { title: entry ? `${entry.label} | Mixio Account` : "Not found | Mixio" };
}

export default async function AccountSectionPage({ params }: PageProps) {
  const { section } = await params;
  if (section === "overview") notFound();
  if (!accountSections.some(item => item.id === section)) notFound();
  const session = await getVerifiedAccountSession();
  if (!session) return null;
  const snapshot = await getAccountSnapshot(session);
  return <AccountContent section={section as AccountSection} session={session} snapshot={snapshot} />;
}
