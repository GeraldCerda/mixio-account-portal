import type { Metadata } from "next";
import { AccountContent } from "@/components/mixio/account/AccountPortal";
import { getAccountSnapshot, getAccountView, getEmptyAccountSnapshot } from "@/lib/mixio/account";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Account overview | Mixio" };

export default async function AccountPage() {
  const { session, preview } = await getAccountView();
  if (!session && !preview) return null;
  const snapshot = session ? await getAccountSnapshot(session) : getEmptyAccountSnapshot();
  return <AccountContent section="overview" session={session} snapshot={snapshot} />;
}
