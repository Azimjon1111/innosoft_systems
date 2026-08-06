import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-card/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <Link href="/" aria-label="Innosoft Systems — bosh sahifa">
              <Image
                src="/assets/img/logo-white.svg"
                alt="Innosoft Systems"
                width={165}
                height={27}
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Biznesingiz uchun zamonaviy IT yechimlar: veb-saytlar, mobil
              ilovalar, Telegram botlar va SEO xizmatlari.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://t.me/innosoft_systems"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand-light"
              >
                <Send className="size-4" aria-hidden />
              </a>
              <a
                href="https://instagram.com/innosoft_systems"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand-light"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="https://linkedin.com/company/innosoft-systems"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand-light"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Aloqa
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:+998910555511"
                  className="inline-flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 shrink-0 text-brand-light" aria-hidden />
                  +998 91 055 55 11
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@innosoft-systems.uz"
                  className="inline-flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 shrink-0 text-brand-light" aria-hidden />
                  info@innosoft-systems.uz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-light" aria-hidden />
                U-ENTER innovatsion markazi, Shahrisabz ko&rsquo;chasi, Toshkent
                700093
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-4 shrink-0 text-brand-light" aria-hidden />
                Du–Sha: 09:00–18:00
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Xizmatlar
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {[
                "Onlayn do'kon",
                "Landing sahifalar",
                "Mobil ilovalar",
                "Korporativ saytlar",
                "SEO xizmatlar",
                "Telegram botlar",
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="transition-colors hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/5 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} INNOSOFT SYSTEMS. Barcha huquqlar
          himoyalangan.
        </div>
      </div>
    </footer>
  );
}
