"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Globe, Award } from "lucide-react";

// --- CLIENT DATA (Kept for your usage) ---
const CLIENTS = [
  { name: "Hilton", id: 1 },
  { name: "Marriott", id: 2 },
  { name: "Emaar", id: 3 },
  { name: "Zaha Hadid", id: 4 },
  { name: "Four Seasons", id: 5 },
  { name: "Ritz Carlton", id: 6 },
  { name: "Damac", id: 7 },
];

export default function HeroSectionOptimized() {
  const containerRef = useRef(null);

  // OPTIMIZATION 1: Lighter Scroll Hook
  // We attach the scroll listener only to this container if possible, or global window
  const { scrollY } = useScroll();

  // OPTIMIZATION 2: Reduced Parallax Calculation
  // We map a smaller range to reduce "jitter" on lower refresh rate screens
  const yBackground = useTransform(scrollY, [0, 800], [0, 100]);
  const opacityContent = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={containerRef}
      // REMOVED: onMouseMove (This was the main cause of lag)
      className="relative h-[1000px] w-full overflow-hidden bg-[#0a0a0a] text-white flex flex-col justify-between"
    >
      {/* =========================================
          LAYER 1: BACKGROUND (GPU OPTIMIZED)
         ========================================= */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 z-0 flex w-full h-full will-change-transform" // 'will-change' tells browser to prep GPU
      >
        {/* REPLACEMENT FOR MOUSE SPOTLIGHT: Static Cinematic Vignette 
            This costs 0% CPU compared to the mouse tracker. */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 60%)",
          }}
        />

        <div className="absolute inset-0 bg-[#050505]" />

        {/* --- TRIPTYCH LAYOUT (Optimized) --- */}
        <div className="absolute inset-0 z-0 flex w-full h-full">
          {/* === LEFT PANEL === */}
          <div className="relative flex-1 h-full overflow-hidden">
            <img
              src="/bg3.jpg"
              alt="Gold Vein Marble"
              loading="eager" // Load immediately
              decoding="async" // Don't block main thread
              className="w-full h-full object-cover opacity-80"
            />
            {/* Optimized Gradient: Simple opacity fade instead of complex blends */}
            <div className="absolute inset-y-0 right-0 w-[50%] bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
          </div>

          {/* === CENTER PANEL === */}
          <div className="relative flex-[1.3] h-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20" />
            <img
              src="/bg.jpg"
              alt="Black Marquina"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover opacity-100 scale-105"
            />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20" />
          </div>

          {/* === RIGHT PANEL === */}
          <div className="relative flex-1 h-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
            <img
              src="/bg33.jpg"
              alt="Grey Stone"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover opacity-70"
            />
          </div>

          {/* Global Shadow Floor */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a] z-30 pointer-events-none"></div>
        </div>
      </motion.div>

      {/* Noise Texture - Kept but made static */}
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* =========================================
          LAYER 2: MAIN CONTENT
         ========================================= */}
      <motion.div
        style={{ opacity: opacityContent }}
        className="container mx-auto px-6 relative z-30 flex-grow flex flex-col justify-center items-center text-center mt-16 will-change-opacity"
      >
        <div className="max-w-4xl flex flex-col items-center">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm" // reduced blur for performance
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#f1c83d]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-400">
              150 MILLION YEAR LEGACY
            </span>
          </motion.div>

          {/* HEADLINE */}
          <div className="relative mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col items-center justify-center leading-none"
            >
              <span className="font-old-serif italic text-4xl md:text-6xl text-stone-500 mb-2">
                Premium
              </span>
              <span className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-stone-200 to-stone-500 drop-shadow-2xl">
                OMANI MARBLE & STONE
              </span>
              <span className="text-sm md:text-xl font-light text-stone-400 mt-4 tracking-[0.4em] uppercase">
                Architectural Solutions
              </span>
            </motion.h1>
          </div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base md:text-lg text-stone-400 font-light leading-relaxed max-w-xl mb-10"
          >
            Every great project starts with{" "}
            <span className="text-white">an idea.</span> We shape luxury homes
            and landmarks, offering not just stone but a story etched with
            timeless secrets.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* OPTIMIZED DOWNLOAD BUTTON */}
            <a
              href="/UbarStone2025.pdf"
              download="UbarStone_Catalogue_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-[#f1c83d] text-black text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-[#dgb330] transition-all overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download Catalogue <Download size={16} />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <button className="group px-8 py-3 border border-white/20 text-white text-sm font-medium uppercase tracking-wider rounded-sm hover:border-white hover:bg-white/5 transition-all flex items-center gap-2 backdrop-blur-sm">
              Explore Gallery{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* =========================================
          LAYER 3: BOTTOM DATA
         ========================================= */}
      <div className="relative z-30 flex flex-col">
        {/* Floating Technical Stats */}
        <div className="hidden md:flex justify-between px-8 pb-2 text-[10px] font-mono text-stone-600 tracking-wider uppercase">
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <Globe size={10} /> Global Shipping: Active
            </span>
            <span className="flex items-center gap-1">
              <Award size={10} /> ISO 9001:2015
            </span>
          </div>
          <div className="flex gap-4 text-right">
            <span className="text-stone-500">Sultanate of Oman</span>
            <span>23.5880° N, 58.3829° E</span>
          </div>
        </div>
      </div>
    </section>
  );
}
