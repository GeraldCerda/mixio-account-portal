Mixio account portal integration

Origin: main branch of GeraldCerda/mixio-account-portal, src/components/Portal.tsx and src/app/globals.css. The previous portal's visual shell and six sections have been ported into the marketing preview, scoped under /account, and adapted to use typed account data instead of demonstration records.

New destinations:
- /account
- /account/subscription
- /account/billing
- /account/license
- /account/settings
- /account/feedback
- /login
- /signup

Important:
- The previous standalone portal had no verified authentication, persistence, or Stripe billing integration. Its displayed license key, invoices, payment method, customer name, renewal date, devices, and successful change messages were hardcoded examples.
- The merged preview intentionally does not import or expose those examples.
- app/(marketing)/account/layout.tsx gates every account route using getVerifiedAccountSession() from lib/mixio/account.ts.
- getVerifiedAccountSession() currently returns null. Until the real authentication implementation is supplied, all account visitors see the signed-out entry point.
- /signup and /login are intentional integration boundaries. They do not accept credentials or simulate registration.
- getAccountSnapshot() provides the typed contract for server-retrieved profile, subscription, invoices, license, and devices. It must be connected to the actual authenticated user and checked against userId; never trust a client-provided user ID.
- License and device details must come from the licensing system. Billing records must come from the trusted billing system. Displaying a successful Stripe Checkout session alone does not imply an issued license.
- Do not enable account edits, subscription cancellation, invoice downloads, device deactivation, or account deletion until authenticated write actions with ownership and authorization checks are implemented.
- The source account portal's main branch and its existing Vercel deployment are unchanged.
- The marketing site's Stripe Checkout and FAQ routes are unchanged.
- Access cannot be considered end-to-end functional until the real sign-up/login/session code and account data providers are supplied and tested.
