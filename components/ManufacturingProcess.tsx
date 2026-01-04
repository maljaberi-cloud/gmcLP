"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Hammer,
  Minimize2,
  Timer,
  Columns,
  Ruler,
  Sparkles,
  Crosshair,
  Globe,
  Settings,
  ArrowRight,
} from "lucide-react";

// --- Data: The 8-Step Cycle with Imagery ---
const STEPS = [
  {
    id: "01",
    title: "Crushing & Sieving",
    desc: "Marble boulders are pulverized into precise granulometric sizes.",
    icon: <Hammer className="w-5 h-5" />,
    tech_note: "INPUT: RAW BOULDERS",
    // Image: Rocks/Mining/Crusher
    img: "/m1.jpg",
  },
  {
    id: "02",
    title: "Vibro-Compression",
    desc: "Granules are mixed with resin and compacted under vacuum.",
    icon: <Minimize2 className="w-5 h-5" />,
    tech_note: "PRESSURE: 100 BAR",
    // Image: Industrial Press/Machinery
    img: "/m2.jpg",
  },
  {
    id: "03",
    title: "Block Curing",
    desc: "Controlled curing cycle to maximize structural integrity.",
    icon: <Timer className="w-5 h-5" />,
    tech_note: "TIME: 72 HOURS",
    // Image: Warehouse/Storage/Concrete
    img: "/m3.jpg",
  },
  {
    id: "04",
    title: "Slab Sawing",
    desc: "Cured blocks are sliced into rough slabs using heavy-duty saws.",
    icon: <Columns className="w-5 h-5" />,
    tech_note: "THICKNESS: <1MM VAR",
    // Image: Stone Cutting/Saw
    img: "/m4.jpg",
  },
  {
    id: "05",
    title: "Digital Calibration",
    desc: "Automated machines ensure exact thickness uniformity.",
    icon: <Ruler className="w-5 h-5" />,
    tech_note: "TOLERANCE: ISO STD",
    // Image: Precision Measurement/Tech
    img: "/m5.jpg",
  },
  {
    id: "06",
    title: "Polishing",
    desc: "Multi-head polishers apply progressive abrasion for mirror finish.",
    icon: <Sparkles className="w-5 h-5" />,
    tech_note: "FINISH: GLOSS > 90",
    // Image: Shiny Surface/Reflection
    img: "/m6.jpg",
  },
  {
    id: "07",
    title: "Laser Sizing",
    desc: "Slabs are cut to architectural dimensions with millimeter precision.",
    icon: <Crosshair className="w-5 h-5" />,
    tech_note: "LASER GUIDED",
    // Image: Laser/Cutting
    img: "/m7.jpg",
  },
  {
    id: "08",
    title: "Global Dispatch",
    desc: "Quality checks, protective packing, and palletizing for export.",
    icon: <Globe className="w-5 h-5" />,
    tech_note: "EXPORT READY",
    // Image: Shipping/Container/Logistics
    img: "/m8.jpg",
  },
];

// --- Sub-Component: The Image Tech Card ---
const ProcessCard = ({ step }: { step: (typeof STEPS)[0] }) => {
  return (
    <div className="relative group w-[300px] md:w-[400px] flex-shrink-0 h-[60vh] flex flex-col mx-4 first:ml-0">
      {/* 1. The Image Area (Top) */}
      <div className="relative h-[60%] w-full overflow-hidden rounded-sm border border-stone-200">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${step.img})` }}
        />
        {/* Overlay to ensure text readability if needed, or just style */}
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />

        {/* Step Number Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 border border-stone-200 shadow-sm">
          <span className="font-mono text-xl font-bold text-slate-900">
            {step.id}
          </span>
        </div>
      </div>

      {/* 2. Connection Line (The "Pipeline") */}
      <div className="absolute top-[60%] left-8 w-[1px] h-8 bg-[#f1c83d] z-10"></div>
      <div className="absolute top-[60%] left-[31px] w-3 h-3 rounded-full bg-white border-2 border-amber-500 -translate-y-1.5 z-20"></div>

      {/* 3. The Details (Bottom) */}
      <div className="flex-1 pt-10 pl-2 pr-4 relative">
        {/* Vertical Guide Line */}
        <div className="absolute top-8 left-8 bottom-0 w-[1px] bg-stone-200"></div>

        <div className="pl-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#f1c83d]">{step.icon}</span>
            <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">
              Phase {step.id}
            </span>
          </div>

          <h3 className="font-serif text-2xl text-slate-900 mb-3 leading-tight group-hover:text-amber-700 transition-colors">
            {step.title}
          </h3>

          <p className="font-sans text-sm text-slate-500 leading-relaxed mb-4">
            {step.desc}
          </p>

          <div className="inline-block px-2 py-1 bg-stone-100 border border-stone-200 rounded-sm">
            <span className="font-mono text-[9px] text-slate-600 uppercase">
              {step.tech_note}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
export default function ManufacturingProcess() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Scroll math: We move the container to the left as we scroll down
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    // Height determines how "long" the scroll feels
    <section ref={targetRef} className="relative h-[400vh] bg-stone-50">
      {/* Sticky Viewport */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Background: Clean Technical Grid */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Static Header (Left Overlay) */}
        <div className="absolute top-10 left-8 lg:left-12 z-20 max-w-sm bg-white/80 backdrop-blur-md p-6 border border-stone-200 shadow-sm rounded-sm">
          <div className="flex items-center gap-2 text-[#f1c83d] mb-2">
            <Settings className="w-4 h-4 animate-spin-slow" />
            <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
              Process Map
            </span>
          </div>
          <h2 className="font-serif text-4xl text-slate-900 mb-2">
            The Blueprint
          </h2>
          <p className="font-sans text-slate-500 text-sm">
            Trace the journey from raw Omani earth to precision-engineered
            surface.
          </p>
        </div>

        {/* The Moving Track */}
        <motion.div
          style={{ x }}
          className="flex items-center h-full pl-[5vw] pr-[10vw]"
        >
          {/* Start Label */}
          <div className="flex flex-col justify-center h-[60vh] px-12 border-l border-dashed border-stone-300 mx-8">
            <span className="font-mono text-xs text-stone-400 -rotate-90 whitespace-nowrap">
              INITIATE SEQUENCE
            </span>
          </div>

          {/* Render Cards */}
          {STEPS.map((step) => (
            <ProcessCard key={step.id} step={step} />
          ))}
        </motion.div>

        {/* Progress Bar (Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-stone-200">
          <motion.div
            className="h-full bg-[#f1c83d]"
            style={{
              width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
            }}
          />
        </div>
      </div>
    </section>
  );
}
