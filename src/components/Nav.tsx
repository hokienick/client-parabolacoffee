"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "Coffee", href: "#roasts" },
  { label: "About", href: "#about" },
  { label: "The Shop", href: "#shop" },
  { label: "Roasts", href: "#roasts" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[200] px-6 py-4 flex items-center justify-between transition-colors duration-300"
        style={{
          background: scrolled
            ? "oklch(0.11 0.015 60 / 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid oklch(0.22 0.015 60)" : "none",
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <a
          href="#"
          className="font-display font-black text-lg tracking-tight text-foreground hover:text-accent transition-colors"
        >
          PARABOLA
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#shop"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-background bg-accent px-4 py-2 rounded-full hover:bg-accent-dim transition-colors"
        >
          Visit Us
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[199] bg-background flex flex-col justify-center items-center gap-8 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display font-bold text-4xl text-foreground hover:text-accent transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#shop"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex text-sm font-semibold text-background bg-accent px-6 py-3 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
            >
              Visit Us
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
