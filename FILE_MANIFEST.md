# File manifest

Baseline: `mixio-nextjs-converted(2).zip` (29 original files)

The status below is relative to that exact archive, not to any previous assistant-generated preview.

## Modified original files

| Original path | What changed |
|---|---|
| `app/(marketing)/checkout/checkout.css` | Correct invalid converted font CSS property and variable name. |
| `app/(marketing)/checkout/page.tsx` | Preserve original form layout and change JSX attribute novalidate to noValidate. |
| `app/(marketing)/confirmation/confirmation.css` | Correct invalid converted font CSS property and variable name. |
| `app/(marketing)/confirmation/page.tsx` | Keep the original visual layout, mark it unverified and disable placeholder downloads/licenses rather than implying payment success. |
| `app/(marketing)/landing.css` | Fix malformed font and text-class selectors inherited from the HTML conversion without changing palette or visual content. |
| `app/(marketing)/layout.tsx` | Load the original stylesheet for all marketing routes; add shared navigation and route-aware effects. |
| `app/(marketing)/page.tsx` | Recompose original homepage sections into a shorter entry page while keeping all original section markup in OriginalSections.tsx. |
| `app/(marketing)/plans/page.tsx` | Retain original pricing cards, numbers and billing copy; replace duplicate header/footer with shared navigation and add main target. |
| `app/(marketing)/plans/plans.css` | Correct invalid converted font CSS property and variable name. |
| `components/mixio/CheckoutEffects.tsx` | Preserve plan display logic but remove simulated Stripe redirect; show explicit integration boundary, disable card inputs. |
| `components/mixio/ConfirmationEffects.tsx` | Preserve layout selectors; remove false trial_started analytics for unverified session IDs and show integration notice. |
| `components/mixio/LandingEffects.tsx` | Retain waveform rendering and real playback; make effects route-aware and protect rapid source switching from stale audio playback. |

## Original files intentionally unchanged

- `INTEGRATION_NOTES.md`
- `app/(marketing)/tokens.css`
- `components/mixio/PlansEffects.tsx`
- `lib/mixio/demo-config.ts`
- `lib/mixio/demo-waves.ts`
- `lib/mixio/offer.ts`
- `lib/mixio/track.ts`
- `public/assets/audio/dance-demo-bypassed.mp3`
- `public/assets/audio/dance-demo-mixio.mp3`
- `public/assets/img/mixio-logo-white.png`
- `public/assets/img/mixio-logo.svg`
- `public/assets/img/ui-knobs.jpg`
- `public/assets/img/ui-lines.jpg`
- `public/assets/img/ui-mode.jpg`
- `public/assets/img/ui-prompt.jpg`
- `public/assets/img/ui-prompts.jpg`
- `public/assets/img/ui-rack.jpg`

## Added files

- `INTEGRATION.md`
- `FILE_MANIFEST.md`
- `VALIDATION.md`
- `.gitignore`
- `app/(marketing)/about/page.tsx`
- `app/(marketing)/account/page.tsx`
- `app/(marketing)/assistant/page.tsx`
- `app/(marketing)/download/page.tsx`
- `app/(marketing)/how-it-works/page.tsx`
- `app/(marketing)/listen/page.tsx`
- `app/(marketing)/login/page.tsx`
- `app/(marketing)/multipage.css`
- `app/(marketing)/product/page.tsx`
- `app/(marketing)/resources/[slug]/page.tsx`
- `app/(marketing)/resources/page.tsx`
- `app/(marketing)/stories/page.tsx`
- `app/(marketing)/support/page.tsx`
- `app/layout.tsx`
- `components/mixio/OriginalSections.tsx`
- `components/mixio/PageParts.tsx`
- `components/mixio/ResourceBrowser.tsx`
- `components/mixio/SiteChrome.tsx`
- `lib/mixio/resources.ts`
- `next.config.ts`
- `package.json`
- `tsconfig.json`

## Original asset SHA-256 inventory

- `public/assets/img/ui-rack.jpg` — `160fad34e02e357cfb2d7913a0ca3e5c4f06708bd1c3129629702b1fdd83649e`
- `public/assets/img/ui-prompts.jpg` — `689f620b6fd793f4b90606623c0aebbc6616c02975dce6d599428133c028ad28`
- `public/assets/img/ui-lines.jpg` — `829f1016666e39a17e937bdf640e21bdc3d57ec9da8110fc5cdc30454fbdb77c`
- `public/assets/img/ui-mode.jpg` — `3d72deee5da823c67271c57970d940b1f284097dbbb6b7b1499d28a40d3d9a1a`
- `public/assets/img/ui-knobs.jpg` — `d1913b4088121c4bebe58117188ab55f0bb59a6bfe2b541fd51661ca4236e0da`
- `public/assets/img/ui-prompt.jpg` — `823b0d27248a280b6f57f692442bd1a0af0358a8132bb6034d47778f3e1db02b`
- `public/assets/img/mixio-logo-white.png` — `7ee4d1e12042066f4c7db7f19fb3660558abab72efd9ad983d68b426031973b9`
- `public/assets/img/mixio-logo.svg` — `a763608490db31e8621e936620a15cc46642707c02161cb7b82ad55ec19117d6`
- `public/assets/audio/dance-demo-bypassed.mp3` — `2c32b6bc287d894dc050e8260e3a2aaa5c0135ce4b8150ea74e02a07ec33f9e4`
- `public/assets/audio/dance-demo-mixio.mp3` — `075ed5f3928b17fd56ada56ed1c54efcc595da08da9e84e5c92b983da074a598`

All original assets are byte-identical to the source. The main homepage sections are redistributed in `OriginalSections.tsx`; see `INTEGRATION.md`. The new `app/layout.tsx` is a standalone fallback and must not overwrite an existing application root layout. The new `/account` and `/login` route boundaries must not replace functional existing routes.
