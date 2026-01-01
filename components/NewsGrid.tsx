"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Calendar, Tag } from "lucide-react";

// --- Dummy Data ---
// Using high-quality architectural/industrial images
const NEWS_ITEMS = [
  {
    id: 1,
    title: "The Carrara Acquisition: Securing a Legacy",
    date: "OCT 12, 2023",
    category: "Corporate Strategy",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Introducing 'Apex White': Our Purest Formulation Yet",
    date: "SEP 28, 2023",
    category: "R&D",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Sustainability Report: Achieving Net-Zero in Manufacturing",
    date: "AUG 15, 2023",
    category: "ESG Initiative",
    image:
      "https://images.unsplash.com/photo-1473876637954-4b493d59fd97?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Dubai Design Week: The 'Monolith' Installation",
    date: "JUL 01, 2023",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1518640165980-d3e0e2aa6c1e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Q3 Financial Results: Record Growth in Asian Markets",
    date: "JUN 20, 2023",
    category: "Finance",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Expansion of the Raysut Facility Complete",
    date: "MAY 10, 2023",
    category: "Operations",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  },
];

// --- Animation Variants ---
const hoverVariants = {
  initial: { opacity: 0, y: 20 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const contentStagger = {
  hover: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

// --- Single News Card Component ---
const NewsSquare = ({ item }: { item: (typeof NEWS_ITEMS)[0] }) => {
  return (
    <motion.a
      href="#" // Replace with actual link
      className="relative block group aspect-square overflow-hidden bg-stone-100 rounded-sm"
      initial="initial"
      whileHover="hover"
      variants={contentStagger}
    >
      {/* 1. The Image (Slow Zoom on Hover) */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover grayscale-[20%]"
          variants={{
            hover: { scale: 1.1, grayscale: "0%" },
          }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} // Cubic-bezier for smooth finish
        />
      </div>

      {/* 2. The Overlay Gradient (Appears on Hover) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-60"
        variants={{ initial: { opacity: 0 }, hover: { opacity: 0.9 } }}
        transition={{ duration: 0.4 }}
      />

      {/* 3. Technical Border Glow */}
      <motion.div
        className="absolute inset-0 border-2 border-amber-500/0"
        variants={{ hover: { borderColor: "rgba(217,119,6,0.5)" } }}
      />

      {/* 4. Content Reveal */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="overflow-hidden">
          {/* Meta Data */}
          <motion.div
            variants={hoverVariants}
            className="flex items-center gap-4 mb-3 text-[10px] font-mono uppercase tracking-widest text-amber-400"
          >
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {item.date}
            </span>
            <span className="flex items-center gap-1 px-2 py-1 bg-amber-950/50 border border-amber-800 rounded-sm">
              <Tag className="w-3 h-3" /> {item.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            variants={hoverVariants}
            className="font-serif text-2xl text-white leading-tight mb-4 line-clamp-3"
          >
            {item.title}
          </motion.h3>

          {/* Read More Indicator */}
          <motion.div
            variants={hoverVariants}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/80 group-hover:text-amber-400 transition-colors"
          >
            <span>Read Dossier</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
};

// --- Main Section Component ---
export default function NewsGrid() {
  return (
    <section className="relative w-full py-24 bg-white border-t border-stone-100">
      {/* Background Texture (Matching previous white sections) */}
      <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-8 bg-amber-600"></div>
              <span className="font-mono text-[10px] text-amber-700 uppercase tracking-[0.3em] font-bold">
                Intel & Reports
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 leading-tight">
              <span className="italic text-amber-600">News</span>
            </h2>
          </div>

          <button className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-stone-500 hover:text-amber-700 transition-colors pb-2 border-b border-stone-200 hover:border-amber-700">
            View All Archive{" "}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* --- The Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {NEWS_ITEMS.map((item) => (
            <NewsSquare key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
