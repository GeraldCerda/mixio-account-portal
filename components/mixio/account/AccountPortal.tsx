import Link from "next/link";
import type { ReactNode } from "react";
import { accountSections, type AccountSection, type AccountSession, type AccountSnapshot } from "@/lib/mixio/account";
import { AccountNavigation } from "@/components/mixio/account/AccountNavigation";

export function AccountGate() {
  return (
    <main id="main" className="mx-account-root">
      <div className="mx-account-auth-header">
        <Link href="/" className="mx-account-brand"><img src="/assets/img/mixio-logo-white.png" alt="Mixio" width={761} height={158} /></Link>
        <Link href="/" className="mx-account-back">Back to Mixio</Link>
      </div>
      <section className="mx-account-auth-wrap" aria-labelledby="mx-account-gate-title">
        <p className="mx-account-eyebrow">MY MIXIO ACCOUNT</p>
        <h1 id="mx-account-gate-title">Your music. Your account.</h1>
        <p>Sign in to manage your Mixio subscription, billing, licenses, and devices. If you are new to Mixio, create an account to get started.</p>
        <div className="mx-account-auth-actions">
          <Link className="mx-account-button mx-account-button-primary" href="/signup">Create an account</Link>
          <Link className="mx-account-button" href="/login">Sign in</Link>
        </div>
        <p className="mx-account-boundary">Account registration and sign-in are awaiting integration with the existing authentication service. This preview does not create accounts or display customer records.</p>
      </section>
    </main>
  );
}

export function AccountFrame({ session, preview, children }: { session: AccountSession | null; preview: boolean; children: ReactNode }) {
  return (
    <div className="mx-account-root">
      <header className="mx-account-top">
        <Link className="mx-account-brand" href="/"><img src="/assets/img/mixio-logo-white.png" alt="Mixio" width={761} height={158} /></Link>
        <span className="mx-account-top-label">{preview ? "ACCOUNT PREVIEW" : "MY ACCOUNT"}</span>
        <Link className="mx-account-back" href="/">Return to website</Link>
      </header>
      <div className="mx-account-layout">
        <aside className="mx-account-aside">
          <p className="mx-account-eyebrow">WORKSPACE</p>
          <AccountNavigation />
          <div className="mx-account-help">
            <strong>Need a hand?</strong>
            <p>Our support team can help with your account.</p>
            <Link href="/support">Contact support</Link>
          </div>
          <div className="mx-account-identity">
            <strong>{preview ? "Preview mode" : session?.displayName ?? "Mixio customer"}</strong>
            <small>{preview ? "No customer signed in" : session?.email}</small>
          </div>
        </aside>
        <div className="mx-account-main">
          {preview && <div className="mx-account-preview-banner" role="status"><strong>Preview mode</strong><span>Explore all account pages without signing in. No real customer, subscription, billing, or license data is connected. Actions that require authentication are disabled.</span></div>}
          {children}
          <footer className="mx-account-footer"><span>© {new Date().getFullYear()} Mixio</span><Link href="/support">Support</Link></footer>
        </div>
      </div>
    </div>
  );
}

function Panel({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return <section className="mx-account-panel"><header><h2>{title}</h2><p>{description}</p></header>{children}</section>;
}

function Boundary({ label, details }: { label: string; details: string }) {
  return <div className="mx-account-empty" role="status"><strong>{label}</strong><p>{details}</p></div>;
}

function Row({ label, value }: { label: string; value: string }) {
  return <div className="mx-account-row"><span>{label}</span><strong>{value}</strong></div>;
}

function formatMoney(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount / 100);
}

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? "Unavailable" : new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date);
}

