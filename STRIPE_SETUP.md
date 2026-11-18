Stripe integration uses hosted Checkout and reads only server-side Vercel environment variables. No Stripe connection to ChatGPT is involved.

Required Vercel environment variables:
- STRIPE_SECRET_KEY: sk_test_... for test mode or sk_live_... for live mode
- STRIPE_MONTHLY_PRICE_ID: recurring monthly price_...
- STRIPE_YEARLY_PRICE_ID: recurring yearly price_...
- STRIPE_WEBHOOK_SECRET: whsec_... for this endpoint, if webhooks are enabled

All variables must belong to the same Stripe mode (test versus live). Set them on the Mixio preview Vercel project and choose the Preview environment. Redeploy after saving changes. Do not prefix the secret variables with NEXT_PUBLIC_.

The monthly recurring Price must be USD 14.99/month. The yearly recurring Price must be USD 149.99/year. The server rejects mismatched price IDs or amounts rather than silently charging a different amount from the displayed offer. The customer receives a 14-day free trial with a payment method collected through Stripe Checkout. Discount codes are supported by Stripe Checkout.

Customer path: /plans -> /checkout?plan=monthly or yearly -> POST /api/stripe/checkout -> Stripe-hosted Checkout -> /confirmation?session_id={CHECKOUT_SESSION_ID}. Server-side confirmation checks Stripe before showing a completed checkout status.

For webhook verification, configure the Stripe endpoint https://YOUR_DEPLOYMENT_DOMAIN/api/stripe/webhook and subscribe to checkout.session.completed, customer.subscription.created, customer.subscription.updated, customer.subscription.deleted, invoice.paid and invoice.payment_failed. Stripe event signatures are checked using STRIPE_WEBHOOK_SECRET. Events are acknowledged and logged by ID/type only; licensing, entitlement provisioning, customer database, cancellation UI, and email delivery are not implemented in this project. Do not use this website as the licensing source of truth until those integrations exist.

Do not treat viewing /confirmation without a verified session as proof of subscription. Stripe and Vercel accounts were not accessed for payment testing. Use test-mode keys and test Price IDs to validate successful checkout, cancellation, missing keys, tampered plan values, incorrect price intervals, and webhook signatures before enabling live keys.
