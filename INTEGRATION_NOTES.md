# Mixio Next.js App Router Integration Notes

## 1. Remove the old root page first
Delete `app/page.tsx` in your `MU_proposed_page` branch before copying these files in (Next.js App Router errors if both `app/page.tsx` and `app/(marketing)/page.tsx` exist for `/`).

## 2. Copy these folders into your repo root
- `app/(marketing)/` -> `app/(marketing)/`
- `components/mixio/` -> `components/mixio/`
- `lib/mixio/` -> `lib/mixio/`
- `public/assets/` -> `public/assets/`

Your existing `app/layout.tsx`, `app/login/`, `app/setup/`, `app/feedback/`, `app/plugin-demo/`, and `app/api/` stay untouched.

## 3. Still mocked (wire up before going live)
- `components/mixio/CheckoutEffects.tsx`: Replace the `setTimeout` mock redirect with Stripe Checkout / Payment Element + Supabase auth, and pass `getUtms()` into Stripe session metadata.
- `components/mixio/ConfirmationEffects.tsx`: Verify `session_id` server-side before firing `trial_started`, and replace placeholder download links / license key (`XXXX-XXXX-XXXX-XXXX`).
- `app/(marketing)/layout.tsx`: Remove `robots: { index: false, follow: false }` when ready to index publicly.
