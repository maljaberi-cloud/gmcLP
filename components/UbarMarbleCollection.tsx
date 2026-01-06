"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, PenTool, ArrowUpRight, Sparkles } from "lucide-react";

// --- DATA SOURCE (Based on your uploaded image) ---
const COLLECTIONS = [
  {
    id: "fanar",
    name: "Fanar",
    sub: "Dark Beige",
    description: "Dark beige with soft natural veining.",
    finishes: ["Polished", "Honed", "Sandblasted", "Bush Hammered"],
    applications: [
      "Floors",
      "Walls",
      "Stairs",
      "Interior & Exterior Cladding",
      "Washbasins",
      "Kitchens",
    ],
    // Placeholder for distinct stone texture
    image: "/bg.png",
    accent: "#d4c4a6", // subtle beige accent
  },
  {
    id: "morooj",
    name: "Morooj",
    sub: "Dark Pink",
    description: "Deep Pink stone offering bespoke luxury.",
    finishes: ["Polished", "Honed", "Sandblasted", "Bush Hammered"],
    applications: [
      "Floors",
      "Walls",
      "Columns",
      "Luxury Halls",
      "Architectural Decorative Elements",
    ],
    // Placeholder for pinkish stone
    image: "/nbg.png",
    accent: "#dcaeb6", // subtle pink accent
  },
  {
    id: "reedan",
    name: "Reedan",
    sub: "Light Beige",
    description: "Light Beige-Grey elegance.",
    finishes: ["Polished", "Honed", "Sandblasted", "Bush Hammered"],
    applications: ["Floors", "Walls", "Stairs", "Washbasins"],
    // Placeholder for light grey stone
    image: "/bg1.jpg",
    accent: "#e2e2e2", // subtle grey accent
  },
];

const UbarMarbleCollection = () => {
  const [activeStone, setActiveStone] = useState(0);

  return (
    <section className="relative w-full bg-white py-24 lg:py-32 font-sans overflow-hidden">
      {/* Background Typography Watermark */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <h1 className="text-[12rem] font-serif whitespace-nowrap text-[#6a6931]">
          NATURAL MARBLE
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
            className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight"
          >
            "When stone speaks. We don't shape marble,{" "}
            <span className="text-[#6a6931] italic">
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
                className={`group relative text-left p-6 transition-all duration-500 border-l-2 ${
                  activeStone === index
                    ? "border-[#f1c83d] bg-gray-50"
                    : "border-gray-200 hover:border-[#6a6931] hover:bg-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span
                      className={`block text-xs font-bold tracking-wider uppercase mb-1 transition-colors ${
                        activeStone === index
                          ? "text-[#f1c83d]"
                          : "text-gray-400 group-hover:text-[#6a6931]"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <h3
                      className={`text-3xl font-serif transition-colors ${
                        activeStone === index
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
                  className={`overflow-hidden transition-all duration-500 ${
                    activeStone === index
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
          <div className="lg:col-span-8 relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={COLLECTIONS[activeStone].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="h-full flex flex-col md:flex-row gap-8"
              >
                {/* Visual Card */}
                <div className="md:w-1/2 relative group">
                  {/* Abstract Decorative Box */}
                  <div className="absolute top-4 -right-4 w-full h-full border-2 border-[#f1c83d] opacity-30 z-0" />

                  <div className="relative w-full h-[450px] overflow-hidden bg-gray-100 shadow-2xl z-10">
                    <img
                      src={COLLECTIONS[activeStone].image}
                      alt={COLLECTIONS[activeStone].name}
                      className="w-full h-full object-cover transform transition-transform duration-[1.5s] group-hover:scale-110"
                    />
                    {/* Gradient overlay for text readability if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-sm uppercase tracking-widest opacity-80 mb-1">
                        Color Profile
                      </p>
                      <p className="text-xl font-serif">
                        {COLLECTIONS[activeStone].sub}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Specs Card */}
                <div className="md:w-1/2 flex flex-col justify-center py-4">
                  <motion.h3
                    className="text-3xl font-serif text-gray-900 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {COLLECTIONS[activeStone].name}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 leading-relaxed mb-8 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {COLLECTIONS[activeStone].description}
                  </motion.p>

                  <div className="space-y-8">
                    {/* Finishes */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-2 mb-3 text-[#6a6931] font-bold text-xs uppercase tracking-widest">
                        <Layers className="w-4 h-4" />
                        Available Finishes
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {COLLECTIONS[activeStone].finishes.map((finish) => (
                          <span
                            key={finish}
                            className="px-3 py-1 bg-[#f9f9f9] border border-gray-200 text-gray-600 text-sm"
                          >
                            {finish}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Applications */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center gap-2 mb-3 text-[#f1c83d] font-bold text-xs uppercase tracking-widest">
                        <PenTool className="w-4 h-4" />
                        Applications
                      </div>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-600 text-sm">
                        {COLLECTIONS[activeStone].applications.map((app) => (
                          <li key={app} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f1c83d] mt-1.5 shrink-0" />
                            {app}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
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
