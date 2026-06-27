"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="px-5 md:px-10 py-16"
      style={{ background: "oklch(0.18 0.01 240)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-12 border-b border-white/10">
          <div className="max-w-xs">
            <Image
              src="/logo-white.png"
              alt="Parabola Coffee Roasting Co."
              width={160}
              height={86}
              className="h-20 w-auto object-contain mb-5"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Specialty Latin American coffee, roasted with community in mind.
              Normal Heights, San Diego.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com/parabolacoffee" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/50 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a href="https://facebook.com/parabolacoffee" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/50 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <p className="text-white font-semibold text-sm mb-4">Visit</p>
              <p className="text-white/60 text-sm leading-relaxed">3504 Adams Ave, Normal Heights<br />San Diego, CA 92116</p>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-4">Hours</p>
              <p className="text-white/60 text-sm leading-relaxed">Mon – Sun<br />7:30am – 3pm</p>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-4">Shop Online</p>
              <div className="space-y-2">
                {[
                  { label: "Coffee Roasts", href: "https://parabolacoffee.com" },
                  { label: "Gifts & Art", href: "https://parabolacoffee.com/collections/all" },
                  { label: "Gift Cards", href: "https://parabolacoffee.com" },
                  { label: "Clothing", href: "https://parabolacoffee.com" },
                ].map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="block text-white/60 text-sm hover:text-white transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Email signup */}
        <div className="py-10 border-b border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <p className="text-white font-display font-bold text-lg">Stay in the loop</p>
              <p className="text-white/50 text-sm mt-1">Exclusive roast drops, seasonal drinks, and shop news.</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-60 px-4 py-2.5 rounded-full text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors"
              />
              <button type="submit" className="px-6 py-2.5 bg-accent text-white text-sm font-bold rounded-full hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-white/40 text-xs">&copy; {new Date().getFullYear()} Parabola Coffee Roasting Co.</p>
          <p className="text-white/40 text-xs">Supporting minority-owned farms across Latin America</p>
        </div>
      </div>
    </footer>
  );
}
