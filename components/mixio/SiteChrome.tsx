"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/assistant", label: "The Assistant" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/listen", label: "Listen" },
  { href: "/plans", label: "Pricing" },
  { href: "/resources", label: "Resources" },
] as const;

export function SiteChrome({ children }: { children: ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  if (path === "/checkout" || path === "/confirmation") return <>{children}</>;
  const active = (href: string) => href === "/" ? path === href : path === href || path.startsWith(href + "/");
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="mx-nav mx-site-nav">
        <div className="wrap mx-site-nav-inner">
          <Link aria-label="Mixio home" className="mx-nav-home" href="/"><img className="mx-nav-logo" src="/assets/img/mixio-logo-white.png" alt="Mixio" width="761" height="158" /></Link>
          <nav className="mx-site-desktop" aria-label="Primary navigation">
            {navigation.map((item) => <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined}>{item.label}</Link>)}
          </nav>
          <div className="mx-site-actions"><Link href="/account" className="mx-site-account">Account</Link><Link href="/plans" className="mx-site-trial">Free Trial</Link></div>
          <button ref={trigger} type="button" className="mx-site-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="mx-mobile-nav" aria-expanded={open} onClick={() => setOpen(value => !value)}><span aria-hidden="true">{open ? "Close" : "Menu"}</span></button>
        </div>
        <nav id="mx-mobile-nav" className="mx-site-mobile" aria-label="Mobile navigation" hidden={!open}>
          {navigation.map(item => <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Link href="/account" onClick={() => setOpen(false)}>Account</Link><Link href="/plans" onClick={() => setOpen(false)}>Start Free Trial</Link>
        </nav>
      </header>
      {children}
      <footer className="mx-site-footer"><div className="wrap mx-site-footer-inner"><Link href="/"><img src="/assets/img/mixio-logo-white.png" alt="Mixio" width="761" height="158" /></Link><p>Professional mixing and mastering inside your DAW.</p><nav aria-label="Footer links"><Link href="/about">About</Link><Link href="/stories">Stories</Link><Link href="/support">Support</Link><Link href="/download">Download</Link><a href="https://mixio.music/terms">Terms</a><a href="https://mixio.music/privacy">Privacy</a></nav><small>© {new Date().getFullYear()} Mixio</small></div></footer>
    </>
  );
}
