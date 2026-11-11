import HeroSection from "./_sections/HeroSection"
import PaymentsSection from "./_sections/PaymentsSection"
import MethodsSection from "./_sections/MethodsSection"
import PaymentRefundsSection from "./_sections/PaymentRefundsSection"
import BlogsSection from "./_sections/BlogsSection"
import MoreInformationSection from "./_sections/MoreInformationSection"
export default function Page() {
    return <div className="my-[15vh] flex flex-col gap-50 overflow-hidden">
        <HeroSection />
        <PaymentsSection />
        <MethodsSection />
        <PaymentRefundsSection />
        <BlogsSection />
        <MoreInformationSection />
    </div>
}