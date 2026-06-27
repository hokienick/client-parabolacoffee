"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const drinks = [
  { name: "Cardamom Latte", type: "Special", price: "6.25 / 7.25", desc: "A warming blend of espresso and aromatic cardamom. A Parabola favorite.", tag: "Customer Fave" },
  { name: "Horchata Cold Brew", type: "Cold Brew", price: "7.25 / —", desc: "Rich cold brew meets house-made horchata. Smooth, sweet, unforgettable.", tag: "Seasonal" },
  { name: "Café de Olla", type: "Special", price: "5.00 / 6.00", desc: "Traditional Mexican spiced coffee, brewed with cinnamon and piloncillo.", tag: "Hot Only" },
  { name: "Vietnamese", type: "Special", price: "6.25 / 7.25", desc: "Bold espresso over sweetened condensed milk. Hot or iced.", tag: null },
  { name: "Lavender Matcha", type: "Special", price: "6.50 / 7.50", desc: "Ceremonial matcha with house lavender syrup. Earthy and floral.", tag: null },
  { name: "Mexican Mocha", type: "Special", price: "6.25 / 7.25", desc: "Espresso, dark chocolate, and a hint of cinnamon. Spiced and rich.", tag: null },
];

const tagColors: Record<string, string> = {
  "Customer Fave": "bg-accent-light text-accent",
  "Seasonal": "bg-primary-light text-primary",
  "Hot Only": "bg-[oklch(0.95_0.04_85)] text-[oklch(0.50_0.10_85)]",
};

export default function Menu() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="menu"
      ref={ref}
      className="py-24 md:py-32 px-5 md:px-10"
      style={{ background: "oklch(0.97 0.005 210)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <div>
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Drink Menu</p>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.2rem)] leading-[1.05] text-foreground max-w-sm">
              Latin Flavor in Every Cup
            </h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden w-full md:w-64 aspect-[3/2] flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
              alt="Latte art at Parabola Coffee"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Drink grid — 2 columns, not identical cards */}
        <div className="grid md:grid-cols-2 gap-0">
          {drinks.map((drink, i) => (
            <motion.div
              key={drink.name}
              className="py-7 px-2 md:px-6 border-t border-border group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {drink.name}
                  </h3>
                  {drink.tag && (
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${tagColors[drink.tag]}`}>
                      {drink.tag}
                    </span>
                  )}
                </div>
                <span className="text-muted text-sm font-semibold whitespace-nowrap">{drink.price}</span>
              </div>
              <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1.5">{drink.type}</p>
              <p className="text-muted text-sm leading-relaxed">{drink.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Also serve section */}
        <motion.div
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted text-sm mb-4">Also on the menu:</p>
          <div className="flex flex-wrap gap-2">
            {["Drip Coffee", "Americano", "Espresso", "Vanilla Latte", "Cappuccino", "Mocha", "Mint Cold Brew", "Chai Latte"].map((item) => (
              <span key={item} className="text-sm px-4 py-1.5 rounded-full border border-border text-foreground font-medium bg-white">
                {item}
              </span>
            ))}
          </div>
          <p className="text-muted text-sm mt-6">
            12oz / 16oz pricing. Oat, almond, soy, and coconut milk available. DoorDash delivery available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
