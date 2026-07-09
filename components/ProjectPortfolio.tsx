"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Building2,
  Home,
  Palmtree,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const PROJECT_IMAGES = [
  "https://scontent.fmct8-1.fna.fbcdn.net/v/t39.30808-6/506884360_10237378699670787_6529852226525833453_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=K8Ocgi1bensQ7kNvwH9mBgZ&_nc_oc=AdmowpPVevh73Ghec7R9Wp379OXgXgGAsBTS1H83Zt8A82HNW4RMFUFLP3iqfokcbxM&_nc_zt=23&_nc_ht=scontent.fmct8-1.fna&_nc_gid=q4EgaWfy5blYAN3Vm4UPqw&oh=00_AfqpRY5odARAj59ElIdTI20RtcKLRxKmQdo0gEqCi9oTEg&oe=6962A542",
  "https://assets.savills.com/properties/OMOMN1612L288338/df92182f4c61d855532729268aceac51-1-galleria-mall-27_l_gal.jpg",
  "https://omannews.gov.om//images/topics/story-images/68875fb8019ce.jpeg",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/574767184.jpg?k=379a70bfd4d4733d6e8f86a8230776a0c16ebd9539a0c711c93375dbe0a24726&o=",
];

const PROJECT_ICONS = [
  <ShoppingBag className="w-5 h-5" />,
  <Building2 className="w-5 h-5" />,
  <Home className="w-5 h-5" />,
  <Palmtree className="w-5 h-5" />,
];

const PROJECT_LAYOUT = [
  { colSpan: "lg:col-span-2", rowSpan: "lg:row-span-2" },
  { colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
  { colSpan: "lg:col-span-1", rowSpan: "lg:row-span-2" },
  { colSpan: "lg:col-span-2", rowSpan: "lg:row-span-1" },
];

const ProjectPortfolio = () => {
  const { t } = useLanguage();
  const projects = t.portfolio.projects;

  return (
    <section className="relative w-full bg-white py-24 lg:py-32 font-sans overflow-hidden">
      {/* Background Decor */}
      <div
        className="absolute inset-0 border-t border-gray-100"
        style={{
          backgroundImage: "radial-gradient(#6a6931 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
          opacity: 0.1,
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[2px] bg-[#f1c83d]" />
              <span className="text-[#6a6931] font-bold tracking-widest uppercase text-xs font-cairo">
                {t.portfolio.sectionTag}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-serif text-gray-900 leading-[1.1] font-cairo"
            >
              {t.portfolio.headlineA} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6a6931] to-[#f1c83d]">
                {t.portfolio.headlineB}
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block text-right"
          >
            <p className="text-gray-400 text-sm font-mono font-cairo">{t.portfolio.scrollHint}</p>
            <div className="h-16 w-[1px] bg-gray-300 mx-auto mt-4" />
          </motion.div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] lg:auto-rows-[350px] gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              icon={PROJECT_ICONS[index]}
              image={PROJECT_IMAGES[index]}
              colSpan={PROJECT_LAYOUT[index].colSpan}
              rowSpan={PROJECT_LAYOUT[index].rowSpan}
            />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 flex justify-center">
          <button className="group relative px-8 py-4 bg-transparent border border-[#6a6931] text-[#6a6931] overflow-hidden transition-colors hover:text-white font-cairo">
            <span className="relative z-10 font-bold tracking-widest uppercase text-sm">
              {t.portfolio.viewArchive}
            </span>
            <div className="absolute inset-0 bg-[#6a6931] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
          </button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  icon,
  image,
  colSpan,
  rowSpan,
}: {
  project: any;
  index: number;
  icon: React.ReactNode;
  image: string;
  colSpan: string;
  rowSpan: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`relative group overflow-hidden rounded-sm cursor-pointer ${colSpan} ${rowSpan}`}
    >
      {/* Image Layer */}
      <div className="absolute inset-0 bg-gray-900">
        <img
          src={image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:opacity-60"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

      {/* Category Tag */}
      <div className="absolute top-6 left-6 z-20 overflow-hidden">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-full transform -translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-[#f1c83d]">{icon}</span>
          <span className="text-white text-xs font-medium uppercase tracking-wider font-cairo">
            {project.category}
          </span>
        </div>
      </div>

      {/* Arrow Icon */}
      <div className="absolute top-6 right-6 z-20">
        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 text-white transition-all duration-300 group-hover:bg-[#f1c83d] group-hover:text-black group-hover:border-[#f1c83d]">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 z-20">
        <div className="w-full h-[1px] bg-white/20 mb-6 transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-white/60 mb-2 text-sm font-cairo">
              <MapPin className="w-3 h-3" />
              {project.location}
            </div>
            <h3 className="text-2xl lg:text-3xl font-serif text-white mb-2 leading-tight font-cairo">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm max-w-sm line-clamp-2 group-hover:line-clamp-none transition-all font-cairo">
              {project.description}
            </p>
          </div>

          {/* Stats */}
          <div className="hidden lg:block transform translate-y-10 opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100 text-right">
            <p className="text-[#f1c83d] text-2xl font-bold font-serif font-cairo">
              {project.stats}
            </p>
            {project.statsSub && (
              <p className="text-white/60 text-xs uppercase tracking-wider font-cairo">
                {project.statsSub}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Gold Border */}
      <div className="absolute inset-0 border-2 border-[#f1c83d] opacity-0 transform scale-95 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectPortfolio;
