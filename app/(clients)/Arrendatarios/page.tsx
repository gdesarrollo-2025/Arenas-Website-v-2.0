import HeroSection from "./_sections/HeroSection"
import PaymentsSection from "./_sections/PaymentsSection"
import MethodsSection from "./_sections/MethodsSection"
import PaymentRefundsSection from "./_sections/PaymentRefundsSection"
import BlogsSection from "./_sections/BlogsSection"
export default function Page() {
    return <div className="mt-[15vh] overflow-hidden">
        <HeroSection/>
        <PaymentsSection/>
    </div>
}