import type { ReactNode } from "react";
import "./account.css";
import { getVerifiedAccountSession } from "@/lib/mixio/account";
import { AccountFrame, AccountGate } from "@/components/mixio/account/AccountPortal";

export const dynamic = "force-dynamic";

export default async function AccountLayout({ children }: { children: ReactNode }) {
  const session = await getVerifiedAccountSession();
  if (!session) return <AccountGate />;
  return <AccountFrame session={session}>{children}</AccountFrame>;
}
