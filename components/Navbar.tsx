"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, ArrowRight, Download, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const UbarNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { t, language, setLanguage, isRTL } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const NAV_LINKS = [
    { name: t.navbar.about, href: "#aboutUs" },
    { name: t.navbar.products, href: "#products" },
    { name: t.navbar.industrial, href: "#industrial" },
    { name: t.navbar.contact, href: "#contact" },
  ];

  const MENU_ITEMS = [
    { title: t.navbar.home, sub: t.navbar.homeSub, href: "#home" },
    { title: t.navbar.brandNarrative, sub: t.navbar.brandNarrativeSub, href: "#aboutUs" },
    { title: t.navbar.collection, sub: t.navbar.collectionSub, href: "#products" },
    { title: t.navbar.industrialCore, sub: t.navbar.industrialCoreSub, href: "#industrial" },
  ];

  const toggleLanguage = () => setLanguage(language === "en" ? "ar" : "en");

  return (
    <>
      {/* --- MAIN HUD NAVIGATION BAR --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[0.22,1,0.36,1] px-6 md:px-12 lg:px-24
          ${
            isScrolled
              ? "bg-white/90 backdrop-blur-xl border-b border-[#6a6931]/10 py-4 shadow-sm"
              : "bg-transparent py-8 md:py-10"
          }
        `}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* 1. THE ANCHOR (Logo) */}
          <div className="relative z-50">
            <a href="#" className="block group">
              <img
                src="/logo.png"
                alt="Ubar Stone"
                className={`object-contain transition-all duration-700 ease-out
                  ${isScrolled ? "h-10" : "h-12"}
                  ${isMenuOpen ? "invert brightness-0 contrast-200" : ""} 
                `}
              />
            </a>
          </div>

          {/* 2. THE CONTROL CLUSTER (Desktop Links) */}
          <div
            className={`hidden lg:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs uppercase tracking-[0.15em] font-bold text-[#6a6931] hover:text-[#1a1a1a] transition-colors group py-2 font-cairo"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-[#f1c83d] rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 ease-back-out" />
              </a>
            ))}
          </div>

          {/* 3. THE ACTION STACK (Right Side) */}
          <div className="flex items-center gap-2 md:gap-4 z-50">
            {/* Language Toggle Button */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden md:flex items-center gap-1.5 px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all duration-500 border font-cairo
                ${isMenuOpen
                  ? "border-white/20 text-white/60 hover:text-white"
                  : isScrolled
                    ? "border-[#6a6931]/20 text-[#6a6931] hover:border-[#f1c83d] hover:text-[#1a1a1a]"
                    : "bg-white/10 border-white/20 text-white backdrop-blur-sm hover:bg-white hover:text-[#1a1a1a]"
                }`}
            >
              <Globe size={11} />
              {language === "en" ? t.navbar.toggleAr : t.navbar.toggleEn}
            </motion.button>

            {/* Download Catalog Button */}
            <motion.a
              href="/UbarStone2025.pdf"
              download="UbarStone_Catalogue_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden md:flex items-center gap-3 px-5 py-2.5 rounded-sm transition-all duration-500 border group cursor-pointer font-cairo
    ${
      isScrolled
        ? "bg-[#1a1a1a] border-[#1a1a1a] text-white shadow-none"
        : "bg-white border-white text-[#1a1a1a] shadow-[0_40px_90px_-10px_rgba(0,0,0,0.25)]"
    }
    ${isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
  `}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest">
                {t.navbar.catalog}
              </span>
              <div
                className={`w-px h-3 ${isScrolled ? "bg-white/20" : "bg-black/10"}`}
              ></div>
              <Download
                size={14}
                className={`${isScrolled ? "text-[#f1c83d]" : "text-[#6a6931]"}`}
              />
            </motion.a>

            {/* The Trigger (Hamburger) */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`relative w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-500 overflow-hidden group
                    ${
                      isMenuOpen
                        ? "border-white/20 bg-white/10 text-white rotate-90"
                        : isScrolled
                          ? "border-[#6a6931]/20 hover:border-[#f1c83d] text-[#1a1a1a]"
                          : "bg-white text-[#1a1a1a] border-transparent shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]"
                    }
                `}
              >
                <div className="relative z-10">
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </div>
                <div
                  className={`absolute inset-0 bg-[#f1c83d] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out ${isMenuOpen ? "hidden" : "block"}`}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* --- CINEMATIC FULLSCREEN MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.4, duration: 0.5 } }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#0f0f0f] flex flex-col justify-center overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")`,
              }}
            ></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: 100 }}
              animate={{ opacity: 0.15, scale: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-[#f1c83d] rounded-full blur-[150px] pointer-events-none"
            />

            <div className="relative max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 h-full flex flex-col justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-auto items-center">
                <div className="lg:col-span-7 flex flex-col space-y-2">
                  <div className="mb-8 pl-1"></div>
                  {MENU_ITEMS.map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{
                        delay: 0.1 + i * 0.1,
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="group relative flex items-center justify-between py-6 border-b border-white/10 hover:border-[#f1c83d]/50 transition-colors duration-500 cursor-pointer"
                    >
                      <div className="flex items-baseline gap-6">
                        <span className="font-mono text-xs text-white/30 group-hover:text-[#f1c83d] transition-colors">
                          0{i + 1}
                        </span>
                        <span className="block text-4xl md:text-6xl font-serif text-white group-hover:text-[#f1c83d] transition-colors duration-300 font-cairo">
                          {item.title}
                        </span>
                      </div>
                      <div className="hidden md:flex items-center gap-4 overflow-hidden">
                        <span className="text-sm text-gray-500 font-light translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 font-cairo">
                          {item.sub}
                        </span>
                        <ArrowRight className="text-[#f1c83d] -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Right Column */}
                <div className="lg:col-span-5 hidden lg:flex flex-col justify-between h-full pl-20 border-l border-white/5 py-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-12"
                  >
                    <div>
                      <h4 className="flex items-center gap-2 text-[#6a6931] text-xs uppercase tracking-widest mb-6 font-bold font-cairo">
                        <Globe size={14} /> {t.navbar.globalHQ}
                      </h4>
                      <p className="text-2xl text-white font-serif leading-snug mb-2 font-cairo whitespace-pre-line">
                        {t.navbar.hqAddress}
                      </p>
                      <a
                        href={`mailto:${t.navbar.hqEmail}`}
                        className="text-gray-400 hover:text-[#f1c83d] transition-colors border-b border-gray-700 hover:border-[#f1c83d] pb-1"
                      >
                        {t.navbar.hqEmail}
                      </a>
                    </div>
                    <div className="bg-white/5 p-8 rounded border border-white/10 backdrop-blur-sm">
                      <h5 className="text-white font-bold mb-2 font-cairo">
                        {t.navbar.catalogCard}
                      </h5>
                      <p className="text-gray-400 text-sm mb-6 font-cairo">
                        {t.navbar.catalogCardSub}
                      </p>
                      <a
                        href="/UbarStone2025.pdf"
                        download="UbarStone_Catalogue_2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#f1c83d] text-black h-12 font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center cursor-pointer font-cairo"
                      >
                        {t.navbar.downloadPDF}
                      </a>
                    </div>

                    {/* Language Toggle in Menu */}
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center gap-3 text-white/40 hover:text-[#f1c83d] transition-colors text-xs uppercase tracking-widest font-bold font-cairo"
                    >
                      <Globe size={14} />
                      {language === "en" ? "عربي" : "English"}
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UbarNavbar;
