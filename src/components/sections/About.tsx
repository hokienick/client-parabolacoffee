import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left: Visual element */}
        <FadeIn direction="left">
          <div className="relative">
            {/* Stacked offset blocks */}
            <div
              className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden"
              style={{ background: "oklch(0.16 0.015 60)" }}
            >
              {/* Large typographic element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-display font-black select-none leading-none text-center"
                  style={{
                    fontSize: "clamp(6rem, 20vw, 14rem)",
                    color: "oklch(0.72 0.17 68 / 0.12)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  ∩
                </span>
              </div>
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="border-t border-border pt-6 flex items-end justify-between">
                  <div>
                    <p className="text-muted text-xs uppercase tracking-widest mb-1">Est.</p>
                    <p className="font-display font-bold text-4xl text-foreground">2020</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted text-xs uppercase tracking-widest mb-1">Location</p>
                    <p className="font-display font-bold text-foreground text-base">Normal Heights</p>
                    <p className="text-muted text-sm">San Diego, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <div
              className="absolute -bottom-6 -right-6 md:-right-8 rounded-xl px-6 py-5 border border-accent/30"
              style={{ background: "oklch(0.16 0.015 60)" }}
            >
              <p className="text-accent font-display font-bold text-2xl">100%</p>
              <p className="text-muted text-xs mt-0.5">Latin American sourced</p>
            </div>
          </div>
        </FadeIn>

        {/* Right: Story */}
        <FadeIn direction="right" delay={0.1}>
          <div className="space-y-6">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase">
              Our Story
            </p>
            <h2 className="font-display font-black text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.0] tracking-tight text-foreground">
              Started at Home. Rooted in Community.
            </h2>
            <div className="space-y-4 text-muted leading-relaxed max-w-lg">
              <p>
                Parabola Coffee began with curiosity and a home roaster. Driven by a passion for
                exceptional coffee and a deep belief in community, we started sharing our craft with
                neighbors before ever opening a door.
              </p>
              <p>
                In March 2020, we set up a coffee cart at Second Chance Beer Lounge. Despite the
                timing, the Normal Heights community showed up. That energy is what drives everything
                we do.
              </p>
              <p>
                We source exclusively from Latin American farms, with a focus on supporting
                minority-owned operations. Every bag tells the story of the people who grew it.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-border">
              {[
                { stat: "Fun", label: "Friendly, and caring" },
                { stat: "Local", label: "Artists featured in-shop" },
                { stat: "Eco", label: "Sustainable delivery" },
                { stat: "Daily", label: "7:30am to 3pm" },
              ].map(({ stat, label }) => (
                <div key={stat}>
                  <p className="font-display font-bold text-foreground text-xl">{stat}</p>
                  <p className="text-muted text-sm mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
