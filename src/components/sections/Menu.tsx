"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

// ◇ = hot only  ♡ = customer favorite
const categories = [
  {
    title: "Black Coffee",
    color: "text-foreground",
    items: [
      { name: "Drip Coffee", hot: true, fav: true, p12: "3.00", p16: "4.00" },
      { name: "Americano", hot: false, fav: false, p12: "5.00", p16: "6.00" },
      { name: "Espresso", hot: true, fav: true, p12: "4.00", p16: null, note: "8oz · Double" },
      { name: "Flat White", hot: true, fav: false, p12: "5.25", p16: null },
      { name: "Cafe de Olla", hot: true, fav: false, p12: "5.00", p16: "6.00", note: "Weekends Only" },
      { name: "London Fog", hot: true, fav: false, p12: "5.25", p16: null },
    ],
  },
  {
    title: "Classic Drinks",
    color: "text-foreground",
    items: [
      { name: "Latte", hot: false, fav: true, p12: "6.00", p16: "7.00" },
      { name: "Vanilla Latte", hot: false, fav: true, p12: "6.25", p16: "7.25" },
      { name: "Hazelnut Latte", hot: false, fav: false, p12: "6.25", p16: "7.25" },
      { name: "Cappuccino", hot: true, fav: false, p12: "6.00", p16: "7.00" },
      { name: "Mocha", hot: false, fav: false, p12: "6.25", p16: "7.25" },
      { name: "White Mocha", hot: false, fav: false, p12: "6.25", p16: "7.25" },
      { name: "Cortado", hot: true, fav: false, p12: "4.25", p16: null, note: "8oz" },
    ],
  },
  {
    title: "Special Drinks",
    color: "text-primary",
    items: [
      { name: "Cardamom Latte", hot: false, fav: true, p12: "6.25", p16: "7.25" },
      { name: "Vietnamese", hot: false, fav: true, p12: "6.25", p16: "7.25" },
      { name: "Mexican Mocha", hot: false, fav: false, p12: "6.25", p16: "7.25" },
      { name: "Choc-Caramel & Sea-salt", hot: false, fav: true, p12: "6.25", p16: "7.25" },
      { name: "Matcha Latte", hot: false, fav: false, p12: "6.50", p16: "7.50" },
      { name: "Lavender Matcha", hot: false, fav: false, p12: "6.50", p16: "7.50" },
      { name: "Chai Latte", hot: false, fav: false, p12: "6.25", p16: "7.25" },
    ],
  },
  {
    title: "Cold Brewed Process",
    color: "text-primary",
    items: [
      { name: "Horchata Cold Brew", hot: false, fav: false, p12: "6.25", p16: "7.25" },
      { name: "Cold Brew", hot: false, fav: true, p12: "5.50", p16: "6.50" },
      { name: "Vanilla Cold Brew", hot: false, fav: true, p12: "5.75", p16: "6.75" },
      { name: "Mint Cold Brew", hot: false, fav: false, p12: "5.75", p16: "6.75" },
      { name: "Slayer", hot: false, fav: false, p12: null, p16: "6.75", note: "cold brew + add shot" },
    ],
  },
];

