import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AccountContent } from "@/components/mixio/account/AccountPortal";
import { getAccountSnapshot, getAccountView, getEmptyAccountSnapshot, accountSections, type AccountSection } from "@/lib/mixio/account";

export const dynamic = "force-dynamic";

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
  const { session, preview } = await getAccountView();
  if (!session && !preview) return null;
  const snapshot = session ? await getAccountSnapshot(session) : getEmptyAccountSnapshot();
  return <AccountContent section={section as AccountSection} session={session} snapshot={snapshot} />;
}
