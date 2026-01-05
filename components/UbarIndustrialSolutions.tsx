'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Factory, 
  FlaskConical, 
  Atom, 
  Flame, 
  Droplets, 
  Sprout, 
  BrickWall, 
  Leaf, 
  Wheat, 
  Package,
  Beaker 
} from 'lucide-react';

const UbarIndustrialSolutions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // --- DATA SOURCE ---
  const PRODUCTS = [
    {
      id: "quicklime",
      name: "Quicklime",
      formula: "CaO",
      scientificName: "Calcium Oxide",
      description: "High-purity powder produced from selected limestone under controlled calcination.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2944&auto=format&fit=crop", // Placeholder: White Industrial Powder
      themeColor: "#f1c83d", // Gold for Heat
      specs: [
        { label: "Content", value: "CaO 90.00 Min" },
        { label: "Impurity", value: "Low Levels" }
      ],
      // New Application Structure with Icons
      applications: [
        { name: "Metallurgy", icon: <Flame size={20} /> },
        { name: "Water Trt.", icon: <Droplets size={20} /> },
        { name: "Chemical", icon: <Beaker size={20} /> },
        { name: "Soil Stab.", icon: <Sprout size={20} /> }
      ]
    },
    {
      id: "limestone",
      name: "Limestone Pwd",
      formula: "CaCO₃",
      scientificName: "Calcium Carbonate",
      description: "Produced through controlled grinding for consistent chemical properties.",
      image: "https://images.unsplash.com/photo-1525816990666-c9580b39366e?q=80&w=2670&auto=format&fit=crop", // Placeholder: White Stone Texture
      themeColor: "#6a6931", // Olive for Earth
      specs: [
        { label: "Content", value: "High CaCO₃" },
        { label: "Appearance", value: "Bright White" }
      ],
      // New Application Structure with Icons
      applications: [
        { name: "Fillers", icon: <Package size={20} /> },
        { name: "Construction", icon: <BrickWall size={20} /> },
        { name: "Environment", icon: <Leaf size={20} /> },
        { name: "Agriculture", icon: <Wheat size={20} /> }
      ]
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-white text-slate-900 overflow-hidden"
    >
      {/* --- BACKGROUND AMBIENCE --- */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute top-[-10%] left-[20%] w-[800px] h-[800px] rounded-full bg-slate-100 blur-[100px] opacity-60 pointer-events-none z-0"
      />
      
      {/* Chemical Formula Watermarks */}
      <div className="absolute top-20 right-10 text-9xl font-bold text-slate-50 opacity-[0.03] select-none pointer-events-none font-mono">
        CaO
      </div>
      <div className="absolute bottom-20 left-10 text-9xl font-bold text-slate-50 opacity-[0.03] select-none pointer-events-none font-mono">
        CaCO3
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Factory className="w-5 h-5 text-[#6a6931]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#6a6931] uppercase">
              Industrial Solutions
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1a1a1a] mb-8 leading-tight"
          >
            The Core.<br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-slate-400 font-light block mt-2">
              Where Industry Begins With Stone.
            </span>
          </motion.h2>
        </div>

        {/* --- THE PRODUCT CARDS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-slate-200 overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-slate-200/50 transition-shadow duration-500"
            >
              
              {/* --- 1. VISUAL SECTION (IMAGE) --- */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Floating Formula Badge */}
                <div className="absolute bottom-0 left-0 bg-white px-6 py-3 border-t-2 border-r-2 border-[#f1c83d]" 
                     style={{ borderColor: product.themeColor }}>
                   <span className="font-serif text-2xl font-bold text-[#1a1a1a]">{product.formula}</span>
                </div>
              </div>

              {/* --- 2. INFORMATION SECTION --- */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                
                {/* Title */}
                <div className="mb-6">
                   <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-3xl font-serif text-[#1a1a1a]">{product.name}</h3>
                      <div className="p-2 bg-slate-50 rounded-full text-slate-400">
                        {index === 0 ? <FlaskConical size={18}/> : <Atom size={18}/>}
                      </div>
                   </div>
                   <p className="text-[#6a6931] text-sm font-medium uppercase tracking-wider">{product.scientificName}</p>
                </div>

                <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                  {product.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-10 pb-8 border-b border-slate-100">
                  {product.specs.map((spec, i) => (
                    <div key={i}>
                      <span className="block text-[10px] uppercase tracking-wider text-slate-400 mb-1">{spec.label}</span>
                      <span className="block text-sm font-mono font-bold text-[#1a1a1a]">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* --- 3. APPLICATIONS ROW (The Highlight) --- */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: product.themeColor }} />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Key Applications</span>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2">
                    {product.applications.map((app, i) => (
                      <div 
                        key={i} 
                        className="flex flex-col items-center justify-center p-3 rounded-lg bg-slate-50 border border-slate-100 group-hover:border-slate-200 transition-colors text-center"
                      >
                        <div className="mb-2 text-slate-400 group-hover:text-[#1a1a1a] transition-colors duration-300">
                          {app.icon}
                        </div>
                        <span className="text-[10px] font-medium text-slate-500 leading-tight">
                          {app.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              
              {/* Colored Bottom Border */}
              <div className="h-1.5 w-full" style={{ backgroundColor: product.themeColor }} />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default UbarIndustrialSolutions;