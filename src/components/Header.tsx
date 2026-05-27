"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/nav";
import Logo from "@/components/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const headerBg = scrolled
    ? "bg-white/85 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
    : "bg-transparent";
  const ink = scrolled || open ? "text-neutral-900" : "text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        open ? "bg-white" : headerBg
      }`}
    >
      <div className="mx-auto flex h-[66px] max-w-[1440px] items-center justify-between px-5 sm:px-8 md:h-[86px] lg:px-[102px]">
        <Logo white={!scrolled && !open} />

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className={`hidden items-center gap-10 text-base font-bold leading-[1.5] md:flex ${
            scrolled ? "text-neutral-900" : "text-white"
          }`}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:opacity-80">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className={`group hidden items-center gap-4 rounded-full border pl-6 pr-1 py-1 text-base font-bold backdrop-blur-sm transition-colors md:inline-flex ${
            scrolled
              ? "border-neutral-300 bg-white text-neutral-900 hover:border-neutral-400"
              : "border-white bg-white/5 text-white hover:bg-white/10"
          }`}
        >
          Contact Us
          <span
            aria-hidden
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              scrolled ? "bg-neutral-900 text-white" : "bg-white text-neutral-900"
            }`}
          >
            <ArrowUpRight />
          </span>
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className={`flex h-10 w-10 items-center justify-center md:hidden ${ink}`}
        >
          {open ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile primary"
          className="border-t border-neutral-200 bg-white px-5 py-6 text-neutral-900 md:hidden"
        >
          <ul className="flex flex-col gap-1 text-lg font-bold">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 hover:bg-neutral-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-3 rounded-full border border-neutral-300 bg-white px-5 py-3 text-base font-bold text-neutral-900"
              >
                Contact Us
                <span
                  aria-hidden
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white"
                >
                  <ArrowUpRight />
                </span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M3 11L11 3M11 3H5M11 3V9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
