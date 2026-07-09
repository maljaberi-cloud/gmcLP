"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, ArrowRight, Crosshair } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const STONE_IMG_1 = "/ain.png";
const STONE_IMG_2 =
  "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop";

const COLORS = {
  primary: "#f1c83d",
  secondary: "#6a6931",
  grid: "#e5e5e5",
};

const AboutSectionLight = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageReveal = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="aboutUs"
      className="relative w-full bg-white overflow-hidden py-24 lg:py-32 font-sans"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full opacity-40"
          style={{
            backgroundImage: `linear-gradient(${COLORS.grid} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.grid} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-10 left-10 text-[#6a6931]/30">
          <Crosshair />
        </div>
        <div className="absolute bottom-10 right-10 text-[#6a6931]/30">
          <Crosshair />
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f9f9f9] -z-10 hidden lg:block" />

      <div
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(241,200,61,0.2) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 relative group">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="absolute -left-8 -top-10 w-[2px] h-[110%] bg-[#f1c83d] hidden lg:block origin-top"
            />

            <div className="relative z-10">
              <motion.div
                variants={imageReveal}
                className="relative overflow-hidden aspect-[3/4] shadow-2xl bg-gray-100"
              >
                <div className="absolute inset-0 bg-[#6a6931] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10" />
                <img
                  src={STONE_IMG_1}
                  alt="Raw Stone Texture"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="absolute -bottom-12 -right-12 w-3/5 aspect-square border-8 border-white shadow-xl overflow-hidden hidden md:block bg-gray-100"
              >
                <img
                  src={STONE_IMG_2}
                  alt="Detailed Stone"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mb-6"
            >
              <span className="h-[1px] w-12 bg-[#6a6931]" />
              <span className="text-[#6a6931] uppercase tracking-[0.25em] text-xs font-bold font-cairo">
                {t.about.tag}
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-serif font-light text-gray-900 leading-[1.1] mb-8 font-cairo"
            >
              {t.about.headlineA} <br />
              <span className="font-serif italic text-[#6a6931]">
                {t.about.headlineB}
              </span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 leading-relaxed mb-12 font-cairo"
            >
              <p>{t.about.bodyA}</p>
              <p>{t.about.bodyB}</p>
            </motion.div>

            {/* The Promise Card */}
            <motion.div
              variants={itemVariants}
              className="relative p-8 bg-[#f8f8f6] border-l-4 border-[#f1c83d]"
            >
              <Quote className="absolute top-4 left-4 w-8 h-8 text-[#f1c83d] opacity-20 transform -scale-x-100" />

              <h3 className="text-[#6a6931] font-serif text-2xl mb-2 relative z-10 font-cairo">
                {t.about.promiseLabel}
              </h3>
              <p className="text-gray-800 text-lg font-medium italic relative z-10 font-cairo">
                {t.about.promiseQuote}
              </p>

              <div className="mt-6 flex items-center gap-2 text-[#f1c83d] font-bold tracking-wide text-sm uppercase cursor-pointer group/link font-cairo">
                <span>{t.about.discoverCta}</span>
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
