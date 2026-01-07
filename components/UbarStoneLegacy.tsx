"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Quote, ArrowRight, Crosshair } from "lucide-react";

// --- VISUAL ASSETS (Placeholders - Replace with actual high-res stone textures) ---
const STONE_IMG_1 = "/ain.png"; // Textured Stone Surface
const STONE_IMG_2 =
  "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2832&auto=format&fit=crop"; // Marble/Architecture

const COLORS = {
  primary: "#f1c83d",
  secondary: "#6a6931",
  dark: "#1a1a1a",
  light: "#ffffff",
  grid: "#e5e5e5",
};

const AboutSectionLight = () => {
  // Animation Variants for that "Cinematic" feel
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }, // Custom cubic-bezier for "expensive" feel
    },
  };

  const imageReveal = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-white overflow-hidden py-24 lg:py-32 font-sans">
      {/* --- Decorative Background Elements (Subtle elegance) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full opacity-40"
          style={{
            backgroundImage: `linear-gradient(${COLORS.grid} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.grid} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Decorative Crosshairs */}
        <div className="absolute top-10 left-10 text-[#6a6931]/30">
          <Crosshair />
        </div>
        <div className="absolute bottom-10 right-10 text-[#6a6931]/30">
          <Crosshair />
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f9f9f9] -z-10 hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#f1c83d] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* --- LEFT COLUMN: The Visual Narrative (Images) --- */}
          <div className="lg:col-span-5 relative group">
            {/* Architectural Line Decoration */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "110%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute -left-8 -top-10 w-[2px] bg-[#f1c83d] hidden lg:block"
            />

            <div className="relative z-10">
              <motion.div
                variants={imageReveal}
                className="relative overflow-hidden aspect-[3/4] shadow-2xl"
              >
                <div className="absolute inset-0 bg-[#6a6931] opacity-10 z-10 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
                <img
                  src={STONE_IMG_1}
                  alt="Raw Stone Texture"
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>

              {/* Overlapping Secondary Image */}
              <motion.div
                variants={itemVariants}
                className="absolute -bottom-12 -right-12 w-3/5 aspect-square border-8 border-white shadow-xl overflow-hidden hidden md:block"
              >
                <img
                  src={STONE_IMG_2}
                  alt="Detailed Stone"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: The Copy (Typography) --- */}
          <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center">
            {/* Brand Narrative Tag */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mb-6"
            >
              <span className="h-[1px] w-12 bg-[#6a6931]" />
              <span className="text-[#6a6931] uppercase tracking-[0.25em] text-xs font-bold">
                Brand Narrative: A Piece of History
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-serif font-light text-gray-900 leading-[1.1] mb-8"
            >
              We Don't Just <br />
              <span className="font-serif italic text-[#6a6931]">Offer Stone.</span>
            </motion.h2>

            {/* Body Copy - Using 2 columns for architectural readability on large screens */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 leading-relaxed mb-12"
            >
              <p>
                At Ubar Stone, we offer you the chance to own a piece of
                history, etched with its markings and timeless secrets. Every
                story begins with a step, and every great project starts with an
                idea.
              </p>
              <p>
                We are here to understand your vision and convert it into
                reality with the elegance and sophistication it truly deserves.
              </p>
            </motion.div>

            {/* The Promise Card - Highlighting the "Mind Blowing" aspect */}
            <motion.div
              variants={itemVariants}
              className="relative p-8 bg-[#f8f8f6] border-l-4 border-[#f1c83d]"
            >
              <Quote className="absolute top-4 left-4 w-8 h-8 text-[#f1c83d] opacity-20 transform -scale-x-100" />

              <h3 className="text-[#6a6931] font-serif text-2xl mb-2 relative z-10">
                The Promise
              </h3>
              <p className="text-gray-800 text-lg font-medium italic relative z-10">
                "A silent impact, with a presence that never fades."
              </p>

              {/* Interactive Element */}
              <div className="mt-6 flex items-center gap-2 text-[#f1c83d] font-bold tracking-wide text-sm uppercase cursor-pointer group/link">
                <span>Discover our Legacy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSectionLight;
