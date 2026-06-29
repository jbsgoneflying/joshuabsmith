"use client";

import { useEffect, useState } from "react";
import Monogram from "./visuals/Monogram";
import { nav } from "@/content/site";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line-soft bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 rounded text-text transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass/50"
        >
          <Monogram className="h-7 w-7 text-brass" />
          <span className="font-serif text-lg tracking-tight">{nav.brand}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded text-sm text-text-secondary transition-colors hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-brass/50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center text-text-secondary transition-colors hover:text-text md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path d="M4 8h16" />
                <path d="M4 16h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line-soft bg-bg/95 backdrop-blur-md md:hidden">
          <ul className="container-page flex flex-col py-4">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded py-3 text-base text-text-secondary transition-colors hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-brass/50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
