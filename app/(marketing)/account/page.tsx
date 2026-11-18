import type { Metadata } from "next";
import { AccountContent } from "@/components/mixio/account/AccountPortal";
import { getAccountSnapshot, getVerifiedAccountSession } from "@/lib/mixio/account";

export const metadata: Metadata = { title: "Account overview | Mixio" };

export default async function AccountPage() {
  const session = await getVerifiedAccountSession();
  if (!session) return null;
  const snapshot = await getAccountSnapshot(session);
  return <AccountContent section="overview" session={session} snapshot={snapshot} />;
}
