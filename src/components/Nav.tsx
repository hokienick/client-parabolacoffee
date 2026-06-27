"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "The Shop", href: "#shop" },
  { label: "Gifts", href: "#gifts" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[200] px-5 md:px-10 py-4 flex items-center justify-between"
        style={{
          background: scrolled ? "oklch(1.000 0.000 0 / 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid oklch(0.90 0.01 210)" : "none",
        }}
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <a href="#" aria-label="Parabola Coffee home">
          <Image
            src="/logo.png"
            alt="Parabola Coffee Roasting Co."
            width={130}
            height={70}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#shop"
          className="hidden md:inline-flex items-center text-sm font-bold text-white bg-primary px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Visit Us
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[190] bg-white flex flex-col justify-center items-center gap-6 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Image src="/logo.png" alt="Parabola Coffee Roasting Co." width={160} height={86} className="mb-4" />
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display font-bold text-4xl text-foreground hover:text-primary transition-colors"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#shop"
              onClick={() => setOpen(false)}
              className="mt-4 bg-primary text-white font-bold px-8 py-3 rounded-full text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22 }}
            >
              Visit Us
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
