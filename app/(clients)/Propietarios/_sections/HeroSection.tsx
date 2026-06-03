import Image from "next/image";

export default function HeroSection() {
    return <div className="max-w-[90vw] h-[80vh] border-2 mx-auto">
        <div className="w-full h-full">
            <div className="bg-secondary/10 rounded-[20px]">

            </div>
            <div className="relative w-1/2 h-full border-2">
                <Image src="/IA.webp" alt="Propietarios Hero Section Image" fill className="object-cover border-2" />
            </div>
        </div>
    </div>
}