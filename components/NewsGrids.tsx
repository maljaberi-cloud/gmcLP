"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Crosshair, Megaphone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const COLORS = {
  primary: "#f1c83d",
  secondary: "#6a6931",
  dark: "#1a1a1a",
  light: "#ffffff",
  grid: "#e5e5e5",
};

const NewsGrid = () => {
  const { t } = useLanguage();
  const items = t.news.items;

  return (
    <section className="relative w-full bg-white py-24 lg:py-32 font-sans border-t border-gray-100 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full opacity-40"
          style={{
            backgroundImage: `linear-gradient(${COLORS.grid} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.grid} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-10 left-10 text-[#6a6931]/30"><Crosshair /></div>
        <div className="absolute bottom-10 right-10 text-[#6a6931]/30"><Crosshair /></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="h-[2px] w-8 bg-[#f1c83d]"></span>
              <span className="text-gray-400 font-bold uppercase text-xs tracking-widest font-cairo">
                {t.news.sectionTag}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-serif text-gray-900 font-cairo"
            >
              {t.news.headline} <br />
              <span className="italic text-[#6a6931]">{t.news.headlineItalic}</span>
            </motion.h2>
          </div>

          <motion.button
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center gap-2 text-[#6a6931] font-bold uppercase tracking-widest text-xs border-b border-[#6a6931] pb-1 font-cairo"
          >
            {t.news.viewAll} <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <GridItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-12 text-center md:hidden">
          <button className="px-8 py-3 bg-[#f8f8f6] text-[#6a6931] font-bold uppercase text-xs tracking-widest rounded hover:bg-[#6a6931] hover:text-white transition-colors font-cairo">
            {t.news.viewAllMobile}
          </button>
        </div>
      </div>
    </section>
  );
};

const GridItem = ({ item, index }: { item: any; index: number }) => {
  const tileVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1 },
    },
  };

  const isAd = item.type === "ad";

  return (
    <motion.div
      variants={tileVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`group relative aspect-square w-full overflow-hidden cursor-pointer ${isAd ? "" : "bg-gray-100"}`}
    >
      {/* NEWS ITEM */}
      {!isAd && (
        <>
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
          </div>

          <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 font-cairo">
                {item.category}
              </span>
              <div className="w-8 h-8 rounded-full bg-[#f1c83d] flex items-center justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
              <div className="flex items-center gap-2 text-white/60 mb-3 text-xs font-mono font-cairo">
                <Calendar className="w-3 h-3" />
                {item.date}
              </div>
              <h3 className="text-2xl font-serif text-white leading-tight font-cairo">
                {item.title}
              </h3>
              <div className="h-[1px] w-0 bg-[#f1c83d] mt-4 transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
        </>
      )}

      {/* ADVERTISEMENT */}
      {isAd && (
        <div
          className="w-full h-full p-8 flex flex-col justify-between relative overflow-hidden"
          style={{ backgroundColor: item.bgColor }}
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white opacity-10 blur-3xl" />

          <div className="relative z-10">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border mb-4 font-cairo ${
                item.textColor === "text-white"
                  ? "border-white/30 text-white"
                  : "border-gray-900/20 text-gray-900"
              }`}
            >
              <Megaphone className="w-3 h-3" />
              {item.category}
            </div>

            <h3 className={`text-3xl font-serif leading-tight font-cairo ${item.textColor}`}>
              {item.title}
            </h3>
          </div>

          <div className="relative z-10">
            <div
              className={`flex items-center gap-3 font-bold uppercase tracking-widest text-xs group-hover:gap-5 transition-all duration-300 font-cairo ${item.textColor}`}
            >
              {item.cta} <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="absolute inset-0 border-4 border-transparent transition-all duration-300 group-hover:border-white/20" />
        </div>
      )}
    </motion.div>
  );
};

export default NewsGrid;
