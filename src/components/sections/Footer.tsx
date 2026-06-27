"use client";

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-12 lg:px-20 py-16 border-t border-border"
      style={{ background: "oklch(0.11 0.015 60)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top: brand + links */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-xs">
            <p className="font-display font-black text-2xl text-foreground mb-3 tracking-tight">
              PARABOLA
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Specialty Latin American coffee, roasted with purpose and community in Normal Heights, San Diego.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/parabolacoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/parabolacoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <p className="text-foreground font-semibold text-sm mb-4">Visit</p>
              <div className="space-y-2">
                <p className="text-muted text-sm">3504 Adams Ave</p>
                <p className="text-muted text-sm">Normal Heights</p>
                <p className="text-muted text-sm">San Diego, CA 92116</p>
              </div>
            </div>
            <div>
              <p className="text-foreground font-semibold text-sm mb-4">Hours</p>
              <div className="space-y-2">
                <p className="text-muted text-sm">Mon – Sun</p>
                <p className="text-muted text-sm">7:30am – 3:00pm</p>
              </div>
            </div>
            <div>
              <p className="text-foreground font-semibold text-sm mb-4">Shop</p>
              <div className="space-y-2">
                <a href="https://parabolacoffee.com/collections/all" target="_blank" rel="noopener noreferrer" className="block text-muted text-sm hover:text-accent transition-colors">All Products</a>
                <a href="https://parabolacoffee.com" target="_blank" rel="noopener noreferrer" className="block text-muted text-sm hover:text-accent transition-colors">Coffee Roasts</a>
                <a href="https://parabolacoffee.com" target="_blank" rel="noopener noreferrer" className="block text-muted text-sm hover:text-accent transition-colors">Gift Cards</a>
              </div>
            </div>
          </div>
        </div>

        {/* Email signup */}
        <div
          className="rounded-2xl px-8 py-8 border border-border mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ background: "oklch(0.16 0.015 60)" }}
        >
          <div>
            <p className="font-display font-bold text-lg text-foreground mb-1">Stay in the loop</p>
            <p className="text-muted text-sm">Exclusive roast drops and shop news.</p>
          </div>
          <form
            className="flex gap-3 w-full md:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 md:w-64 px-4 py-2.5 rounded-full text-sm bg-transparent border border-border text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-accent text-background text-sm font-semibold rounded-full hover:bg-accent-dim transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-border">
          <p className="text-muted text-xs">
            &copy; {new Date().getFullYear()} Parabola Coffee Roasting Co. All rights reserved.
          </p>
          <p className="text-muted text-xs">
            Supporting minority-owned farms across Latin America
          </p>
        </div>
      </div>
    </footer>
  );
}
