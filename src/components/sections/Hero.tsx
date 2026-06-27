"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-16 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background texture layer */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 30%, oklch(0.18 0.04 68 / 0.5) 0%, oklch(0.11 0.015 60) 70%)",
        }}
      />

      {/* Abstract coffee ring / arc graphic */}
      <motion.div
        className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[55vw] md:w-[45vw] aspect-square rounded-full border border-accent/20"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.div
        className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[40vw] md:w-[32vw] aspect-square rounded-full border border-accent/30"
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.div
        className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[22vw] md:w-[18vw] aspect-square rounded-full"
        style={{ background: "oklch(0.72 0.17 68 / 0.08)" }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
      />

      {/* Hours pill */}
      <motion.div
        className="absolute top-24 left-6 md:left-12 lg:left-20"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-muted border border-border rounded-full px-4 py-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          Open Daily · 7:30am – 3pm
        </span>
      </motion.div>

      {/* Main headline content */}
      <div className="max-w-4xl">
        <motion.p
          className="text-accent font-display font-semibold text-sm md:text-base tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          Normal Heights, San Diego
        </motion.p>

        <motion.h1
          className="font-display font-black text-[clamp(3.5rem,10vw,6rem)] leading-[0.93] tracking-tight text-foreground mb-8"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          Roasted
          <br />
          with
          <br />
          <span className="text-accent">Purpose.</span>
        </motion.h1>

        <motion.p
          className="text-muted text-base md:text-lg max-w-md leading-relaxed mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          Specialty Latin American coffee, sourced from minority-owned farms and
          roasted in the heart of San Diego.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.23, 1, 0.32, 1] }}
        >
          <a
            href="#roasts"
            className="inline-flex items-center justify-center gap-2 bg-accent text-background font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-accent-dim transition-colors"
          >
            Browse Our Roasts
          </a>
          <a
            href="#shop"
            className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-semibold text-sm px-7 py-3.5 rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            Find Us on Adams Ave
          </a>
        </motion.div>
      </div>

    </section>
  );
}
