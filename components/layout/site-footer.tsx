import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import { Container } from "@/components/ui/container";
import { CONTACT } from "@/lib/constants";
import { servicePath, servicesHubPath } from "@/lib/routes";
import type { Locale } from "@/i18n/routing";

const FOOTER_SERVICES = [
  "korporativ-saytlar",
  "internet-dukonlar",
  "crm-tizimlar",
  "erp-tizimlar",
  "ai-chatbotlar",
  "mobile-ilovlar",
  "seo-xizmatlar",
  "telegram-botlar",
] as const;

const FOOTER_SOLUTIONS = [
  "dasturiy-taminot",
  "biznes-avtomatlashtirish",
  "veb-ilovalar",
  "startap-saytlar",
  "ux-ui-dizayn",
  "it-konsalting",
] as const;

export async function SiteFooter({ locale }: { locale: Locale }) {
  const [t, tNav, tA11y] = await Promise.all([
    getTranslations("footer"),
    getTranslations("nav"),
    getTranslations("a11y"),
  ]);

  const linkCls =
    "text-[15px] text-secondary transition-colors duration-200 hover:text-foreground";

  return (
    <footer className="border-t border-line bg-bg">
      <Container size="shell" className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brend + newsletter */}
          <div className="lg:col-span-4">
            <Link href={`/${locale}`} aria-label={tA11y("homeLink")}>
              <Image
                src="/assets/img/logo-dark.png"
                alt="Innosoft Systems"
                width={175}
                height={48}
                className="logo-for-dark"
              />
              <Image
                src="/assets/img/transparent.png"
                alt="Innosoft Systems"
                width={175}
                height={48}
                className="logo-for-light"
              />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-secondary">
              {t("tagline")}
            </p>

            <div className="mt-8 flex gap-3">
              {[
                { href: CONTACT.telegram, label: "Telegram", Icon: Send },
                { href: CONTACT.instagram, label: "Instagram", Icon: InstagramIcon },
                { href: CONTACT.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-md border border-line text-secondary transition-colors duration-200 hover:border-line-brand hover:text-accent"
                >
                  <Icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Link ustunlari */}
          <nav aria-label={t("footerNav")} className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-tertiary">
                {t("colServices")}
              </p>
              <ul className="mt-5 space-y-3">
                {FOOTER_SERVICES.map((key) => (
                  <li key={key}>
                    <Link href={servicePath(locale, key)} className={linkCls}>
                      {tNav(`svc.${key}.title`)}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href={servicesHubPath(locale)} className="text-[15px] font-medium text-accent hover:text-foreground">
                    {t("allServices")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-tertiary">
                {t("colSolutions")}
              </p>
              <ul className="mt-5 space-y-3">
                {FOOTER_SOLUTIONS.map((key) => (
                  <li key={key}>
                    <Link href={servicePath(locale, key)} className={linkCls}>
                      {tNav(`svc.${key}.title`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-tertiary">
                {t("colCompany")}
              </p>
              <ul className="mt-5 space-y-3">
                <li><Link href={`/${locale}/about`} className={linkCls}>{t("about")}</Link></li>
                <li><Link href={`/${locale}/team`} className={linkCls}>{t("team")}</Link></li>
                <li><Link href={`/${locale}/careers`} className={linkCls}>{t("careers")}</Link></li>
                <li><Link href={`/${locale}/projects`} className={linkCls}>{t("projects")}</Link></li>
                <li><Link href={`/${locale}/blog`} className={linkCls}>{t("blog")}</Link></li>
                <li><a href="#faq" className={linkCls}>{t("faq")}</a></li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-tertiary">
                {t("colContact")}
              </p>
              <ul className="mt-5 space-y-4 text-[15px] text-secondary">
                <li>
                  <a href={CONTACT.phoneHref} className="inline-flex items-center gap-3 transition-colors hover:text-foreground">
                    <Phone className="size-4 shrink-0 text-accent" aria-hidden />
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={CONTACT.emailHref} className="inline-flex items-center gap-3 transition-colors hover:text-foreground">
                    <Mail className="size-4 shrink-0 text-accent" aria-hidden />
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
                  {CONTACT.address[locale]}
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="size-4 shrink-0 text-accent" aria-hidden />
                  {t("workHours")}
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Legal */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-sm text-tertiary">
            © {new Date().getFullYear()} INNOSOFT SYSTEMS. {t("rights")}
          </p>
          <ul className="flex gap-6 text-sm text-tertiary">
            <li><Link href={`/${locale}/privacy`} className="transition-colors hover:text-foreground">{t("privacy")}</Link></li>
            <li><Link href={`/${locale}/terms`} className="transition-colors hover:text-foreground">{t("terms")}</Link></li>
            <li><Link href={`/${locale}/cookies`} className="transition-colors hover:text-foreground">{t("cookies")}</Link></li>
          </ul>
        </div>
      </Container>

      {/* Ulkan watermark — pastda kesilgan, juda xira brend yozuvi */}
      <div
        aria-hidden
        style={{ pointerEvents: "none", userSelect: "none", overflow: "hidden" }}
      >
        <p
          style={{
            fontSize: "13.5vw",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            whiteSpace: "nowrap",
            textAlign: "center",
            color: "var(--wm-color, rgba(255, 255, 255, 0.04))",
            marginBottom: "-0.28em",
          }}
        >
          Innosoft Systems
        </p>
      </div>
    </footer>
  );
}
