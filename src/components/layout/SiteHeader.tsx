"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, siteConfig } from "@/lib/site";
import s from "./SiteHeader.module.scss";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  // Route change should never leave the mobile panel hanging open
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={s.header}>
      <div className="shell">
        <div className={s.inner}>
          <Link href="/" className={s.brand} aria-label={`${siteConfig.name} — home`}>
            <span className={s.monogram} aria-hidden="true">
              ND
            </span>
            <span className={s.brandText}>
              <span className={s.brandName}>{siteConfig.name}</span>
              <span className={s.brandRole}>{siteConfig.shortRole}</span>
            </span>
          </Link>

          <nav className={s.nav} aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={s.link}
                data-active={isActive(pathname, item.href)}
              >
                {item.label}
              </Link>
            ))}
            {/* Anchors the contact block at the foot of whichever page is open */}
            <span className={s.headerCta}>
              <a className={s.cta} href="#contact">
                Contact Me
              </a>
            </span>
          </nav>

          <button
            type="button"
            className={s.toggle}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? (
                <path d="M3 3l12 12M15 3 3 15" stroke="currentColor" strokeWidth="1.6" />
              ) : (
                <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.6" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={open ? `${s.panel} ${s.panelOpen}` : s.panel}>
        <div className="shell">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={s.panelLink}
              data-active={isActive(pathname, item.href)}
            >
              {item.label}
            </Link>
          ))}
          <a className={s.panelLink} href="#contact" onClick={() => setOpen(false)}>
            Contact Me
          </a>
          <div className={s.panelActions}>
            <a
              className={s.cta}
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
            <a className={s.cta} href={`mailto:${siteConfig.email}`}>
              Email
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
