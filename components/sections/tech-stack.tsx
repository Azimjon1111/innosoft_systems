import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

const GROUPS = [
  { key: "frontend", items: ["React", "Next.js", "TypeScript"] },
  { key: "backend", items: ["Node.js", "NestJS", "GraphQL"] },
  { key: "data", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { key: "cloud", items: ["Docker", "Kubernetes", "AWS", "Azure", "Google Cloud"] },
  { key: "ai", items: ["OpenAI", "LangChain"] },
  { key: "payments", items: ["Stripe", "Payme", "Click"] },
] as const;

/** Orbitalar: ichki (frontend+AI), o'rta (backend+data), tashqi (cloud+to'lovlar) */
const ORBITS = [
  {
    r: "clamp(88px, 11vw, 148px)",
    dur: "45s",
    items: ["React", "Next.js", "TypeScript", "OpenAI", "LangChain"],
  },
  {
    r: "clamp(150px, 19vw, 252px)",
    dur: "70s",
    items: ["Node.js", "NestJS", "GraphQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    r: "clamp(212px, 27vw, 356px)",
    dur: "100s",
    items: ["Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "Stripe", "Payme", "Click"],
  },
] as const;


/** Texnologiya -> ikonka fayli (public/assets/img/tech/) */
const ICONS: Record<string, string> = {
  React: "react",
  "Next.js": "nextjs",
  TypeScript: "typescript",
  OpenAI: "openai",
  LangChain: "langchain",
  "Node.js": "nodejs",
  NestJS: "nestjs",
  GraphQL: "graphql",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Redis: "redis",
  Docker: "docker",
  Kubernetes: "kubernetes",
  AWS: "aws",
  Azure: "azure",
  "Google Cloud": "googlecloud",
  Stripe: "stripe",
  Payme: "payme",
  Click: "click",
};

function TechIcon({ name, className }: { name: string; className?: string }) {
  const slug = ICONS[name];
  if (!slug) return null;
  const size = className ?? "size-[18px]";
  const colorExt = slug === "payme" ? "png" : "svg";
  return (
    <>
      {/* Dark tema: oq monoxrom */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/assets/img/tech/${slug}.svg`}
        alt=""
        loading="lazy"
        className={`tech-icon logo-for-dark shrink-0 object-contain ${size}`}
        aria-hidden
      />
      {/* Light tema: rangli original */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/assets/img/tech/color/${slug}.${colorExt}`}
        alt=""
        loading="lazy"
        className={`tech-icon logo-for-light shrink-0 object-contain ${size}`}
        aria-hidden
      />
    </>
  );
}

export async function TechStack() {
  const t = await getTranslations("tech");

  return (
    <Section id="tech" labelledBy="tech-title" density="mid" surface="elevated">
      <Container>
        <SectionHeader
          id="tech-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          subhead={t("subhead")}
        />

        {/* Desktop/tablet: orbital sistema */}
        <Reveal className="hidden md:block">
          <div className="orbit-scene relative mx-auto aspect-square w-full max-w-[780px]">
            {/* Markaziy yadro ortidagi ko'k quyosh: pulsli korona + ichki yorqin nur */}
            <div
              className="orbit-sun absolute left-1/2 top-1/2 size-72 rounded-full blur-2xl"
              style={{ animation: "orbit-halo 5s ease-in-out infinite" }}
              aria-hidden
            />
            <div
              className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4fc3ff]/45 blur-xl"
              aria-hidden
            />
            <div
              className="absolute left-1/2 top-1/2 z-10 flex size-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 shadow-[0_0_70px_rgba(9,131,198,0.65)]"
              style={{
                background: "linear-gradient(135deg, var(--grad-a), var(--grad-b))",
              }}
            >
              <span className="flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/img/logo-white.svg"
                  alt="Innosoft Systems"
                  className="w-[86px]"
                />
                <span className="mt-1.5 text-[8.5px] font-medium uppercase tracking-[0.34em] text-white/85">
                  systems
                </span>
              </span>
            </div>

            {ORBITS.map((orbit, oi) => (
              <div key={oi} style={{ "--r": orbit.r, "--dur": orbit.dur } as React.CSSProperties}>
                <span className="orbit-path" aria-hidden />
                <div className="orbit-ring">
                  {orbit.items.map((item, i) => (
                    <span
                      key={item}
                      className="orbit-item"
                      style={{ "--a": `${(360 / orbit.items.length) * i}deg` } as React.CSSProperties}
                    >
                      <span className="orbit-chip flex cursor-default items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface py-1.5 pl-2.5 pr-3.5 text-[13px] font-medium text-secondary shadow-md transition-colors duration-200 hover:border-line-brand hover:text-foreground">
                        <TechIcon name={item} />
                        {item}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobil: ixcham guruhlangan chiplar */}
        <div className="space-y-8 md:hidden">
          {GROUPS.map((group, i) => (
            <Reveal key={group.key} index={i % 2}>
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-tertiary">
                {t(`groups.${group.key}`)}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pl-2.5 pr-3.5 text-sm font-medium text-secondary"
                  >
                    <TechIcon name={item} className="size-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
