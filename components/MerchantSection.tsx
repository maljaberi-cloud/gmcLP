"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  X,
  ArrowUpRight,
  Maximize2,
  Layers,
  Ruler,
  Truck,
  Droplet,
  Info,
  Copy,
  CheckCircle2,
  Grid3X3,
  Box,
  Fingerprint,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---
type Product = {
  name: string;
  category: string;
  code: string;
  image: string;
  material: string;
  quality: string;
  surface_finishing: string;
  usage: string;
  product_form: string;
  sizes: {
    slab_size: string;
    cut_to_size_options: string[];
    note: string;
  };
  thickness_options: string[];
  moq: string;
  delivery_time: string;
  contact_emails: string[];
};

// --- The Raw Data (Preserved) ---
const RAW_PRODUCTS: Product[] = [
  {
    name: "Global White GM-101",
    image: "https://www.gmmc.om/wp-content/uploads/2019/03/gm8-200x200.png",
    category: "Artificial marble",
    code: "GM-101",
    material: "Artificial Marble.",
    quality: "High.",
    surface_finishing: "Polished Glossy.",
    usage:
      "For (Flooring, Cladding, Staircase, Kitchen Top, Counter Top, Worktop, Vanity top) and any commercial / residential projects application etc...",
    product_form: "Slabs.",
    sizes: {
      slab_size: "2700 mm x 1800 mm",
      cut_to_size_options: ["30cmX30cm", "60cmx60cm", "100cmX100cm"],
      note: "Cut-to-Sizes can be made at extrac charges.",
    },
    thickness_options: ["1,6cm", "1,8cm", "2cm."],
    moq: "500 sqm.",
    delivery_time:
      "7-30 days depends on thickness, size order, quantity and color (subject to availability of raw material).",
    contact_emails: ["marketing@gmmc.om", "info@gmmc.om"],
  },
  {
    name: "Kashmiri GM-102",
    image: "https://www.gmmc.om/wp-content/uploads/2019/03/gm2-200x200.png",
    category: "Artificial marble",
    code: "GM-102",
    material: "Artificial Marble.",
    quality: "High.",
    surface_finishing: "Polished Glossy.",
    usage:
      "For (Flooring, Cladding, Staircase, Kitchen Top, Counter Top, Worktop, Vanity top) and any commercial / residential projects application etc...",
    product_form: "Slabs.",
    sizes: {
      slab_size: "2700 mm x 1800 mm",
      cut_to_size_options: ["30cmX30cm", "60cmx60cm", "100cmX100cm"],
      note: "Cut-to-Sizes can be made at extrac charges.",
    },
    thickness_options: ["1,6cm", "1,8cm", "2cm."],
    moq: "500 sqm.",
    delivery_time:
      "7-30 days depends on thickness, size order, quantity and color (subject to availability of raw material).",
    contact_emails: ["marketing@gmmc.om", "info@gmmc.om"],
  },
  {
    name: "Duqm GM-103",
    image: "https://www.gmmc.om/wp-content/uploads/2019/09/gm-103-200x200.png",
    category: "Artificial marble",
    code: "GM-103",
    material: "Artificial Marble.",
    quality: "High.",
    surface_finishing: "Polished Glossy.",
    usage:
      "For (Flooring, Cladding, Staircase, Kitchen Top, Counter Top, Worktop, Vanity top) and any commercial / residential projects application etc...",
    product_form: "Slabs.",
    sizes: {
      slab_size: "2700 mm x 1800 mm",
      cut_to_size_options: ["30cmX30cm", "60cmx60cm", "100cmX100cm"],
      note: "Cut-to-Sizes can be made at extrac charges.",
    },
    thickness_options: ["1,6cm", "1,8cm", "2cm."],
    moq: "500 sqm.",
    delivery_time:
      "7-30 days depends on thickness, size order, quantity and color (subject to availability of raw material).",
    contact_emails: ["marketing@gmmc.om", "info@gmmc.om"],
  },
  {
    name: "Majani GM-105",
    image: "https://www.gmmc.om/wp-content/uploads/2019/09/gm-105-200x200.png",
    category: "Artificial marble",
    code: "GM-105",
    material: "Artificial Marble.",
    quality: "High.",
    surface_finishing: "Polished Glossy.",
    usage:
      "For (Flooring, Cladding, Staircase, Kitchen Top, Counter Top, Worktop, Vanity top) and any commercial / residential projects application etc...",
    product_form: "Slabs.",
    sizes: {
      slab_size: "2700 mm x 1800 mm",
      cut_to_size_options: ["30cmX30cm", "60cmx60cm", "100cmX100cm"],
      note: "Cut-to-Sizes can be made at extrac charges.",
    },
    thickness_options: ["1,6cm", "1,8cm", "2cm."],
    moq: "500 sqm.",
    delivery_time:
      "7-30 days depends on thickness, size order, quantity and color (subject to availability of raw material).",
    contact_emails: ["marketing@gmmc.om", "info@gmmc.om"],
  },
  {
    name: "Global Golden GM-106",
    image: "https://www.gmmc.om/wp-content/uploads/2019/03/ok3-200x200.jpg",
    category: "Artificial marble",
    code: "GM-106",
    material: "Artificial Marble.",
    quality: "High.",
    surface_finishing: "Polished Glossy.",
    usage:
      "For (Flooring, Cladding, Staircase, Kitchen Top, Counter Top, Worktop, Vanity top) and any commercial / residential projects application etc...",
    product_form: "Slabs.",
    sizes: {
      slab_size: "2700 mm x 1800 mm",
      cut_to_size_options: ["30cmX30cm", "60cmx60cm", "100cmX100cm"],
      note: "Cut-to-Sizes can be made at extrac charges.",
    },
    thickness_options: ["1,6cm", "1,8cm", "2cm."],
    moq: "500 sqm.",
    delivery_time:
      "7-30 days depends on thickness, size order, quantity and color (subject to availability of raw material).",
    contact_emails: ["marketing@gmmc.om", "info@gmmc.om"],
  },
  {
    name: "Global Beige GM-107",
    image: "https://www.gmmc.om/wp-content/uploads/2018/12/A-15-200x200.jpg",
    category: "Artificial marble",
    code: "GM-107",
    material: "Artificial Marble.",
    quality: "High.",
    surface_finishing: "Polished Glossy.",
    usage:
      "For (Flooring, Cladding, Staircase, Kitchen Top, Counter Top, Worktop, Vanity top) and any commercial / residential projects application etc...",
    product_form: "Slabs.",
    sizes: {
      slab_size: "2700 mm x 1800 mm",
      cut_to_size_options: ["30cmX30cm", "60cmx60cm", "100cmX100cm"],
      note: "Cut-to-Sizes can be made at extrac charges.",
    },
    thickness_options: ["1,6cm", "1,8cm", "2cm."],
    moq: "500 sqm.",
    delivery_time:
      "7-30 days depends on thickness, size order, quantity and color (subject to availability of raw material).",
    contact_emails: ["marketing@gmmc.om", "info@gmmc.om"],
  },
  {
    name: "Maha GM-108",
    image: "https://www.gmmc.om/wp-content/uploads/2019/09/gm-108-200x200.png",
    category: "Artificial marble",
    code: "GM-108",
    material: "Artificial Marble.",
    quality: "High.",
    surface_finishing: "Polished Glossy.",
    usage:
      "For (Flooring, Cladding, Staircase, Kitchen Top, Counter Top, Worktop, Vanity top) and any commercial / residential projects application etc...",
    product_form: "Slabs.",
    sizes: {
      slab_size: "2700 mm x 1800 mm",
      cut_to_size_options: ["30cmX30cm", "60cmx60cm", "100cmX100cm"],
      note: "Cut-to-Sizes can be made at extrac charges.",
    },
    thickness_options: [
      "1,6cm",
      "1,8cm",
      "2cm.",
      "Custom thickness available upon request.",
    ],
    moq: "500 sqm.",
    delivery_time:
      "7-30 days depends on thickness, size order, quantity and color (subject to availability of raw material).",
    contact_emails: ["marketing@gmmc.om", "info@gmmc.om"],
  },
  {
    name: "Eram GM-109",
    image: "https://www.gmmc.om/wp-content/uploads/2019/09/gm-109-200x200.png",
    category: "Artificial marble",
    code: "GM-109",
    material: "Artificial Marble.",
    quality: "High.",
    surface_finishing: "Polished Glossy.",
    usage:
      "For (Flooring, Cladding, Staircase, Kitchen Top, Counter Top, Worktop, Vanity top) and any commercial / residential projects application etc...",
    product_form: "Slabs.",
    sizes: {
      slab_size: "2700 mm x 1800 mm",
      cut_to_size_options: ["30cmX30cm", "60cmx60cm", "100cmX100cm"],
      note: "Cut-to-Sizes can be made at extrac charges.",
    },
    thickness_options: ["1,6cm", "1,8cm", "2cm."],
    moq: "500 sqm.",
    delivery_time:
      "7-30 days depends on thickness, size order, quantity and color (subject to availability of raw material).",
    contact_emails: ["marketing@gmmc.om", "info@gmmc.om"],
  },
  {
    name: "Mazoon GM-110",
    image:
      "https://www.gmmc.om/wp-content/uploads/2019/03/DSC00273-200x200.png",
    category: "Artificial marble",
    code: "GM-110",
    material: "Artificial Marble.",
    quality: "High.",
    surface_finishing: "Polished Glossy.",
    usage:
      "For (Flooring, Cladding, Staircase, Kitchen Top, Counter Top, Worktop, Vanity top) and any commercial / residential projects application etc...",
    product_form: "Slabs.",
    sizes: {
      slab_size: "2700 mm x 1800 mm",
      cut_to_size_options: ["30cmX30cm", "60cmx60cm", "100cmX100cm"],
      note: "Cut-to-Sizes can be made at extrac charges.",
    },
    thickness_options: ["1,6cm", "1,8cm", "2cm."],
    moq: "500 sqm.",
    delivery_time:
      "7-30 days depends on thickness, size order, quantity and color (subject to availability of raw material).",
    contact_emails: ["marketing@gmmc.om", "info@gmmc.om"],
  },
  {
    name: "Reedan GM-111",
    image: "https://www.gmmc.om/wp-content/uploads/2019/09/gm-111-200x200.png",
    category: "Artificial marble",
    code: "GM-111",
    material: "Artificial Marble.",
    quality: "High.",
    surface_finishing: "Polished Glossy.",
    usage:
      "For (Flooring, Cladding, Staircase, Kitchen Top, Counter Top, Worktop, Vanity top) and any commercial / residential projects application etc...",
    product_form: "Slabs.",
    sizes: {
      slab_size: "2700 mm x 1800 mm",
      cut_to_size_options: ["30cmX30cm", "60cmx60cm", "100cmX100cm"],
      note: "Cut-to-Sizes can be made at extrac charges.",
    },
    thickness_options: ["1,6cm", "1,8cm", "2cm."],
    moq: "500 sqm.",
    delivery_time:
      "7-30 days depends on thickness, size order, quantity and color (subject to availability of raw material).",
    contact_emails: ["marketing@gmmc.om", "info@gmmc.om"],
  },
  {
    name: "Global 1 GM-112",
    image:
      "https://www.gmmc.om/wp-content/uploads/2018/11/6fb9863626801cbd61aa474503be909c-200x200.jpg",
    category: "Artificial marble",
    code: "GM-112",
    material: "Artificial Marble.",
    quality: "High.",
    surface_finishing: "Polished Glossy.",
    usage:
      "For (Flooring, Cladding, Staircase, Kitchen Top, Counter Top, Worktop, Vanity top) and any commercial / residential projects application etc...",
    product_form: "Slabs.",
    sizes: {
      slab_size: "2700 mm x 1800 mm",
      cut_to_size_options: ["30cmX30cm", "60cmx60cm", "100cmX100cm"],
      note: "Cut-to-Sizes can be made at extrac charges.",
    },
    thickness_options: ["1,6cm", "1,8cm", "2cm."],
    moq: "500 sqm.",
    delivery_time:
      "7-30 days depends on thickness, size order, quantity and color (subject to availability of raw material).",
    contact_emails: ["marketing@gmmc.om", "info@gmmc.om"],
  },
  {
    name: "Global Caves GM-115",
    image: "https://www.gmmc.om/wp-content/uploads/2019/09/gm-115-200x200.png",
    category: "Artificial marble",
    code: "GM-115",
    material: "Artificial Marble.",
    quality: "High.",
    surface_finishing: "Polished Glossy.",
    usage:
      "For (Flooring, Cladding, Staircase, Kitchen Top, Counter Top, Worktop, Vanity top) and any commercial / residential projects application etc...",
    product_form: "Slabs.",
    sizes: {
      slab_size: "2700 mm x 1800 mm",
      cut_to_size_options: ["30cmX30cm", "60cmx60cm", "100cmX100cm"],
      note: "Cut-to-Sizes can be made at extrac charges.",
    },
    thickness_options: ["1,6cm", "1,8cm", "2cm."],
    moq: "500 sqm.",
    delivery_time:
      "7-30 days depends on thickness, size order, quantity and color (subject to availability of raw material).",
    contact_emails: ["marketing@gmmc.om", "info@gmmc.om"],
  },
  {
    name: "Obar GM-116",
    image: "https://www.gmmc.om/wp-content/uploads/2019/09/gm-116-200x200.png",
    category: "Artificial marble",
    code: "GM-116",
    material: "Artificial Marble.",
    quality: "High.",
    surface_finishing: "Polished Glossy.",
    usage:
      "For (Flooring, Cladding, Staircase, Kitchen Top, Counter Top, Worktop, Vanity top) and any commercial / residential projects application etc...",
    product_form: "Slabs.",
    sizes: {
      slab_size: "2700 mm x 1800 mm",
      cut_to_size_options: ["30cmX30cm", "60cmx60cm", "100cmX100cm"],
      note: "Cut-to-Sizes can be made at extrac charges.",
    },
    thickness_options: ["1,6cm", "1,8cm", "2cm."],
    moq: "500 sqm.",
    delivery_time:
      "7-30 days depends on thickness, size order, quantity and color (subject to availability of raw material).",
    contact_emails: ["marketing@gmmc.om", "info@gmmc.om"],
  },
  {
    name: "Ophir GM-117",
    image: "https://www.gmmc.om/wp-content/uploads/2019/09/gm-117-200x200.png",
    category: "Artificial marble",
    code: "GM-117",
    material: "Artificial Marble.",
    quality: "High.",
    surface_finishing: "Polished Glossy.",
    usage:
      "For (Flooring, Cladding, Staircase, Kitchen Top, Counter Top, Worktop, Vanity top) and any commercial / residential projects application etc...",
    product_form: "Slabs.",
    sizes: {
      slab_size: "2700 mm x 1800 mm",
      cut_to_size_options: ["30cmX30cm", "60cmx60cm", "100cmX100cm"],
      note: "Cut-to-Sizes can be made at extrac charges.",
    },
    thickness_options: ["1,6cm", "1,8cm", "2cm."],
    moq: "500 sqm.",
    delivery_time:
      "7-30 days depends on thickness, size order, quantity and color (subject to availability of raw material).",
    contact_emails: ["marketing@gmmc.om", "info@gmmc.om"],
  },
  {
    name: "Luban GM-122",
    image: "https://www.gmmc.om/wp-content/uploads/2019/09/gm-122-200x200.png",
    category: "Artificial marble",
    code: "GM-122",
    material: "Artificial Marble.",
    quality: "High.",
    surface_finishing: "Polished Glossy.",
    usage:
      "For (Flooring, Cladding, Staircase, Kitchen Top, Counter Top, Worktop, Vanity top) and any commercial / residential projects application etc...",
    product_form: "Slabs.",
    sizes: {
      slab_size: "2700 mm x 1800 mm",
      cut_to_size_options: ["30cmX30cm", "60cmx60cm", "100cmX100cm"],
      note: "Cut-to-Sizes can be made at extrac charges.",
    },
    thickness_options: ["1,6cm", "1,8cm", "2cm."],
    moq: "500 sqm.",
    delivery_time:
      "7-30 days depends on thickness, size order, quantity and color (subject to availability of raw material).",
    contact_emails: ["marketing@gmmc.om", "info@gmmc.om"],
  },
  {
    name: "Global Forest GM-124",
    image: "https://www.gmmc.om/wp-content/uploads/2019/09/gm-124-200x200.png",
    category: "Artificial marble",
    code: "GM-124",
    material: "Artificial Marble.",
    quality: "High.",
    surface_finishing: "Polished Glossy.",
    usage:
      "For (Flooring, Cladding, Staircase, Kitchen Top, Counter Top, Worktop, Vanity top) and any commercial / residential projects application etc...",
    product_form: "Slabs.",
    sizes: {
      slab_size: "2700 mm x 1800 mm",
      cut_to_size_options: ["30cmX30cm", "60cmx60cm", "100cmX100cm"],
      note: "Cut-to-Sizes can be made at extrac charges.",
    },
    thickness_options: ["1,6cm", "1,8cm", "2cm."],
    moq: "500 sqm.",
    delivery_time:
      "7-30 days depends on thickness, size order, quantity and color (subject to availability of raw material).",
    contact_emails: ["marketing@gmmc.om", "info@gmmc.om"],
  },
  {
    name: "Darbat GM-125",
    image: "https://www.gmmc.om/wp-content/uploads/2019/09/gm-125-200x200.png",
    category: "Artificial marble",
    code: "GM-125",
    material: "Artificial Marble.",
    quality: "High.",
    surface_finishing: "Polished Glossy.",
    usage:
      "For (Flooring, Cladding, Staircase, Kitchen Top, Counter Top, Worktop, Vanity top) and any commercial / residential projects application etc...",
    product_form: "Slabs.",
    sizes: {
      slab_size: "2700 mm x 1800 mm",
      cut_to_size_options: ["30cmX30cm", "60cmx60cm", "100cmX100cm"],
      note: "Cut-to-Sizes can be made at extrac charges.",
    },
    thickness_options: ["1,6cm", "1,8cm", "2cm."],
    moq: "500 sqm.",
    delivery_time:
      "7-30 days depends on thickness, size order, quantity and color (subject to availability of raw material).",
    contact_emails: ["marketing@gmmc.om", "info@gmmc.om"],
  },
];

