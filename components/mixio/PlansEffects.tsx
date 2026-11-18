"use client";

import { useEffect } from "react";
import { track, captureUtms } from "@/lib/mixio/track";

export function PlansEffects() {
  useEffect(() => {
    captureUtms();
    const handlers: Array<[HTMLElement, () => void]> = [];
    document.querySelectorAll<HTMLElement>("[data-plan-select]").forEach((a) => {
      const fn = () =>
        track("plan_selected", {
          plan: a.dataset.planSelect,
          location: "plans_page",
        });
      a.addEventListener("click", fn);
      handlers.push([a, fn]);
    });
    return () => {
      handlers.forEach(([el, fn]) => el.removeEventListener("click", fn));
    };
  }, []);

  return null;
}
