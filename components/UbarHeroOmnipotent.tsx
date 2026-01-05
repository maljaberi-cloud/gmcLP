'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, ArrowDownRight, ChevronRight } from 'lucide-react';

const UbarHeroLuxury = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // --- INTERACTIVE LIGHTING EFFECT ---
  // Mouse position hooks for the dynamic lighting sheen
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement for a buttery feel
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
      // Track mouse movement relative to the image container
      const handleMouseMove = (e: MouseEvent) => {
          if (imageRef.current) {
             const rect = imageRef.current.getBoundingClientRect();
             mouseX.set(e.clientX - rect.left);
             mouseY.set(e.clientY - rect.top);
          }
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax for subtle depth on scroll
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section 
      ref={containerRef}
      // Min-h-screen ensures full view, but flex/padding keeps it contained, not "zoomed in"
      className="relative w-full min-h-[90vh] md:min-h-screen bg-white flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24 py-20"
    >
      {/* --- AMBIENT BACKGROUND ELEMENTS (Subtle & Light) --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          {/* Very faint olive wash in top right */}
          <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] bg-[#6a6931] rounded-full blur-[180px] opacity-[0.08]"></div>
          {/* Very faint gold wash in bottom left */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-[#f1c83d] rounded-full blur-[180px] opacity-[0.05]"></div>
          {/* Architectural line */}
          <div className="absolute top-0 left-[15%] h-full w-[1px] bg-slate-100 hidden lg:block"></div>
      </div>


      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-0">
        
        {/* --- LEFT COLUMN: Typography (The Hook) --- */}
        {/* Z-index higher to overlap image slightly */}
        <motion.div 
          style={{ y: yText }}
          className="lg:col-span-5 relative z-20 order-2 lg:order-1"
        >
          {/* Pre-headline accent */}
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.5 }}
             className="flex items-center gap-3 mb-8"
          >
            <span className="h-[1px] w-8 bg-[#f1c83d]"></span>
            <span className="text-[#6a6931] uppercase tracking-[0.3em] text-xs font-semibold">Omani Origin</span>
          </motion.div>

          {/* The Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#1a1a1a] leading-[0.9] tracking-tight mb-8 relative">
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Naturally
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="block relative"
              >
                Lavish<span className="text-[#f1c83d]">.</span>
              </motion.span>
            </span>
          </h1>

          {/* Sub-headline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-md mb-12 lg:-mr-20 relative z-10 mix-blend-multiply"
          >
            A 150-million-year legacy of Oman's heritage, crafted to global standards and refined for modern luxury with an authentic spirit.
          </motion.p>

          {/* CTAs */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.8 }}
             className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            {/* Primary CTA: Solid Gold */}
            <button className="group relative overflow-hidden bg-[#f1c83d] text-[#1a1a1a] px-8 py-4 flex items-center gap-4 transition-all duration-300 hover:shadow-xl hover:shadow-[#f1c83d]/20 hover:-translate-y-1">
              <span className="relative z-10 text-sm font-semibold uppercase tracking-wider">Explore Collections</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              {/* Hover fill effect */}
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></div>
            </button>

            {/* Secondary CTA: Minimalist */}
            <button className="group flex items-center gap-2 text-slate-500 hover:text-[#6a6931] transition-colors duration-300 px-4 py-2">
              <span className="text-sm font-medium">View Technical Specs</span>
              <div className="p-1 rounded-full border border-slate-200 group-hover:border-[#6a6931] transition-colors">
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
          </motion.div>
        </motion.div>


        {/* --- RIGHT COLUMN: The Marble Slab (The Hero Object) --- */}
        {/* This is NOT zoomed in. It's presented like a framed artwork. */}
        <motion.div 
          style={{ y: yImage }}
          className="lg:col-span-7 relative z-10 order-1 lg:order-2 pl-0 lg:pl-12"
        >
          <motion.div
             initial={{ opacity: 0, scale: 0.95, clipPath: "inset(10% 10% 10% 10%)" }}
             animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)" }}
             transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             ref={imageRef}
             // Aspect ratio controls the size so it's not "zoomed in"
             className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/3] w-full overflow-hidden shadow-2xl shadow-slate-200/50"
          >
            {/* THE MARBLE IMAGE - High Res, Polished */}
            <img 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2787&auto=format&fit=crop" 
              alt="Polished Omani Marble Slab" 
              className="w-full h-full object-cover scale-[1.02]" // Slight scale to prevent edge bleeding during parallax
            />
            
            {/* --- THE "GENIUS" INTERACTION: Dynamic Light Sheen --- */}
            {/* This gradient moves based on mouse position, simulating light reflecting on polished stone */}
            <motion.div 
              className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay opacity-60"
              style={{
                background: useTransform(
                  [smoothMouseX, smoothMouseY],
                  ([x, y]) => `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`
                )
              }}
            />

            {/* Subtle Architectural Frame Overlay */}
            <div className="absolute inset-0 border-[1px] border-white/20 z-30 pointer-events-none"></div>
            
            {/* Corner Accent */}
            <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-md p-4 z-30 flex items-center gap-3 border-l-2 border-[#f1c83d]">
                <ArrowDownRight className="text-[#6a6931] w-5 h-5"/>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#1a1a1a]">Polished Finish</span>
            </div>
          </motion.div>
           
           {/* Decorative Offset Border behind the image */}
           <motion.div 
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
              className="absolute top-[5%] left-[5%] w-full h-full border border-[#6a6931]/20 -z-10 hidden lg:block"
           />
        </motion.div>

      </div>
    </section>
  );
};

export default UbarHeroLuxury;