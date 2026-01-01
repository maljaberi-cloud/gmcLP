import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import CompanyProfile from "@/components/CompanyProfile";
import ProductCollection from "@/components/MerchantSection";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import InsightSection from "@/components/InsightSection";
import NewsGrid from "@/components/NewsGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompanyProfile />
      <ProductCollection />
      <ManufacturingProcess />
      <InsightSection />
      <NewsGrid />
      <Footer />

      {/* Future Sections go here:
         <Features />
         <Testimonials />
         <Download />
      */}
    </main>
  );
}
