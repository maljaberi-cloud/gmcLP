"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { Play, X, Activity, Cpu, Scan } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const VIDEO_SRC = "/vid.mp4";

const HUDCorner = ({ position }: { position: "tl" | "tr" | "bl" | "br" }) => {
  const styles = {
    tl: "top-4 left-4 border-l-2 border-t-2",
    tr: "top-4 right-4 border-r-2 border-t-2",
    bl: "bottom-4 left-4 border-l-2 border-b-2",
    br: "bottom-4 right-4 border-r-2 border-b-2",
  };
  return (
    <div className={`absolute w-8 h-8 border-white/30 z-20 ${styles[position]}`} />
  );
};

export default function CinematicVideo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.4] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-multiply" />
      <div
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4 bg-stone-100 border border-stone-200 px-3 py-1 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#f1c83d] animate-pulse" />
            <span className="font-mono text-[10px] text-slate-600 uppercase tracking-[0.2em] font-bold font-cairo">
              {t.insight.badge}
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-slate-900 mb-6 leading-tight font-cairo">
            {t.insight.headlineA}{" "}
            <span className="text-[#f1c83d] italic font-light">{t.insight.headlineB}</span>
          </h2>
          <p className="font-sans text-stone-500 max-w-lg mx-auto font-cairo">
            {t.insight.description}
          </p>
        </div>

        {/* Video Trigger */}
        <div className="relative flex justify-center">
          <motion.div
            ref={containerRef}
            layoutId="video-container"
            onClick={() => setIsOpen(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            className="relative w-full max-w-6xl aspect-video bg-slate-950 rounded-sm overflow-hidden cursor-none group shadow-2xl shadow-slate-200"
          >
            <video
              src={VIDEO_SRC}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000 ease-out"
            />

            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <h1 className="text-[12vw] md:text-[9vw] font-black font-sans uppercase text-white mix-blend-overlay tracking-tighter opacity-90 select-none font-cairo">
                Precision
              </h1>
            </div>

            <HUDCorner position="tl" />
            <HUDCorner position="tr" />
            <HUDCorner position="bl" />
            <HUDCorner position="br" />

            <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity">
              <div className="flex gap-4 text-[10px] font-mono text-white/90 uppercase font-bold tracking-widest">
                <span className="flex items-center gap-2">
                  <Activity className="w-3 h-3 text-[#f1c83d]" /> REC: ON
                </span>
                <span className="flex items-center gap-2">
                  <Cpu className="w-3 h-3" /> ISO 800
                </span>
              </div>
              <div className="text-[10px] font-mono text-white/70">
                <span className="border border-white/20 px-2 py-1 rounded backdrop-blur-sm">4K RAW</span>
              </div>
            </div>

            {/* Magnetic Play Button */}
            <motion.div
              style={{ x: springX, y: springY }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none flex items-center justify-center"
            >
              <motion.div
                animate={{ scale: isHovered ? 1.2 : 1, opacity: isHovered ? 1 : 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative w-20 h-20 md:w-24 md:h-24 bg-[#f1c83d] backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(217,119,6,0.6)]"
              >
                <div className="absolute inset-0 border border-white/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <Play className="w-8 h-8 text-white fill-white translate-x-1" />
                <svg
                  className="absolute w-full h-full animate-[spin_15s_linear_infinite_reverse]"
                  viewBox="0 0 100 100"
                >
                  <path id="curve" d="M 50 50 m -38 0 a 38 38 0 1 1 76 0 a 38 38 0 1 1 -76 0" fill="transparent" />
                  <text className="text-[10px] font-mono uppercase fill-white tracking-widest font-bold">
                    <textPath href="#curve">Play Reel • Play Reel • Play Reel •</textPath>
                  </text>
                </svg>
              </motion.div>
            </motion.div>

            <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
              <div className="flex items-center gap-2 text-white">
                <Scan className="w-4 h-4 text-[#f1c83d]" />
                <span className="font-mono text-xs tracking-wider">Sector 7 • Assembly Line</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-50 group flex items-center gap-3 text-white/50 hover:text-white transition-colors"
            >
              <span className="font-mono text-xs uppercase tracking-widest hidden md:block font-cairo">
                {t.insight.closeFeed}
              </span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <X className="w-5 h-5" />
              </div>
            </button>

            <motion.div
              layoutId="video-container"
              className="relative w-full max-w-[90vw] aspect-video bg-black rounded-sm overflow-hidden shadow-2xl border border-white/10"
            >
              <video src={VIDEO_SRC} controls autoPlay className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
