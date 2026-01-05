'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layers, Hammer, Sparkles, ArrowRight, Ruler, Scan } from 'lucide-react';

// --- DATA SOURCE ---
const MARBLES = [
  {
    id: "01",
    name: "Fanar",
    tagline: "Dark Beige",
    description: "Dark beige with soft natural veining.",
    // Added specific specs from image_c65c85.png
    thickness: "2 cm – 3 cm", //
    formats: "Slabs or custom cut-to-size", //
    finishes: "Polished, Honed, Sandblasted, Bush Hammered.", //
    applications: "Floors, walls, stairs, interior & exterior cladding, washbasins, kitchens.", //
    image: "/bg.png"
  },
  {
    id: "02",
    name: "Morooj",
    tagline: "Dark Pink",
    description: "Deep Pink stone offering bespoke luxury.",
    // Added specific specs from image_c65997.png
    thickness: "2 cm – 3 cm", //
    formats: "Slabs or custom cut-to-size", //
    finishes: "Polished, Honed, Sandblasted, Bush Hammered.", //
    applications: "Floors, walls, columns, interior cladding, luxury halls, washbasins, kitchens, architectural decorative elements.", //
    image: "/nbg.png"
  },
  {
    id: "03",
    name: "Reedan",
    tagline: "Light Beige",
    description: "Light Beige-Grey elegance.",
    // Added specific specs from image_c659b7.png
    thickness: "2 cm – 3 cm", //
    formats: "Slabs or custom cut-to-size", //
    finishes: "Polished, Honed, Sandblasted, Bush Hammered.", //
    applications: "Floors, walls, stairs, interior & exterior cladding, washbasins, kitchens.", //
    image: "/bg1.jpg"
  }
];

const UbarMarbleCollection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Parallax Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-white text-slate-900 overflow-hidden"
    >
      {/* --- BACKGROUND AMBIENCE --- */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#6a6931] blur-[150px] opacity-[0.06] pointer-events-none z-0"
      />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#f1c83d] blur-[180px] opacity-[0.04] pointer-events-none z-0" />
      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '80px 80px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-20 space-y-6 max-w-3xl">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="flex items-center gap-3"
          >
            <span className="w-12 h-[1px] bg-[#f1c83d]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#6a6931] uppercase">The Collection</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-[#1a1a1a]"
          >
            When stone speaks.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 font-light"
          >
            We don't shape marble, we <span className="text-[#f1c83d] italic font-serif">reveal its beauty.</span> Discover three unique Omani marbles, each with its own color, rhythm, and timeless story.
          </motion.p>
        </div>

        {/* --- INTERACTIVE MARBLE SLABS --- */}
        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[750px]">
          {MARBLES.map((marble, index) => (
            <motion.div
              key={marble.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setActiveId(marble.id)}
              onMouseLeave={() => setActiveId(null)}
              className={`
                relative group overflow-hidden border border-slate-100 bg-slate-50
                transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                flex flex-col justify-between
                ${activeId === marble.id ? 'lg:flex-[2.5]' : 'lg:flex-[1]'}
                h-[600px] lg:h-full
              `}
            >
              {/* --- IMAGE BACKGROUND --- */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={marble.image} 
                  alt={marble.name} 
                  className={`w-full h-full object-cover transition-transform duration-1000 ${activeId === marble.id ? 'scale-110' : 'scale-100 grayscale'}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-black/40 to-transparent transition-opacity duration-500 ${activeId === marble.id ? 'opacity-95' : 'opacity-60'}`} />
              </div>

              {/* --- CARD HEADER --- */}
              <div className="relative z-10 p-8 flex justify-between items-start">
                <span className={`text-6xl font-serif leading-none transition-colors duration-500 ${activeId === marble.id ? 'text-[#f1c83d]' : 'text-white/30'}`}>
                  {marble.id}
                </span>
                <div className="text-right">
                  <h3 className="text-3xl text-white font-serif">{marble.name}</h3>
                  <p className="text-[#f1c83d] text-sm tracking-widest uppercase mt-1 opacity-80">{marble.tagline}</p>
                </div>
              </div>

              {/* --- EXPANDED CONTENT --- */}
              <div className="relative z-10 p-8 mt-auto">
                 {/* Mobile View */}
                 <div className="lg:hidden block space-y-4">
                     <p className="text-white/90 text-lg leading-relaxed border-l-2 border-[#f1c83d] pl-4">{marble.description}</p>
                 </div>

                 {/* Desktop View */}
                 <div className={`hidden lg:block overflow-hidden transition-all duration-700 ${activeId === marble.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="space-y-6">
                      <p className="text-white/90 text-xl leading-relaxed font-light border-l-2 border-[#f1c83d] pl-4">
                        {marble.description}
                      </p>
                      
                      {/* Technical Specs Grid (2x2) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-white/10">
                        
                        {/* 1. Thickness */}
                        <div>
                          <div className="flex items-center gap-2 mb-2 text-[#f1c83d]">
                            <Ruler size={18} />
                            <span className="text-xs uppercase tracking-wider font-semibold">Thickness</span>
                          </div>
                          <p className="text-sm text-slate-300 leading-relaxed font-mono">{marble.thickness}</p>
                        </div>

                        {/* 2. Formats */}
                        <div>
                          <div className="flex items-center gap-2 mb-2 text-[#f1c83d]">
                            <Scan size={18} />
                            <span className="text-xs uppercase tracking-wider font-semibold">Formats</span>
                          </div>
                          <p className="text-sm text-slate-300 leading-relaxed">{marble.formats}</p>
                        </div>

                        {/* 3. Finishes */}
                        <div>
                          <div className="flex items-center gap-2 mb-2 text-[#f1c83d]">
                            <Hammer size={18} />
                            <span className="text-xs uppercase tracking-wider font-semibold">Finishes</span>
                          </div>
                          <p className="text-sm text-slate-300 leading-relaxed">{marble.finishes}</p>
                        </div>
                        
                        {/* 4. Applications */}
                        <div>
                          <div className="flex items-center gap-2 mb-2 text-[#f1c83d]">
                            <Layers size={18} />
                            <span className="text-xs uppercase tracking-wider font-semibold">Applications</span>
                          </div>
                          <p className="text-sm text-slate-300 leading-relaxed">{marble.applications}</p>
                        </div>
                      </div>

                      <button className="flex items-center gap-2 text-white text-sm hover:text-[#f1c83d] transition-colors mt-4 group/btn">
                        <span>Download Spec Sheet</span>
                        <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                 </div>
                 
                 {/* Default "Reveal" Hint */}
                 <div className={`hidden lg:block transition-all duration-500 ${activeId === marble.id ? 'opacity-0 translate-y-4 hidden' : 'opacity-100 translate-y-0'}`}>
                    <div className="flex items-center gap-2 text-white/60">
                      <Sparkles size={16} />
                      <span className="text-xs uppercase tracking-widest">Reveal Specifications</span>
                    </div>
                 </div>
              </div>

              {/* Decorative Border */}
              <div className={`absolute inset-0 border-2 border-[#f1c83d] z-20 pointer-events-none transition-opacity duration-500 ${activeId === marble.id ? 'opacity-100' : 'opacity-0'}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UbarMarbleCollection;