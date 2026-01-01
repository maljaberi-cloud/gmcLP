"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Microscope, Globe, Award, ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Golden Marble",
    subtitle: "Artificial Agglomerate",
    description:
      "High-density agglomerated marble designed for consistency. The dominant choice for modern flooring and commercial spaces.",
    image:
      "https://image.made-in-china.com/202f0j00DWPlhYkKlwMF/White-with-Gold-Veins-Grey-Artificial-Synthetic-Polished-Marble-Big-Slabs-for-Interior-Decoration-Price.webp",
    tags: ["High Density", "Commercial"],
  },
  {
    id: 2,
    title: "Magic Onyx",
    subtitle: "Translucent Collection",
    description:
      "Our signature collection capturing the rare, translucent beauty of natural onyx. Perfect for backlit features and luxury interiors.",
    image:
      "https://www.gmmc.om/wp-content/uploads/2025/12/WhatsApp-Image-2025-09-22-at-9.51.45-AM.jpeg", // Swapped for a darker Onyx image for contrast
    isOnyx: true,
    tags: ["Translucent", "Luxury"],
  },
  {
    id: 3,
    title: "Calcium Carbonate",
    subtitle: "High-Purity Powder",
    description:
      "High-purity industrial powder derived from our own mining operations. Serving industries including Paint, PVC, and Glass.",
    image:
      "https://www.gmmc.om/wp-content/uploads/2019/06/WhatsApp-Image-2019-06-16-at-12.00.20-PM-1.jpeg",
    tags: ["Industrial", "High Purity"],
  },
];

const pillars = [
  {
    icon: Award,
    title: "ISO Certified",
    text: "International Manufacturing Standards",
  },
  {
    icon: Microscope,
    title: "National Leader",
    text: "First & Only Manufacturer in Oman",
  },
  { icon: Globe, title: "Global Reach", text: "Exporting to MEA & India" },
];

export default function CompanyProfileLight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-white text-stone-900 py-24 md:py-32 overflow-hidden relative"
    >
      {/* Subtle Grid Background for that "Blueprint" feel */}

      {/* --- PART A: THE COMPANY PROFILE --- */}
      <div className="container mx-auto px-6 mb-32 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: Text Content */}
          <div className="lg:w-1/2 pt-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-amber-600 font-bold font-mono text-xs uppercase tracking-widest border border-amber-600/30 px-3 py-1 rounded-full bg-amber-10">
                  Est. 2018 — Salalah
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-stone-900">
                Pioneering the{" "}
                <span className="text-amber-600 font-serif italic">
                  Stone Industry
                </span>{" "}
                in the Sultanate.
              </h2>

              <p className="text-stone-600 text-lg leading-relaxed mb-8 border-l-2 border-amber-500 pl-6">
                Global Marble Manufacturing Co. (GMMC) is a{" "}
                <strong className="text-stone-900">100% Omani-owned</strong>{" "}
                subsidiary of Global Mining Co. L.L.C. Driven by
                state-of-the-art grinding technology, we lead a qualitative leap
                in the region's industrial sector.
              </p>

              {/* The Pillars Grid (Light Mode) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                {pillars.map((pillar, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="p-5 bg-stone-50 border border-stone-200 rounded-sm hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300"
                  >
                    <pillar.icon className="w-6 h-6 text-amber-600 mb-3" />
                    <h4 className="text-stone-900 font-bold text-sm mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-stone-500 leading-snug">
                      {pillar.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: The "Lab" Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative group"
          >
            {/* The Image Frame */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl shadow-stone-200">
              <img
                src="https://www.gmmc.om/wp-content/uploads/2019/04/IMG_3795.png"
                alt="GMMC Quality Control Lab"
                className="w-full h-full object-cover  group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-110"
              />
              {/* Overlay: Changed from Black Gradient to White-ish for light mode? NO. 
                  Keep dark overlay for text contrast, but reduce opacity. */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>

              {/* Technical Overlay Graphics */}
              <div className="absolute top-6 right-6">
                <div className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <div className="w-14 h-14 border border-dashed border-white/20 rounded-full"></div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6">
                <div className="text-2xl font-bold text-white">
                  Precision Engineering
                </div>
              </div>
            </div>

            {/* Decorative Offset Border (Dark Grey for contrast against white BG) */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-stone-200 -z-10 rounded-sm"></div>
          </motion.div>
        </div>
      </div>

      {/* --- PART B: PRODUCT LINES (The 3 Columns) --- */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-end justify-between mb-12 border-b border-stone-200 pb-6">
          <h3 className="text-3xl font-light text-stone-900">
            Our Product{" "}
            <span className="font-serif italic text-amber-600">Lines</span>
          </h3>
          <span className="hidden md:block font-mono text-xs text-stone-400">
            SCROLL TO EXPLORE
          </span>
        </div>

        {/* Grid Borders changed to Stone-200 for Light Mode */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-stone-200 border border-stone-200">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative h-[600px] overflow-hidden bg-white"
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
                {/* Dark Overlay ONLY for text contrast, fades out on hover to reveal stone */}
                <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/20 transition-colors duration-500"></div>
              </div>

              {/* Special Effect for MAGIC ONYX */}
              {product.isOnyx && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.3)_0%,transparent_70%)] mix-blend-screen"></div>
              )}

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Hover slide-up content */}
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase font-bold tracking-wider text-stone-900 bg-white shadow-lg px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors drop-shadow-md">
                    {product.title}
                  </h3>
                  <p className="font-serif italic text-stone-200 text-lg mb-4">
                    {product.subtitle}
                  </p>

                  <p className="text-sm text-stone-100 leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 drop-shadow-sm">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Default State Numbering */}
              <div className="absolute top-8 left-8 text-4xl font-light text-white/40 font-mono group-hover:text-white transition-colors drop-shadow-md">
                0{product.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
