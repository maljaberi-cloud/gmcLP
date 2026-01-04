"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Maximize2, MoveRight } from "lucide-react";

// --- DATA ---
interface MarbleProduct {
  id: number;
  name: string;
  shortName: string;
  origin: string;
  price: string;
  description: string;
  slabTexture: string;
  exampleImage: string;
  specs: {
    density: string;
    finish: string;
    absorption: string;
  };
}

const marbleProducts: MarbleProduct[] = [
  {
    id: 1,
    name: "Natural Marble",
    shortName: "Natural Marble",
    origin: "Tivoli, Italy",
    price: "$120",
    description:
      "A timeless Italian classic characterized by its porous surface and distinct parallel beige and silver veining. Rustic elegance defined.",
    slabTexture: "/bg.jpg",
    exampleImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    specs: { density: "2.45 g/cm³", finish: "Honed", absorption: "0.8%" },
  },
  {
    id: 2,
    name: "Artificial Marble",
    shortName: "Artificial Marble",
    origin: "Alicante, Spain",
    price: "$95",
    description:
      "The world's most popular beige marble offering a clean, uniform background with occasional subtle cinnamon veining.",
    slabTexture: "/bg1.jpg",
    exampleImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    specs: { density: "2.70 g/cm³", finish: "Polished", absorption: "0.2%" },
  },
  {
    id: 3,
    name: "Terrazzo",
    shortName: "Terrazzo",
    origin: "Carrara, Italy",
    price: "$280",
    description:
      "The epitome of luxury. A pure, milky white background bisected by dramatic, bold grey and gold veining.",
    slabTexture:
      "https://image.made-in-china.com/202f0j00DWPlhYkKlwMF/White-with-Gold-Veins-Grey-Artificial-Synthetic-Polished-Marble-Big-Slabs-for-Interior-Decoration-Price.webp",
    exampleImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    specs: { density: "2.81 g/cm³", finish: "Satin", absorption: "0.12%" },
  },
  {
    id: 4,
    name: "Quick Lime",
    shortName: "Quick Lime",
    origin: "Valencia, Spain",
    price: "$110",
    description:
      "A rich, deep brown marble interspersed with a complex network of lighter golden-beige veins. Adds gravity and warmth.",
    slabTexture: "/bg2.jpg",
    exampleImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    specs: { density: "2.65 g/cm³", finish: "Tumbled", absorption: "0.4%" },
  },
  {
    id: 5,
    name: "Lime Stone",
    shortName: "Lime Stone",
    origin: "Madagascar",
    price: "$450",
    description:
      "A rare, semi-precious stone slab featuring swirling patterns of deep blues. Often backlit to reveal its translucent beauty.",
    slabTexture: "/bg3.png",
    exampleImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    specs: { density: "2.60 g/cm³", finish: "Glass", absorption: "0.0%" },
  },
];

