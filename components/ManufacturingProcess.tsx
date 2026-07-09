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
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const STEP_ICONS = [
  <Hammer className="w-5 h-5" />,
  <Minimize2 className="w-5 h-5" />,
  <Timer className="w-5 h-5" />,
  <Columns className="w-5 h-5" />,
  <Ruler className="w-5 h-5" />,
  <Sparkles className="w-5 h-5" />,
  <Crosshair className="w-5 h-5" />,
  <Globe className="w-5 h-5" />,
];

const STEP_IMAGES = ["/m1.jpg", "/m2.jpg", "/m3.jpg", "/m4.jpg", "/m5.jpg", "/m6.jpg", "/m7.jpg", "/m8.jpg"];

const ProcessCard = ({ step, icon, image }: { step: any; icon: React.ReactNode; image: string }) => {
  const { t } = useLanguage();

  return (
    <div className="relative group w-[300px] md:w-[400px] flex-shrink-0 h-[60vh] flex flex-col mx-4 first:ml-0">
      {/* Image Area */}
      <div className="relative h-[60%] w-full overflow-hidden rounded-sm border border-stone-200">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 border border-stone-200 shadow-sm">
          <span className="font-mono text-xl font-bold text-slate-900">{step.id}</span>
        </div>
      </div>

      {/* Connection Line */}
      <div className="absolute top-[60%] left-8 w-[1px] h-8 bg-[#f1c83d] z-10"></div>
      <div className="absolute top-[60%] left-[31px] w-3 h-3 rounded-full bg-white border-2 border-amber-500 -translate-y-1.5 z-20"></div>

      {/* Details */}
      <div className="flex-1 pt-10 pl-2 pr-4 relative">
        <div className="absolute top-8 left-8 bottom-0 w-[1px] bg-stone-200"></div>

        <div className="pl-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#f1c83d]">{icon}</span>
            <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest font-cairo">
              {t.manufacturing.phase} {step.id}
            </span>
          </div>

          <h3 className="font-serif text-2xl text-slate-900 mb-3 leading-tight group-hover:text-amber-700 transition-colors font-cairo">
            {step.title}
          </h3>

          <p className="font-sans text-sm text-slate-500 leading-relaxed mb-4 font-cairo">
            {step.desc}
          </p>

          <div className="inline-block px-2 py-1 bg-stone-100 border border-stone-200 rounded-sm">
            <span className="font-mono text-[9px] text-slate-600 uppercase">{step.tech_note}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ManufacturingProcess() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const { t } = useLanguage();

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-stone-50">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Static Header */}
        <div className="absolute top-10 left-8 lg:left-12 z-20 max-w-sm bg-white/80 backdrop-blur-md p-6 border border-stone-200 shadow-sm rounded-sm">
          <div className="flex items-center gap-2 text-[#f1c83d] mb-2">
            <Settings className="w-4 h-4 animate-spin-slow" />
            <span className="font-mono text-[10px] uppercase tracking-widest font-bold font-cairo">
              {t.manufacturing.badge}
            </span>
          </div>
          <h2 className="font-serif text-4xl text-slate-900 mb-2 font-cairo">
            {t.manufacturing.headline}
          </h2>
          <p className="font-sans text-slate-500 text-sm font-cairo">
            {t.manufacturing.description}
          </p>
        </div>

        {/* Moving Track */}
        <motion.div
          style={{ x }}
          className="flex items-center h-full pl-[5vw] pr-[10vw]"
        >
          {/* Start Label */}
          <div className="flex flex-col justify-center h-[60vh] px-12 border-l border-dashed border-stone-300 mx-8">
            <span className="font-mono text-xs text-stone-400 -rotate-90 whitespace-nowrap font-cairo">
              {t.manufacturing.initiateSequence}
            </span>
          </div>

          {t.manufacturing.steps.map((step, index) => (
            <ProcessCard
              key={step.id}
              step={step}
              icon={STEP_ICONS[index]}
              image={STEP_IMAGES[index]}
            />
          ))}
        </motion.div>

        {/* Progress Bar */}
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
