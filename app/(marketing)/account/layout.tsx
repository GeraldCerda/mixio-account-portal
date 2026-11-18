import type { ReactNode } from "react";
import "./account.css";
import { getAccountView } from "@/lib/mixio/account";
import { AccountFrame, AccountGate } from "@/components/mixio/account/AccountPortal";

export const dynamic = "force-dynamic";

export default async function AccountLayout({ children }: { children: ReactNode }) {
  const { session, preview } = await getAccountView();
  if (!session && !preview) return <AccountGate />;
  return <AccountFrame session={session} preview={preview}>{children}</AccountFrame>;
}
