// Analytics wrapper. Events go to the GTM dataLayer, so tags (GA4, Meta etc.) are set up in GTM, not in code.
// Rules: no personal data in payloads; tags load only once consent allows it (handled in GTM).
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

type TrackProvider = (event: string, payload: Record<string, unknown>) => void;

let provider: TrackProvider | null = null;
const queue: Array<[string, Record<string, unknown>]> = [];

function getDefaultProvider(): TrackProvider {
  return (event, payload) => {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...payload });
  };
}

export function setProvider(fn: TrackProvider) {
  provider = fn;
  while (queue.length) {
    const item = queue.shift();
    if (item) provider(...item);
  }
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const UTM_STORE = "mixio_utms";

export function captureUtms(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const found: Record<string, string> = {};
  UTM_KEYS.forEach((k) => {
    const val = params.get(k);
    if (val) found[k] = val;
  });
  if (Object.keys(found).length) {
    try {
      sessionStorage.setItem(UTM_STORE, JSON.stringify(found));
    } catch {
      // ignore storage errors
    }
  }
}

export function getUtms(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(sessionStorage.getItem(UTM_STORE) || "{}") || {};
  } catch {
    return {};
  }
}

export function track(event: string, props: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const payload = { ...props, ...getUtms() };
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    console.info("[track]", event, payload);
  }
  const activeProvider = provider || getDefaultProvider();
  if (activeProvider) activeProvider(event, payload);
  else queue.push([event, payload]);
}
