import FadeIn from "@/components/FadeIn";

const items = [
  { label: "Greeting Cards", sub: "Local artist designs, $5.50", color: "oklch(0.72 0.17 68 / 0.1)" },
  { label: "Stickers", sub: "Fun, weird, and wonderful, from $3.50", color: "oklch(0.60 0.10 200 / 0.08)" },
  { label: "Clothing & Gear", sub: "Rep the roast", color: "oklch(0.72 0.17 68 / 0.06)" },
  { label: "Gift Cards", sub: "Give the gift of good coffee", color: "oklch(0.60 0.10 200 / 0.1)" },
];

export default function Merch() {
  return (
    <section
      id="merch"
      className="py-28 md:py-36 px-6 md:px-12 lg:px-20"
      style={{ background: "oklch(0.14 0.015 60)" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                More Than Coffee
              </p>
              <h2 className="font-display font-black text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.0] tracking-tight text-foreground max-w-lg">
                Local Art, Gear, and Good Vibes
              </h2>
            </div>
            <p className="text-muted max-w-xs leading-relaxed text-sm">
              We feature work from local San Diego artists. Every gift card, card, and sticker
              supports someone in our community.
            </p>
          </div>
        </FadeIn>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map(({ label, sub, color }, i) => (
            <FadeIn key={label} delay={i * 0.07}>
              <div
                className="group relative rounded-2xl px-8 py-10 border border-border hover:border-accent/40 transition-all cursor-pointer"
                style={{ background: color }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2 group-hover:text-accent transition-colors">
                      {label}
                    </h3>
                    <p className="text-muted text-sm">{sub}</p>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-all flex-shrink-0 mt-1">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 12L12 2M12 2H5M12 2v7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="https://parabolacoffee.com/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-foreground font-semibold text-sm px-7 py-3.5 rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              Shop Everything Online
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
