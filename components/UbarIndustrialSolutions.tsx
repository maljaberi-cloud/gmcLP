"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  ScanLine,
  Crosshair as CrosshairIcon, // Renamed to avoid collision
} from "lucide-react";

// --- CONFIGURATION & DATA ---
const COLORS = {
  primary: "#f1c83d",
  secondary: "#6a6931",
  grid: "#e5e5e5",
};

const PRODUCTS = [
  {
    id: "01",
    name: "Quicklime",
    chemical: "CaO",
    sub: "Calcium Oxide",
    desc: "High-purity calcination for metallurgy and chemical synthesis. Essential for modern industrial applications.",
    stats: [
      { label: "Color", value: "Bright White" },
      { label: "Finishes", value: "Powder / Granules" },
      { label: "Composition", value: "CaO >90%" },
      { label: "Sizes", value: "5 – 100 Microns" },
    ],
    tags: ["Construction", "Iron & Steel", "Water Treatment", "Chemical"],
    image:
      "https://images.squarespace-cdn.com/content/v1/6422484f3673e900810e7e47/bcbcf7bd-97a1-43ab-80c1-276f86fe4ee9/Renaissance+Lime+Putty+image.jpg",
  },
  {
    id: "02",
    name: "Limestone",
    chemical: "CaCO₃",
    sub: "Calcium Carbonate",
    desc: "Micronized mineral fillers for construction and agriculture. Extracted from high-grade sedimentary deposits.",
    stats: [
      { label: "Color", value: "White / Beige" },
      { label: "Finishes", value: "Crushed / Micronized" },
      { label: "Composition", value: "CaCO₃ >98%" },
      { label: "Sizes", value: "0 – 5 mm" },
    ],
    tags: ["Construction", "Agriculture", "Plastics", "Glass Mfg"],
    image:
      "https://www.surreymarbleandgranite.co.uk/wp-content/uploads/2018/09/Natural_Limestone.jpg",
  },
];

