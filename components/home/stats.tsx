const stats = [
  { value: "5+", label: "Yillik tajriba" },
  { value: "100+", label: "Muvaffaqiyatli loyihalar" },
  { value: "700K+", label: "Foydalanuvchilar" },
  { value: "24/7", label: "Qo'llab-quvvatlash" },
];

export default function Stats() {
  return (
    <section id="stats" className="scroll-mt-16 border-y border-white/5 bg-card/40 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
            Bizning yutuqlarimiz
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Raqamlarda bizning muvaffaqiyatimiz
          </h2>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dd className="text-4xl font-semibold tracking-tight text-brand-light sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="mt-2 text-sm text-muted-foreground sm:text-base">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
