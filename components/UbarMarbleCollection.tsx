"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, PenTool, ArrowUpRight, Sparkles, Box, Ruler, ScanLine } from "lucide-react";

// --- DATA SOURCE ---
const COLLECTIONS = [
  {
    id: "fanar",
    name: "Fanar",
    sub: "Dark Beige",
    description: "Dark beige with soft natural veining. A testament to earthen warmth.",
    finishes: ["Polished", "Honed", "Sandblasted", "Bush Hammered"],
    applications: [
      "Floors",
      "Walls",
      "Stairs",
      "Interior Cladding",
      "Washbasins",
      "Kitchens",
    ],
    image: "/bg.png",
    code: "UB-FN-01",
    density: "2.65 g/cm³"
  },
  {
    id: "morooj",
    name: "Morooj",
    sub: "Dark Pink",
    description: "Deep Pink stone offering bespoke luxury. Rare and geometrically complex.",
    finishes: ["Polished", "Honed", "Sandblasted", "Bush Hammered"],
    applications: [
      "Floors",
      "Walls",
      "Columns",
      "Luxury Halls",
      "Decor Elements",
    ],
    image: "/nbg.png",
    code: "UB-MJ-02",
    density: "2.71 g/cm³"
  },
  {
    id: "reedan",
    name: "Reedan",
    sub: "Light Beige",
    description: "Light Beige-Grey elegance. Minimalist tone for modern spaces.",
    finishes: ["Polished", "Honed", "Sandblasted", "Bush Hammered"],
    applications: ["Floors", "Walls", "Stairs", "Washbasins"],
    image: "/bg1.jpg",
    code: "UB-RD-03",
    density: "2.58 g/cm³"
  },
];

