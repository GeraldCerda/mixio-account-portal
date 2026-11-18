# Integration guide

## Source authority

This package was rebuilt from the user's `mixio-nextjs-converted(2).zip` on November 18, 2026. The supplied markup, exact Mixio brand colors, real screenshots, pricing structure, attribution content, waveforms, audio recordings and original app logic are the starting point. This is not the replacement marketing implementation from the prior preview.

It is a source-only deliverable. No GitHub, Vercel, Stripe, Supabase, or production environment was modified for this revision.

## Integration order

1. Create a review branch from your intended destination repository. Keep your existing application as the baseline.
2. Review `FILE_MANIFEST.md`. Do not automatically overwrite existing `app/layout.tsx`, `app/login`, `app/account`, `app/setup`, `app/feedback`, `app/plugin-demo`, or `app/api` code in an existing application.
3. Place the new route pages from `app/(marketing)` alongside the original marketing group, keeping exactly one route for `/`. If your destination already has `app/page.tsx`, reconcile it with `app/(marketing)/page.tsx`; both cannot coexist for `/`.
4. Merge changes from the twelve modified original files into their matching original paths. Use `components/mixio/OriginalSections.tsx` to confirm that the original landing sections are retained rather than recreated. Do not replace existing auth or payment logic with the source-only boundary implementations when production counterparts already exist.
5. Add `components/mixio/PageParts.tsx`, `SiteChrome.tsx`, `ResourceBrowser.tsx`, `lib/mixio/resources.ts`, `app/(marketing)/multipage.css`, and the new route files. Keep the ten original `public/assets` files unchanged.
6. This ZIP includes `app/layout.tsx`, `package.json`, `tsconfig.json`, and `next.config.ts` only to make the source tree independently bootstrappable. These files are **integration references, not instructions to overwrite existing destination configuration**.
7. Reconcile framework version and lockfile. The standalone manifest targets Next.js 15.5.29, React 19.1.0, and eslint-config-next 15.5.29; these were not verified against the destination application.
8. Install dependencies with the target project's package manager, run `npm run typecheck`, `npm run lint`, and `npm run build`, then smoke-test all routes and the player in a browser.
9. Connect actual authentication, verified Stripe Checkout, subscription webhooks, license issuance, download URLs, and server-verified confirmation before enabling payments. The provided source never included those functional integrations.
10. Compare styling and behavior with the original zip before approving a public deployment. Keep existing live services and branch protection unchanged.

## Local standalone setup

```bash
npm install
npm run typecheck
npm run lint
npm run build
npm run dev
```

The source bundle does not contain `node_modules`, a lockfile, secrets, or build output. A lockfile will be created by your package manager. The application root layout included in this source is deliberately minimal to avoid importing any unavailable destination-specific dependencies.

## Content preservation and boundaries

The ten main landing `<section>` elements were extracted directly from the supplied `app/(marketing)/page.tsx` into `components/mixio/OriginalSections.tsx`. The shorter homepage reuses the original hero, audio demonstration, expertise section and CTA; the other original sections remain available on Product, How It Works, Stories, and Support. They are not replaced with alternate marketing content.

The supplied `/plans` price values remain `$14.99` monthly, `$149.99` annual, and a 14-day trial. They are preserved **as submitted** and are not validated against current Stripe products. The two MP3 recordings and all eight images preserve their original SHA-256 hashes.

The original checkout was only a simulated frontend flow. The revised source prevents fake trial creation, disables card fields, and displays a clear integration notice. Confirmation no longer claims a verified subscription or provides clickable fake installers. The target application's real checkout and account routes should take precedence over these boundaries.

## Remove the earlier replacement preview

This source deliverable does **not** remove or modify the earlier GitHub/Vercel preview because the supplied brief forbids remote modifications. The old preview should not be treated as a representation of this revised source. If you want the earlier Vercel project and preview branch deleted, that requires a separate explicit authorization overriding the source-only instruction.
