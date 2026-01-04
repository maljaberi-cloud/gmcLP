"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Microscope,
  Globe,
  Award,
  ArrowUpRight,
  Layers,
  Sparkles,
} from "lucide-react";

// --- EXPANDED PRODUCT DATA (5 ITEMS) ---
const products = [
  {
    id: 1,
    title: "Golden Marble",
    subtitle: "The Flagship Agglomerate",
    description:
      "High-density engineering. The dominant choice for modern flooring.",
    // Updated image for a sharper look
    image:
      "https://image.made-in-china.com/202f0j00DWPlhYkKlwMF/White-with-Gold-Veins-Grey-Artificial-Synthetic-Polished-Marble-Big-Slabs-for-Interior-Decoration-Price.webp",
    tags: ["High Density", "Best Seller"],
    colSpan: "md:col-span-8", // Takes up 2/3rds width
  },
  {
    id: 2,
    title: "Magic Onyx",
    subtitle: "Translucent Series",
    description: "Capturing rare translucency for backlit luxury features.",
    image:
      "https://www.gmmc.om/wp-content/uploads/2025/12/WhatsApp-Image-2025-09-22-at-9.51.45-AM.jpeg",
    isOnyx: true,
    tags: ["Backlit Ready", "Luxury"],
    colSpan: "md:col-span-4", // Takes up 1/3rd width (Tall)
  },
  {
    id: 3,
    title: "Calcium Carbonate",
    subtitle: "Industrial Purity",
    description: "Raw powder for Paint, PVC, and Glass industries.",
    image:
      "https://www.gmmc.om/wp-content/uploads/2019/06/WhatsApp-Image-2019-06-16-at-12.00.20-PM-1.jpeg",
    tags: ["Raw Material", "99% Pure"],
    colSpan: "md:col-span-4",
  },
  {
    id: 4,
    title: "Silver Travertine",
    subtitle: "The Modern Classic",
    description: "A cool-toned structural masterpiece with linear veining.",
    // Placeholder for a grey stone texture
    image:
      "https://images.unsplash.com/photo-1618606979269-2313620f9227?q=80&w=2670&auto=format&fit=crop",
    tags: ["Exterior", "Matte"],
    colSpan: "md:col-span-4",
  },
  {
    id: 5,
    title: "Nero Marquina",
    subtitle: "Midnight Collection",
    description:
      "Deep black engineered stone with striking white lightning veins.",
    // Placeholder for black marble
    image:
      "https://images.unsplash.com/photo-1617134091809-17aa342a3942?q=80&w=2670&auto=format&fit=crop",
    tags: ["Premium", "High Contrast"],
    colSpan: "md:col-span-4",
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
      {/* --- PART A: THE COMPANY PROFILE (UNCHANGED) --- */}
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
                <span className="text-[#f1c83d] font-bold font-mono text-xs uppercase tracking-widest border border-amber-600/30 px-3 py-1 rounded-full bg-amber-50">
                  Est. 2018 — Salalah
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-stone-900">
                Pioneering the{" "}
                <span className="text-[#f1c83d] font-serif italic">
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

              {/* The Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                {pillars.map((pillar, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="p-5 bg-stone-50 border border-stone-200 rounded-sm hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300"
                  >
                    <pillar.icon className="w-6 h-6 text-[#6a6931] mb-3" />
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
            <div className="relative aspect-[4/4] overflow-hidden rounded-xl shadow-2xl shadow-stone-200">
              <img
                src="https://www.gmmc.om/wp-content/uploads/2019/04/IMG_3795.png"
                alt="GMMC Quality Control Lab"
                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
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
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-stone-200 -z-10 rounded-sm"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
