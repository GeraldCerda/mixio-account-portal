"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { OFFER, formatPrice } from "@/lib/mixio/offer";
import { track, captureUtms, getUtms } from "@/lib/mixio/track";
import { DEMO } from "@/lib/mixio/demo-config";
import { WAVES } from "@/lib/mixio/demo-waves";

const TARGETS = [
  ".hero-grid > div > *",
  ".mx-sh > *",
  ".grid-2 > *",
  ".control-note",
  ".steps-open > *",
  ".compat",
  ".mx-stat",
  ".mx-credits",
  ".editorial > figure",
  ".uc-row > *",
  ".proof-grid > *",
  ".pricing-grid > *",
  ".trial-terms",
  ".faq details",
  ".mx-player",
  ".demo-grid > .section-cta",
  ".final-cta .wrap > *",
];

export function LandingEffects() {
  const pathname = usePathname();
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      document.documentElement.classList.add("js-motion");
    }

    captureUtms();

    // 1. Fill offer facts
    const { trialDays } = OFFER;
    const OFFER_TEXT: Record<string, string> = {
      terms: `Card required. Nothing charged for ${trialDays} days. Cancel anytime before your trial ends.`,
      faqCard: `Yes. A payment method is needed to start your trial, but nothing is charged today. You can cancel before the ${trialDays} days are up and you won't pay anything.`,
      faqTrialEnd: `Your plan renews automatically after ${trialDays} days: ${formatPrice(OFFER.plans.monthly.price)}/${OFFER.plans.monthly.period} on monthly, or ${formatPrice(OFFER.plans.annual.price)}/${OFFER.plans.annual.period} on annual. Cancel before then and you won't be charged.`,
    };
    const OFFER_LISTS: Record<string, string[]> = {
      planFeatures: [
        `${trialDays}-day free trial`,
        `${OFFER.includes} included`,
        "Nothing charged today",
      ],
      trialTerms: [
        `${trialDays}-day free trial, ${OFFER.includes} included`,
        "Card required. Nothing charged today.",
        `Renews automatically after ${trialDays} days unless cancelled`,
        "Cancel before your trial ends and you won't be charged",
      ],
    };

    document.querySelectorAll<HTMLElement>("[data-offer]").forEach((el) => {
      const key = el.dataset.offer as keyof typeof OFFER;
      if (key && OFFER[key] !== undefined) el.textContent = String(OFFER[key]);
    });
    document.querySelectorAll<HTMLElement>("[data-offer-text]").forEach((el) => {
      const key = el.dataset.offerText;
      if (key && OFFER_TEXT[key]) el.textContent = OFFER_TEXT[key];
    });
    document.querySelectorAll<HTMLElement>("[data-offer-list]").forEach((el) => {
      const key = el.dataset.offerList;
      if (key && OFFER_LISTS[key]) {
        el.replaceChildren(
          ...OFFER_LISTS[key].map((t) => {
            const li = document.createElement("li");
            li.textContent = t;
            return li;
          })
        );
      }
    });
    document.querySelectorAll<HTMLElement>("[data-plan]").forEach((card) => {
      const planKey = card.dataset.plan as keyof typeof OFFER.plans;
      const plan = OFFER.plans[planKey];
      if (!plan) return;
      card.querySelectorAll<HTMLElement>("[data-plan-field]").forEach((el) => {
        const key = el.dataset.planField as keyof typeof plan | "periodLabel";
        const value =
          key === "price"
            ? formatPrice(plan.price)
            : key === "periodLabel"
              ? `per ${plan.period} after trial`
              : String(plan[key] ?? "");
        el.textContent = value;
        if (!value) el.hidden = true;
      });
    });

    // 2. Wire CTAs
    const utms = getUtms();
    document.querySelectorAll<HTMLAnchorElement>("[data-cta]").forEach((a) => {
      const href = a.getAttribute("href");
      if (href) {
        const url = new URL(href, window.location.origin);
        Object.entries(utms).forEach(([k, v]) => url.searchParams.set(k, v));
        a.href = url.pathname + url.search;
      }
      const onClick = () => {
        track("cta_click", {
          location: a.dataset.cta,
          plan: a.dataset.ctaPlan || "unspecified",
        });
      };
      a.addEventListener("click", onClick);
      cleanups.push(() => a.removeEventListener("click", onClick));
    });

    const heroWatch = document.querySelector<HTMLElement>('[data-cta-secondary="hero_watch"]');
    if (heroWatch) {
      const onWatch = () => track("cta_click", { location: "hero_watch", plan: "unspecified" });
      heroWatch.addEventListener("click", onWatch);
      cleanups.push(() => heroWatch.removeEventListener("click", onWatch));
    }

    // 3. Draw waveforms
    document.querySelectorAll<HTMLElement>("[data-wave]").forEach((el) => {
      const tone = el.dataset.wave;
      let seed = Number(el.dataset.seed) || 7;
      const real = el.dataset.waveId ? WAVES[el.dataset.waveId] : undefined;
      const n = real ? real.length : 72;
      const w = 600;
      const ht = 96;
      const gap = 2;
      const bw = (w - gap * (n - 1)) / n;
      const splitAt = Math.round(n * 0.5);
      let rects = "";
      for (let i = 0; i < n; i++) {
        seed = (seed * 9301 + 49297) % 233280;
        const r = seed / 233280;
        const env = 0.35 + 0.65 * Math.sin((Math.PI * (i + 0.5)) / n);
        const even = tone === "purple" || (tone === "split" && i >= splitAt);
        const amp = real
          ? Math.min(1, real[i])
          : even
            ? (0.5 + 0.35 * r) * (0.55 + 0.45 * env)
            : (0.15 + 0.85 * r) * env;
        const bh = Math.max(3, amp * ht);
        const fill =
          tone === "cream" || (tone === "split" && i < splitAt)
            ? "var(--cream)"
            : "var(--purple)";
        rects += `<rect x="${(i * (bw + gap)).toFixed(2)}" y="${((ht - bh) / 2).toFixed(2)}" width="${bw.toFixed(2)}" height="${bh.toFixed(2)}" rx="2" fill="${fill}"/>`;
      }
      const label = el.getAttribute("aria-label") || "";
      el.removeAttribute("aria-label");
      el.innerHTML =
        `<div class="wave-box"><svg class="mx-wave" viewBox="0 0 ${w} ${ht}" role="img" aria-label="${label}">${rects}</svg><div class="wave-dim" aria-hidden="true"></div><div class="wave-head" aria-hidden="true"></div></div>` +
        (tone === "split"
          ? `<div class="mx-wave-label" aria-hidden="true"><span style="color:var(--cream)">YOUR TAKE</span><span style="color:var(--purple-light)">MIXIO PASS</span></div>`
          : "");
    });

    // 4. Demo audio player
    const root = document.querySelector<HTMLElement>(".mx-player");
    if (root) {
      const fmt = (s: number) =>
        `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
      const ICON_PLAY = '<path d="M4 2l10 6-10 6z"/>';
      const ICON_PAUSE =
        '<rect x="3" y="2" width="3.5" height="12"/><rect x="9.5" y="2" width="3.5" height="12"/>';

      const tabs = Array.from(root.querySelectorAll<HTMLElement>('[role="tab"]'));
      const panels = tabs.map((t) =>
        document.getElementById(t.getAttribute("aria-controls") || "")
      );
      const playBtn = root.querySelector<HTMLButtonElement>("[data-demo-play]");
      const playIcon = playBtn?.querySelector("svg");
      const range = root.querySelector<HTMLInputElement>(".demo-range");
      const nowEl = root.querySelector<HTMLElement>("[data-demo-now]");
      const totalEl = root.querySelector<HTMLElement>("[data-demo-total]");
      const previewNote = root.querySelector<HTMLElement>("[data-demo-preview-note]");
      const live = root.querySelector<HTMLElement>("[data-demo-live]");
      const stages = DEMO.stages;
      const active = tabs
        .map((_, i) => i)
        .filter((i) => stages[i] && stages[i].enabled !== false);
      tabs.forEach((t, i) => {
        if (!active.includes(i)) {
          t.hidden = true;
          if (panels[i]) panels[i]!.hidden = true;
        }
      });

      const audios: Array<HTMLAudioElement | null> = stages.map(() => null);
      const failed = stages.map(() => false);
      const tracked = new Set<number>();
      let current = 0;
      let playing = false;
      let time = 0;
      let duration = DEMO.previewDuration;
      let raf = 0;
      let last = 0;
      let playbackRequest = 0;

      const hasAudio = (i: number) => Boolean(stages[i]?.src) && !failed[i];
      if (active.every((i) => stages[i].src) && previewNote) previewNote.hidden = true;

      const updateNote = () => {
        if (previewNote) previewNote.hidden = active.every((i) => hasAudio(i));
      };

      const render = () => {
        const p = duration ? Math.min(1, time / duration) : 0;
        root.style.setProperty("--p", String(p));
        if (range) {
          range.value = String(Math.round(p * 1000));
          range.setAttribute("aria-valuetext", `${fmt(time)} of ${fmt(duration)}`);
        }
        if (nowEl) nowEl.textContent = fmt(time);
        if (totalEl) totalEl.textContent = fmt(duration);
      };

      const audioFor = (i: number) => {
        if (!hasAudio(i)) return null;
        if (!audios[i]) {
          const a = new Audio();
          a.preload = "none";
          a.src = stages[i].src!;
          a.volume = stages[i].volume == null ? 1 : stages[i].volume!;
          a.addEventListener("loadedmetadata", () => {
            if (i !== current) return;
            if (isFinite(a.duration)) duration = a.duration;
            a.currentTime = Math.min(time, duration);
            render();
          });
          a.addEventListener("error", () => {
            failed[i] = true;
            if (i === current) {
              if (previewNote) previewNote.textContent = "The audio file could not be loaded.";
              pause();
            }
            updateNote();
          });
          audios[i] = a;
        }
        return audios[i];
      };

      const setPlaying = (on: boolean) => {
        playing = on;
        if (playIcon) playIcon.innerHTML = on ? ICON_PAUSE : ICON_PLAY;
        playBtn?.setAttribute("aria-label", on ? "Pause" : "Play");
        root.classList.toggle("is-playing", on);
      };

      const stopMedia = () => audios.forEach((a) => a && !a.paused && a.pause());

      const pause = () => {
        playbackRequest++;
        setPlaying(false);
        cancelAnimationFrame(raf);
        stopMedia();
      };

      const finish = () => {
        pause();
        time = 0;
        render();
      };

      const tick = (now: number) => {
        const a = audioFor(current);
        if (a && a.readyState >= 1 && !a.paused) {
          time = a.currentTime;
          if (isFinite(a.duration)) duration = a.duration;
        }
        last = now;
        if (time >= duration) {
          finish();
          return;
        }
        render();
        raf = requestAnimationFrame(tick);
      };

      const startMedia = () => {
        const index = current;
        const request = ++playbackRequest;
        const audio = audioFor(index);
        if (!audio) {
          pause();
          return;
        }
        if (audio.readyState >= 1) audio.currentTime = time;
        audio.play().then(() => {
          if (request !== playbackRequest || index !== current || !playing) audio.pause();
        }).catch(() => {
          if (request !== playbackRequest || index !== current) return;
          failed[index] = true;
          if (previewNote) previewNote.textContent = "Playback is unavailable. Check the audio file or browser playback permissions.";
          updateNote();
          pause();
        });
      };

      const play = () => {
        if (time >= duration) time = 0;
        setPlaying(true);
        startMedia();
        active.forEach((i) => {
          const o = i === current ? null : audioFor(i);
          if (o && o.preload !== "auto") {
            o.preload = "auto";
            o.load();
          }
        });
        last = performance.now();
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(tick);
        if (!tracked.has(current)) {
          tracked.add(current);
          track("demo_played", { stage: current + 1, audio: hasAudio(current) });
        }
      };

      const seek = (frac: number) => {
        time = Math.max(0, Math.min(1, frac)) * duration;
        const a = audios[current];
        if (a && a.readyState >= 1) a.currentTime = time;
        render();
      };

      const select = (i: number, focus = true) => {
        if (i === current) {
          if (focus) tabs[i].focus();
          return;
        }
        const was = playing;
        if (was) pause();
        current = i;
        tabs.forEach((t, k) => {
          const on = k === i;
          t.setAttribute("aria-selected", String(on));
          t.tabIndex = on ? 0 : -1;
          if (panels[k]) panels[k]!.hidden = !on;
        });
        if (focus) tabs[i].focus();
        updateNote();
        if (was) play();
        if (live) {
          live.textContent = `${tabs[i].textContent?.trim() || ""}${was ? ", still playing from the same point" : ""}`;
        }
      };

      active.forEach((i, pos) => {
        const tab = tabs[i];
        const onTabClick = () => select(i);
        const onKeyDown = (e: KeyboardEvent) => {
          const map: Record<string, number> = {
            ArrowRight: pos + 1,
            ArrowLeft: pos - 1,
            Home: 0,
            End: active.length - 1,
          };
          const next = map[e.key];
          if (next === undefined) return;
          e.preventDefault();
          select(active[(next + active.length) % active.length]);
        };
        tab.addEventListener("click", onTabClick);
        tab.addEventListener("keydown", onKeyDown);
        cleanups.push(() => {
          tab.removeEventListener("click", onTabClick);
          tab.removeEventListener("keydown", onKeyDown);
        });
      });

      const onPlayClick = () => (playing ? pause() : play());
      playBtn?.addEventListener("click", onPlayClick);
      const onRangeInput = () => seek(Number(range?.value || 0) / 1000);
      range?.addEventListener("input", onRangeInput);

      root.querySelectorAll<HTMLElement>(".wave-box").forEach((box) => {
        const at = (e: PointerEvent) => {
          const r = box.getBoundingClientRect();
          seek((e.clientX - r.left) / r.width);
        };
        const onDown = (e: PointerEvent) => {
          box.setPointerCapture(e.pointerId);
          at(e);
        };
        const onMove = (e: PointerEvent) => {
          if (box.hasPointerCapture(e.pointerId)) at(e);
        };
        box.addEventListener("pointerdown", onDown);
        box.addEventListener("pointermove", onMove);
        cleanups.push(() => {
          box.removeEventListener("pointerdown", onDown);
          box.removeEventListener("pointermove", onMove);
        });
      });

      const onVis = () => {
        if (document.hidden && playing) pause();
      };
      document.addEventListener("visibilitychange", onVis);

      cleanups.push(() => {
        cancelAnimationFrame(raf);
        stopMedia();
        playBtn?.removeEventListener("click", onPlayClick);
        range?.removeEventListener("input", onRangeInput);
        document.removeEventListener("visibilitychange", onVis);
      });

      render();
    }

    // 5. Scroll reveal animations
    const docRoot = document.documentElement;
    if (docRoot.classList.contains("js-motion") && "IntersectionObserver" in window) {
      const items = Array.from(
        new Set(TARGETS.flatMap((s) => Array.from(document.querySelectorAll<HTMLElement>(s))))
      );
      items.forEach((el) => {
        const sibs = el.parentElement
          ? Array.from(el.parentElement.children).filter((c) => items.includes(c as HTMLElement))
          : [];
        const step = el.matches(".faq details, .mx-credits > *") ? 45 : 80;
        el.style.setProperty("--d", `${Math.min(Math.max(0, sibs.indexOf(el)), 5) * step}ms`);
        el.classList.add("reveal");
      });

      const settle = (el: HTMLElement) => {
        el.classList.remove("reveal", "is-in");
        el.style.removeProperty("--d");
      };
      const done = (e: TransitionEvent) => {
        if (e.propertyName !== "opacity") return;
        const target = e.currentTarget as HTMLElement;
        target.removeEventListener("transitionend", done);
        settle(target);
      };
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            const target = en.target as HTMLElement;
            io.unobserve(target);
            target.addEventListener("transitionend", done);
            target.classList.add("is-in");
            setTimeout(() => settle(target), 2000);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      items.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
