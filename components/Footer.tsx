"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Inline Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const ContactItem = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: React.ReactNode;
  href?: string;
}) => (
  <div className="group flex items-start gap-4">
    <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 shrink-0 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-300">
      <Icon className="w-4 h-4" />
    </div>
    <div className="flex flex-col">
      <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-1">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className="font-serif text-lg text-slate-200 group-hover:text-amber-500 transition-colors leading-snug"
        >
          {value}
        </a>
      ) : (
        <span className="font-serif text-lg text-slate-200 leading-snug">
          {value}
        </span>
      )}
    </div>
  </div>
);

export default function ContactSection() {
  return (
    <footer className="relative bg-slate-950 text-white font-sans">
      {/* --- Main Contact Hero Section --- */}
      <div className="relative w-full min-h-[90vh] flex flex-col">
        {/* 1. Background Image (Team / Factory) */}
        <div className="absolute inset-0 z-0">
          <img
            // Placeholder for Team Photo - Industrial/Engineers
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop"
            alt="The GMMC Team"
            className="w-full h-full object-cover"
          />
          {/* Heavy Dark Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-slate-950/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        </div>

        {/* 2. Content Container */}
        <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32 flex-grow flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left Column: The "Pitch" */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[1px] w-12 bg-amber-600"></div>
                <span className="font-mono text-amber-600 text-xs uppercase tracking-[0.3em] font-bold">
                  Corporate HQ
                </span>
              </div>

              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white mb-8">
                Partner with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">
                  Oman’s Leading
                </span>
                <br />
                Stone Manufacturer.
              </h2>

              <p className="font-sans text-lg text-slate-400 leading-relaxed mb-12 border-l-2 border-white/10 pl-6 max-w-lg">
                Ready to build together? Contact our team in Salalah for quotes,
                samples, and factory visits.
              </p>

              <button className="group w-fit bg-amber-600 hover:bg-white text-white hover:text-slate-950 px-8 py-5 flex items-center gap-4 transition-all duration-300 shadow-[0_0_30px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold">
                  Request A Quote
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column: The "Card" & Map */}
            <div className="lg:col-span-7 relative">
              {/* Decorative Border Box */}
              <div className="absolute -inset-4 border border-white/5 bg-white/[0.02] backdrop-blur-sm -z-10 rounded-sm" />

              <div className="bg-slate-900/50 border border-white/10 p-8 md:p-12 rounded-sm backdrop-blur-md">
                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 mb-12">
                  <ContactItem
                    icon={MapPin}
                    label="Global Headquarters"
                    value={
                      <>
                        P.O. Box 2, P.C. 210
                        <br />
                        Raysut Industrial City
                        <br />
                        Sultanate of Oman
                      </>
                    }
                  />
                  <ContactItem
                    icon={Mail}
                    label="Direct Inquiry"
                    value="marketing@gmmc.om"
                    href="mailto:marketing@gmmc.om"
                  />
                  <ContactItem
                    icon={Phone}
                    label="Sales Hotline"
                    value={
                      <div className="flex flex-col gap-1">
                        <span>(+968) 2313 2668</span>
                        <span>(+968) 7255 5353</span>
                      </div>
                    }
                    href="tel:+96823132668"
                  />
                  <ContactItem
                    icon={Clock}
                    label="Operations"
                    value="Sun – Thu: 7:30am – 3:30pm"
                  />
                </div>

                {/* The Map Strip */}
                <div className="relative w-full h-[250px] bg-slate-800 rounded-sm overflow-hidden border border-white/10 group">
                  {/* Google Map Iframe with CSS Filter for Dark Mode */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15181.796796541005!2d54.0205!3d16.9922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dbfcd9e0e564883%3A0x69695627725832c3!2sRaysut%20Industrial%20City!5e0!3m2!1sen!2som!4v1700000000000!5m2!1sen!2som"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      filter: "grayscale(100%) invert(90%) contrast(83%)",
                    }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  ></iframe>

                  {/* Overlay Badge */}
                  <div className="absolute bottom-4 left-4 bg-amber-600 text-white px-3 py-1 text-[10px] font-mono uppercase tracking-widest flex items-center gap-2 shadow-lg">
                    <MapPin className="w-3 h-3" /> Raysut Facility
                  </div>

                  {/* View Larger Button */}
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-4 right-4 bg-white text-slate-900 w-10 h-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Footer Copyright Bar --- */}
      <div className="w-full border-t border-white/10 bg-black py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] md:text-xs text-slate-500 uppercase tracking-widest text-center md:text-left">
            © 2025 Global Marble Manufacturing Co. L.L.C. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-mono text-[10px] text-slate-600 hover:text-amber-600 uppercase tracking-widest transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-mono text-[10px] text-slate-600 hover:text-amber-600 uppercase tracking-widest transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
