'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowRight, Download } from 'lucide-react';

const UbarNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // --- INTELLIGENT SCROLL DETECTION ---
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Toggle Body Scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // --- NAVIGATION LINKS ---
  const NAV_LINKS = [
    { name: "Brand Narrative", href: "#narrative" },
    { name: "The Collection", href: "#collection" },
    { name: "Industrial Core", href: "#industrial" },
  ];

  return (
    <>
      {/* --- MAIN NAVIGATION BAR --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 lg:px-24
          ${isScrolled 
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-100/50 shadow-sm py-3' 
            : 'bg-transparent py-6 md:py-8'
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* 1. LOGO IMAGE (The Anchor) */}
          <a href="#" className="relative z-50 block">
            {/* The logo scales slightly on scroll to be more compact. 
               We add a filter brightness transition if the menu opens (optional depending on your logo color).
            */}
            <img 
              src="/logo.png" 
              alt="Ubar Stone" 
              className={`object-contain transition-all duration-500
                ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'}
                ${isMenuOpen ? 'brightness-0 invert' : ''} 
              `}
              // Note: 'brightness-0 invert' turns a black logo white for the dark menu background. 
              // Remove that class if your logo is Gold/White already.
            />
          </a>

          {/* 2. DESKTOP LINKS (The Centerpiece) */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 transform -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-slate-600 hover:text-[#1a1a1a] transition-colors group tracking-wide"
              >
                {link.name}
                {/* Magnetic Dot Effect */}
                <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-[#f1c83d] rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* 3. ACTIONS (The CTA) */}
          <div className="flex items-center gap-4 z-50">
            
            {/* Download Brochure Button (Desktop) */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`hidden md:flex items-center gap-3 px-6 py-3 rounded-sm text-xs uppercase tracking-widest font-bold transition-all duration-300 border
                ${isScrolled 
                  ? 'bg-[#1a1a1a] border-[#1a1a1a] text-white hover:bg-[#f1c83d] hover:border-[#f1c83d] hover:text-[#1a1a1a]' 
                  : 'bg-white border-white text-[#1a1a1a] shadow-xl hover:shadow-2xl'
                }
              `}
            >
              <span>Download Brochure</span>
              <Download size={16} className={`${isScrolled ? 'text-[#f1c83d] group-hover:text-[#1a1a1a]' : 'text-[#f1c83d]'}`} />
            </motion.button>

            {/* Hamburger Menu (Mobile/Tablet) */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-colors duration-300 ${isMenuOpen ? 'text-white bg-white/10' : 'text-[#1a1a1a] hover:bg-slate-100'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>


      {/* --- FULL SCREEN CINEMATIC MENU (The Reveal) --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.4 } }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-[#1a1a1a] flex flex-col justify-center px-6 md:px-12 lg:px-24"
          >
            {/* Background Texture */}
             <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" 
                  style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }}></div>
             
             {/* Large Floating Orb */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 0.2, scale: 1 }}
               className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#f1c83d] rounded-full blur-[150px]"
             />

            <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Menu Links */}
              <div className="flex flex-col space-y-6">
                 {/* Navigation Label */}
                 <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.2 }}
                   className="flex items-center gap-3 mb-4"
                 >
                   <span className="w-8 h-[1px] bg-[#6a6931]"></span>
                   <span className="text-[#6a6931] uppercase tracking-[0.2em] text-xs font-bold">Menu</span>
                 </motion.div>

                 {/* The Links */}
                 {[
                   { title: "Home", sub: "Back to beginning" },
                   { title: "Brand Narrative", sub: "Our history & ethos" },
                   { title: "Marble Collection", sub: "Fanar, Morooj, Reedan" },
                   { title: "Industrial Core", sub: "Quicklime & Limestone" },
                   { title: "Download Brochure", sub: "Get the full catalog", isAction: true }
                 ].map((item, i) => (
                   <motion.a
                     key={i}
                     href="#"
                     onClick={() => setIsMenuOpen(false)}
                     initial={{ opacity: 0, y: 40 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 20 }}
                     transition={{ delay: 0.1 + (i * 0.1), duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                     className={`group flex items-center justify-between border-b border-white/10 pb-6 hover:border-[#f1c83d] transition-colors duration-500 cursor-pointer
                        ${item.isAction ? 'text-[#f1c83d]' : 'text-white'}
                     `}
                   >
                     <div>
                       <span className={`block text-3xl md:text-5xl font-serif group-hover:text-[#f1c83d] transition-colors duration-300 ${item.isAction ? 'text-[#f1c83d]' : ''}`}>
                         {item.title}
                       </span>
                       <span className="block text-sm text-gray-500 mt-2 group-hover:text-white/60 transition-colors">
                         {item.sub}
                       </span>
                     </div>
                     {item.isAction ? (
                         <Download className="text-[#f1c83d] -translate-x-4 group-hover:translate-x-0 transition-transform duration-300" />
                     ) : (
                         <ArrowRight className="text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                     )}
                   </motion.a>
                 ))}
              </div>

              {/* Menu Sidebar / Contact Info (Hidden on mobile for space) */}
              <div className="hidden md:flex flex-col justify-end pb-6 border-l border-white/10 pl-12">
                 <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.6 }}
                   className="space-y-8"
                 >
                    <div>
                      <h4 className="text-[#f1c83d] text-sm uppercase tracking-widest mb-4">Headquarters</h4>
                      <p className="text-gray-400 leading-relaxed font-light">
                        Rusayl Industrial Estate<br />
                        Muscat, Sultanate of Oman
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[#f1c83d] text-sm uppercase tracking-widest mb-4">Connect</h4>
                      <a href="mailto:info@ubarstone.com" className="block text-2xl text-white hover:text-[#f1c83d] transition-colors font-serif">
                        info@ubarstone.com
                      </a>
                      <p className="text-gray-400 mt-2 font-mono text-sm">+968 2444 1234</p>
                    </div>
                 </motion.div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UbarNavbar;