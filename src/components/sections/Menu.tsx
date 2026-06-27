"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

const knownDrinks = [
  { name: "Cardamom Latte", tag: "Customer Fave", tagColor: "bg-accent-light text-accent" },
  { name: "Horchata Cold Brew", tag: "Seasonal", tagColor: "bg-primary-light text-primary" },
  { name: "Café de Olla", tag: null, tagColor: "" },
  { name: "Vietnamese Coffee", tag: null, tagColor: "" },
  { name: "Lavender Matcha", tag: null, tagColor: "" },
  { name: "Mexican Mocha", tag: null, tagColor: "" },
  { name: "Mint Cold Brew", tag: null, tagColor: "" },
  { name: "Drip Coffee", tag: null, tagColor: "" },
  { name: "Americano", tag: null, tagColor: "" },
  { name: "Vanilla Latte", tag: null, tagColor: "" },
  { name: "Cappuccino", tag: null, tagColor: "" },
  { name: "Chai Latte", tag: null, tagColor: "" },
];

const food = [
  "New York Bagels",
  "Bagel Sandwiches",
];

export default function Menu() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="menu"
      ref={ref}
      className="py-24 md:py-32 px-5 md:px-10"
      style={{ background: "oklch(0.97 0.005 210)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Drink Menu</p>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.2rem)] leading-[1.05] text-foreground max-w-lg">
            Latin Flavor in Every Cup
          </h2>
          <p className="text-muted text-sm mt-4 max-w-md leading-relaxed">
            Our menu changes seasonally. Visit us to see the full board, or check DoorDash for today&apos;s offerings.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left: seasonal menu image — what they actually show */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_OUT_QUINT }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
                alt="Parabola Coffee seasonal menu board"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0 flex items-end p-6"
                style={{ background: "linear-gradient(to top, oklch(0.18 0.01 240 / 0.7) 0%, transparent 60%)" }}
              >
                <div>
                  <p className="text-white font-display font-bold text-lg">Seasonal Menu</p>
                  <p className="text-white/80 text-sm mt-0.5">Updated regularly at the shop</p>
                </div>
              </div>
            </div>
            <a
              href="https://www.doordash.com/store/parabola-coffee-roasting-co-san-diego-24422595/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-between rounded-xl px-5 py-4 bg-accent text-white font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all duration-150"
            >
              <span>Order on DoorDash for delivery</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 15L15 3M15 3H7M15 3v8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Right: known drink items + food */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Espresso Drinks &amp; More</p>
            </motion.div>

            <div className="divide-y divide-border">
              {knownDrinks.map((drink, i) => (
                <motion.div
                  key={drink.name}
                  className="py-3.5 flex items-center justify-between gap-3"
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.035, ease: EASE_OUT_QUINT }}
                >
                  <span className="font-display font-semibold text-foreground text-[0.95rem]">{drink.name}</span>
                  {drink.tag && (
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full flex-shrink-0 ${drink.tagColor}`}>
                      {drink.tag}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Food */}
            <motion.div
              className="mt-8 pt-6 border-t border-border"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Food</p>
              <div className="space-y-2">
                {food.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "oklch(0.52 0.13 210)" }} />
                    <span className="font-display font-semibold text-foreground text-[0.95rem]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.p
              className="mt-6 text-muted text-xs leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Menu changes seasonally. Oat, almond, soy, and coconut milk available. Prices displayed in shop.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
