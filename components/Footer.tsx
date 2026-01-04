"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-stone-100 overflow-hidden pt-20 pb-10">
      {/* --- DECORATIVE BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <span className="absolute -top-20 -left-20 text-[20vw] font-serif font-bold text-stone-900 leading-none whitespace-nowrap select-none">
          GLOBAL MARBLE
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- TOP SECTION: BRAND & MAP --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          {/* 1. Brand & Mission */}
          <div className="lg:w-1/3 space-y-6 pt-4">
            <a href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Global Marble Logo"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-stone-500 text-lg leading-relaxed font-light max-w-md">
              Pioneering the Stone Industry in the Sultanate. We engineer
              nature's finest materials into timeless architectural
              masterpieces.
            </p>

            {/* Direct Contact Button */}
            <motion.a
              href="#contact"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-[#f1c83d] font-bold tracking-wide uppercase text-sm"
            >
              Get in touch <span className="text-xl">→</span>
            </motion.a>
          </div>

          {/* 2. THE CINEMATIC MAP PORTAL (Replaces Newsletter) */}
          <div className="lg:w-1/2 w-full h-[250px] relative group rounded-2xl overflow-hidden shadow-lg border border-stone-100">
            {/* The Map Iframe */}
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Raysut+Industrial+Estate,+Salalah,+Oman&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              title="Global Marble Location"
              className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            ></iframe>

            {/* Overlay Gradient (Fades out on hover) */}
            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />

            {/* 'Locate Us' Badge - Floats on top */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md py-2 px-4 rounded-lg shadow-sm flex items-center gap-3">
              <div className="bg-[#f1c83d] p-1.5 rounded-full animate-pulse">
                <MapPin size={14} className="text-stone-900" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Our Factory
                </p>
                <p className="text-[10px] text-stone-500">
                  Raysut Industrial Estate, Dhofar
                </p>
              </div>
            </div>

            {/* "Open Map" Button (Appears on Hover) */}
            <motion.a
              href="https://maps.google.com/maps?q=Raysut+Industrial+Estate,+Salalah,+Oman"
              target="_blank"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-4 right-4 bg-stone-900 text-white p-2 rounded-full shadow-xl opacity-0 group-hover:opacity-100 group-hover:y-0 transition-all duration-300"
            >
              <ExternalLink size={18} />
            </motion.a>
          </div>
        </div>

        {/* --- MIDDLE SECTION: LINKS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-stone-100 pt-16 mb-16">
          {/* Column 1: Quick Links */}
          <div>
            <h4 className="text-stone-900 font-bold mb-6 text-sm tracking-wider uppercase">
              Explore
            </h4>
            <ul className="space-y-4">
              {["About Us", "Our Products", "Latest News", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center text-stone-500 hover:text-[#f1c83d] transition-colors duration-300"
                    >
                      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 opacity-0 group-hover:opacity-100 mr-0 group-hover:mr-2 text-[#f1c83d]">
                        —
                      </span>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-stone-900 font-bold mb-6 text-sm tracking-wider uppercase">
              Collections
            </h4>
            <ul className="space-y-4">
              {["Premium Marble", "Onyx Series", "Travertine", "Limestone"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-stone-500 hover:text-stone-900 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-stone-900 font-bold mb-6 text-sm tracking-wider uppercase">
              Global Headquarters
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-stone-50 p-3 rounded-full text-[#f1c83d]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-stone-900 font-medium">
                    Raysut Industrial Estate
                  </p>
                  <p className="text-stone-500 text-sm">
                    Salalah, Sultanate of Oman
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-stone-50 p-3 rounded-full text-[#f1c83d]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-stone-900 font-medium">+968 2321 9999</p>
                  <p className="text-stone-500 text-sm">Mon - Fri, 8am - 6pm</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-stone-50 p-3 rounded-full text-[#f1c83d]">
                  <Mail size={20} />
                </div>
                <div>
                  <a
                    href="mailto:info@globalmarble.om"
                    className="text-stone-900 font-medium hover:text-[#f1c83d] transition-colors"
                  >
                    info@globalmarble.om
                  </a>
                  <p className="text-stone-500 text-sm">
                    Drop us a line anytime
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* --- BOTTOM SECTION: COPYRIGHT & SOCIALS --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100">
          <p className="text-stone-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Global Marble Manufacturing Co. All
            rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-50 text-stone-500 hover:bg-[#f1c83d] hover:text-stone-900 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