export function AccountContent({ section, session, snapshot }: { section: AccountSection; session: AccountSession | null; snapshot: AccountSnapshot }) {
  const page = accountSections.find(item => item.id === section);
  const title = page?.label ?? "Overview";
  return (
    <main id="main">
      <header className="mx-account-heading">
        <p className="mx-account-eyebrow">MY ACCOUNT / {title.toUpperCase()}</p>
        <h1>{title === "Overview" ? "Account overview" : title}</h1>
        <p>Manage your Mixio account and connected services.</p>
      </header>
      <div className="mx-account-stack">
        {section === "overview" && (
          <div className="mx-account-columns">
            <div className="mx-account-stack">
              <Panel title="Profile" description="Your account details">
                {snapshot.profile ? <><Row label="Name" value={snapshot.profile.displayName ?? "Not provided"} /><Row label="Email" value={snapshot.profile.email} /></> : <Boundary label="Profile details not connected" details="Verified profile information will appear here once the account service is integrated." />}
                <Link className="mx-account-text-link" href="/account/settings">Account settings</Link>
              </Panel>
              <Panel title="License" description="Your activation and device information">
                {snapshot.license ? <><Row label="Status" value={snapshot.license.status} /><Row label="Devices allowed" value={snapshot.license.maxDevices?.toString() ?? "Unavailable"} /></> : <Boundary label="License information unavailable" details="No placeholder license keys or device activations are displayed." />}
                <Link className="mx-account-text-link" href="/account/license">License & devices</Link>
              </Panel>
            </div>
            <div className="mx-account-stack">
              <Panel title="Subscription" description="Your plan and renewal status">
                {snapshot.subscription ? <><Row label="Plan" value={snapshot.subscription.plan} /><Row label="Status" value={snapshot.subscription.status} /><Row label="Next billing date" value={snapshot.subscription.nextBillingAt ? formatDate(snapshot.subscription.nextBillingAt) : "Unavailable"} /></> : <Boundary label="Subscription not connected" details="Your verified plan, billing cycle, and status will appear after account integration." />}
                <Link className="mx-account-text-link" href="/account/subscription">Manage subscription</Link>
              </Panel>
            </div>
          </div>
        )}
        {section === "subscription" && (
          <>
            <Panel title="Your subscription" description="Plan details are retrieved from your account billing service">
              {snapshot.subscription ? <><Row label="Plan" value={snapshot.subscription.plan} /><Row label="Status" value={snapshot.subscription.status} /><Row label="Rate" value={snapshot.subscription.amountInCents === null ? "Unavailable" : formatMoney(snapshot.subscription.amountInCents, snapshot.subscription.currency)} /><Row label="Renewal" value={snapshot.subscription.nextBillingAt ? formatDate(snapshot.subscription.nextBillingAt) : "Unavailable"} /></> : <Boundary label="No subscription records connected" details="No plan, renewal date, or payment method is assumed until billing records can be verified." />}
            </Panel>
            <Panel title="Manage your plan" description="Subscription changes require authenticated billing management">
              <p className="mx-account-muted">Changes, cancellation, payment methods, and promotion codes will be managed through your existing billing service. No simulated controls are enabled.</p>
              <Link className="mx-account-button" href="/plans">See Mixio plans</Link>
            </Panel>
          </>
        )}
        {section === "billing" && (
          <Panel title="Billing history" description="Invoices and payments connected to your account">
            {snapshot.invoices === null ? <Boundary label="Billing history not connected" details="Invoices, card details, and payment statuses are not shown without verified billing data." /> : snapshot.invoices.length === 0 ? <Boundary label="No invoices found" details="Your account has no recorded invoices." /> : (
              <div className="mx-account-table-wrap"><table><thead><tr><th>Invoice</th><th>Date</th><th>Amount paid</th><th>Status</th><th>Receipt</th></tr></thead><tbody>{snapshot.invoices.map(invoice => <tr key={invoice.id}><td>{invoice.id}</td><td>{formatDate(invoice.createdAt)}</td><td>{formatMoney(invoice.amountPaidInCents, invoice.currency)}</td><td>{invoice.status}</td><td>{invoice.receiptUrl ? <a href={invoice.receiptUrl} target="_blank" rel="noopener noreferrer">View</a> : "Unavailable"}</td></tr>)}</tbody></table></div>
            )}
          </Panel>
        )}
        {section === "license" && (
          <>
            <Panel title="License information" description="License and activation status">
              {snapshot.license ? <><Row label="License ID" value={snapshot.license.id} /><Row label="Status" value={snapshot.license.status} /><Row label="Expiration" value={snapshot.license.expiresAt ? formatDate(snapshot.license.expiresAt) : "Unavailable"} /></> : <Boundary label="No verified license information" details="License keys, activation counts, and expiration dates will only be displayed from an authorized licensing provider." />}
            </Panel>
            <Panel title="Activated devices" description="Devices linked to your Mixio license">
              {snapshot.devices === null ? <Boundary label="Device list not connected" details="Device activations and removal actions require the licensing service." /> : snapshot.devices.length === 0 ? <Boundary label="No activated devices" details="No devices are currently associated with your account." /> : snapshot.devices.map(device => <div className="mx-account-row" key={device.id}><strong>{device.name}</strong><span>{device.lastSeenAt ? formatDate(device.lastSeenAt) : "Activity unavailable"}</span></div>)}
            </Panel>
          </>
        )}
        {section === "settings" && (
          <>
            <Panel title="Personal information" description="Your verified account profile">
              <Row label="Email address" value={session?.email ?? "Not connected"} />
              <Row label="Name" value={session?.displayName ?? "Not connected"} />
              <p className="mx-account-muted">Profile editing will be enabled when the existing account update service is connected.</p>
            </Panel>
            <Panel title="Security and privacy" description="Manage account access and security">
              <Boundary label="Account actions awaiting integration" details="Password resets, notification preferences, and account deletion must be handled by your authentication provider." />
            </Panel>
          </>
        )}
        {section === "feedback" && (
          <Panel title="Contact the Mixio team" description="Share a question, issue, or product suggestion">
            <p className="mx-account-muted">A feedback submission service is not connected to this website. Contact support directly so your message is delivered.</p>
            <a className="mx-account-button mx-account-button-primary" href="mailto:info@mixio.music?subject=Mixio%20Account%20Feedback">Email Mixio support</a>
          </Panel>
        )}
      </div>
    </main>
  );
}
