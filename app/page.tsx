import Image from "next/image";
import HeroSection from "./_sections/HeroSection";
import InformationSection from "./_sections/InformationSection";
import ReviewSection from "./_sections/ReviewSection";
import BoutiqueSection from "./_sections/BoutiqueSection";
import FocusSection from "./_sections/FocusSection";
import ServicesSection from "./_sections/ServicesSection";
import PropertiesSection from "./_sections/PropertiesSection";
export default function Home() {
  return <div className="flex flex-col gap-24 mb-24 mt-[15vh] overflow-hidden">
    <HeroSection />
    <FocusSection />
    <InformationSection />
    <ServicesSection />
    <BoutiqueSection />
    <PropertiesSection />
    <ReviewSection />
  </div>
}
