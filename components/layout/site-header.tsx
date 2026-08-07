"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { servicePath, servicesHubPath } from "@/lib/routes";
import { serviceGroups } from "@/lib/nav";
import type { Locale } from "@/i18n/routing";

const LOCALES: Locale[] = ["uz", "ru", "en"];
const LOCALE_LABELS: Record<Locale, string> = {
  uz: "O'zbekcha (UZ)",
  ru: "Русский (RU)",
  en: "English (EN)",
};

type MenuId = "services" | "industries" | "company" | null;

const INDUSTRY_KEYS = [
  "healthcare",
  "construction",
  "manufacturing",
  "education",
  "finance",
  "retail",
  "logistics",
  "realestate",
  "government",
] as const;

/**
 * EPAM uslubidagi header: doim solid qora fon, chapda hamburger (barcha
 * ekranlarda) → to'liq ekran menyu, o'rtada nav + hover mega panellar,
 * o'ngda til tanlagich va outlined-uppercase CTA.
 */
export function SiteHeader({ locale }: { locale: Locale }) {
  const t = useTranslations("nav");
  const tInd = useTranslations("industries");
  const tA11y = useTranslations("a11y");
  const pathname = usePathname();

  const [open, setOpen] = useState<MenuId>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Boshlang'ich tema — no-flash script o'rnatgan atributdan
  useEffect(() => {
    if (document.documentElement.getAttribute("data-theme") === "light") {
      setTheme("light");
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      if (next === "light") {
        document.documentElement.setAttribute("data-theme", "light");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      try {
        localStorage.setItem("theme", next);
      } catch {}
      return next;
    });
  }, []);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const langRef = useRef<HTMLDivElement>(null);

  // To'liq ekran menyu ochiq bo'lsa scroll qulflanadi
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const scheduleOpen = useCallback((id: MenuId) => {
    if (openTimer.current) clearTimeout(openTimer.current);
    // EPAM uslubi: 120ms kechikish — tasodifiy hoverdan himoya
    openTimer.current = setTimeout(() => setOpen(id), 120);
  }, []);

  const closeAll = useCallback(() => {
    if (openTimer.current) clearTimeout(openTimer.current);
    setOpen(null);
    setLangOpen(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeAll();
        setMenuOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [closeAll]);

  const switchLocalePath = (target: Locale) => {
    const rest = pathname.replace(/^\/(uz|ru|en)(?=\/|$)/, "") || "/";
    return `/${target}${rest === "/" ? "" : rest}`;
  };

  const topLink =
    "relative flex h-full items-center gap-1 text-[15px] font-medium text-secondary transition-colors duration-200 hover:text-foreground after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100";

  return (
    <header
      onMouseLeave={closeAll}
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary-solid focus:px-4 focus:py-2 focus:text-[#050816]"
      >
        {tA11y("skipToContent")}
      </a>

      <div className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center px-4 sm:px-6 md:px-10">
        {/* EPAM uslubi: hamburger logodan OLDIN, barcha ekranlarda */}
        <button
          type="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
            closeAll();
          }}
          aria-expanded={menuOpen}
          aria-controls="fullscreen-menu"
          aria-label={menuOpen ? t("menuClose") : t("menuOpen")}
          className="mr-4 inline-flex size-11 shrink-0 items-center justify-center text-foreground transition-colors hover:text-accent sm:mr-6"
        >
          {menuOpen ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>

        <Link
          href={`/${locale}`}
          aria-label={tA11y("homeLink")}
          className="shrink-0"
          onClick={() => {
            closeAll();
            setMenuOpen(false);
          }}
        >
          <Image
            src="/assets/img/logo-dark.png"
            alt="Innosoft Systems"
            width={160}
            height={44}
            priority
            className="logo-for-dark"
          />
          <Image
            src="/assets/img/transparent.png"
            alt="Innosoft Systems"
            width={160}
            height={44}
            priority
            className="logo-for-light"
          />
        </Link>

        {/* Desktop nav — markazda */}
        <nav
          aria-label={t("mainNav")}
          className={cn(
            "ml-12 hidden h-full items-center gap-8 lg:flex",
            menuOpen && "pointer-events-none opacity-0"
          )}
        >
          <button
            type="button"
            onMouseEnter={() => scheduleOpen("services")}
            onClick={() => setOpen(open === "services" ? null : "services")}
            aria-expanded={open === "services"}
            aria-controls="mega-services"
            className={cn(topLink, open === "services" && "text-foreground after:scale-x-100")}
          >
            {t("services")}
            <ChevronDown
              className={cn("size-4 transition-transform duration-200", open === "services" && "rotate-180")}
              aria-hidden
            />
          </button>

          <button
            type="button"
            onMouseEnter={() => scheduleOpen("industries")}
            onClick={() => setOpen(open === "industries" ? null : "industries")}
            aria-expanded={open === "industries"}
            aria-controls="mega-industries"
            className={cn(topLink, open === "industries" && "text-foreground after:scale-x-100")}
          >
            {t("industries")}
            <ChevronDown
              className={cn("size-4 transition-transform duration-200", open === "industries" && "rotate-180")}
              aria-hidden
            />
          </button>

          <a href="#cases" onMouseEnter={closeAll} className={topLink} onClick={closeAll}>
            {t("caseStudies")}
          </a>

          <button
            type="button"
            onMouseEnter={() => scheduleOpen("company")}
            onClick={() => setOpen(open === "company" ? null : "company")}
            aria-expanded={open === "company"}
            aria-controls="mega-company"
            className={cn(topLink, open === "company" && "text-foreground after:scale-x-100")}
          >
            {t("company")}
            <ChevronDown
              className={cn("size-4 transition-transform duration-200", open === "company" && "rotate-180")}
              aria-hidden
            />
          </button>
        </nav>

        {/* O'ng blok: tema + til + CTA */}
        <div className="ml-auto flex items-center gap-3 sm:gap-5">
          {/* Light/Dark toggle — EPAM uslubida */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={tA11y("toggleTheme")}
            className="inline-flex size-10 items-center justify-center text-secondary transition-colors duration-200 hover:text-foreground"
          >
            {theme === "dark" ? (
              <Sun className="size-[18px]" aria-hidden />
            ) : (
              <Moon className="size-[18px]" aria-hidden />
            )}
          </button>

          {/* Til tanlagich — EPAM "Global (EN)" uslubida */}
          <div ref={langRef} className="relative">
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              aria-expanded={langOpen}
              aria-label={tA11y("switchLanguage")}
              className="flex items-center gap-1 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-secondary transition-colors duration-200 hover:text-foreground"
            >
              {locale}
              <ChevronDown
                className={cn("size-3.5 transition-transform duration-200", langOpen && "rotate-180")}
                aria-hidden
              />
            </button>
            {langOpen && (
              <ul className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-md border border-line bg-bg-elevated py-1 shadow-xl">
                {LOCALES.map((l) => (
                  <li key={l}>
                    <Link
                      href={switchLocalePath(l)}
                      aria-current={l === locale ? "true" : undefined}
                      onClick={() => setLangOpen(false)}
                      className={cn(
                        "block px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-white/[0.05]",
                        l === locale ? "font-semibold text-foreground" : "text-secondary"
                      )}
                    >
                      {LOCALE_LABELS[l]}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* CTA — EPAM uslubidagi outlined uppercase tugma */}
          <a
            href="#contact"
            onClick={() => {
              closeAll();
              setMenuOpen(false);
            }}
            className="outline-cta hidden h-11 items-center border border-white/40 px-6 text-[13px] font-semibold uppercase tracking-[0.1em] text-foreground transition-colors duration-200 hover:border-white hover:bg-white hover:text-[#050816] sm:inline-flex"
          >
            {t("cta")}
          </a>
        </div>
      </div>

      {/* ── Mega panellar (desktop hover) ── */}
      <div
        className={cn(
          "absolute inset-x-0 top-full hidden border-b border-line bg-bg-elevated/95 backdrop-blur-xl transition-all duration-200 ease-out lg:block",
          open && !menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        )}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          {open === "services" && (
            <div id="mega-services" className="grid grid-cols-5 gap-10 py-10">
              {(Object.keys(serviceGroups) as (keyof typeof serviceGroups)[]).map((group) => (
                <div key={group}>
                  <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-tertiary">
                    {t(group)}
                  </p>
                  <ul className="space-y-1">
                    {serviceGroups[group].map((key) => (
                      <li key={key}>
                        <Link
                          href={servicePath(locale, key)}
                          onClick={closeAll}
                          className="group/item block rounded-md px-3 py-2 -mx-3 transition-colors duration-150 hover:bg-white/[0.04]"
                        >
                          <span className="block text-[15px] font-medium text-foreground/90 transition-colors group-hover/item:text-foreground">
                            {t(`svc.${key}.title`)}
                          </span>
                          <span className="mt-0.5 block text-[13px] leading-snug text-tertiary">
                            {t(`svc.${key}.desc`)}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="flex flex-col justify-between rounded-lg border border-line-brand bg-primary-dim p-6">
                <div>
                  <p className="text-lg font-semibold">{t("featuredTitle")}</p>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">{t("featuredDesc")}</p>
                </div>
                <Link
                  href={servicePath(locale, "sayt-buyurtma")}
                  onClick={closeAll}
                  className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-accent transition-colors hover:text-foreground"
                >
                  {t("featuredCta")}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
          )}

          {open === "industries" && (
            <div id="mega-industries" className="grid grid-cols-3 gap-x-10 gap-y-1 py-10">
              {INDUSTRY_KEYS.map((key) => (
                <a
                  key={key}
                  href="#industries"
                  onClick={closeAll}
                  className="group/item rounded-md px-3 py-2.5 -mx-3 transition-colors duration-150 hover:bg-white/[0.04]"
                >
                  <span className="block text-[15px] font-medium text-foreground/90 group-hover/item:text-foreground">
                    {tInd(`items.${key}.title`)}
                  </span>
                  <span className="mt-0.5 block text-[13px] text-tertiary">
                    {tInd(`items.${key}.desc`)}
                  </span>
                </a>
              ))}
            </div>
          )}

          {open === "company" && (
            <div id="mega-company" className="flex gap-10 py-10">
              {[
                { label: t("companyAbout"), href: `/${locale}/about` },
                { label: t("companyTeam"), href: `/${locale}/team` },
                { label: t("companyCareers"), href: `/${locale}/careers` },
                { label: t("companyBlog"), href: `/${locale}/blog` },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeAll}
                  className="text-[15px] font-medium text-foreground/90 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── To'liq ekran menyu (EPAM hamburger, barcha ekranlarda) ── */}
      {menuOpen && (
        <nav
          id="fullscreen-menu"
          aria-label={t("mainNav")}
          className="fixed inset-x-0 bottom-0 top-[76px] z-40 overflow-y-auto bg-bg"
        >
          <div className="mx-auto w-full max-w-[1440px] px-6 pb-32 pt-6 md:px-10 lg:px-16 lg:pb-16 lg:pt-12">
            <div className="grid grid-cols-1 gap-x-16 lg:grid-cols-12">
              {/* Asosiy navigatsiya */}
              <div className="lg:col-span-8">
                <details className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-xl font-semibold tracking-[-0.02em] transition-colors hover:text-accent lg:text-3xl [&::-webkit-details-marker]:hidden">
                    {t("services")}
                    <ChevronDown className="size-5 text-tertiary transition-transform duration-200 group-open:rotate-180 lg:size-6" aria-hidden />
                  </summary>
                  <div className="grid grid-cols-1 gap-x-10 pb-8 sm:grid-cols-2 lg:grid-cols-4">
                    {(Object.keys(serviceGroups) as (keyof typeof serviceGroups)[]).map((group) => (
                      <div key={group} className="mt-4">
                        <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-tertiary">
                          {t(group)}
                        </p>
                        <ul className="space-y-1">
                          {serviceGroups[group].map((key) => (
                            <li key={key}>
                              <Link
                                href={servicePath(locale, key)}
                                onClick={() => setMenuOpen(false)}
                                className="block py-1.5 text-[15px] text-secondary transition-colors hover:text-foreground"
                              >
                                {t(`svc.${key}.title`)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={servicesHubPath(locale)}
                    onClick={() => setMenuOpen(false)}
                    className="mb-6 inline-flex items-center gap-2 text-[15px] font-semibold text-accent transition-colors hover:text-foreground"
                  >
                    {t("allServices")}
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </details>

                <details className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-xl font-semibold tracking-[-0.02em] transition-colors hover:text-accent lg:text-3xl [&::-webkit-details-marker]:hidden">
                    {t("industries")}
                    <ChevronDown className="size-5 text-tertiary transition-transform duration-200 group-open:rotate-180 lg:size-6" aria-hidden />
                  </summary>
                  <ul className="grid grid-cols-1 gap-x-10 pb-6 sm:grid-cols-2 lg:grid-cols-3">
                    {INDUSTRY_KEYS.map((key) => (
                      <li key={key}>
                        <a
                          href="#industries"
                          onClick={() => setMenuOpen(false)}
                          className="block py-1.5 text-[15px] text-secondary transition-colors hover:text-foreground"
                        >
                          {tInd(`items.${key}.title`)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>

                <a
                  href="#cases"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-line py-5 text-xl font-semibold tracking-[-0.02em] transition-colors hover:text-accent lg:text-3xl"
                >
                  {t("caseStudies")}
                  <ArrowRight className="size-5 text-tertiary lg:size-6" aria-hidden />
                </a>

                <details className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-xl font-semibold tracking-[-0.02em] transition-colors hover:text-accent lg:text-3xl [&::-webkit-details-marker]:hidden">
                    {t("company")}
                    <ChevronDown className="size-5 text-tertiary transition-transform duration-200 group-open:rotate-180 lg:size-6" aria-hidden />
                  </summary>
                  <ul className="pb-6">
                    {[
                      { label: t("companyAbout"), href: `/${locale}/about` },
                      { label: t("companyTeam"), href: `/${locale}/team` },
                      { label: t("companyCareers"), href: `/${locale}/careers` },
                      { label: t("companyBlog"), href: `/${locale}/blog` },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-1.5 text-[15px] text-secondary transition-colors hover:text-foreground"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-line py-5 text-xl font-semibold tracking-[-0.02em] transition-colors hover:text-accent lg:text-3xl"
                >
                  {t("contact")}
                  <ArrowRight className="size-5 text-tertiary lg:size-6" aria-hidden />
                </a>
              </div>

              {/* Yon panel: til + CTA (desktop) */}
              <div className="mt-10 lg:col-span-4 lg:mt-0">
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-tertiary">
                  {tA11y("switchLanguage")}
                </p>
                <ul className="mt-3 space-y-1">
                  {LOCALES.map((l) => (
                    <li key={l}>
                      <Link
                        href={switchLocalePath(l)}
                        onClick={() => setMenuOpen(false)}
                        aria-current={l === locale ? "true" : undefined}
                        className={cn(
                          "block py-1.5 text-[15px] transition-colors",
                          l === locale
                            ? "font-semibold text-foreground"
                            : "text-secondary hover:text-foreground"
                        )}
                      >
                        {LOCALE_LABELS[l]}
                      </Link>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="outline-cta mt-10 hidden h-12 items-center justify-center border border-white/40 px-8 text-[13px] font-semibold uppercase tracking-[0.1em] text-foreground transition-colors duration-200 hover:border-white hover:bg-white hover:text-[#050816] lg:inline-flex"
                >
                  {t("cta")}
                </a>
              </div>
            </div>
          </div>

          {/* Pastki yopishgan CTA — faqat kichik ekranlar */}
          <div className="fixed inset-x-0 bottom-0 border-t border-line bg-bg p-4 lg:hidden">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="outline-cta flex h-[52px] w-full items-center justify-center border border-white/40 text-[13px] font-semibold uppercase tracking-[0.1em] text-foreground"
            >
              {t("cta")}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
