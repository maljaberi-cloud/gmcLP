"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Building2,
  Home,
  Palmtree,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

// --- DATA SOURCE ---
const PROJECTS = [
  {
    id: 1,
    title: "Salalah Grand Mall",
    location: "Salalah, Oman",
    category: "Retail Destination",
    description: "A major retail destination defining the skyline.",
    stats: "100,000+ sqm Stone",
    icon: <ShoppingBag className="w-5 h-5" />,
    image:
      "https://scontent.fmct8-1.fna.fbcdn.net/v/t39.30808-6/506884360_10237378699670787_6529852226525833453_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=K8Ocgi1bensQ7kNvwH9mBgZ&_nc_oc=AdmowpPVevh73Ghec7R9Wp379OXgXgGAsBTS1H83Zt8A82HNW4RMFUFLP3iqfokcbxM&_nc_zt=23&_nc_ht=scontent.fmct8-1.fna&_nc_gid=q4EgaWfy5blYAN3Vm4UPqw&oh=00_AfqpRY5odARAj59ElIdTI20RtcKLRxKmQdo0gEqCi9oTEg&oe=6962A542",
    colSpan: "lg:col-span-2", // Custom sizing for grid
    rowSpan: "lg:row-span-2",
  },
  {
    id: 2,
    title: "Galleria Mall",
    location: "Muscat, Oman",
    category: "Commercial Design",
    description:
      "Showcasing modern commercial design with intricate detailing.",
    stats: "Bespoke Cladding",
    icon: <Building2 className="w-5 h-5" />,
    image:
      "https://assets.savills.com/properties/OMOMN1612L288338/df92182f4c61d855532729268aceac51-1-galleria-mall-27_l_gal.jpg",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1",
  },
  {
    id: 3,
    title: "Al Wathba Complex",
    location: "Abu Dhabi, UAE",
    category: "Residential",
    description:
      "350 villas featuring our stone, creating a unified community aesthetic.",
    stats: "350 Villas",
    icon: <Home className="w-5 h-5" />,
    image:
      "https://omannews.gov.om//images/topics/story-images/68875fb8019ce.jpeg",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-2", // Tall vertical card
  },
  {
    id: 4,
    title: "Plaza Resort",
    location: "Salalah, Oman",
    category: "Hospitality",
    description:
      "Luxury hospitality integration where nature meets architecture.",
    stats: "5-Star Finish",
    icon: <Palmtree className="w-5 h-5" />,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/574767184.jpg?k=379a70bfd4d4733d6e8f86a8230776a0c16ebd9539a0c711c93375dbe0a24726&o=",
    colSpan: "lg:col-span-2",
    rowSpan: "lg:row-span-1",
  },
];

const ProjectPortfolio = () => {
  return (
    <section className="relative w-full bg-white py-24 lg:py-32 font-sans overflow-hidden">
      {/* Background Decor - Subtle Grid */}
      <div
        className="absolute inset-0 border-t border-gray-100"
        style={{
          backgroundImage: "radial-gradient(#6a6931 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
          opacity: 0.1,
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[2px] bg-[#f1c83d]" />
              <span className="text-[#6a6931] font-bold tracking-widest uppercase text-xs">
                Project Portfolio
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-serif text-gray-900 leading-[1.1]"
            >
              Timeless Elegance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6a6931] to-[#f1c83d]">
                Shaping Landmarks.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block text-right"
          >
            <p className="text-gray-400 text-sm font-mono">SCROLL TO EXPLORE</p>
            <div className="h-16 w-[1px] bg-gray-300 mx-auto mt-4" />
          </motion.div>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] lg:auto-rows-[350px] gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-16 flex justify-center">
          <button className="group relative px-8 py-4 bg-transparent border border-[#6a6931] text-[#6a6931] overflow-hidden transition-colors hover:text-white">
            <span className="relative z-10 font-bold tracking-widest uppercase text-sm">
              View Full Archive
            </span>
            <div className="absolute inset-0 bg-[#6a6931] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
          </button>
        </div>
      </div>
    </section>
  );
};

// --- INDIVIDUAL CARD COMPONENT ---
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`relative group overflow-hidden rounded-sm cursor-pointer ${project.colSpan} ${project.rowSpan}`}
    >
      {/* 1. Image Layer */}
      <div className="absolute inset-0 bg-gray-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:opacity-60"
        />
      </div>

      {/* 2. Gradient Overlay (Always visible for text readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

      {/* 3. Floating Category Tag (Top Left) */}
      <div className="absolute top-6 left-6 z-20 overflow-hidden">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-full transform -translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-[#f1c83d]">{project.icon}</span>
          <span className="text-white text-xs font-medium uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>

      {/* 4. Arrow Icon (Top Right) */}
      <div className="absolute top-6 right-6 z-20">
        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 text-white transition-all duration-300 group-hover:bg-[#f1c83d] group-hover:text-black group-hover:border-[#f1c83d]">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      {/* 5. Main Content (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 z-20">
        {/* Animated Divider */}
        <div className="w-full h-[1px] bg-white/20 mb-6 transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-white/60 mb-2 text-sm">
              <MapPin className="w-3 h-3" />
              {project.location}
            </div>
            <h3 className="text-2xl lg:text-3xl font-serif text-white mb-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm max-w-sm line-clamp-2 group-hover:line-clamp-none transition-all">
              {project.description}
            </p>
          </div>

          {/* Stats - Reveals on Hover */}
          <div className="hidden lg:block transform translate-y-10 opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100 text-right">
            <p className="text-[#f1c83d] text-2xl font-bold font-serif">
              {project.stats.split(" ")[0]}
            </p>
            <p className="text-white/60 text-xs uppercase tracking-wider">
              {project.stats.split(" ").slice(1).join(" ")}
            </p>
          </div>
        </div>
      </div>

      {/* 6. Gold Border Reveal on Hover */}
      <div className="absolute inset-0 border-2 border-[#f1c83d] opacity-0 transform scale-95 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectPortfolio;
