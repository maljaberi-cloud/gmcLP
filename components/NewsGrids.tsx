"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Megaphone } from "lucide-react";

// --- DATA SOURCE: MIX OF NEWS & ADS ---
const NEWS_ITEMS = [
  {
    id: 1,
    type: "news",
    category: "Expansion",
    date: "OCT 12, 2025",
    title: "Ubar Stone Opens New Export Hub in Duqm.",
    image: "/ain.png",
  },
  {
    id: 2,
    type: "ad", // THIS IS AN ADVERTISEMENT
    category: "Limited Offer",
    title: "Architectural Partners: Get 15% Off Bulk Limestone Orders.",
    cta: "Apply Now",
    bgColor: "#f1c83d", // Primary Gold
    textColor: "text-gray-900",
  },
  {
    id: 3,
    type: "news",
    category: "Sustainability",
    date: "SEP 28, 2025",
    title: "Achieving Net-Zero: Our New Calcination Process.",
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    type: "news",
    category: "Exhibition",
    date: "SEP 15, 2025",
    title: "Visit us at The Big 5 Construction Week, Dubai.",
    image:
      "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=2680&auto=format&fit=crop",
  },
  {
    id: 5,
    type: "ad", // ADVERTISEMENT
    category: "New Arrival",
    title: 'The "Desert Rose" Collection is finally here.',
    cta: "View Catalog",
    bgColor: "#6a6931", // Secondary Olive
    textColor: "text-white",
  },
  {
    id: 6,
    type: "news",
    category: "Project",
    date: "AUG 10, 2025",
    title: "Supplying the Royal Opera House Renovation.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop",
  },
];

const NewsGrid = () => {
  return (
    <section className="w-full bg-white py-24 lg:py-32 font-sans border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="h-[2px] w-8 bg-[#f1c83d]"></span>
              <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">
                The Ledger
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-serif text-gray-900"
            >
              News, Insights & <br />
              <span className="italic text-[#6a6931]">Exclusive Offers.</span>
            </motion.h2>
          </div>

          <motion.button
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center gap-2 text-[#6a6931] font-bold uppercase tracking-widest text-xs border-b border-[#6a6931] pb-1"
          >
            View Full Archive <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* --- THE MOSAIC GRID (SQUARE POSTS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_ITEMS.map((item, index) => (
            <GridItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <button className="px-8 py-3 bg-[#f8f8f6] text-[#6a6931] font-bold uppercase text-xs tracking-widest rounded hover:bg-[#6a6931] hover:text-white transition-colors">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

// --- INDIVIDUAL TILE COMPONENT ---
const GridItem = ({ item, index }) => {
  // Animation Variant
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
      {/* === CASE 1: NEWS ITEM (IMAGE BASED) === */}
      {!isAd && (
        <>
          {/* Image Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
          </div>

          {/* Content Layer */}
          <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between">
            {/* Top Tags */}
            <div className="flex justify-between items-start">
              <span className="bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">
                {item.category}
              </span>
              <div className="w-8 h-8 rounded-full bg-[#f1c83d] flex items-center justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Bottom Text */}
            <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
              <div className="flex items-center gap-2 text-white/60 mb-3 text-xs font-mono">
                <Calendar className="w-3 h-3" />
                {item.date}
              </div>
              <h3 className="text-2xl font-serif text-white leading-tight">
                {item.title}
              </h3>
              <div className="h-[1px] w-0 bg-[#f1c83d] mt-4 transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
        </>
      )}

      {/* === CASE 2: ADVERTISEMENT (TYPOGRAPHY BASED) === */}
      {isAd && (
        <div
          className="w-full h-full p-8 flex flex-col justify-between relative overflow-hidden"
          style={{ backgroundColor: item.bgColor }}
        >
          {/* Decorative Circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white opacity-10 blur-3xl" />

          <div className="relative z-10">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border mb-4 ${
                item.textColor === "text-white"
                  ? "border-white/30 text-white"
                  : "border-gray-900/20 text-gray-900"
              }`}
            >
              <Megaphone className="w-3 h-3" />
              Advert
            </div>

            <h3
              className={`text-3xl font-serif leading-tight ${item.textColor}`}
            >
              {item.title}
            </h3>
          </div>

          <div className="relative z-10">
            <div
              className={`flex items-center gap-3 font-bold uppercase tracking-widest text-xs group-hover:gap-5 transition-all duration-300 ${item.textColor}`}
            >
              {item.cta} <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Hover Border Effect for Ads */}
          <div className="absolute inset-0 border-4 border-transparent transition-all duration-300 group-hover:border-white/20" />
        </div>
      )}
    </motion.div>
  );
};

export default NewsGrid;
