"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { ArrowRight, Download, MapPin, Globe, Award, Menu } from "lucide-react";

// --- CLIENT DATA ---
const CLIENTS = [
  { name: "Hilton", id: 1 },
  { name: "Marriott", id: 2 },
  { name: "Emaar", id: 3 },
  { name: "Zaha Hadid", id: 4 },
  { name: "Four Seasons", id: 5 },
  { name: "Ritz Carlton", id: 6 },
  { name: "Damac", id: 7 },
];

// --- COMPONENTS ---

const LogoMarquee = () => {
  return (
    <div className="w-full relative z-40 border-t border-white/5 bg-black/40 backdrop-blur-md py-4">
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

      <div className="container mx-auto px-6 mb-3 flex justify-between items-end">
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-600">
          Trusted by Global Visionaries
        </p>
      </div>

      <div className="flex overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 pr-24 items-center whitespace-nowrap"
        >
          {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map(
            (client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity duration-500 cursor-pointer group"
              >
                <div className="h-2 w-2 bg-stone-600 rounded-full group-hover:bg-[#f1c83d] transition-colors" />
                <span className="text-lg font-serif text-stone-300 group-hover:text-white tracking-wide">
                  {client.name}
                </span>
              </div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default function HeroSectionOptimized() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // --- MOUSE SPOTLIGHT ---
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // --- REFINED PARALLAX (Subtler movement) ---
  const yBackground = useTransform(scrollY, [0, 1000], [0, 150]); // Reduced movement
  const opacityContent = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[1000px] w-full overflow-hidden bg-[#0a0a0a] text-white flex flex-col justify-between"
    >
      {/* =========================================
          LAYER 1: BACKGROUND (Zoomed Out for clean look)
         ========================================= */}
      <motion.div
        style={{ y: yBackground, scale: 1.05 }} // Reduced scale from 1.1 to 1.05
        className="absolute inset-0 z-0 flex w-full h-full"
      >
        {/* Spotlight Effect */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-50"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                800px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.10),
                transparent 80%
              )
            `,
          }}
        />
        {/* --- Background Image Composition --- */}
        {/* We use a single high-quality marble texture or the triptych. 
            For the "Clean" look, a unified dark texture often works best, 
            but I will maintain the triptych logic with better blending. */}
        <div className="absolute inset-0 bg-[#050505]" />{" "}
        {/* Base Dark Layer */}
        {/* --- LAYER 1: THE REFINED TRIPTYCH (Seamless Blending) --- */}
        <motion.div
          style={{ y: yBackground, scale: 1.1 }}
          className="absolute inset-0 z-0 flex w-full h-full"
        >
          {/* === LEFT PANEL (Beige/Gold) === */}
          {/* Strategy: Needs a heavy fade on the right to kill the brightness */}
          <div className="relative flex-1 h-full overflow-hidden">
            <img
              src="/bg3.jpg"
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
              src="/bg33.jpg"
              alt="Grey Stone"
              className="w-full h-full object-cover opacity-70"
            />
          </div>

          {/* === GLOBAL UNIFIER === */}
          {/* This creates a "floor" and "ceiling" of shadow to focus the eye */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a] z-30 pointer-events-none"></div>
        </motion.div>
        {/* Vignette to focus center */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0a0a0a]/40 to-[#0a0a0a] z-10" />
      </motion.div>

      {/* Noise Texture */}
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      {/* =========================================
          LAYER 2: MAIN CONTENT (Centered & Scaled Down)
         ========================================= */}
      <motion.div
        style={{ opacity: opacityContent }}
        className="container mx-auto px-6 relative z-30 flex-grow flex flex-col justify-center items-center text-center mt-16"
      >
        <div className="max-w-4xl flex flex-col items-center">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-black/20 backdrop-blur-md"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#f1c83d]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-400">
              150 MILLION YEAR LEGACY
            </span>
          </motion.div>

          {/* HEADLINE - REFINED TYPOGRAPHY */}
          {/* Changed from 12vw to specific rems for better control */}
          <div className="relative mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col items-center justify-center leading-none"
            >
              <span className="font-serif italic text-4xl md:text-6xl text-stone-500 mb-2">
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

          {/* DESCRIPTION - LIGHTER & SMALLER */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg text-stone-400 font-light leading-relaxed max-w-xl mb-10"
          >
            Every great project starts with{" "}
            <span className="text-white">an idea.</span>We shape luxury homes
            and landmarks, offering not just stone but a story etched with
            timeless secrets.
          </motion.p>

          {/* BUTTONS - ELEGANT SIZING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="group relative px-8 py-3 bg-[#f1c83d] text-black text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-[#dgb330] transition-all overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Download Catalogue <Download size={16} />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

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

        {/* MARQUEE */}
        <LogoMarquee />
      </div>
    </section>
  );
}
