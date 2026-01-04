"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for cleaner tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "News", href: "#news" },
  { name: "Contact Us", href: "#contact" },
];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Update state based on scroll position
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isScrolled) setIsScrolled(true);
    if (latest <= 50 && isScrolled) setIsScrolled(false);
  });

  // Dynamic Text Color: White on Hero (transparent), Dark on Scroll (white bg)
  const textColorClass = isScrolled ? "text-stone-800" : "text-white";
  const hoverBgClass = isScrolled ? "bg-stone-100" : "bg-white/20";

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-center items-start pt-6 px-4 pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      >
        <motion.div
          layout
          className={cn(
            "pointer-events-auto relative flex items-center justify-between px-6 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
            isScrolled
              ? "w-[800px] h-16 rounded-full mt-2 bg-white/90 backdrop-blur-md border border-stone-200/50 shadow-xl" // Scrolled State
              : "w-full max-w-7xl h-24 rounded-none bg-transparent border-transparent shadow-none" // Hero State
          )}
        >
          {/* --- LOGO SECTION --- */}
          <div className="flex items-center gap-2 cursor-pointer z-10">
            {/* Logo Image */}
            <img
              src="/logo.png"
              alt="Company Logo"
              className="h-10 w-auto object-contain brightness-100"
            />
            {/* Text Logo (Optional - can remove if image has text) */}
            <span
              className={cn(
                "font-serif font-bold tracking-tight transition-colors duration-300",
                isScrolled ? "text-lg text-[#6a6931]" : "text-xl text-white"
              )}
            >
              Ubar<span className="text-[#f1c83d]">Stone</span>
            </span>
          </div>

          {/* --- DESKTOP LINKS --- */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full",
                  textColorClass,
                  // Add a subtle hover text change
                  isScrolled ? "hover:text-stone-950" : "hover:text-white/80"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* The "Floating Pill" Hover Effect */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      className={cn(
                        "absolute inset-0 rounded-full z-[-1]",
                        hoverBgClass
                      )}
                      layoutId="hoverBackground"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.3,
                      }}
                    />
                  )}
                </AnimatePresence>
                {link.name}
              </a>
            ))}
          </div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <button className="group relative px-6 py-2.5  text-stone-950 overflow-hidden rounded-sm hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.7)] transition-all duration-500 border border-[#f1c83d]">
              <span className="relative z-10 flex text-[#f1c83d] items-center gap-2 text-sm tracking-wide font-bold">
                Brochure {/* Icon is now Yellow (#f1c83d) */}
                <Download className="w-4 h-4 text-[#f1c83d] group-hover:translate-x-1 transition-transform stroke-[3px]" />
              </span>

              {/* Button Shine Effect (Adjusted for white bg) */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full z-0 bg-gradient-to-r from-transparent via-stone-100/50 to-transparent transition-transform duration-700 ease-in-out" />
            </button>
          </motion.div>
          {/* --- MOBILE TOGGLE --- */}
          <div className="md:hidden z-10">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-full transition-colors duration-300",
                isScrolled
                  ? "bg-stone-50 text-stone-900"
                  : "bg-white/10 text-white backdrop-blur-sm"
              )}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* --- MOBILE FULLSCREEN MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-serif font-bold text-stone-900 hover:text-[#f1c83d] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center gap-3 bg-[#f1c83d] px-8 py-4 rounded-full text-lg font-bold shadow-xl"
            >
              Download Brochure <Download size={20} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