export default function MarbleGalleryMinimal() {
  const [activeId, setActiveId] = useState<number>(marbleProducts[0].id);
  const activeProduct =
    marbleProducts.find((p) => p.id === activeId) || marbleProducts[0];

  return (
    <div className="bg-stone-50 py-24 border-t border-stone-200 text-[#111] min-h-screen w-full flex flex-col font-sans selection:bg-amber-600 selection:text-white pb-20">
      {/* GLOBAL HEADER */}
      <header className="px-6 py-8 lg:px-12 lg:py-10 flex justify-between items-center w-full max-w-[1800px] mx-auto"></header>

      {/* --- SPLIT LAYOUT --- */}
      <div className="flex-1 w-full max-w-[1800px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* === LEFT COLUMN: CONTENT & DISPLAY === */}
        <div className="lg:col-span-8 flex flex-col pt-4 lg:pt-8 sticky top-10">
          {/* 1. Title Area */}
          <div className="mb-8 overflow-hidden">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#f1c83d] font-mono text-xs uppercase tracking-widest border border-amber-600/20 px-3 py-1 rounded-full">
                  {activeProduct.origin}
                </span>
                <span className="text-gray-400 font-mono text-xs uppercase tracking-widest">
                  ID: {activeProduct.id.toString().padStart(3, "0")}
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-serif leading-[0.9] text-black tracking-tight mb-6">
                {activeProduct.shortName}
              </h1>
            </motion.div>
          </div>

          {/* 2. Description Area */}
          <div className="mb-10 max-w-2xl">
            <motion.p
              key={`desc-${activeProduct.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed"
            >
              {activeProduct.description}
            </motion.p>
          </div>

          {/* 3. Image Area (Less Tall) */}
          <motion.div
            layoutId="main-image-container"
            className="w-full relative rounded-3xl overflow-hidden aspect-[16/8] md:aspect-[21/9] shadow-sm"
          >
            <AnimatePresence mode="popLayout">
              <motion.img
                key={activeProduct.exampleImage}
                src={activeProduct.exampleImage}
                alt={activeProduct.name}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Floating Info inside Image */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="flex gap-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/50">
                <div>
                  <div className="text-[10px] uppercase text-gray-400 font-bold tracking-widest mb-1">
                    Density
                  </div>
                  <div className="font-mono text-sm">
                    {activeProduct.specs.density}
                  </div>
                </div>
                <div className="w-[1px] bg-gray-300 h-8 self-center" />
                <div>
                  <div className="text-[10px] uppercase text-gray-400 font-bold tracking-widest mb-1">
                    Finish
                  </div>
                  <div className="font-mono text-sm">
                    {activeProduct.specs.finish}
                  </div>
                </div>
              </div>

              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg text-black">
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* === RIGHT COLUMN: NAVIGATION / INDEX === */}
        <div className="lg:col-span-4 flex flex-col h-full lg:pl-8 border-l border-gray-200/60 lg:min-h-[80vh]">
          <div className="mb-8 flex items-end justify-between">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              Stone Library
            </h3>
            <span className="font-serif italic text-gray-400">
              Select Material
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {marbleProducts.map((product) => {
              const isActive = activeId === product.id;

              return (
                <div
                  key={product.id}
                  onClick={() => setActiveId(product.id)}
                  className={`group relative cursor-pointer p-1 transition-all duration-500`}
                >
                  <div
                    className={`relative p-3 rounded-2xl border transition-all duration-300 ease-out flex items-center justify-between gap-1 bg-white
                    ${
                      isActive
                        ? "border-[#f1c83d] shadow-xl shadow--[#f1c83d]/5 translate-x-0"
                        : "border-transparent hover:border-gray-200 hover:bg-white hover:shadow-md text-gray-400 hover:text-black"
                    }`}
                  >
                    {/* Content */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-18 h-18 rounded-lg overflow-hidden relative shrink-0 ${isActive ? "ring-2 ring-offset-2 ring-[#f1c83d]" : "grayscale group-hover:grayscale-0 transition-all"}`}
                      >
                        <img
                          src={product.slabTexture}
                          className="w-full h-full object-fill"
                          alt="texture"
                        />
                      </div>
                      <div>
                        <h4
                          className={`font-serif text-lg leading-tight ${isActive ? "text-black" : "text-gray-500 group-hover:text-black"}`}
                        >
                          {product.name}
                        </h4>
                        <p className="text-xs font-mono text-gray-400 mt-1">
                          {product.origin}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`transition-transform duration-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}`}
                    >
                      <MoveRight
                        className={`w-5 h-5 ${isActive ? "text-[#f1c83d]" : "text-gray-300"}`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA at bottom of right col */}
          <div className="mt-auto pt-12">
            <button className="group w-full py-5 bg-[#111] text-white rounded-xl flex items-center justify-between px-8 hover:bg-[#f1c83d] transition-colors duration-500">
              <span className="font-mono text-xs uppercase tracking-widest">
                Download Catalog
              </span>
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
