import FadeIn from "@/components/FadeIn";

const hours = [
  { day: "Monday", time: "7:30am – 3:00pm" },
  { day: "Tuesday", time: "7:30am – 3:00pm" },
  { day: "Wednesday", time: "7:30am – 3:00pm" },
  { day: "Thursday", time: "7:30am – 3:00pm" },
  { day: "Friday", time: "7:30am – 3:00pm" },
  { day: "Saturday", time: "7:30am – 3:00pm" },
  { day: "Sunday", time: "7:30am – 3:00pm" },
];

const offerings = [
  { icon: "☕", label: "Craft espresso drinks" },
  { icon: "🌿", label: "Specialty seasonal menu" },
  { icon: "🎁", label: "Local artist gifts" },
  { icon: "👕", label: "Clothing and merch" },
  { icon: "💳", label: "Gift cards" },
  { icon: "🛵", label: "DoorDash delivery" },
];

export default function TheShop() {
  return (
    <section id="shop" className="py-28 md:py-36 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            Come Visit
          </p>
          <h2 className="font-display font-black text-[clamp(2.5rem,6vw,4rem)] leading-[1.0] tracking-tight text-foreground mb-16 md:mb-20 max-w-xl">
            Find Us on Adams Ave
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: Address + hours */}
          <FadeIn direction="left">
            <div className="space-y-8">
              {/* Address block */}
              <div
                className="rounded-2xl p-8 border border-border"
                style={{ background: "oklch(0.16 0.015 60)" }}
              >
                <p className="text-muted text-xs uppercase tracking-widest mb-4">Address</p>
                <p className="font-display font-black text-3xl text-foreground leading-tight mb-1">
                  3504 Adams Ave
                </p>
                <p className="text-muted text-base">Normal Heights, San Diego, CA 92116</p>

                <a
                  href="https://maps.google.com/?q=3504+Adams+Ave+San+Diego+CA+92116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-accent text-sm font-semibold hover:text-accent-dim transition-colors"
                >
                  Get Directions
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 12L12 2M12 2H5M12 2v7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              {/* Hours */}
              <div>
                <p className="text-muted text-xs uppercase tracking-widest mb-4">Hours</p>
                <div className="space-y-0">
                  {hours.map((h, i) => (
                    <div
                      key={h.day}
                      className={`flex justify-between items-center py-3 ${
                        i < hours.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <span className="text-muted text-sm">{h.day}</span>
                      <span className="text-foreground text-sm font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: What's in the shop */}
          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-8">
              {/* Shop visual */}
              <div
                className="rounded-2xl aspect-[4/3] relative overflow-hidden flex items-center justify-center border border-border"
                style={{ background: "oklch(0.16 0.015 60)" }}
              >
                <div className="text-center px-8">
                  <p
                    className="font-display font-black leading-none select-none"
                    style={{
                      fontSize: "clamp(4rem, 15vw, 8rem)",
                      color: "oklch(0.72 0.17 68 / 0.15)",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    PARABOLA
                  </p>
                  <p className="text-muted text-sm mt-4">3504 Adams Ave, Normal Heights</p>
                </div>

                {/* Accent corner badge */}
                <div className="absolute top-4 right-4 bg-accent text-background text-xs font-bold px-3 py-1.5 rounded-full">
                  Open Daily
                </div>
              </div>

              {/* Offerings list */}
              <div>
                <p className="text-muted text-xs uppercase tracking-widest mb-4">In the Shop</p>
                <div className="grid grid-cols-2 gap-3">
                  {offerings.map(({ icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 py-3 px-4 rounded-xl border border-border"
                      style={{ background: "oklch(0.16 0.015 60)" }}
                    >
                      <span className="text-xl" aria-hidden="true">{icon}</span>
                      <span className="text-sm text-foreground font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
