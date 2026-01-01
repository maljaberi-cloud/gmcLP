"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Download,
  ShoppingBag,
  Store,
  Info,
  Phone,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect Scroll to toggle "Glass" mode
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links Configuration
  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "للتجار", href: "#merchants" },
    { name: "للمشترين", href: "#buyers" },
    { name: "كيف يعمل؟", href: "#how-it-works" },
  ];

  return (
    <>
      {/* --- DESKTOP FLOATING NAVBAR --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 transition-all duration-300 ${isScrolled ? "pt-4" : "pt-6"}`}
        dir="rtl"
      >
        <div
          className={`
                relative flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-full transition-all duration-500
                ${
                  isScrolled
                    ? "bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                    : "bg-transparent border border-transparent"
                }
            `}
        >
          {/* LOGO AREA */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#465c4d] rounded-xl flex items-center justify-center text-[#cef2d7]">
              <ShoppingBag size={20} fill="currentColor" />
            </div>
            <span
              className={`text-2xl font-black tracking-tighter ${isScrolled ? "text-[#465c4d]" : "text-[#465c4d]"}`}
            >
              ريتش.
            </span>
          </div>

          {/* DESKTOP LINKS (Center) */}
          <div className="hidden md:flex items-center gap-1 bg-white/50 p-1 rounded-full border border-white/50 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 text-sm font-bold text-[#465c4d]/80 hover:text-[#465c4d] transition-colors rounded-full group"
              >
                <span className="relative z-10">{link.name}</span>
                {/* Hover Pill Effect */}
                <span className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 shadow-sm z-0" />
              </a>
            ))}
          </div>

          {/* ACTION BUTTONS (Left) */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-bold text-[#465c4d] hover:text-black transition-colors">
              تسجيل الدخول
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-[#465c4d] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#465c4d]/20 hover:bg-[#35463b] transition-colors"
            >
              <Download size={16} />
              <span>حمل التطبيق</span>
            </motion.button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#465c4d] shadow-sm"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* --- MOBILE FULLSCREEN MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#FAFAFA] flex flex-col justify-between"
            dir="rtl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#465c4d] rounded-xl flex items-center justify-center text-[#cef2d7]">
                  <ShoppingBag size={20} fill="currentColor" />
                </div>
                <span className="text-2xl font-black text-[#465c4d]">
                  ريتش.
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#465c4d]"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links List */}
            <div className="flex flex-col items-center justify-center gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="text-3xl font-black text-[#465c4d] hover:text-[#cef2d7] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Footer / CTA in Menu */}
            <div className="p-6">
              <div className="bg-[#cef2d7]/30 p-6 rounded-[2rem] text-center">
                <h3 className="text-lg font-bold text-[#465c4d] mb-4">
                  جاهز للبدء؟
                </h3>
                <button className="w-full bg-[#465c4d] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl">
                  <Download size={20} />
                  حمل التطبيق الآن
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
