"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

// ♡ = customer favorite  ◇ = hot only  ✦ = new item

const drinkCategories = [
  {
    title: "Limited Time",
    bg: "oklch(0.63 0.17 38)",       // coral — hot, exciting, seasonal
    textColor: "text-white",
    items: [
      { name: "White-Choc Matcha", isNew: true, fav: false, hot: false, p12: "6.75", p16: "7.75" },
      { name: "Honey Almond Latte", isNew: true, fav: false, hot: false, p12: "6.50", p16: "7.50" },
      { name: "Lavender Latte", isNew: false, fav: true, hot: false, p12: "6.75", p16: "7.75" },
      { name: "Cajeta Mexican Mocha", isNew: false, fav: true, hot: false, p12: "6.75", p16: "7.75" },
      { name: "Pecan Latte", isNew: false, fav: false, hot: false, p12: "6.50", p16: "7.50" },
    ],
    callout: "Add Cold Foam to Any Drink!",
  },
  {
    title: "Black Coffee",
    bg: "oklch(0.28 0.05 240)",       // near-black — strong, like black coffee
    textColor: "text-white",
    items: [
      { name: "Drip Coffee", isNew: false, fav: true, hot: true, p12: "3.00", p16: "4.00" },
      { name: "Americano", isNew: false, fav: false, hot: false, p12: "5.00", p16: "6.00" },
      { name: "Espresso", isNew: false, fav: true, hot: true, p12: "4.00", p16: null, note: "8oz · Double" },
      { name: "Flat White", isNew: false, fav: false, hot: true, p12: "5.25", p16: null },
      { name: "Cafe de Olla", isNew: false, fav: false, hot: true, p12: "5.00", p16: "6.00", note: "Weekends Only" },
      { name: "London Fog", isNew: false, fav: false, hot: true, p12: "5.25", p16: null },
    ],
  },
  {
    title: "Classic Drinks",
    bg: "oklch(0.52 0.13 210)",       // primary teal — the brand's own color
    textColor: "text-white",
    items: [
      { name: "Latte", isNew: false, fav: true, hot: false, p12: "6.00", p16: "7.00" },
      { name: "Vanilla Latte", isNew: false, fav: true, hot: false, p12: "6.25", p16: "7.25" },
      { name: "Hazelnut Latte", isNew: false, fav: false, hot: false, p12: "6.25", p16: "7.25" },
      { name: "Cappuccino", isNew: false, fav: false, hot: true, p12: "6.00", p16: "7.00" },
      { name: "Mocha", isNew: false, fav: false, hot: false, p12: "6.25", p16: "7.25" },
      { name: "White Mocha", isNew: false, fav: false, hot: false, p12: "6.25", p16: "7.25" },
      { name: "Cortado", isNew: false, fav: false, hot: true, p12: "4.25", p16: null, note: "8oz" },
    ],
  },
  {
    title: "Special Drinks",
    bg: "oklch(0.40 0.15 210)",       // deeper teal — distinct from Classic, still brand
    textColor: "text-white",
    items: [
      { name: "Cardamom Latte", isNew: false, fav: true, hot: false, p12: "6.25", p16: "7.25" },
      { name: "Vietnamese", isNew: false, fav: true, hot: false, p12: "6.25", p16: "7.25" },
      { name: "Mexican Mocha", isNew: false, fav: false, hot: false, p12: "6.25", p16: "7.25" },
      { name: "Choc-Caramel & Sea-salt", isNew: false, fav: true, hot: false, p12: "6.25", p16: "7.25" },
      { name: "Matcha Latte", isNew: false, fav: false, hot: false, p12: "6.50", p16: "7.50" },
      { name: "Lavender Matcha", isNew: false, fav: false, hot: false, p12: "6.50", p16: "7.50" },
      { name: "Chai Latte", isNew: false, fav: false, hot: false, p12: "6.25", p16: "7.25" },
    ],
  },
  {
    title: "Cold Brewed Process",
    bg: "oklch(0.35 0.10 220)",       // dark cold blue — cold brew energy
    textColor: "text-white",
    items: [
      { name: "Horchata Cold Brew", isNew: false, fav: false, hot: false, p12: "6.25", p16: "7.25" },
      { name: "Cold Brew", isNew: false, fav: true, hot: false, p12: "5.50", p16: "6.50" },
      { name: "Vanilla Cold Brew", isNew: false, fav: true, hot: false, p12: "5.75", p16: "6.75" },
      { name: "Mint Cold Brew", isNew: false, fav: false, hot: false, p12: "5.75", p16: "6.75" },
      { name: "Slayer", isNew: false, fav: false, hot: false, p12: null, p16: "6.75", note: "cold brew + add shot" },
    ],
  },
  {
    title: "Loose Leaf Teas",
    bg: "oklch(0.45 0.11 160)",       // green-teal — tea, botanical
    textColor: "text-white",
    priceNote: "12oz · 4.50",
    items: [
      { name: "Mint Lovers", isNew: false, fav: false, hot: false, p12: "4.50", p16: null },
      { name: "Earl Grey", isNew: false, fav: true, hot: false, p12: "4.50", p16: null },
      { name: "Jasmine", isNew: false, fav: false, hot: false, p12: "4.50", p16: null },
      { name: "Darjeeling", isNew: false, fav: false, hot: false, p12: "4.50", p16: null },
      { name: "Immuni-Tea", isNew: false, fav: true, hot: false, p12: "4.50", p16: null },
      { name: "Oolong", isNew: false, fav: false, hot: false, p12: "4.50", p16: null },
      { name: "Lemon Lavender", isNew: false, fav: true, hot: false, p12: "4.50", p16: null },
    ],
    flatPrice: "4.50",
  },
  {
    title: "Iced Teas",
    bg: "oklch(0.55 0.09 200)",       // lighter sky-teal — iced, refreshing
    textColor: "text-white",
    priceNote: "16oz · 5.50",
    items: [
      { name: "Black Tea", isNew: false, fav: false, hot: false, p12: null, p16: "5.50" },
      { name: "Black Peach", isNew: false, fav: false, hot: false, p12: null, p16: "5.50" },
      { name: "Tropical Green", isNew: false, fav: false, hot: false, p12: null, p16: "5.50" },
      { name: "Raspberry Herbal", isNew: false, fav: false, hot: false, p12: null, p16: "5.50" },
    ],
    flatPrice: "5.50",
  },
  {
    title: "Non-Coffee Drinks",
    bg: "oklch(0.70 0.08 85)",        // gold — warm, welcoming, non-coffee crowd
    textColor: "text-foreground",
    items: [
      { name: "Topo Chico", isNew: false, fav: false, hot: false, p12: "4.00", p16: null },
      { name: "Hot Chocolate", isNew: false, fav: false, hot: false, p12: "5.00", p16: null },
      { name: "Mexican Hot Chocolate", isNew: false, fav: true, hot: false, p12: "5.00", p16: null },
    ],
  },
];

