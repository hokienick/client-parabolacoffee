"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 px-5 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left: photo + floating stat */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80"
              alt="Barista carefully pouring a Chemex pour-over at Parabola Coffee"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating accent — year established */}
          <div
            className="absolute -bottom-5 -right-4 md:-right-8 rounded-2xl px-6 py-5 shadow-lg"
            style={{ background: "oklch(0.52 0.13 210)" }}
          >
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Est.</p>
            <p className="text-white font-display font-bold text-4xl leading-none">2020</p>
            <p className="text-white/70 text-xs mt-1">Normal Heights</p>
          </div>
        </motion.div>

        {/* Right: story */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-5">Our Story</p>

          <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.2rem)] leading-[1.05] text-foreground mb-7">
            Started at Home.<br />Rooted in Community.
          </h2>

          <div className="space-y-4 text-muted leading-relaxed max-w-lg text-[1.05rem]">
            <p>
              Parabola Coffee began with curiosity and passion. Inspired by local North Park
              roasters, we started roasting in our home, determined to craft a perfect cup.
            </p>
            <p>
              In March 2020, we launched our coffee cart at Second Chance Beer Lounge. Despite
              opening during a pandemic, the community showed up. They&apos;ve never stopped.
            </p>
            <p>
              We source exclusively from Latin American farms, with a focus on minority-owned
              operations. Every bag tells the story of the people who grew it.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-border">
            {[
              { num: "100%", label: "Latin American sourced" },
              { num: "7 days", label: "a week, 7:30–3pm" },
              { num: "Local", label: "artists in-shop" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="font-display font-bold text-foreground text-xl leading-tight">{num}</p>
                <p className="text-muted text-xs mt-1 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
