import HeroSection from "@/components/Hero";
import CompanyProfile from "@/components/CompanyProfile";
import ProductCollection from "@/components/MerchantSection";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import InsightSection from "@/components/InsightSection";
import NewsGrid from "@/components/NewsGrids";
import Footer from "@/components/Footer";
import MarbleStackExperience from "@/components/MarbleStackExperience";
import AboutSectionLight from "@/components/UbarStoneLegacy";
import UbarMarbleCollection from "@/components/UbarMarbleCollection";
import IndustrialSection from "@/components/UbarIndustrialSolutions";
import ProjectPortfolio from "@/components/ProjectPortfolio";

// 1. Import the Navbar
import UbarNavbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* 2. Place it here, at the very top */}
      <UbarNavbar />

      <HeroSection />
      <AboutSectionLight />
      <UbarMarbleCollection />
      <IndustrialSection />
      <ProjectPortfolio />
      <NewsGrid />
      <InsightSection />

      <Footer />
    </main>
  );
}
