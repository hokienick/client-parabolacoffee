"use client";

import { motion } from "motion/react";
import Image from "next/image";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-[1fr_1fr] overflow-hidden">

      {/* Left panel — brand teal. Logo is the star, centered vertically. */}
      <div
        className="relative flex flex-col min-h-[60vh] md:min-h-screen px-8 md:px-14"
        style={{ background: "oklch(0.52 0.13 210)" }}
      >
        {/* Vertical rhythm: top spacer pushes logo to true center */}
        {/* Nav clearance — fixed nav is ~72px, add breathing room above logo */}
        <div className="h-28 md:h-36 flex-shrink-0" />

        {/* Logo — the star of the page, large and commanding */}
        <motion.div
          className="flex justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.15, ease: EASE_OUT_EXPO }}
        >
          <Image
            src="/logo-white.png"
            alt="Parabola Coffee Roasting Co."
            width={480}
            height={258}
            className="w-[280px] md:w-[380px] h-auto object-contain"
            priority
          />
        </motion.div>

        {/* Bottom half: tagline, CTAs, hours */}
        <div className="flex-1 flex flex-col justify-end pb-10 md:pb-14 pt-8">
          <motion.p
            className="text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-xs mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE_OUT_QUINT }}
          >
            Specialty Latin American coffee roasted with community in mind.
          </motion.p>

          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE_OUT_QUINT }}
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 bg-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-150 hover:bg-surface active:scale-95 w-fit"
              style={{ color: "oklch(0.52 0.13 210)" }}
            >
              See Our Menu
            </a>
            <a
              href="https://www.doordash.com/store/parabola-coffee-roasting-co-san-diego-24422595/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-150 hover:opacity-90 active:scale-95 w-fit"
            >
              Order on DoorDash
            </a>
          </motion.div>

          <motion.div
            className="mt-8 pt-6 border-t border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1.5">Hours &amp; Location</p>
            <p className="text-white font-semibold text-sm">Mon–Fri 7:00am · Sat–Sun 7:30am · Close 3pm</p>
            <p className="text-white/80 text-sm mt-0.5">3504 Adams Ave · Normal Heights, San Diego</p>
          </motion.div>
        </div>
      </div>

      {/* Right panel — community photo */}
      <motion.div
        className="relative min-h-[50vh] md:min-h-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: EASE_OUT_EXPO }}
      >
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
          alt="Friends sharing coffee at Parabola Coffee in Normal Heights"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-y-0 left-0 w-8 pointer-events-none"
          style={{ background: "linear-gradient(to right, oklch(0.52 0.13 210), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
