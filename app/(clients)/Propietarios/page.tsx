import BillsSection from "./_sections/BillsSection";
import GlossarySection from "./_sections/GlossarySection";
import HeroSection from "./_sections/HeroSection";
import StepsSection from "./_sections/StepsSection";

export default function Page() {
    return <div className="mt-[15vh] overflow-hidden">
        <HeroSection/>
        <StepsSection/>
        <BillsSection/>
        <GlossarySection/>
    </div>
}