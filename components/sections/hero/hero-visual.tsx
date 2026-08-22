import { Bot, TrendingUp } from "lucide-react";

/**
 * Enterprise dashboard — 100% DOM + inline SVG, rasm yo'q.
 * Dekorativ (aria-hidden): LCP elementi H1 bo'lib qoladi.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto hidden w-full max-w-[560px] sm:block" aria-hidden>
      {/* Orqa glow */}
      <div
        className="absolute -inset-8 -z-10 rounded-none"
        style={{
          background: "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(9,131,198,0.20), transparent 70%)",
        }}
      />

      {/* Asosiy panel — 3D perspektiva */}
      <div
        className="rounded-xl border border-line bg-bg-elevated/90 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl"
        style={{ transform: "perspective(1600px) rotateY(-9deg) rotateX(5deg)" }}
      >
        {/* Sarlavha qatori */}
        <div className="flex items-center justify-between border-b border-line pb-4">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-tertiary">
            Enterprise Analytics
          </span>
        </div>

        {/* KPI qatori */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "Revenue", value: "$284K", delta: "+18%" },
            { label: "Active Users", value: "42,610", delta: "+7%" },
            { label: "Conversion", value: "4.9%", delta: "+1.2%" },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-md border border-line bg-surface p-3.5">
              <p className="text-[11px] font-medium text-tertiary">{kpi.label}</p>
              <p className="mt-1 font-mono text-lg font-semibold tabular-nums text-foreground">
                {kpi.value}
              </p>
              <p className="mt-0.5 font-mono text-[11px] font-medium text-success">{kpi.delta}</p>
            </div>
          ))}
        </div>

        {/* Area chart */}
        <div className="mt-4 rounded-md border border-line bg-surface p-4">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-medium text-secondary">Growth Overview</p>
            <p className="font-mono text-[11px] text-tertiary">Last 12 months</p>
          </div>
          <svg viewBox="0 0 480 140" className="mt-3 w-full" fill="none">
            <defs>
              <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0983c6" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#0983c6" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[28, 56, 84, 112].map((y) => (
              <line key={y} x1="0" y1={y} x2="480" y2={y} stroke="rgba(255,255,255,0.05)" />
            ))}
            <path
              className="chart-area"
              d="M0 118 C40 112, 60 96, 96 98 C132 100, 150 78, 192 74 C234 70, 250 84, 288 66 C326 48, 344 56, 384 38 C412 26, 448 22, 480 12 L480 140 L0 140 Z"
              fill="url(#heroArea)"
            />
            <path
              className="chart-line"
              d="M0 118 C40 112, 60 96, 96 98 C132 100, 150 78, 192 74 C234 70, 250 84, 288 66 C326 48, 344 56, 384 38 C412 26, 448 22, 480 12"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="480" cy="12" r="4" fill="#38bdf8" />
          </svg>
        </div>

        {/* Pipeline ro'yxati */}
        <div className="mt-4 rounded-md border border-line bg-surface p-4">
          <p className="text-[12px] font-medium text-secondary">Deal Pipeline</p>
          <ul className="mt-3 space-y-2.5">
            {[
              { name: "ERP Implementation", stage: "Negotiation", width: "82%", color: "#38bdf8" },
              { name: "Mobile Banking App", stage: "Proposal", width: "64%", color: "#0983c6" },
              { name: "AI Support Agent", stage: "Discovery", width: "38%", color: "#22c55e" },
            ].map((deal) => (
              <li key={deal.name} className="flex items-center gap-3">
                <span className="w-40 truncate text-[12px] text-foreground/85">{deal.name}</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-none bg-white/[0.06]">
                  <span
                    className="block h-full rounded-none"
                    style={{ width: deal.width, background: deal.color, opacity: 0.85 }}
                  />
                </span>
                <span className="w-20 text-right font-mono text-[10px] uppercase tracking-wide text-tertiary">
                  {deal.stage}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Suzuvchi karta — AI (chap yuqori) */}
      <div
        className="absolute -left-6 top-14 hidden w-[210px] rounded-lg border border-line bg-surface/95 p-4 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur-xl lg:block"
        style={{ transform: "perspective(1600px) rotateY(-9deg) rotateX(5deg) translateZ(60px)" }}
      >
        <div className="flex items-center gap-2.5">
          <span className="inline-flex size-8 items-center justify-center rounded-sm bg-primary-dim text-accent">
            <Bot className="size-4" />
          </span>
          <p className="text-[12px] font-semibold text-foreground">AI Agent</p>
        </div>
        <p className="mt-2.5 font-mono text-xl font-semibold tabular-nums">1,284</p>
        <p className="text-[11px] text-tertiary">tickets auto-resolved</p>
      </div>

      {/* Suzuvchi karta — CRM (o'ng past) */}
      <div
        className="absolute -bottom-6 -right-2 hidden w-[230px] rounded-lg border border-line bg-surface/95 p-4 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur-xl lg:block"
        style={{ transform: "perspective(1600px) rotateY(-9deg) rotateX(5deg) translateZ(80px)" }}
      >
        <div className="flex items-center gap-2.5">
          <span className="inline-flex size-8 items-center justify-center rounded-sm bg-success-dim text-success">
            <TrendingUp className="size-4" />
          </span>
          <div>
            <p className="text-[12px] font-semibold text-foreground">CRM</p>
            <p className="text-[11px] text-tertiary">Deal moved to Won</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="relative size-1.5 rounded-full bg-success" />
          <p className="font-mono text-[11px] text-secondary">$48,000 · Enterprise plan</p>
        </div>
      </div>
    </div>
  );
}