const categorizeProduct = (p: Product) => "Heritage"; // Simplified for demo

// --- Shared Animations ---
const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeInScale = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// --- Sub-Component: Architectural Spec Row (Updated with Orange Icons) ---
const SpecRow = ({ icon: Icon, label, value, subValue, className }: any) => (
  <div
    className={cn(
      "flex flex-col gap-1 py-4 border-b border-stone-200 last:border-0",
      className
    )}
  >
    {/* CHANGED: text-stone-400 -> text-amber-600 for that Orange Pop */}
    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-amber-600 font-bold font-mono">
      <Icon className="w-3 h-3" />
      {label}
    </div>
    <div className="pl-5">
      <div className="text-slate-900 font-medium font-serif leading-snug">
        {value}
      </div>
      {subValue && (
        <div className="text-stone-500 text-xs font-mono mt-1">{subValue}</div>
      )}
    </div>
  </div>
);

// --- Main Modal Component ---
const ProductModal = ({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(product.contact_emails[0]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8 overflow-y-auto"
    >
      {/* Backdrop with Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-stone-900/40 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* The Passport Card */}
      <motion.div
        layoutId={`card-${product.code}`}
        className="relative bg-[#FDFCF8] w-full max-w-5xl shadow-2xl rounded-sm overflow-hidden flex flex-col lg:flex-row max-h-[90vh]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* --- CHANGED: TOP RIGHT ACTION AREA --- */}
        {/* Replaced 'X' Icon with 'Request Quote' Button + Text Close */}
        <div className="absolute top-6 right-6 z-50 flex items-center gap-6">
          <button
            onClick={onClose}
            className="text-[10px] font-mono uppercase tracking-widest text-stone-500 hover:text-white lg:hover:text-slate-900 transition-colors"
          >
            Close
          </button>
        </div>

        {/* LEFT: The Specimen View */}
        <div className="lg:w-5/12 relative bg-stone-100 min-h-[300px] lg:h-auto flex items-center justify-center p-8 group overflow-hidden">
          {/* Background Blurred Clone for Atmosphere */}
          <div
            className="absolute inset-0 opacity-30 blur-3xl scale-150"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>

          {/* The Hero Image (Floating Slab) */}
          <motion.div
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="relative z-10 w-full aspect-square max-w-[320px] shadow-2xl shadow-stone-900/20 rounded-sm border-[8px] border-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {/* Reflection glint */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>

          <div className="absolute bottom-6 left-6 z-10">
            <h1 className="font-serif text-4xl lg:text-5xl text-slate-900 leading-none">
              {product.name.split(" GM")[0]}
            </h1>
            <p className="font-mono text-amber-600 text-sm mt-2 tracking-widest uppercase">
              Ref: {product.code}
            </p>
          </div>
        </div>

        {/* RIGHT: The Technical Dossier */}
        <div className="lg:w-7/12 flex flex-col h-full bg-[#FDFCF8]">
          <div className="p-8 lg:p-10 flex-1 overflow-y-auto custom-scrollbar mt-12 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
              <SpecRow
                icon={Layers}
                label="Material Composition"
                value={product.material}
                subValue={product.quality}
              />
              <SpecRow
                icon={Droplet}
                label="Surface Finish"
                value={product.surface_finishing}
              />

              <div className="col-span-1 md:col-span-2 py-4 border-b border-stone-200">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-amber-600 font-bold font-mono mb-3">
                  <Ruler className="w-3 h-3" /> Technical Dimensions
                </div>
                <div className="bg-stone-50 border border-stone-100 p-4 rounded-sm grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] text-stone-400 font-mono uppercase mb-1">
                      Standard Slab
                    </p>
                    <p className="font-serif text-lg text-slate-900">
                      {product.sizes.slab_size}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-400 font-mono uppercase mb-1">
                      Calibrated Thickness
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.thickness_options.map((t) => (
                        <span
                          key={t}
                          className="bg-white border border-stone-200 px-2 py-1 text-[10px] font-mono text-slate-600 rounded-sm shadow-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[10px] text-stone-400 mt-2 font-mono leading-relaxed pl-1">
                  * {product.sizes.cut_to_size_options.join(" / ")}
                </p>
              </div>

              <SpecRow
                className="col-span-1 md:col-span-2"
                icon={Info}
                label="Recommended Application"
                value={product.usage}
              />

              <SpecRow
                icon={Truck}
                label="Logistics"
                value={product.delivery_time}
                subValue={`Minimum Order: ${product.moq}`}
              />
            </div>
          </div>

          {/* Action Footer - Kept clean, Copy email remains for utility */}
          <div className="p-8 border-t border-stone-200 bg-stone-50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-3 bg-white border border-stone-200 text-stone-600 font-mono text-xs uppercase tracking-wider hover:border-amber-500 hover:text-amber-600 transition-colors w-full justify-center"
              >
                {copied ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                {copied ? "Copied" : "Copy Email Address"}
              </button>
            </div>
            {/* Mobile-only CTA (since top right is hidden on very small screens usually, but kept consistent here) */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main Component ---
export default function ProductCollection() {
  const [activeTab, setActiveTab] = useState("Collection");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on tab
  const filteredProducts = useMemo(() => {
    return RAW_PRODUCTS; // Simplified for this view, showing all
  }, [activeTab]);

  return (
    <section
      className="relative w-full min-h-screen bg-[#FDFCF8] text-slate-900 overflow-hidden"
      id="collection"
    >
      {/* --- Environment Textures --- */}
      {/* Subtle Noise Texture for realism */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          opacity: 0.3,
        }}
      ></div>

      <div className="container relative z-10 mx-auto px-6 py-24 lg:py-32">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-24 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-amber-600/50"></div>
            <span className="font-mono text-[#f1c83d] text-[11px] tracking-[0.3em] uppercase">
              Architectural Stone Archive
            </span>
            <div className="h-[1px] w-12 bg-amber-600/50"></div>
          </div>

          <h2 className="font-serif text-5xl md:text-7xl text-slate-900 leading-[1.1] mb-8">
            Engineered{" "}
            <span className="italic text-[#f1c83d] font-light">Perfection</span>{" "}
            <br />
            Wait for <span className="text-[#f1c83d]">No One.</span>
          </h2>

          <p className="font-sans text-stone-500 text-lg leading-relaxed max-w-xl mx-auto font-light">
            A curated selection of high-fidelity artificial marble. Precision
            engineered for the modern built environment.
          </p>
        </motion.div>

        {/* --- The Grid --- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {filteredProducts.map((product) => (
            <motion.div
              layoutId={`card-${product.code}`}
              key={product.code}
              variants={fadeInScale}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer flex flex-col gap-4"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-sm border border-stone-100 p-4 transition-all duration-500 hover:shadow-2xl hover:border-stone-300">
                {/* Image */}
                <div className="relative w-full h-full overflow-hidden bg-stone-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="w-12 h-12 rounded-full border border-white/50 text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Technical badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-2 py-1 text-[9px] font-mono tracking-widest uppercase border border-stone-100">
                  {product.code}
                </div>
              </div>

              {/* Card Meta */}
              <div className="text-center group-hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-serif text-xl text-slate-900 mb-1 group-hover:text-amber-700 transition-colors">
                  {product.name.split(" GM")[0]}
                </h3>
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-wider">
                  {product.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- Modal Layer --- */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
