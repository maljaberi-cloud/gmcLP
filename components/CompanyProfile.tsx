"use client";

import React from "react";
import {
  Microscope,
  Globe,
  Award,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const PRODUCTS = [
  {
    id: 1,
    image: "https://image.made-in-china.com/202f0j00DWPlhYkKlwMF/White-with-Gold-Veins-Grey-Artificial-Synthetic-Polished-Marble-Big-Slabs-for-Interior-Decoration-Price.webp",
    tags: ["High Density", "Best Seller"],
    colSpan: "md:col-span-8",
  },
  {
    id: 2,
    image: "https://www.gmmc.om/wp-content/uploads/2025/12/WhatsApp-Image-2025-09-22-at-9.51.45-AM.jpeg",
    isOnyx: true,
    tags: ["Backlit Ready", "Luxury"],
    colSpan: "md:col-span-4",
  },
  {
    id: 3,
    image: "https://www.gmmc.om/wp-content/uploads/2019/06/WhatsApp-Image-2019-06-16-at-12.00.20-PM-1.jpeg",
    tags: ["Raw Material", "99% Pure"],
    colSpan: "md:col-span-4",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1618606979269-2313620f9227?q=80&w=2670&auto=format&fit=crop",
    tags: ["Exterior", "Matte"],
    colSpan: "md:col-span-4",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1617134091809-17aa342a3942?q=80&w=2670&auto=format&fit=crop",
    tags: ["Premium", "High Contrast"],
    colSpan: "md:col-span-4",
  },
];

const PILLAR_ICONS = [Award, Microscope, Globe];

export default function CompanyProfileLight() {
  const { t } = useLanguage();

  const pillars = [
    { icon: PILLAR_ICONS[0], title: t.company.pillar1Title, text: t.company.pillar1Text },
    { icon: PILLAR_ICONS[1], title: t.company.pillar2Title, text: t.company.pillar2Text },
    { icon: PILLAR_ICONS[2], title: t.company.pillar3Title, text: t.company.pillar3Text },
  ];

  return (
    <section className="bg-white text-stone-900 py-24 md:py-32 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-32 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: Text Content */}
          <div className="lg:w-1/2 pt-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#f1c83d] font-bold font-mono text-xs uppercase tracking-widest border border-amber-600/30 px-3 py-1 rounded-full bg-amber-50 font-cairo">
                  {t.company.badge}
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-stone-900 font-cairo">
                {t.company.headlineA}{" "}
                <span className="text-[#f1c83d] font-serif italic">
                  {t.company.headlineHighlight}
                </span>{" "}
                {t.company.headlineB}
              </h2>

              <p className="text-stone-600 text-lg leading-relaxed mb-8 border-l-2 border-amber-500 pl-6 font-cairo">
                {t.company.description}
              </p>

              {/* The Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                {pillars.map((pillar, i) => (
                  <div
                    key={i}
                    className="p-5 bg-stone-50 border border-stone-200 rounded-sm hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300"
                  >
                    <pillar.icon className="w-6 h-6 text-[#6a6931] mb-3" />
                    <h4 className="text-stone-900 font-bold text-sm mb-1 font-cairo">{pillar.title}</h4>
                    <p className="text-xs text-stone-500 leading-snug font-cairo">{pillar.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:w-1/2 relative group">
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
                <div className="text-2xl font-bold text-white font-cairo">
                  Precision Engineering
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-stone-200 -z-10 rounded-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
