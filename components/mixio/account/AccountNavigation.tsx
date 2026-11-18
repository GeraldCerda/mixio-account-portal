"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { accountSections } from "@/lib/mixio/account-sections";

export function AccountNavigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="Account navigation">
      {accountSections.map(section => (
        <Link key={section.id} href={section.href} aria-current={pathname === section.href ? "page" : undefined}>
          {section.label}
        </Link>
      ))}
    </nav>
  );
}
