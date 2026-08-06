import { Phone, Send } from "lucide-react";

export default function Cta() {
  return (
    <section id="contact" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/15 via-card to-card px-6 py-16 text-center sm:px-16 sm:py-20">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
            aria-hidden
          />
          <h2 className="relative text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Sizning loyihangizni muhokama qilaylikmi?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
            Bepul konsultatsiya va loyiha baholash uchun bog&rsquo;laning —
            g&rsquo;oyangizni birgalikda haqiqatga aylantiramiz.
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+998910555511"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-semibold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto"
            >
              <Phone className="size-4" aria-hidden />
              +998 91 055 55 11
            </a>
            <a
              href="https://t.me/innosoft_systems"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 text-base font-semibold text-foreground transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto"
            >
              <Send className="size-4" aria-hidden />
              Telegram orqali yozish
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
