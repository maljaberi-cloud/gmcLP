import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
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
        className={`${almarai.className} antialiased bg-white text-rich-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
