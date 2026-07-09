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
  Twitter,
  Facebook,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const COLORS = {
  primary: "#f1c83d",
  secondary: "#6a6931",
  grid: "#e5e5e5",
  textMain: "#1a1a1a",
  textSub: "#6a6931",
};

export default function HighEndFooter() {
  const { t } = useLanguage();

  return (
    <footer
      id="contact"
      className="relative bg-white pt-0 pb-0 overflow-hidden font-sans border-t border-[#6a6931]/20"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <span className="absolute -bottom-[5vw] left-0 text-[22vw] font-serif font-bold text-[#f8f8f6] leading-none whitespace-nowrap select-none opacity-80">
          GLOBAL
        </span>
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
          {/* COLUMN 1: Brand & Info */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#6a6931]/10 p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-[#f1c83d] rounded-sm flex items-center justify-center">
                  <span className="font-serif font-bold text-black text-xl">G</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-black font-cairo">
                  {t.footer.brandName}
                </span>
              </div>

              <p className="text-[#6a6931] leading-relaxed mb-12 max-w-sm font-cairo">
                {t.footer.tagline}
              </p>

              <ul className="space-y-6">
                <ContactItem
                  icon={<MapPin className="w-4 h-4" />}
                  label={t.footer.hqLabel}
                  value={t.footer.hqValue}
                />
                <ContactItem
                  icon={<Mail className="w-4 h-4" />}
                  label={t.footer.inquiriesLabel}
                  value="info@gmmc.om"
                  isLink
                />
                <ContactItem
                  icon={<Phone className="w-4 h-4" />}
                  label={t.footer.officeLabel}
                  value="+968 2313 2668"
                />
              </ul>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-12 pt-8 border-t border-[#6a6931]/10">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/ubarstone/" },
                { Icon: Linkedin, href: "https://om.linkedin.com/in/%D8%A7%D9%88%D8%A8%D8%A7%D8%B1-%D8%B3%D8%AA%D9%88%D9%86-ubar-stone-354510384" },
                { Icon: Twitter, href: "https://x.com/gmmcoman" },
                { Icon: Facebook, href: "facebook.com/share/1CL2DfGkAu" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f8f8f6] text-[#6a6931] hover:bg-[#f1c83d] hover:text-black transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Contact Form */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#6a6931]/10 p-10 bg-[#fbfbfb]">
            <div className="mb-8">
              <span className="text-xs font-bold text-[#f1c83d] uppercase tracking-widest mb-2 block font-cairo">
                {t.footer.initiateProject}
              </span>
              <h3 className="text-3xl font-serif text-[#1a1a1a] font-cairo">
                {t.footer.startConversation}
              </h3>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <FormInput label={t.footer.firstName} placeholder={t.footer.firstNamePlaceholder} />
                <FormInput label={t.footer.lastName} placeholder={t.footer.lastNamePlaceholder} />
              </div>
              <FormInput
                label={t.footer.email}
                placeholder={t.footer.emailPlaceholder}
                type="email"
              />

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[#6a6931] font-cairo">
                  {t.footer.projectType}
                </label>
                <select className="w-full bg-transparent border-b border-[#6a6931]/20 pb-3 text-[#1a1a1a] focus:outline-none focus:border-[#f1c83d] transition-colors font-cairo">
                  {t.footer.projectOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <FormInput
                label={t.footer.message}
                placeholder={t.footer.messagePlaceholder}
                isTextArea
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#1a1a1a] text-white h-14 rounded-none flex items-center justify-between px-6 hover:bg-[#f1c83d] hover:text-black transition-colors duration-300 group"
              >
                <span className="font-bold tracking-widest uppercase text-sm font-cairo">
                  {t.footer.sendInquiry}
                </span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </div>

          {/* COLUMN 3: Sitemap & Downloads */}
          <div className="lg:col-span-3 p-10 bg-white flex flex-col">
            <div className="mb-12">
              <h4 className="text-xs font-bold text-[#6a6931] uppercase tracking-widest mb-6 border-b border-[#6a6931]/20 pb-2 font-cairo">
                {t.footer.sitemapLabel}
              </h4>
              <ul className="space-y-3">
                {t.footer.sitemapLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center justify-between text-[#1a1a1a] hover:text-[#f1c83d] transition-colors"
                    >
                      <span className="font-medium font-cairo">{item}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <h4 className="text-xs font-bold text-[#6a6931] uppercase tracking-widest mb-4 font-cairo">
                {t.footer.downloadsLabel}
              </h4>
              <a
                href="/UbarStone2025.pdf"
                download="UbarStone_Catalogue_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-[#6a6931]/20 hover:border-[#f1c83d] hover:bg-[#f1c83d]/5 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-[#1a1a1a] font-cairo">
                    {t.footer.productCatalog}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#6a6931] group-hover:text-[#f1c83d]" />
                </div>
                <p className="text-xs text-[#6a6931] font-cairo">{t.footer.pdfSize}</p>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-[#6a6931]/10 text-xs text-[#6a6931] uppercase tracking-wider">
          <p className="font-cairo">© {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#f1c83d] font-cairo">{t.footer.privacy}</a>
            <a href="#" className="hover:text-[#f1c83d] font-cairo">{t.footer.terms}</a>
            <a href="#" className="hover:text-[#f1c83d] font-cairo">{t.footer.sitemap}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const ContactItem = ({ icon, label, value, isLink }: any) => (
  <li className="flex items-start gap-4 group">
    <div className="mt-1 text-[#f1c83d] group-hover:text-[#6a6931] transition-colors">{icon}</div>
    <div>
      <p className="text-[10px] font-bold text-[#6a6931] uppercase tracking-widest mb-0.5 font-cairo">{label}</p>
      {isLink ? (
        <a
          href={`mailto:${value}`}
          className="text-[#1a1a1a] font-medium hover:text-[#f1c83d] transition-colors decoration-1 underline-offset-4 hover:underline"
        >
          {value}
        </a>
      ) : (
        <p className="text-[#1a1a1a] font-medium font-cairo">{value}</p>
      )}
    </div>
  </li>
);

const FormInput = ({
  label,
  placeholder,
  type = "text",
  isTextArea = false,
}: any) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative group">
      <label
        className={`absolute left-0 transition-all duration-300 ${
          focused ? "-top-5 text-[10px] text-[#f1c83d]" : "-top-5 text-[10px] text-[#6a6931]"
        } font-bold uppercase tracking-widest font-cairo`}
      >
        {label}
      </label>

      {isTextArea ? (
        <textarea
          rows={3}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent border-b border-[#6a6931]/20 py-2 text-[#1a1a1a] placeholder:text-[#6a6931]/30 focus:outline-none focus:border-[#f1c83d] transition-all resize-none font-cairo"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent border-b border-[#6a6931]/20 py-2 text-[#1a1a1a] placeholder:text-[#6a6931]/30 focus:outline-none focus:border-[#f1c83d] transition-all font-cairo"
        />
      )}

      <div
        className={`absolute bottom-0 left-0 h-[1px] bg-[#f1c83d] transition-all duration-500 ${focused ? "w-full" : "w-0"}`}
      />
    </div>
  );
};
