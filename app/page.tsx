import HeroSection from "@/components/Hero";
import CompanyProfile from "@/components/CompanyProfile";
import ProductCollection from "@/components/MerchantSection";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import InsightSection from "@/components/InsightSection";
import NewsGrid from "@/components/NewsGrid";
import Footer from "@/components/Footer";
import MarbleStackExperience from "@/components/MarbleStackExperience";

// 1. Import the Navbar
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* 2. Place it here, at the very top */}
      <Navbar />

      <HeroSection />
      <CompanyProfile />
      <MarbleStackExperience />
      <ProductCollection />

      <ManufacturingProcess />
      <NewsGrid />
      <InsightSection />

      <Footer />
    </main>
  );
}
