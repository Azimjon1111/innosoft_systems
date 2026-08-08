/**
 * Hero ostidagi sekin harakatlanuvchi texnologiya/xizmat lentasi.
 * Sof CSS marquee (.marquee-track), reduced-motion'da to'xtaydi.
 */
const ITEMS = [
  "Next.js",
  "React",
  "Node.js",
  "AI Chatbots",
  "CRM",
  "ERP",
  "Telegram Bots",
  "Mobile Apps",
  "E-commerce",
  "SEO",
  "PostgreSQL",
  "Cloud",
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {ITEMS.map((item) => (
        <li
          key={item}
          className="flex items-center whitespace-nowrap px-7 font-mono text-[13px] uppercase tracking-[0.16em] text-tertiary"
        >
          {item}
          <span className="ml-14 size-1 rounded-full bg-line-strong" aria-hidden />
        </li>
      ))}
    </ul>
  );
}

export function TechMarquee() {
  return (
    <div className="marquee-mask overflow-hidden border-b border-line bg-bg py-4" aria-hidden>
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
