// Single source of truth for offer facts. Pages read these values; never hardcode them in HTML.
export const OFFER = {
  trialDays: 14,
  currency: "USD",
  currencySymbol: "$",
  includes: "Mixio + Assistant",
  cardRequired: true,
  plans: {
    monthly: {
      id: "monthly",
      name: "Monthly",
      price: 14.99,
      period: "month",
      billing: "Billed monthly",
      note: "",
    },
    yearly: {
      id: "yearly",
      name: "Yearly",
      price: 149.99,
      period: "year",
      billing: "Billed yearly",
      note: "About 2 months free",
    },
  },
};

export const ROUTES = {
  plans: "/plans",
  checkout: "/checkout",
};

export function formatPrice(amount: number): string {
  return `${OFFER.currencySymbol}${amount.toFixed(2)}`;
}
