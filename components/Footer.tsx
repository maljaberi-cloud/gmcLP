"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Send,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  CheckCircle2,
} from "lucide-react";

// --- COLORS ---
const COLORS = {
  primary: "#f1c83d",
  secondary: "#6a6931",
  grid: "#e5e5e5",
  textMain: "#1a1a1a",
  textSub: "#6a6931",
};

export default function HighEndFooter() {
  return (
    <footer className="relative bg-white pt-0 pb-0 overflow-hidden font-sans border-t border-[#6a6931]/20">
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* Massive Watermark */}
        <span className="absolute -bottom-[5vw] left-0 text-[22vw] font-serif font-bold text-[#f8f8f6] leading-none whitespace-nowrap select-none opacity-80">
          GLOBAL
        </span>
        {/* Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `linear-gradient(${COLORS.grid} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.grid} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] border-l border-r border-[#6a6931]/10 bg-white/80 backdrop-blur-sm">

          {/* === COLUMN 1: THE BRAND & INFO (4 Cols) === */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#6a6931]/10 p-10 flex flex-col justify-between">
            <div>
              {/* Logo / Brand */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-[#f1c83d] rounded-sm flex items-center justify-center">
                  <span className="font-serif font-bold text-black text-xl">G</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-black">
                  GLOBAL MARBLE
                </span>
              </div>

              <p className="text-[#6a6931] leading-relaxed mb-12 max-w-sm">
                Engineering nature’s finest materials into timeless architectural
                masterpieces. Based in the Sultanate, serving the world.
              </p>

              {/* Contact Details List */}
              <ul className="space-y-6">
                <ContactItem
                  icon={<MapPin className="w-4 h-4" />}
                  label="Factory HQ"
                  value="Raysut Industrial Estate, Dhofar, Oman"
                />
                <ContactItem
                  icon={<Mail className="w-4 h-4" />}
                  label="Inquiries"
                  value="projects@globalmarble.om"
                  isLink
                />
                <ContactItem
                  icon={<Phone className="w-4 h-4" />}
                  label="Office"
                  value="+968 2321 9999"
                />
              </ul>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-12 pt-8 border-t border-[#6a6931]/10">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f8f8f6] text-[#6a6931] hover:bg-[#f1c83d] hover:text-black transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* === COLUMN 2: THE FORM TERMINAL (5 Cols) === */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#6a6931]/10 p-10 bg-[#fbfbfb]">
            <div className="mb-8">
              <span className="text-xs font-bold text-[#f1c83d] uppercase tracking-widest mb-2 block">
                Initiate Project
              </span>
              <h3 className="text-3xl font-serif text-[#1a1a1a]">
                Start the Conversation
              </h3>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <FormInput label="First Name" placeholder="John" />
                <FormInput label="Last Name" placeholder="Doe" />
              </div>
              <FormInput label="Email Address" placeholder="john@company.com" type="email" />

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[#6a6931]">
                  Project Type
                </label>
                <select className="w-full bg-transparent border-b border-[#6a6931]/20 pb-3 text-[#1a1a1a] focus:outline-none focus:border-[#f1c83d] transition-colors">
                  <option>Commercial Construction</option>
                  <option>Residential Design</option>
                  <option>Industrial Material Supply</option>
                  <option>Other</option>
                </select>
              </div>

              <FormInput label="Message" placeholder="Tell us about your requirements..." isTextArea />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#1a1a1a] text-white h-14 rounded-none flex items-center justify-between px-6 hover:bg-[#f1c83d] hover:text-black transition-colors duration-300 group"
              >
                <span className="font-bold tracking-widest uppercase text-sm">
                  Send Inquiry
                </span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </div>

          {/* === COLUMN 3: NAVIGATION & LINKS (3 Cols) === */}
          <div className="lg:col-span-3 p-10 bg-white flex flex-col">
            <div className="mb-12">
              <h4 className="text-xs font-bold text-[#6a6931] uppercase tracking-widest mb-6 border-b border-[#6a6931]/20 pb-2">
                Sitemap
              </h4>
              <ul className="space-y-3">
                {["Our Company", "Products", "Projects", "Sustainability", "Careers", "News"].map((item) => (
                  <li key={item}>
                    <a href="#" className="group flex items-center justify-between text-[#1a1a1a] hover:text-[#f1c83d] transition-colors">
                      <span className="font-medium">{item}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <h4 className="text-xs font-bold text-[#6a6931] uppercase tracking-widest mb-4">
                Downloads
              </h4>
              <a href="#" className="block p-4 border border-[#6a6931]/20 hover:border-[#f1c83d] hover:bg-[#f1c83d]/5 transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-[#1a1a1a]">Product Catalog</span>
                  <ArrowUpRight className="w-4 h-4 text-[#6a6931] group-hover:text-[#f1c83d]" />
                </div>
                <p className="text-xs text-[#6a6931]">PDF • 12.5 MB</p>
              </a>
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-[#6a6931]/10 text-xs text-[#6a6931] uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Global Marble Co.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#f1c83d]">Privacy</a>
            <a href="#" className="hover:text-[#f1c83d]">Terms</a>
            <a href="#" className="hover:text-[#f1c83d]">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- SUB-COMPONENTS FOR CLEANLINESS ---

const ContactItem = ({ icon, label, value, isLink }: any) => (
  <li className="flex items-start gap-4 group">
    <div className="mt-1 text-[#f1c83d] group-hover:text-[#6a6931] transition-colors">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold text-[#6a6931] uppercase tracking-widest mb-0.5">
        {label}
      </p>
      {isLink ? (
        <a href={`mailto:${value}`} className="text-[#1a1a1a] font-medium hover:text-[#f1c83d] transition-colors decoration-1 underline-offset-4 hover:underline">
          {value}
        </a>
      ) : (
        <p className="text-[#1a1a1a] font-medium">{value}</p>
      )}
    </div>
  </li>
);

const FormInput = ({ label, placeholder, type = "text", isTextArea = false }: any) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative group">
      <label
        className={`absolute left-0 transition-all duration-300 ${focused ? "-top-5 text-[10px] text-[#f1c83d]" : "-top-5 text-[10px] text-[#6a6931]"
          } font-bold uppercase tracking-widest`}
      >
        {label}
      </label>

      {isTextArea ? (
        <textarea
          rows={3}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent border-b border-[#6a6931]/20 py-2 text-[#1a1a1a] placeholder:text-[#6a6931]/30 focus:outline-none focus:border-[#f1c83d] transition-all resize-none"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent border-b border-[#6a6931]/20 py-2 text-[#1a1a1a] placeholder:text-[#6a6931]/30 focus:outline-none focus:border-[#f1c83d] transition-all"
        />
      )}

      {/* Animated Focus Line */}
      <div
        className={`absolute bottom-0 left-0 h-[1px] bg-[#f1c83d] transition-all duration-500 ${focused ? "w-full" : "w-0"}`}
      />
    </div>
  );
};