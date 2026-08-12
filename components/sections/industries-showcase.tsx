"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IndustryItem {
  key: string;
  title: string;
  desc: string;
  image: string;
}

/**
 * EPAM uslubidagi interaktiv sohalar ko'rgazmasi: chapda yirik ro'yxat,
 * o'ngda hover/focus'ga qarab almashadigan surat paneli. Suratlar default
 * oq-qora, aktiv bo'lganda rangga to'ladi. Mobil'da panel yashirin,
 * ro'yxat tavsiflar bilan ixcham ko'rinadi.
 */
export function IndustriesShowcase({ items }: { items: IndustryItem[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      {/* Chap: interaktiv ro'yxat */}
      <ul>
        {items.map((item, i) => (
          <li key={item.key} className="border-t border-line last:border-b">
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-expanded={i === active}
              className="group flex w-full items-baseline gap-5 py-5 text-left md:py-6"
            >
              <span
                className={cn(
                  "font-mono text-[13px] tracking-[0.08em] transition-colors duration-300",
                  i === active ? "grad-text font-semibold" : "text-tertiary"
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span
                  className={cn(
                    "block text-2xl font-light tracking-[-0.02em] transition-all duration-300 md:text-[32px] md:leading-[1.15]",
                    i === active
                      ? "translate-x-2 text-foreground"
                      : "translate-x-0 text-secondary"
                  )}
                >
                  {item.title}
                </span>
                {/* Tavsif: mobil'da doim, desktopda aktiv qatorda ochiladi */}
                <span
                  className={cn(
                    "block overflow-hidden text-sm text-tertiary transition-all duration-300 lg:text-[15px]",
                    i === active
                      ? "mt-1.5 max-h-10 opacity-100 lg:translate-x-2"
                      : "mt-1.5 max-h-10 opacity-100 lg:mt-0 lg:max-h-0 lg:opacity-0"
                  )}
                >
                  {item.desc}
                </span>
              </span>
              <ArrowUpRight
                className={cn(
                  "size-5 shrink-0 self-center transition-all duration-300",
                  i === active
                    ? "translate-x-0 opacity-100 text-foreground"
                    : "-translate-x-2 opacity-0 text-tertiary"
                )}
                aria-hidden
              />
            </button>
          </li>
        ))}
      </ul>

      {/* O'ng: surat paneli (faqat lg+) */}
      <div className="relative hidden lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-surface">
            {items.map((item, i) => (
              <Image
                key={item.key}
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority={i === 0}
                className={cn(
                  "object-cover transition-all duration-700 ease-out",
                  i === active
                    ? "scale-100 opacity-100 grayscale-0"
                    : "scale-105 opacity-0 grayscale"
                )}
              />
            ))}
            {/* Pastki ma'lumot chizig'i */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-6 pb-5 pt-14">
              <span className="text-[15px] font-medium text-white">
                {items[active]?.desc}
              </span>
              <span className="font-mono text-[13px] tracking-[0.08em] text-white/70">
                {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
