"use client";

import { useEffect } from "react";
import { OFFER as CONFIG, formatPrice } from "@/lib/mixio/offer";
import { track } from "@/lib/mixio/track";

export function ConfirmationEffects() {
  useEffect(() => {
    const offerMap: Record<
      string,
      { id: string; name: string; value: number; price: string; renew: string }
    > = {};
    Object.values(CONFIG.plans).forEach((p) => {
      offerMap[p.id] = {
        id: p.id,
        name: `${p.name} plan`,
        value: p.price,
        price: formatPrice(p.price),
        renew: `${formatPrice(p.price)} every ${p.period}`,
      };
    });

    const q = new URLSearchParams(window.location.search);
    const plan = offerMap[q.get("plan") || ""] || offerMap.yearly;
    const D = CONFIG.trialDays;
    const fmt = (d: Date) =>
      d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    const t = new Date();
    const c = new Date(t);
    const l = new Date(t);
    c.setDate(t.getDate() + D);
    l.setDate(t.getDate() + D - 1);

    const set = (sel: string, v: string) =>
      document.querySelectorAll(sel).forEach((e) => {
        e.textContent = v;
      });
    set("[data-name]", plan.name);
    set("[data-price]", plan.price);
    set("[data-renew]", plan.renew);
    set("[data-charge]", fmt(c));
    set("[data-lastfree]", fmt(l));

    const rootEl = document.querySelector(".mx-marketing-root");
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || q.get("device") === "mobile") {
      rootEl?.classList.add("is-mobile");
    }

    const COMPAT: Record<string, string> = {
      VST3: "VST3 works in Ableton Live, Cubase, Reaper & FL Studio.",
      AU: "AU works in Logic Pro and other macOS hosts.",
      AAX: "AAX is for Pro Tools.",
    };

    const segCleanups: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>(".seg").forEach((seg) => {
      const onClick = (e: Event) => {
        const b = (e.target as HTMLElement).closest("button");
        if (!b) return;
        seg.querySelectorAll("button").forEach((x) =>
          x.setAttribute("aria-pressed", String(x === b))
        );
        if (seg.dataset.group === "fmt") {
          const compat = document.getElementById("compat");
          if (compat && b.textContent) compat.textContent = COMPAT[b.textContent] || "";
        }
        if (seg.dataset.group === "os") {
          const mac = b.textContent === "macOS";
          document
            .querySelectorAll<HTMLElement>("[data-mac-only]")
            .forEach((el) => {
              el.hidden = !mac;
            });
          if (!mac) {
            const f = document.querySelector("[data-group=fmt] [aria-pressed=true]");
            if (f && f.textContent === "AU") {
              document.querySelector<HTMLButtonElement>("[data-group=fmt] button")?.click();
            }
          }
        }
      };
      seg.addEventListener("click", onClick);
      segCleanups.push(() => seg.removeEventListener("click", onClick));
    });

    const copyBtn = document.getElementById("copy");
    const onCopy = () => {
      const keyEl = document.getElementById("key");
      try {
        if (keyEl?.textContent) navigator.clipboard.writeText(keyEl.textContent);
      } catch {
        // ignore clipboard error
      }
      if (copyBtn) {
        copyBtn.textContent = "Copied";
        setTimeout(() => {
          copyBtn.textContent = "Copy";
        }, 1600);
      }
      track("licence_key_copied", {});
    };
    copyBtn?.addEventListener("click", onCopy);

    const notice = document.createElement("p");
    notice.className = "mx-integration-notice";
    notice.setAttribute("role", "status");
    notice.textContent = "This is an unconnected confirmation layout. No subscription, license, or download entitlement has been verified.";
    document.querySelector("main")?.prepend(notice);

    const dlCleanups: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>("[data-download]").forEach((a) => {
      const onDl = () => {
        const pick = (g: string) => {
          const b = document.querySelector(`[data-group=${g}] [aria-pressed=true]`);
          return b && !b.closest("[hidden]") ? b.textContent?.trim() || null : null;
        };
        track("download_click", {
          app: a.dataset.download,
          os: pick("os"),
          os_version: pick("ver"),
          format: pick("fmt"),
        });
      };
      a.addEventListener("click", onDl);
      dlCleanups.push(() => a.removeEventListener("click", onDl));
    });

    return () => {
      segCleanups.forEach((fn) => fn());
      dlCleanups.forEach((fn) => fn());
      copyBtn?.removeEventListener("click", onCopy);
      notice.remove();
    };
  }, []);

  return null;
}