function MenuCategory({
  cat,
  delay,
  inView,
}: {
  cat: (typeof categories)[0];
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: EASE_OUT_QUINT }}
      className="border-2 border-dashed border-border rounded-2xl overflow-hidden"
    >
      {/* Category header */}
      <div className="px-6 py-4 border-b-2 border-dashed border-border bg-surface">
        <h3 className={`font-display font-black text-base uppercase tracking-widest ${cat.color}`}>
          {cat.title}
        </h3>
      </div>

      {/* Price header row */}
      <div className="px-6 pt-4 pb-1 flex justify-between items-center">
        <span className="flex-1" />
        <div className="flex gap-6 text-xs font-bold text-muted uppercase tracking-wider">
          <span className="w-10 text-right">12oz</span>
          <span className="w-10 text-right">16oz</span>
        </div>
      </div>

      {/* Items */}
      <div className="px-6 pb-5 space-y-0 divide-y divide-border/50">
        {cat.items.map((item) => (
          <div key={item.name} className="flex items-baseline justify-between gap-3 py-2.5">
            <div className="flex items-baseline gap-1.5 flex-1 min-w-0">
              <span className="font-sans font-medium text-foreground text-[0.95rem] leading-tight">
                {item.name}
              </span>
              {item.hot && (
                <span className="text-[oklch(0.55_0.10_210)] text-sm flex-shrink-0" title="Made hot only">◇</span>
              )}
              {item.fav && (
                <span className="text-accent text-sm flex-shrink-0" title="Customer favorite">♡</span>
              )}
              {item.note && (
                <span className="text-muted text-xs italic flex-shrink-0">{item.note}</span>
              )}
            </div>
            <div className="flex gap-6 flex-shrink-0">
              <span className="w-10 text-right font-semibold text-foreground text-sm">
                {item.p12 ?? <span className="text-muted">—</span>}
              </span>
              <span className="w-10 text-right font-semibold text-foreground text-sm">
                {item.p16 ?? <span className="text-muted">—</span>}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="px-6 pb-4 flex flex-wrap gap-x-5 gap-y-1 border-t border-dashed border-border pt-3">
        {cat.items.some((i) => i.hot) && (
          <span className="text-xs text-muted flex items-center gap-1">
            <span className="text-[oklch(0.55_0.10_210)]">◇</span> Made hot only
          </span>
        )}
        {cat.items.some((i) => i.fav) && (
          <span className="text-xs text-muted flex items-center gap-1">
            <span className="text-accent">♡</span> Customer favorite
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="menu"
      ref={ref}
      className="py-24 md:py-32 px-5 md:px-10"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Drink Menu</p>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.2rem)] leading-[1.05] text-foreground">
            Welcome to Parabola Coffee
          </h2>
          <p className="text-muted text-sm mt-3 max-w-md leading-relaxed">
            Espresso: 12oz = 2 shots · 16oz = 3 shots · Non-dairy milk add .75–1.00
          </p>
        </motion.div>

        {/* 2×2 category grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <MenuCategory key={cat.title} cat={cat} delay={0.05 + i * 0.08} inView={inView} />
          ))}
        </div>

        {/* Milk choices + DoorDash */}
        <motion.div
          className="mt-8 grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Milk choices */}
          <div className="border-2 border-dashed border-border rounded-2xl px-6 py-5">
            <h3 className="font-display font-black text-base uppercase tracking-widest text-foreground mb-4">
              Milk Choices
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
              <div>
                <p className="font-bold text-muted text-xs uppercase tracking-wider mb-2">Dairy</p>
                <p className="text-foreground">Whole Milk</p>
                <p className="text-foreground">2% Milk</p>
              </div>
              <div>
                <p className="font-bold text-muted text-xs uppercase tracking-wider mb-2">Non-Dairy <span className="font-normal normal-case tracking-normal text-muted">.75–1.00</span></p>
                <p className="text-foreground">Oat</p>
                <p className="text-foreground">Almond</p>
                <p className="text-foreground">Soy</p>
                <p className="text-foreground">Coconut</p>
              </div>
            </div>
          </div>

          {/* DoorDash CTA */}
          <a
            href="https://www.doordash.com/store/parabola-coffee-roasting-co-san-diego-24422595/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-dashed border-accent/40 rounded-2xl px-6 py-5 flex flex-col justify-between group hover:border-accent transition-colors duration-200 active:scale-[0.99]"
            style={{ background: "oklch(0.97 0.015 38)" }}
          >
            <div>
              <p className="font-display font-black text-base uppercase tracking-widest text-accent mb-2">
                Order for Delivery
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                Get Parabola delivered to your door through DoorDash. Same great coffee, straight to you.
              </p>
            </div>
            <div className="mt-5 inline-flex items-center gap-2 bg-accent text-white font-bold text-sm px-5 py-2.5 rounded-full w-fit group-hover:opacity-90 transition-opacity">
              Order on DoorDash
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2v7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
