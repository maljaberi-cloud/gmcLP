import HeroSection from "@/components/Hero";
import CompanyProfile from "@/components/CompanyProfile";
import ProductCollection from "@/components/MerchantSection";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import InsightSection from "@/components/InsightSection";
import NewsGrid from "@/components/NewsGrid";
import Footer from "@/components/Footer";
import MarbleStackExperience from "@/components/MarbleStackExperience";
import UbarStoneLegacy from "@/components/UbarStoneLegacy";
import UbarMarbleCollection from "@/components/UbarMarbleCollection";
import UbarIndustrialSolutions from "@/components/UbarIndustrialSolutions";
import UbarHeroLuxury from "@/components/UbarHeroOmnipotent";



// 1. Import the Navbar
import UbarNavbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* 2. Place it here, at the very top */}
      <UbarNavbar />

      <HeroSection />
      <UbarStoneLegacy />
      <UbarMarbleCollection />
      <UbarIndustrialSolutions />

      <NewsGrid />
      <InsightSection />

      <Footer />
    </main>
  );
}
