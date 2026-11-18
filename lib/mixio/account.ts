import "server-only";

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

export const accountSections = [
  { id: "overview", label: "Overview", href: "/account" },
  { id: "subscription", label: "Subscription", href: "/account/subscription" },
  { id: "billing", label: "Billing history", href: "/account/billing" },
  { id: "license", label: "License & devices", href: "/account/license" },
  { id: "settings", label: "Account settings", href: "/account/settings" },
  { id: "feedback", label: "Feedback", href: "/account/feedback" },
] as const;

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
