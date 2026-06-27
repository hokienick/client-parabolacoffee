"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function TheShop() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="shop" ref={ref} className="py-24 md:py-32 px-5 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">Come Visit</p>
          <h2 className="font-display font-bold text-[clamp(2rem,5.5vw,3.8rem)] leading-[1.0] text-foreground mb-16">
            Find Us on Adams Ave
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-stretch">

          {/* Photo — takes 3 columns */}
          <motion.div
            className="md:col-span-3 relative rounded-3xl overflow-hidden min-h-[360px]"
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <Image
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=1200&q=80"
              alt="Warm interior of a neighborhood coffee shop"
              fill
              className="object-cover"
            />
            {/* Address overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8"
              style={{ background: "linear-gradient(to top, oklch(0.10 0.02 240 / 0.75) 0%, transparent 100%)" }}
            >
              <p className="text-white font-display font-bold text-2xl">3504 Adams Ave</p>
              <p className="text-white/80 text-sm mt-1">Normal Heights, San Diego, CA 92116</p>
            </div>
          </motion.div>

          {/* Info — takes 2 columns */}
          <motion.div
            className="md:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Hours */}
            <div className="rounded-2xl p-7 border border-border bg-background flex-1">
              <p className="text-primary font-bold text-xs tracking-widest uppercase mb-5">Hours</p>
              <div className="space-y-3">
                {[
                  "Monday", "Tuesday", "Wednesday", "Thursday",
                  "Friday", "Saturday", "Sunday"
                ].map((day) => (
                  <div key={day} className="flex justify-between items-center">
                    <span className="text-muted text-sm">{day}</span>
                    <span className="text-foreground text-sm font-semibold">7:30am – 3pm</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Get directions CTA */}
            <a
              href="https://maps.google.com/?q=3504+Adams+Ave+San+Diego+CA+92116"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl p-6 font-bold text-white hover:opacity-90 active:scale-95 transition-all duration-150"
              style={{ background: "oklch(0.52 0.13 210)" }}
            >
              <span className="font-display text-lg">Get Directions</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 16L16 4M16 4H8M16 4v8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* DoorDash note */}
            <div
              className="rounded-2xl p-5 text-sm font-medium"
              style={{ background: "oklch(0.92 0.05 38)" }}
            >
              <span className="text-accent font-bold">DoorDash delivery available</span>
              <span className="text-muted"> — get your caffeine fix without leaving home.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
