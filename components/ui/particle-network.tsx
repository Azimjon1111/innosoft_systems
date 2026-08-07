"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const LINK_DIST = 130;
const MOUSE_DIST = 170;

/**
 * Interaktiv IT partikl-tarmoq foni: sekin suzuvchi tugunlar, yaqinlari
 * chiziq bilan ulanadi, sichqoncha yaqinlashganda tugunlar unga bog'lanadi
 * va ohista tortiladi. Tema rangini CSS token'dan oladi, reduced-motion'da
 * statik kadr chizadi, ekrandan tashqarida to'xtaydi.
 */
export function ParticleNetwork({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let running = false;
    let nodes: Node[] = [];
    let w = 0;
    let h = 0;
    let dpr = 1;
    const mouse = { x: -9999, y: -9999 };
    let rgb = "177, 177, 177";

    const readColor = () => {
      // Token'dan rang o'qish — light temada avtomatik to'q kulrang bo'ladi
      const c = getComputedStyle(canvas).color;
      const m = c.match(/(\d+),\s*(\d+),\s*(\d+)/);
      if (m) rgb = `${m[1]}, ${m[2]}, ${m[3]}`;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(Math.round((w * h) / 16000), 90);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
      readColor();
      if (reduced) draw(); // statik bitta kadr
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;

          // Sichqonchaga ohista tortilish
          const dxm = mouse.x - n.x;
          const dym = mouse.y - n.y;
          const dm = Math.hypot(dxm, dym);
          if (dm < MOUSE_DIST && dm > 1) {
            n.x += (dxm / dm) * 0.25;
            n.y += (dym / dm) * 0.25;
          }
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, 0.5)`;
        ctx.fill();
      }

      // Tugunlar orasidagi chiziqlar
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${rgb}, ${(0.22 * (1 - d / LINK_DIST)).toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        // Sichqonchaga ulanish
        const dxm = nodes[i].x - mouse.x;
        const dym = nodes[i].y - mouse.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < MOUSE_DIST) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${rgb}, ${(0.3 * (1 - dm / MOUSE_DIST)).toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!running && !reduced) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Ekranda ko'ringandagina animatsiya
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: "80px" }
    );
    io.observe(canvas);

    // Tema almashganda rangni qayta o'qish
    const mo = new MutationObserver(readColor);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    const parent = canvas.parentElement ?? canvas;
    parent.addEventListener("pointermove", onMove as EventListener);
    parent.addEventListener("pointerleave", onLeave);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      parent.removeEventListener("pointermove", onMove as EventListener);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
      style={{ color: "var(--color-secondary)", width: "100%", height: "100%" }}
    />
  );
}
