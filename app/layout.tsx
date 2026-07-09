import type { Metadata } from "next";
import { Cairo, Cinzel, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Ubar Stone | أوبار ستون",
  description: "Premium Omani Marble & Stone — 150 Million Year Legacy | رخام وحجر عُماني فاخر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth">
      {/* ERROR FIX: No spaces or comments allowed here */}
      <body
        className={`${cairo.variable} ${cinzel.variable} ${playfair.variable} antialiased bg-white overflow-x-hidden`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
