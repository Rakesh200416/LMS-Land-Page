"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/contact", "Contact"],
] as const;

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 px-2 pt-2 sm:px-4 sm:pt-3 lg:px-5">
        <div className="page-wrap neu-surface rounded-[30px] px-4 py-3 sm:px-6">
          <nav className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/PRGEEQ-Logo.png"
                alt="PRGEEQ logo"
                width={118}
                height={36}
                className="object-contain"
                priority
              />
              <div className="hidden sm:block">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Premium LMS
                </p>
              </div>
            </Link>

            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="neu-button px-4 py-3 text-sm font-semibold"
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">Toggle menu</span>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12h18" />
                  <path d="M3 6h18" />
                  <path d="M3 18h18" />
                </svg>
              </button>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              {navItems.map(([href, title]) => (
                <Link
                  key={title}
                  href={href}
                  className="neu-button min-w-24 px-5 py-3 text-sm text-slate-600 hover:text-slate-900"
                >
                  {title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-[2px]"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[82vw] max-w-sm p-3">
            <div className="neu-surface flex h-full flex-col rounded-[32px] p-4">
              <div className="flex items-center justify-between gap-3">
                <Image
                  src="/PRGEEQ-Logo.png"
                  alt="PRGEEQ logo"
                  width={104}
                  height={32}
                  className="object-contain"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="neu-button h-11 w-11 p-0 text-slate-700"
                  aria-label="Close navigation menu"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="neu-divider my-5" />

              <div className="flex flex-1 flex-col gap-3">
                {navItems.map(([href, title]) => (
                  <Link
                    key={title}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="neu-button flex w-full justify-center px-4 py-3 text-base text-slate-700"
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
