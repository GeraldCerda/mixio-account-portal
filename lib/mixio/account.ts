import "server-only";
export { accountSections } from "./account-sections";

export type AccountSection = "overview" | "subscription" | "billing" | "license" | "settings" | "feedback";

export interface AccountSession {
  userId: string;
  email: string;
  displayName: string | null;
}

export interface AccountSubscription {
  plan: "Monthly" | "Yearly";
  status: "active" | "trialing" | "past_due" | "canceled" | "incomplete";
  nextBillingAt: string | null;
  amountInCents: number | null;
  currency: string;
}

export interface AccountInvoice {
  id: string;
  createdAt: string;
  amountPaidInCents: number;
  currency: string;
  status: string;
  receiptUrl: string | null;
}

export interface AccountLicense {
  id: string;
  status: string;
  maxDevices: number | null;
  expiresAt: string | null;
}

export interface AccountDevice {
  id: string;
  name: string;
  lastSeenAt: string | null;
}

export interface AccountSnapshot {
  profile: { displayName: string | null; email: string } | null;
  subscription: AccountSubscription | null;
  invoices: AccountInvoice[] | null;
  license: AccountLicense | null;
  devices: AccountDevice[] | null;
}

export async function getVerifiedAccountSession(): Promise<AccountSession | null> {
  return null;
}

export async function getAccountSnapshot(_session: AccountSession): Promise<AccountSnapshot> {
  return {
    profile: null,
    subscription: null,
    invoices: null,
    license: null,
    devices: null,
  };
}
