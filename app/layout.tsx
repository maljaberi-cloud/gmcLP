import type { Metadata } from "next";
import { Almarai, Cinzel, Playfair_Display } from "next/font/google";
import "./globals.css";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
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
  title: "Ubar Stone",
  description: "تجربة تسوق فاخرة بين يديك",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      {/* ERROR FIX: No spaces or comments allowed here */}
      <body
        className={`${almarai.className} ${cinzel.variable} ${playfair.variable} antialiased bg-white text-rich-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
