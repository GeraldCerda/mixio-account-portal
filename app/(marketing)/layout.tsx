import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import Script from "next/script";
import "./tokens.css";
import "./landing.css";
import "./multipage.css";
import { LandingEffects } from "@/components/mixio/LandingEffects";
import { SiteChrome } from "@/components/mixio/SiteChrome";

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Mixio: professional mixing inside your DAW | Free trial",
  description:
    "You create the music. Mixio helps you finish it, with Spike's mixing and mastering approach built into your DAW. Start your free trial.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-marketing-root ${dmMono.variable}`}>
      {/* Google Tag Manager (Mixio container) */}
      <Script id="gtm-mixio" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WK5R6SJN');`}
      </Script>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WK5R6SJN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <LandingEffects />
      <SiteChrome>{children}</SiteChrome>
    </div>
  );
}
