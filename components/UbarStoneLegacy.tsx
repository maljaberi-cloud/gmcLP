"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, ArrowDownRight, Gem } from 'lucide-react';

const UbarStonePristine = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax for the visual elements
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center"
    >
      {/* --- BACKGROUND AMBIENCE --- */}
      
      {/* 1. The Olive Wash (#6a6931) - Subtle, organic, soft */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-[#6a6931] blur-[150px] opacity-[0.08] z-0 pointer-events-none"
      />
      
      {/* 2. Secondary Olive Wash - Bottom Left for balance */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#6a6931] blur-[120px] opacity-[0.05] z-0 pointer-events-none" />

      {/* 3. Grid Lines - Very subtle, architectural feel */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* --- HEADER: The Statement --- */}
        <div className="mb-20 md:mb-28 relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="p-2 bg-[#f1c83d]/10 rounded-full">
              <Gem className="w-5 h-5 text-[#6a6931]" />
            </div>
            <span className="text-[#6a6931] tracking-[0.25em] uppercase text-xs font-bold">
              Brand Narrative
            </span>
          </motion.div>

          <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[0.95] tracking-tight text-[#1a1a1a]">
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                We Don't Just
              </motion.span>
            </span>
            <span className="block overflow-hidden relative">
              <motion.span 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f1c83d] to-[#d4af37]"
              >
                Offer Stone.
              </motion.span>
              {/* Decorative underline */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1.2, delay: 0.5, ease: "circOut" }}
                className="absolute bottom-2 left-0 h-[4px] bg-[#f1c83d] opacity-30" 
              />
            </span>
          </h2>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left: The Promise (Text) */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-12">
            <div className="space-y-8">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-3xl font-light text-slate-800 leading-snug"
              >
                At Ubar Stone, we offer you the chance to own a <span className="font-serif italic text-[#6a6931]">piece of history</span>, etched with its markings and timeless secrets.
              </motion.h3>
              
              <div className="w-full h-[1px] bg-slate-200" />

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg text-slate-500 leading-relaxed max-w-md"
              >
                Every story begins with a step, and every great project starts with an idea. We are here to understand your vision and convert it into reality with the elegance and sophistication it truly deserves.
              </motion.p>
            </div>

            {/* The "Silent Impact" Box */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative p-8 bg-[#f9f9f9] border-l-4 border-[#f1c83d]"
            >
              <Quote className="absolute top-4 right-4 text-[#6a6931] opacity-20 w-8 h-8" />
              <p className="font-serif text-2xl text-[#1a1a1a]">
                The Promise: A silent impact, with a presence that never fades.
              </p>
            </motion.div>
          </div>

          {/* Right: The Visual (Image) */}
          <div className="lg:col-span-6 relative pt-12 lg:pt-0">
            <motion.div
              initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
              whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="relative"
            >
               {/* Architectural Frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#6a6931] opacity-30 z-0 hidden md:block" />
              
              <div className="relative overflow-hidden z-10 aspect-[3/4] bg-slate-100">
                 {/* Replace with your stone image */}
                 <img 
                  src="/ain.png" 
                  alt="Ubar Stone Texture" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Overlay Text on Image */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex items-center gap-2 text-white/90">
                    <ArrowDownRight className="w-5 h-5 text-[#f1c83d]" />
                    <span className="text-sm uppercase tracking-widest">Etched in Time</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UbarStonePristine;