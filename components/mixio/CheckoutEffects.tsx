"use client";

import { useEffect } from "react";
import { OFFER as CONFIG, formatPrice } from "@/lib/mixio/offer";
import { track, captureUtms } from "@/lib/mixio/track";

export function CheckoutEffects() {
  useEffect(() => {
    captureUtms();

    const offerMap: Record<
      string,
      { id: string; name: string; value: number; price: string; per: string; period: string; renew: string }
    > = {};
    Object.values(CONFIG.plans).forEach((p) => {
      offerMap[p.id] = {
        id: p.id,
        name: p.name,
        value: p.price,
        price: formatPrice(p.price),
        per: "/ " + p.period,
        period: p.period,
        renew: `${formatPrice(p.price)} every ${p.period}`,
      };
    });

    const TRIAL_DAYS = CONFIG.trialDays;
    const q = new URLSearchParams(window.location.search);
    const plan = offerMap[q.get("plan") || ""] || offerMap.yearly;

    const fmt = (d: Date) =>
      d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    const today = new Date();
    const charge = new Date(today);
    const lastFree = new Date(today);
    charge.setDate(today.getDate() + TRIAL_DAYS);
    lastFree.setDate(today.getDate() + TRIAL_DAYS - 1);

    const set = (sel: string, v: string) =>
      document.querySelectorAll(sel).forEach((el) => {
        el.textContent = v;
      });

    set("[data-name]", plan.name);
    set("[data-price-big]", plan.price);
    set("[data-per]", plan.per);
    set("[data-price]", plan.price);
    set("[data-period]", plan.period);
    set("[data-renew]", plan.renew);
    set("[data-charge]", fmt(charge));
    set("[data-trial]", `${fmt(today)} – ${fmt(lastFree)}`);
    document.querySelector(".change")?.setAttribute("href", `/plans?plan=${plan.id}`);

    track("checkout_started", { plan: plan.id, value: 0, currency: CONFIG.currency });

    const rootEl = document.querySelector(".mx-marketing-root");
    const showError = (reason: string) => {
      rootEl?.classList.add("show-error");
      track("checkout_error", { plan: plan.id, reason });
    };
    if (q.get("state") === "error") showError("card_declined");

    const form = document.getElementById("checkout") as HTMLFormElement | null;
    const btn = document.getElementById("go") as HTMLButtonElement | null;
    const goLabel = document.getElementById("go-label");

    const notice = form?.querySelector<HTMLElement>(".mx-integration-notice");
    form?.querySelectorAll<HTMLInputElement>("input").forEach(input => { input.disabled = true; });
    form?.querySelectorAll<HTMLSelectElement>("select").forEach(select => { select.disabled = true; });
    if (btn) btn.disabled = true;
    if (goLabel) goLabel.textContent = "Checkout integration required";

    const onSubmit = (e: Event) => {
      e.preventDefault();
      notice?.focus();
      track("checkout_unavailable", { plan: plan.id });
    };
    form?.addEventListener("submit", onSubmit);
    return () => {
      form?.removeEventListener("submit", onSubmit);
    };
  }, []);

  return null;
}
