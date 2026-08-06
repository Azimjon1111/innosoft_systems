import { ArrowRight, Sparkles } from "lucide-react";
import Aurora from "@/components/Aurora";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <Aurora colorStops={["#0983c6", "#38bdf8", "#076aa3"]} amplitude={1.1} blend={0.55} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-36 sm:px-6 sm:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex animate-in fade-in slide-in-from-bottom-2 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-light duration-700">
            <Sparkles className="size-4" aria-hidden />
            Raqobatda bir qadam oldinda bo&rsquo;ling
          </p>

          <h1 className="animate-in fade-in slide-in-from-bottom-4 text-balance text-4xl font-semibold tracking-tight text-foreground duration-700 sm:text-6xl lg:text-7xl">
            Biznesingiz uchun{" "}
            <span className="bg-gradient-to-r from-brand-light to-brand bg-clip-text text-transparent">
              samarali IT yechimlar
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl animate-in fade-in slide-in-from-bottom-4 text-pretty text-lg leading-relaxed text-muted-foreground duration-1000 sm:text-xl">
            Biznes jarayonlaringizni optimallashtirish va yangi cho&rsquo;qqilarga
            erishish uchun zamonaviy IT yechimlar taqdim etamiz.
          </p>

          <div className="mt-10 flex animate-in fade-in slide-in-from-bottom-4 flex-col items-center justify-center gap-4 duration-1000 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-semibold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto"
            >
              Biz bilan bog&rsquo;lanish
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href="#services"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-base font-semibold text-foreground transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto"
            >
              Xizmatlarimiz
            </a>
          </div>

          <dl className="mx-auto mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { value: "5+", label: "Yillik tajriba" },
              { value: "100+", label: "Loyihalar" },
              { value: "700K+", label: "Foydalanuvchilar" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="sr-only">{item.label}</dt>
                <dd className="text-2xl font-semibold text-foreground sm:text-3xl">
                  {item.value}
                </dd>
                <dd className="mt-1 text-sm text-muted-foreground">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
