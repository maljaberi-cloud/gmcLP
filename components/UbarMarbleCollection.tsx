"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  PenTool,
  ArrowUpRight,
  Sparkles,
  Box,
  Ruler,
  ScanLine,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const IMAGES = ["/bg.png", "/nbg.png", "/bg1.jpg"];

const UbarMarbleCollection = () => {
  const [activeStone, setActiveStone] = useState(0);
  const { t } = useLanguage();
  const stones = t.collection.stones;

  return (
    <section
      id="products"
      className="relative w-full bg-white py-24 lg:py-32 font-sans overflow-hidden"
    >
      {/* Background Typography */}
      <div className="absolute top-10 left-70 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <h1 className="text-[12rem] font-serif whitespace-nowrap text-[#6a6931]">
          UBAR STONE
        </h1>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        {/* SECTION HEADER */}
        <div className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <Sparkles className="w-5 h-5 text-[#f1c83d]" />
            <span className="text-[#6a6931] font-bold tracking-widest uppercase text-xs font-cairo">
              {t.collection.sectionTag}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-serif text-gray-900 leading-tight font-cairo"
          >
            {t.collection.headline}{" "}
            <span className="text-[#6a6931] font-serif italic">
              {t.collection.headlineItalic}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-500 max-w-2xl text-lg font-cairo"
          >
            {t.collection.subheading}
          </motion.p>
        </div>

        {/* INTERACTIVE SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* LEFT: Navigation / Selector */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
            {stones.map((stone, index) => (
              <button
                key={stone.id}
                onClick={() => setActiveStone(index)}
                className={`group relative text-left p-6 transition-all duration-300 border-l-2 ${
                  activeStone === index
                    ? "border-[#f1c83d] bg-gray-50"
                    : "border-gray-200 hover:border-[#6a6931] hover:bg-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span
                      className={`block text-xs font-bold tracking-wider uppercase mb-1 transition-colors font-cairo ${
                        activeStone === index
                          ? "text-[#f1c83d]"
                          : "text-gray-400 group-hover:text-[#6a6931]"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <h3
                      className={`text-3xl font-serif transition-colors font-cairo ${
                        activeStone === index
                          ? "text-gray-900"
                          : "text-gray-300 group-hover:text-gray-600"
                      }`}
                    >
                      {stone.name}
                    </h3>
                  </div>
                  <ArrowUpRight
                    className={`text-[#f1c83d] transition-opacity duration-300 ${activeStone === index ? "opacity-100" : "opacity-0"}`}
                  />
                </div>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    activeStone === index
                      ? "grid-rows-[1fr] opacity-100 mt-2"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#6a6931] font-medium font-cairo">{stone.sub}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: Dynamic Display Area */}
          <div className="lg:col-span-8 relative min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={stones[activeStone].id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full flex flex-col md:flex-row gap-0 shadow-2xl shadow-gray-200/50 bg-white"
              >
                {/* 1. VISUAL CARD (Image) */}
                <div className="md:w-[45%] relative group overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />

                  <img
                    src={IMAGES[activeStone]}
                    alt={stones[activeStone].name}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                  />

                  {/* Floating Label */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-[1px] bg-[#f1c83d]"></div>
                      <span className="text-xs text-[#f1c83d] uppercase tracking-widest font-bold font-cairo">
                        {t.collection.rawMaterial}
                      </span>
                    </div>
                    <p className="text-white font-serif text-2xl italic font-cairo">
                      {stones[activeStone].sub}
                    </p>
                  </div>
                </div>

                {/* 2. THE SPECS CARD */}
                <div className="md:w-[55%] relative bg-white p-8 lg:p-10 flex flex-col">
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                      backgroundImage: `linear-gradient(#6a6931 0.5px, transparent 0.5px), linear-gradient(90deg, #6a6931 0.5px, transparent 0.5px)`,
                      backgroundSize: "20px 20px",
                    }}
                  ></div>

                  {/* Header */}
                  <div className="relative z-10 flex justify-between items-start mb-8 border-b border-gray-100 pb-6">
                    <div>
                      <span className="inline-flex items-center gap-2 px-2 py-1 bg-[#6a6931]/5 text-[#6a6931] text-[10px] uppercase font-bold tracking-widest rounded mb-2 font-cairo">
                        <ScanLine size={10} />
                        {t.collection.specSheet}
                      </span>
                      <h3 className="text-4xl lg:text-5xl font-serif text-gray-900 font-cairo">
                        {stones[activeStone].name}
                      </h3>
                    </div>
                    <div className="text-right hidden sm:block">
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-mono mb-1 font-cairo">
                        {t.collection.skuCode}
                      </p>
                      <p className="text-sm font-mono font-bold text-[#6a6931]">
                        {stones[activeStone].code}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="relative z-10 text-gray-500 leading-relaxed font-light text-md mb-8 pr-4 font-cairo">
                    {stones[activeStone].description}
                  </p>

                  {/* Tech Grid */}
                  <div className="relative z-10 grid grid-cols-2 gap-y-8 gap-x-4 mb-10">
                    {/* Finishes */}
                    <div className="col-span-2">
                      <div className="flex items-center gap-2 mb-4 text-[#1a1a1a] font-bold text-[10px] uppercase tracking-[0.2em] border-b border-gray-100 pb-2 font-cairo">
                        <Layers className="w-3 h-3 text-[#f1c83d]" />
                        {t.collection.surfaceFinishes}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {stones[activeStone].finishes.map((finish) => (
                          <span
                            key={finish}
                            className="group/tag relative px-3 py-1.5 border border-gray-200 text-gray-500 text-xs tracking-wide uppercase hover:border-[#6a6931] hover:text-[#6a6931] transition-colors cursor-default font-cairo"
                          >
                            {finish}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Thickness */}
                    <div>
                      <div className="flex items-center gap-2 mb-3 text-[#1a1a1a] font-bold text-[10px] uppercase tracking-[0.2em] font-cairo">
                        <Box className="w-3 h-3 text-[#f1c83d]" />
                        {t.collection.thickness}
                      </div>
                      <p className="font-mono text-xl text-[#6a6931]">
                        {stones[activeStone].thickness}
                      </p>
                    </div>

                    {/* Applications */}
                    <div>
                      <div className="flex items-center gap-2 mb-3 text-[#1a1a1a] font-bold text-[10px] uppercase tracking-[0.2em] font-cairo">
                        <PenTool className="w-3 h-3 text-[#f1c83d]" />
                        {t.collection.primaryUse}
                      </div>
                      <p className="text-xs text-gray-500 leading-6 font-cairo">
                        {stones[activeStone].applications.slice(0, 3).join(", ")}
                        <br />
                        <span className="italic text-[#f1c83d]">
                          + {stones[activeStone].applications.length - 3}{" "}
                          {t.collection.more}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Action Footer */}
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#1a1a1a] hover:text-[#6a6931] transition-colors group font-cairo">
                      <span className="w-8 h-8 rounded-full bg-[#f8f8f6] flex items-center justify-center group-hover:bg-[#f1c83d] transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                      {t.collection.requestSample}
                    </button>

                    <Ruler className="text-gray-200 w-10 h-10 stroke-1" />
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