const UbarMarbleCollection = () => {
  const [activeStone, setActiveStone] = useState(0);

  return (
    <section className="relative w-full bg-white py-24 lg:py-32 font-sans overflow-hidden">
      {/* Background Typography Watermark */}
      <div className="absolute top-10 left-70 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <h1 className="text-[12rem] font-serif whitespace-nowrap text-[#6a6931]">
          UBAR STONE
        </h1>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        {/* --- SECTION HEADER --- */}
        <div className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <Sparkles className="w-5 h-5 text-[#f1c83d]" />
            <span className="text-[#6a6931] font-bold tracking-widest uppercase text-xs">
              The Natural Marble Collection
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-serif text-gray-900 leading-tight"
          >
            "When stone speaks. We don't shape marble,{" "}
            <span className="text-[#6a6931] font-serif italic">
              we reveal its beauty."
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-500 max-w-2xl text-lg"
          >
            Discover three unique Omani marbles, each with its own color,
            rhythm, and timeless story.
          </motion.p>
        </div>

        {/* --- INTERACTIVE SHOWCASE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* LEFT: Navigation / Selector */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            {COLLECTIONS.map((stone, index) => (
              <button
                key={stone.id}
                onClick={() => setActiveStone(index)}
                className={`group relative text-left p-6 transition-all duration-500 border-l-2 ${activeStone === index
                  ? "border-[#f1c83d] bg-gray-50"
                  : "border-gray-200 hover:border-[#6a6931] hover:bg-white"
                  }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span
                      className={`block text-xs font-bold tracking-wider uppercase mb-1 transition-colors ${activeStone === index
                        ? "text-[#f1c83d]"
                        : "text-gray-400 group-hover:text-[#6a6931]"
                        }`}
                    >
                      0{index + 1}
                    </span>
                    <h3
                      className={`text-3xl font-serif transition-colors ${activeStone === index
                        ? "text-gray-900"
                        : "text-gray-300 group-hover:text-gray-600"
                        }`}
                    >
                      {stone.name}
                    </h3>
                  </div>
                  {activeStone === index && (
                    <motion.div layoutId="arrow-indicator">
                      <ArrowUpRight className="text-[#f1c83d]" />
                    </motion.div>
                  )}
                </div>

                {/* Sub-label revealed on hover or active */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${activeStone === index
                    ? "max-h-20 mt-2 opacity-100"
                    : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-[#6a6931] font-medium">{stone.sub}</p>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: Dynamic Display Area */}
          <div className="lg:col-span-8 relative min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={COLLECTIONS[activeStone].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-full flex flex-col md:flex-row gap-0 shadow-2xl shadow-gray-200/50 bg-white"
              >
                {/* 1. VISUAL CARD (Image) */}
                <div className="md:w-[45%] relative group overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />

                  {/* Image */}
                  <img
                    src={COLLECTIONS[activeStone].image}
                    alt={COLLECTIONS[activeStone].name}
                    className="w-full h-full object-cover transform transition-transform duration-[2s] ease-out group-hover:scale-110"
                  />

                  {/* Floating Label over image */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-[1px] bg-[#f1c83d]"></div>
                      <span className="text-xs text-[#f1c83d] uppercase tracking-widest font-bold">Raw Material</span>
                    </div>
                    <p className="text-white font-serif text-2xl italic">{COLLECTIONS[activeStone].sub}</p>
                  </div>
                </div>

                {/* 2. THE SPECS CARD (Mind Blowing Upgrade) */}
                <div className="md:w-[55%] relative bg-white p-8 lg:p-10 flex flex-col">
                  {/* Decorative Technical Grid Background */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{ backgroundImage: `linear-gradient(#6a6931 0.5px, transparent 0.5px), linear-gradient(90deg, #6a6931 0.5px, transparent 0.5px)`, backgroundSize: '20px 20px' }}>
                  </div>

                  {/* Header: Title & Code */}
                  <div className="relative z-10 flex justify-between items-start mb-8 border-b border-gray-100 pb-6">
                    <div>
                      <span className="inline-flex items-center gap-2 px-2 py-1 bg-[#6a6931]/5 text-[#6a6931] text-[10px] uppercase font-bold tracking-widest rounded mb-2">
                        <ScanLine size={10} />
                        Specification Sheet
                      </span>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-5xl font-serif text-gray-900"
                      >
                        {COLLECTIONS[activeStone].name}
                      </motion.h3>
                    </div>
                    {/* Technical Code Stamp */}
                    <div className="text-right hidden sm:block">
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-mono mb-1">SKU Code</p>
                      <p className="text-sm font-mono font-bold text-[#6a6931]">{COLLECTIONS[activeStone].code}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="relative z-10 text-gray-500 leading-relaxed font-light text-md mb-8 pr-4"
                  >
                    {COLLECTIONS[activeStone].description}
                  </motion.p>

                  {/* Tech Grid */}
                  <div className="relative z-10 grid grid-cols-2 gap-y-8 gap-x-4 mb-10">

                    {/* Finishes Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="col-span-2"
                    >
                      <div className="flex items-center gap-2 mb-4 text-[#1a1a1a] font-bold text-[10px] uppercase tracking-[0.2em] border-b border-gray-100 pb-2">
                        <Layers className="w-3 h-3 text-[#f1c83d]" />
                        Surface Finishes
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {COLLECTIONS[activeStone].finishes.map((finish, i) => (
                          <span
                            key={finish}
                            className="group/tag relative px-3 py-1.5 border border-gray-200 text-gray-500 text-xs tracking-wide uppercase hover:border-[#6a6931] hover:text-[#6a6931] transition-colors cursor-default"
                          >
                            {finish}
                            {/* Tiny corner accent on hover */}
                            <span className="absolute top-0 right-0 w-1 h-1 bg-[#f1c83d] opacity-0 group-hover/tag:opacity-100 transition-opacity" />
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Technical Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex items-center gap-2 mb-3 text-[#1a1a1a] font-bold text-[10px] uppercase tracking-[0.2em]">
                        <Box className="w-3 h-3 text-[#f1c83d]" />
                        Density
                      </div>
                      <p className="font-mono text-xl text-[#6a6931]">{COLLECTIONS[activeStone].density}</p>
                    </motion.div>

                    {/* Applications List */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-2 mb-3 text-[#1a1a1a] font-bold text-[10px] uppercase tracking-[0.2em]">
                        <PenTool className="w-3 h-3 text-[#f1c83d]" />
                        Primary Use
                      </div>
                      <p className="text-xs text-gray-500 leading-6">
                        {COLLECTIONS[activeStone].applications.slice(0, 3).join(", ")}
                        <br />
                        <span className="italic text-[#f1c83d]">+ {COLLECTIONS[activeStone].applications.length - 3} more</span>
                      </p>
                    </motion.div>
                  </div>

                  {/* Action Footer */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between"
                  >
                    <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#1a1a1a] hover:text-[#6a6931] transition-colors group">
                      <span className="w-8 h-8 rounded-full bg-[#f8f8f6] flex items-center justify-center group-hover:bg-[#f1c83d] transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                      Request Sample
                    </button>

                    <Ruler className="text-gray-200 w-10 h-10 stroke-1" />
                  </motion.div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UbarMarbleCollection;