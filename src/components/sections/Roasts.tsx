import FadeIn from "@/components/FadeIn";

const roasts = [
  {
    name: "Bright & Floral",
    origin: "Colombia",
    roast: "Light",
    notes: ["Jasmine", "Citrus", "Honey"],
    description:
      "Washed single-origin from high-altitude Colombian farms. Clean and vibrant with a lingering sweetness.",
  },
  {
    name: "Deep & Chocolatey",
    origin: "Guatemala",
    roast: "Medium",
    notes: ["Dark Chocolate", "Brown Sugar", "Almond"],
    description:
      "Full-bodied and smooth. The perfect everyday cup from small Guatemalan cooperatives.",
  },
  {
    name: "Bold & Earthy",
    origin: "Peru",
    roast: "Dark",
    notes: ["Cedar", "Dark Fruit", "Molasses"],
    description:
      "A rich, bold roast from Peruvian highland farms. Complex, warming, and deeply satisfying.",
  },
  {
    name: "Balanced & Nutty",
    origin: "Costa Rica",
    roast: "Medium-Light",
    notes: ["Hazelnut", "Caramel", "Stone Fruit"],
    description:
      "Approachable and nuanced. A crowd-pleaser from family-owned Costa Rican estates.",
  },
];

export default function Roasts() {
  return (
    <section
      id="roasts"
      className="py-28 md:py-36 px-6 md:px-12 lg:px-20"
      style={{ background: "oklch(0.14 0.015 60)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
            <div>
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                Single-Origin Roasts
              </p>
              <h2 className="font-display font-black text-[clamp(2.5rem,6vw,4rem)] leading-[1.0] tracking-tight text-foreground max-w-lg">
                Latin America in Every Cup
              </h2>
            </div>
            <p className="text-muted max-w-xs leading-relaxed">
              Every roast is sourced directly from minority-owned farms across Latin America.
              Small-batch. Freshly roasted. Never compromised.
            </p>
          </div>
        </FadeIn>

        {/* Roast list — editorial layout, not a card grid */}
        <div className="space-y-0">
          {roasts.map((roast, i) => (
            <FadeIn key={roast.name} delay={i * 0.08}>
              <div
                className="group py-8 border-t border-border grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] lg:grid-cols-[2.5fr_1fr_1fr_auto] gap-4 md:gap-8 items-center hover:border-accent/40 transition-colors cursor-pointer"
              >
                {/* Name + description */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors">
                      {roast.name}
                    </h3>
                    <span className="text-xs px-2.5 py-1 rounded-full border border-border text-muted font-medium">
                      {roast.roast}
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed max-w-sm hidden md:block">
                    {roast.description}
                  </p>
                </div>

                {/* Origin */}
                <div>
                  <p className="text-muted text-xs uppercase tracking-widest mb-1">Origin</p>
                  <p className="text-foreground font-semibold">{roast.origin}</p>
                </div>

                {/* Tasting notes */}
                <div>
                  <p className="text-muted text-xs uppercase tracking-widest mb-1.5">Notes</p>
                  <div className="flex flex-wrap gap-1.5">
                    {roast.notes.map((note) => (
                      <span
                        key={note}
                        className="text-xs px-2 py-0.5 rounded text-accent font-medium"
                        style={{ background: "oklch(0.72 0.17 68 / 0.1)" }}
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA arrow */}
                <div className="hidden lg:flex items-center justify-end">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-all">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
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
          <div className="border-t border-border" />
        </div>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="https://parabolacoffee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-background font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-accent-dim transition-colors"
            >
              Shop All Roasts
            </a>
            <p className="text-muted text-sm">
              Available in-store and online. DoorDash delivery available.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