const IndustrialPhenomenon = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section
      id="industrial"
      className="relative w-full min-h-screen bg-white font-sans selection:bg-[#f1c83d] selection:text-black overflow-hidden py-20 lg:py-32"
    >
      {/* --- STATIC BACKGROUND (Zero Calculation Cost) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full opacity-40"
          style={{
            backgroundImage: `linear-gradient(${COLORS.grid} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.grid} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-10 left-10 text-[#6a6931]/30">
          <Crosshair />
        </div>
        <div className="absolute bottom-10 right-10 text-[#6a6931]/30">
          <Crosshair />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex flex-col">
        {/* --- HEADER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 border-b border-[#6a6931]/20 pb-12">
          <div className="lg:col-span-2 flex flex-col justify-between h-full">
            <div className="flex items-center gap-2 text-[#6a6931] font-mono text-xs uppercase tracking-widest font-bold">
              <ScanLine className="w-4 h-4" />
              <span>Mat.Eng-Sys</span>
            </div>
          </div>
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-serif text-[#1a1a1a] leading-[0.95] tracking-tighter"
            >
              Industry starts <br />
              <span className="italic text-[#6a6931]">at the molecule.</span>
            </motion.h1>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-[#6a6931] text-lg leading-relaxed max-w-sm ml-auto">
              Extracting potential from the earth. Precision-processed minerals
              forming the bedrock of modern manufacturing.
            </p>
          </div>
        </div>

        {/* --- OPTIMIZED CARD DISPLAY --- */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[650px] gap-2 lg:gap-0">
          {PRODUCTS.map((product, index) => (
            <MaterialCard
              key={product.id}
              data={product}
              isActive={activeId === product.id}
              isPeerActive={activeId !== null && activeId !== product.id}
              onHover={() => setActiveId(product.id)}
              onLeave={() => setActiveId(null)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: THE MATERIAL CARD (OPTIMIZED) ---
const MaterialCard = ({ data, isActive, isPeerActive, onHover, onLeave }) => {
  return (
    // OPTIMIZATION 1: Removed 'layout' prop.
    // Using CSS 'transition-all' for smooth flex resizing.
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`
        relative group overflow-hidden border-r border-l border-t lg:border-t-0 border-b border-[#6a6931]/20
        ${
          isActive
            ? "lg:flex-[3]"
            : isPeerActive
              ? "lg:flex-[1] grayscale brightness-90"
              : "lg:flex-[1]"
        }
        h-[500px] lg:h-auto flex flex-col transition-all duration-500 ease-in-out cursor-default
        bg-white
      `}
    >
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* OPTIMIZATION 2: Simple Opacity Fade instead of complex layout animations */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`}
        >
          {/* OPTIMIZATION 3: Async decoding and eager loading to prevent flash */}
          <img
            src={data.image}
            alt={data.name}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
        </div>
      </div>

      {/* 2. TOP TECHNICAL HEADER */}
      <div className="relative z-20 p-6 flex justify-between items-start border-b border-[#6a6931]/10 group-hover:border-white/20 transition-colors">
        <div className="flex items-center gap-3">
          <span
            className={`font-mono text-sm font-bold px-2 py-1 rounded transition-colors ${
              isActive
                ? "bg-[#f1c83d] text-black"
                : "bg-[#6a6931]/10 text-[#6a6931]"
            }`}
          >
            {data.id}
          </span>
          <span
            className={`font-mono text-xs uppercase tracking-widest transition-colors ${
              isActive ? "text-white/70" : "text-gray-400"
            }`}
          >
            {data.sub}
          </span>
        </div>
        {/* CSS Rotate is cheaper than JS rotate */}
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${
            isActive
              ? "rotate-45 border-white/30 bg-white/10 text-[#f1c83d]"
              : "rotate-0 border-gray-200 text-gray-400"
          }`}
        >
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="relative z-20 flex-grow flex flex-col justify-end p-6 lg:p-10">
        {/* Giant Chemical Formula */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <span
            className={`text-8xl lg:text-9xl font-black tracking-tighter transition-all duration-700 ${
              isActive
                ? "text-white opacity-[0.1] scale-110 -translate-y-12"
                : "text-[#6a6931] opacity-[0.05] scale-100 translate-y-0"
            }`}
          >
            {data.chemical}
          </span>
        </div>

        {/* Text Content */}
        <div className="relative z-10">
          <h2
            className={`text-4xl lg:text-6xl font-serif mb-4 transition-colors duration-300 ${
              isActive ? "text-white" : "text-[#1a1a1a]"
            }`}
          >
            {data.name}
          </h2>

          {/* OPTIMIZATION 4: AnimatePresence allows smooth entry/exit of DOM nodes */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-white/20">
                  <p className="text-gray-300 text-lg mb-8 max-w-lg font-light leading-relaxed">
                    {data.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-8 mb-8">
                    {data.stats.map((stat, i) => (
                      <div key={i}>
                        <p className="text-xs text-[#f1c83d] uppercase tracking-widest font-bold mb-1">
                          {stat.label}
                        </p>
                        <p className="text-xl font-mono text-white">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {data.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full border border-white/20 text-xs text-white uppercase tracking-wider hover:bg-white hover:text-black transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Idle State "Click to Explore" hint */}
          <div
            className={`mt-4 flex items-center gap-2 text-[#6a6931] font-medium text-sm transition-opacity duration-300 ${
              isActive
                ? "opacity-0"
                : "opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
            }`}
          >
            <Target className="w-4 h-4" />
            <span>Explore Specs</span>
          </div>
        </div>
      </div>

      {/* Decorative Active Bar */}
      <div
        className={`absolute bottom-0 left-0 h-2 bg-[#f1c83d] transition-all duration-500 ease-out ${
          isActive ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
};

// --- UTILS ---
const Crosshair = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
  >
    <line x1="12" y1="0" x2="12" y2="24" />
    <line x1="0" y1="12" x2="24" y2="12" />
    <circle cx="12" cy="12" r="8" strokeDasharray="2 2" />
  </svg>
);

export default IndustrialPhenomenon;
