"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#services", label: "Xizmatlar" },
  { href: "#stats", label: "Yutuqlar" },
  { href: "#contact", label: "Aloqa" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center" aria-label="Innosoft Systems — bosh sahifa">
          <Image
            src="/assets/img/logo-white.svg"
            alt="Innosoft Systems"
            width={165}
            height={27}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Asosiy navigatsiya">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+998910555511"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Phone className="size-4" aria-hidden />
            +998 91 055 55 11
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
          className="inline-flex size-11 items-center justify-center rounded-md text-foreground md:hidden"
        >
          {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/5 bg-background/95 px-4 pb-6 pt-2 backdrop-blur-md md:hidden"
          aria-label="Mobil navigatsiya"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-3 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+998910555511"
            className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white"
          >
            <Phone className="size-4" aria-hidden />
            +998 91 055 55 11
          </a>
        </nav>
      )}
    </header>
  );
}
