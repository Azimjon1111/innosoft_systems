import {
  ShoppingCart,
  PanelsTopLeft,
  Smartphone,
  Building2,
  Rocket,
  TrendingUp,
  Bot,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Onlayn do'kon",
    desc: "Savdoni onlaynga olib chiquvchi qulay va yuqori sifatli internet-do'konlar yaratamiz.",
  },
  {
    icon: PanelsTopLeft,
    title: "Landing sahifalar",
    desc: "Mijozni harakatga undovchi zamonaviy va samarali landing sahifalar tayyorlaymiz.",
  },
  {
    icon: Smartphone,
    title: "Mobil ilovalar",
    desc: "Android va iOS uchun professional, tezkor mobil ilovalar ishlab chiqamiz.",
  },
  {
    icon: Building2,
    title: "Korporativ saytlar",
    desc: "Kompaniyangiz obro'sini ko'rsatuvchi professional korporativ veb-saytlar quramiz.",
  },
  {
    icon: Rocket,
    title: "Startap saytlar",
    desc: "Startapingiz uchun zamonaviy, innovatsion va tez ishga tushuvchi yechimlar.",
  },
  {
    icon: TrendingUp,
    title: "SEO xizmatlar",
    desc: "Google va Yandex qidiruv tizimlarida saytingizni birinchi o'rinlarga olib chiqamiz.",
  },
  {
    icon: Bot,
    title: "Telegram botlar",
    desc: "Mijozlar bilan muloqot va buyurtmalarni avtomatlashtiruvchi aqlli botlar yaratamiz.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
            Xizmatlarimiz
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Bizning xizmatlarimiz
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Biznesingizni rivojlantirish uchun zamonaviy IT yechimlar va
            professional xizmatlar
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-white/8 bg-card p-6 transition-colors hover:border-brand/40"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand-light transition-colors group-hover:bg-brand/20">
                <service.icon className="size-6" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </article>
          ))}

          <a
            href="#contact"
            className="group flex flex-col justify-between rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/15 to-brand/5 p-6 transition-colors hover:border-brand/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Loyihangiz bormi?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Bepul konsultatsiya va loyiha baholash uchun biz bilan
                bog&rsquo;laning.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-light">
              Bog&rsquo;lanish
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
