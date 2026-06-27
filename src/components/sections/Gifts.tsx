"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const items = [
  { label: "Greeting Cards", sub: "By local San Diego artists · $5.50", emoji: "✉️" },
  { label: "Stickers", sub: "Weird, funny, wonderful · from $3.50", emoji: "🌀" },
  { label: "Clothing & Gear", sub: "Rep the roast", emoji: "👕" },
  { label: "Gift Cards", sub: "Give the gift of good coffee", emoji: "🎁" },
];

export default function Gifts() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="gifts"
      ref={ref}
      className="py-24 md:py-32 px-5 md:px-10"
      style={{ background: "oklch(0.97 0.005 210)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"
        >
          <div>
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">More Than Coffee</p>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.2rem)] leading-[1.05] text-foreground max-w-md">
              Local Art, Good Vibes, and Thoughtful Gifts
            </h2>
          </div>
          <p className="text-muted max-w-xs leading-relaxed text-sm md:text-right">
            Every gift in the shop is made by someone in our community.
            Come in and discover something unexpected.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map(({ label, sub, emoji }, i) => (
            <motion.a
              key={label}
              href="https://parabolacoffee.com/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl p-7 border border-border bg-white hover:border-primary hover:shadow-md active:scale-[0.98] transition-all duration-150"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] } }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
            >
              <span className="text-4xl flex-shrink-0" aria-hidden="true">{emoji}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">{label}</h3>
                <p className="text-muted text-sm mt-0.5">{sub}</p>
              </div>
              <svg className="flex-shrink-0 text-muted group-hover:text-primary transition-colors" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 15L15 3M15 3H7M15 3v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://parabolacoffee.com/collections/all"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-foreground text-foreground font-bold text-sm px-8 py-3 rounded-full hover:border-primary hover:text-primary active:scale-95 transition-all duration-150"
          >
            Shop Everything Online
          </a>
        </motion.div>
      </div>
    </section>
  );
}