const foodItems = [
  { name: "Breakfast Bagel Egg", price: "11.00", desc: "2 eggs & American cheese on a New York bagel" },
  { name: "Breakfast Bagel Bacon", price: "13.00", desc: "2 eggs, bacon, American cheese on a New York bagel" },
  { name: "Breakfast Bagel Sausage", price: "14.00", desc: "2 eggs, sausage, American cheese on a New York bagel" },
  { name: "New York Bagel", price: "5.50", desc: "Side of cream cheese or butter" },
];

function Heart() {
  return <span className="text-accent font-bold" style={{ fontSize: "1.1em" }}>♡</span>;
}
function Diamond() {
  return <span style={{ color: "oklch(0.75 0.08 210)", fontSize: "0.95em" }}>◇</span>;
}
function NewBadge() {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-foreground ml-1 flex-shrink-0"
      style={{ background: "oklch(0.70 0.08 85)" }}>
      NEW
    </span>
  );
}

function CategoryCard({ cat, delay, inView }: {
  cat: typeof drinkCategories[0];
  delay: number;
  inView: boolean;
}) {
  const isFlatPrice = !!cat.flatPrice;

  return (
    <motion.div
      className="rounded-2xl overflow-hidden border-2 border-dashed border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: EASE_OUT_QUINT }}
    >
      {/* Colored header — the focal point of each card */}
      <div className="px-5 py-4" style={{ background: cat.bg }}>
        <h3 className={`font-display font-black text-xl uppercase tracking-wide ${cat.textColor}`}>
          {cat.title}
        </h3>
      </div>

      <div className="bg-white px-5 pt-3 pb-4">
        {/* Price header */}
        <div className="flex justify-between mb-2 border-b border-dashed border-border pb-2">
          <span className="flex-1" />
          {isFlatPrice ? (
            <span className="text-xs font-bold text-muted uppercase tracking-wider w-20 text-right">Price</span>
          ) : (
            <div className="flex gap-5 text-xs font-bold text-muted uppercase tracking-wider">
              <span className="w-9 text-right">12oz</span>
              <span className="w-9 text-right">16oz</span>
            </div>
          )}
        </div>

        {/* Items */}
        <div className="space-y-0 divide-y divide-border/40">
          {cat.items.map((item) => (
            <div key={item.name} className="flex items-center gap-2 py-2">
              <div className="flex items-center gap-1.5 flex-1 min-w-0 flex-wrap">
                <span className="font-sans font-semibold text-foreground text-sm leading-tight">{item.name}</span>
                {item.hot && <Diamond />}
                {item.fav && <Heart />}
                {item.isNew && <NewBadge />}
                {item.note && <span className="text-muted text-xs italic">{item.note}</span>}
              </div>
              {isFlatPrice ? (
                <span className="font-bold text-foreground text-sm w-20 text-right flex-shrink-0">
                  {item.p12 ?? item.p16}
                </span>
              ) : (
                <div className="flex gap-5 flex-shrink-0">
                  <span className="w-9 text-right font-bold text-foreground text-sm">
                    {item.p12 ?? <span className="text-muted text-xs">—</span>}
                  </span>
                  <span className="w-9 text-right font-bold text-foreground text-sm">
                    {item.p16 ?? <span className="text-muted text-xs">—</span>}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Callout — "Add Cold Foam" */}
        {cat.callout && (
          <div
            className="mt-4 rounded-xl px-4 py-3 flex items-center gap-2"
            style={{ background: "oklch(0.97 0.02 38)" }}
          >
            <span className="text-accent text-lg">✦</span>
            <span className="font-display font-bold italic text-accent text-sm">{cat.callout}</span>
          </div>
        )}

        {/* Legend */}
        {(cat.items.some(i => i.fav) || cat.items.some(i => i.hot)) && (
          <div className="mt-3 pt-3 border-t border-dashed border-border flex flex-wrap gap-x-4 gap-y-1">
            {cat.items.some(i => i.fav) && (
              <span className="text-xs text-muted flex items-center gap-1"><Heart /> Customer favorite</span>
            )}
            {cat.items.some(i => i.hot) && (
              <span className="text-xs text-muted flex items-center gap-1"><Diamond /> Made hot only</span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="menu" ref={ref} className="py-24 md:py-32 px-5 md:px-10 bg-background">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">Full Menu</p>
          <h2 className="font-display font-black text-[clamp(2.2rem,6vw,4rem)] leading-[1.0] text-foreground">
            Welcome to Parabola Coffee
          </h2>
          <p className="text-muted text-sm mt-3">
            Espresso: 12oz = 2 shots · 16oz = 3 shots · Non-dairy milk add .75–1.00
          </p>
        </motion.div>

        {/* Drink categories — masonry-style 3-column on desktop */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {drinkCategories.map((cat, i) => (
            <div key={cat.title} className="break-inside-avoid">
              <CategoryCard cat={cat} delay={0.04 + i * 0.05} inView={inView} />
            </div>
          ))}
        </div>

        {/* Food & Pastries — full-width featured section */}
        <motion.div
          className="mt-8 rounded-2xl overflow-hidden border-2 border-dashed border-border"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45, ease: EASE_OUT_QUINT }}
        >
          {/* Gold food header */}
          <div className="px-6 py-4" style={{ background: "oklch(0.55 0.12 50)" }}>
            <h3 className="font-display font-black text-xl uppercase tracking-wide text-white">
              Food &amp; Pastries
            </h3>
          </div>
          <div className="bg-white px-6 py-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {foodItems.map((item) => (
              <div key={item.name} className="border border-border rounded-xl p-4">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h4 className="font-display font-bold text-foreground text-sm leading-tight">{item.name}</h4>
                  <span className="font-black text-foreground text-sm flex-shrink-0">${item.price}</span>
                </div>
                <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom row: milk choices + doordash + social */}
        <motion.div
          className="mt-5 grid md:grid-cols-3 gap-5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          {/* Milk choices */}
          <div className="rounded-2xl border-2 border-dashed border-border bg-white px-5 py-4">
            <h3 className="font-display font-black text-base uppercase tracking-wide text-foreground mb-3">
              Milk Choices
            </h3>
            <div className="grid grid-cols-2 gap-x-4 text-sm">
              <div>
                <p className="text-muted text-xs font-bold uppercase tracking-wider mb-1.5">Dairy</p>
                <p className="text-foreground">Whole Milk</p>
                <p className="text-foreground">2% Milk</p>
              </div>
              <div>
                <p className="text-muted text-xs font-bold uppercase tracking-wider mb-1.5">Non-Dairy <span className="font-normal normal-case tracking-normal">+.75–1.00</span></p>
                <p className="text-foreground">Oat</p>
                <p className="text-foreground">Almond</p>
                <p className="text-foreground">Soy</p>
                <p className="text-foreground">Coconut</p>
              </div>
            </div>
          </div>

          {/* DoorDash */}
          <a
            href="https://www.doordash.com/store/parabola-coffee-roasting-co-san-diego-24422595/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border-2 border-dashed border-accent/40 bg-white px-5 py-4 flex flex-col justify-between group hover:border-accent transition-colors duration-200 active:scale-[0.99]"
            style={{ background: "oklch(0.98 0.015 38)" }}
          >
            <div>
              <h3 className="font-display font-black text-base uppercase tracking-wide text-accent mb-2">
                Order for Delivery
              </h3>
              <p className="text-foreground text-sm leading-relaxed">
                Get Parabola delivered to your door through DoorDash.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-2 bg-accent text-white font-bold text-sm px-5 py-2.5 rounded-full w-fit group-hover:opacity-90 transition-opacity">
              Order on DoorDash ↗
            </span>
          </a>

          {/* Social */}
          <div
            className="rounded-2xl border-2 border-dashed flex flex-col justify-center items-center text-center px-5 py-6"
            style={{ borderColor: "oklch(0.52 0.13 210)", background: "oklch(0.96 0.02 210)" }}
          >
            <p className="font-display font-black text-2xl text-primary leading-tight mb-1">Follow Us</p>
            <p className="font-bold text-foreground text-lg">@parabolacoffee</p>
            <div className="flex gap-3 mt-4">
              <a href="https://instagram.com/parabolacoffee" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors text-sm font-semibold underline underline-offset-2">
                Instagram
              </a>
              <span className="text-muted">·</span>
              <a href="https://facebook.com/parabolacoffee" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors text-sm font-semibold underline underline-offset-2">
                Facebook
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
