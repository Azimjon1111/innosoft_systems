/* eslint-disable @next/next/no-img-element */

/**
 * Kreativ texnologik loader: logo harflari orqali yorug'lik "skan" bo'lib
 * o'tadi (mask sifatida logoning o'zi ishlatiladi) + indeterminate chiziq.
 * Tailwind'ga bog'lanmagan — sof CSS, har doim ishlaydi.
 */
export default function Loading() {
  const logo = "/assets/img/logo-dark.png";

  return (
    <div
      role="status"
      aria-label="Yuklanmoqda"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        background: "#050816",
      }}
    >
      <style>{`
        @keyframes ldr-sweep {
          from { transform: translateX(-120%) skewX(-18deg); }
          to   { transform: translateX(220%) skewX(-18deg); }
        }
        @keyframes ldr-pulse {
          0%, 100% { opacity: 0.55; }
          50%      { opacity: 1; }
        }
        @keyframes ldr-bar {
          0%   { left: -35%; width: 35%; }
          60%  { left: 100%; width: 45%; }
          100% { left: 100%; width: 45%; }
        }
        @keyframes ldr-dot {
          0%, 80%, 100% { opacity: 0.25; }
          40%           { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ldr-anim { animation: none !important; }
        }
      `}</style>

      {/* Logo + harflar ichidan o'tuvchi yorug'lik skani */}
      <div style={{ position: "relative", width: 240, height: 66 }}>
        <img
          src={logo}
          alt=""
          width={240}
          height={66}
          className="ldr-anim"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            animation: "ldr-pulse 2.2s ease-in-out infinite",
          }}
        />
        {/* Shimmer faqat logo shakli ichida — mask logoning o'zi */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            WebkitMaskImage: `url(${logo})`,
            maskImage: `url(${logo})`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        >
          <div
            className="ldr-anim"
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "45%",
              background:
                "linear-gradient(105deg, transparent, rgba(255,255,255,0.9), transparent)",
              animation: "ldr-sweep 1.6s cubic-bezier(0.65, 0, 0.35, 1) infinite",
            }}
          />
        </div>
      </div>

      {/* Indeterminate progress chiziq */}
      <div
        aria-hidden
        style={{
          position: "relative",
          width: 180,
          height: 2,
          overflow: "hidden",
          background: "rgba(255,255,255,0.10)",
        }}
      >
        <div
          className="ldr-anim"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            background: "#b1b1b1",
            animation: "ldr-bar 1.4s cubic-bezier(0.65, 0, 0.35, 1) infinite",
          }}
        />
      </div>

      {/* Mono status qatori */}
      <p
        aria-hidden
        style={{
          margin: 0,
          fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
          fontSize: 12,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#64748b",
        }}
      >
        loading
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="ldr-anim"
            style={{
              display: "inline-block",
              width: 8,
              animation: `ldr-dot 1.2s ${i * 0.2}s infinite`,
            }}
          >
            .
          </span>
        ))}
      </p>
    </div>
  );
}
