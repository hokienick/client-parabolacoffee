"use client";

import { motion } from "motion/react";
import Image from "next/image";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Hero photo — subtle Ken Burns scale on load */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: EASE_OUT_EXPO }}
      >
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80"
          alt="Three friends toasting with coffee cups at Parabola Coffee"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.10 0.02 240 / 0.35) 0%, oklch(0.10 0.02 240 / 0.10) 40%, oklch(0.10 0.02 240 / 0.65) 100%)",
          }}
        />
      </motion.div>

      {/* Hours badge */}
      <motion.div
        className="absolute top-24 right-5 md:right-10"
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.9, ease: EASE_OUT_QUINT }}
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 text-center shadow-sm">
          <p className="text-xs font-bold tracking-widest uppercase text-primary">Open Daily</p>
          <p className="text-foreground font-display font-bold text-lg leading-tight mt-0.5">7:30am – 3pm</p>
        </div>
      </motion.div>

      {/* Main content — staggered entrance from bottom */}
      <div className="mt-auto px-5 md:px-10 pb-16 md:pb-20">
        {/* Logo — lead element, comes in first */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE_OUT_EXPO }}
        >
          <Image
            src="/logo-white.png"
            alt="Parabola Coffee Roasting Co."
            width={260}
            height={140}
            className="h-28 md:h-36 w-auto object-contain drop-shadow-lg"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-white/90 text-base md:text-lg font-medium max-w-sm leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: EASE_OUT_QUINT }}
        >
          Specialty Latin American coffee, roasted with community in mind.
          Come find us on Adams Ave.
        </motion.p>

        {/* CTAs — last to arrive, 100ms after tagline */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE_OUT_QUINT }}
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-2 bg-accent text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-150 hover:opacity-90 active:scale-95"
          >
            See Our Menu
          </a>
          <a
            href="#shop"
            className="inline-flex items-center gap-2 bg-white text-foreground font-bold text-sm px-6 py-3 rounded-full transition-all duration-150 hover:bg-surface active:scale-95"
          >
            3504 Adams Ave
          </a>
        </motion.div>
      </div>

      {/* Location tag */}
      <motion.div
        className="absolute bottom-6 right-5 md:right-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">
          Normal Heights, San Diego
        </span>
      </motion.div>
    </section>
  );
}
