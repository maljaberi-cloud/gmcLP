"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";

export default function HeroSectionOptimized() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // --- PARALLAX PHYSICS ---
  // We keep the movement subtle (0 to 300px) so it feels heavy/luxurious.
  const yBackground = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityContent = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] text-white flex items-center justify-center"
    >
      {/* =========================================
          LAYER 1: TRIPTYCH MATERIAL BACKGROUND
         ========================================= */}
      {/* --- LAYER 1: THE REFINED TRIPTYCH (Seamless Blending) --- */}
      <motion.div
        style={{ y: yBackground, scale: 1.1 }}
        className="absolute inset-0 z-0 flex w-full h-full"
      >
        {/* === LEFT PANEL (Beige/Gold) === */}
        {/* Strategy: Needs a heavy fade on the right to kill the brightness */}
        <div className="relative flex-1 h-full overflow-hidden">
          <img
            src="/bg1.jpg"
            alt="Gold Vein Marble"
            className="w-full h-full object-cover opacity-80" // Higher opacity to show detail
          />
          {/* THE FIX: Ultra-wide gradient (w-96) to prevent the "Black Bar" look */}
          <div className="absolute inset-y-0 right-0 w-[50%] bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10" />
        </div>

        {/* === CENTER PANEL (Black Marquina) === */}
        {/* Strategy: This is the "Void". It connects the other two. */}
        <div className="relative flex-[1.3] h-full overflow-hidden">
          {/* Left Blend: Softens the transition from Beige */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20" />

          <img
            src="/bg.jpg"
            alt="Black Marquina"
            className="w-full h-full object-cover opacity-100 scale-105"
          />

          {/* Right Blend: Softens the transition to Grey */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20" />
        </div>

        {/* === RIGHT PANEL (Grey/Slate) === */}
        {/* Strategy: Needs a medium fade. Easier to blend than beige. */}
        <div className="relative flex-1 h-full overflow-hidden">
          {/* Left Blend: Connects to the center black */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />

          <img
            src="/bg3.png"
            alt="Grey Stone"
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        {/* === GLOBAL UNIFIER === */}
        {/* This creates a "floor" and "ceiling" of shadow to focus the eye */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a] z-30 pointer-events-none"></div>
      </motion.div>

      {/* =========================================
          LAYER 2: CINEMATIC NOISE
         ========================================= */}
      <div className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      {/* =========================================
          LAYER 3: CONTENT INTERFACE
         ========================================= */}
      <motion.div
        style={{ opacity: opacityContent }}
        className="container mx-auto px-6 relative z-30 h-full flex flex-col justify-center items-center text-center"
      >
        <div className="max-w-4xl flex flex-col items-center">
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="h-16 w-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              {/* ⚠️ Ensure your logo is high-res png or svg */}
              <img
                src="/logo.png"
                alt="Global Mining"
                className="w-10 h-10 opacity-110"
              />
            </div>
          </motion.div>

          {/* EYEBROW #f1c83d*/}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#f1c83d]"></span>
            <span className="font-mono text-xs text-[#f1c83d] tracking-[0.3em] uppercase drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
              Ubar Stone
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#f1c83d]/50"></span>
          </motion.div>

          {/* HEADLINE */}
          <div className="relative mb-8">
            <motion.h1
              initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} // Custom bezier for "Heavy" feel
              className="text-[10vw] md:text-[6.5rem] leading-[0.85] font-light tracking-tighter"
            >
              <span className="font-serif italic text-stone-400 block mix-blend-difference">
                Premium Artificial
              </span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 block">
                Marble & Onyx
              </span>
              <span className="font-serif italic text-stone-500 block">
                Solutions.
              </span>
            </motion.h1>
          </div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-stone-400 font-light leading-relaxed max-w-2xl mb-12"
          >
            The manufacturing arm of{" "}
            <span className="text-stone-200 font-medium">
              Ubar Stone L.L.C.
            </span>{" "}
            specializing in high-grade Agglomerated Marble and Calcium Carbonate
            Powder.{" "}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <button className="group relative px-8 py-4 bg-[#f1c83d] text-stone-950 overflow-hidden rounded-sm hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.6)] transition-all duration-500">
              <span className="relative z-10 flex items-center gap-2  tracking-wide font-medium">
                Download Brochure{" "}
                <Download className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Button Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* =========================================
          LAYER 4: TECHNICAL OVERLAYS
         ========================================= */}
      <div className="absolute bottom-8 left-8 flex flex-col gap-1 hidden md:flex">
        <span className="text-stone-600 text-[10px] font-mono tracking-widest uppercase">
          System Status
        </span>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-stone-400 text-xs font-mono">OPERATIONAL</span>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 text-right hidden md:block group cursor-crosshair">
        <div className="flex items-center justify-end gap-2 text-stone-600 group-hover:text-amber-500 transition-colors mb-1">
          <MapPin size={12} />
        </div>
        <div className="text-sm font-bold font-sans text-stone-400 group-hover:text-white transition-colors">
          Sultanate of Oman
        </div>
        <div className="text-[10px] text-stone-600 font-mono mt-1 uppercase tracking-widest group-hover:text-stone-400 transition-colors">
          23.5880° N, 58.3829° E
        </div>
      </div>
    </section>
  );
}
