import Carrousel from "@/shared/components/Carrousel";
import Image from "next/image";


const focusCard = [
    {
        title: "Vivienda",
        image: "/hero-house.webp"
    },
    {
        title: "Comercio",
        image: "/hero-house.webp"
    },
    {
        title: "Proyectos Inmobiliario",
        image: "/hero-house.webp"
    },
    {
        title: "Arenas Boutique",
        image: "/hero-house.webp"
    },

]
export default function FocusSection() {
    return <div className=" max-w-[90vw] mx-auto my-5 gap-20 ">
        <div className=" hidden xl:flex justify-center  gap-2">
            {focusCard.map((f, idx) => (
                <div key={idx} className="relative h-100 w-76 overflow-hidden shadow-lg/60 rounded-xl group transition-all duration-300">
                    <Image src={f.image} alt="Vivienda" fill className="h-4/5 object-cover" />
                    <div className="absolute overflow-hidden bottom-0 place-items-center place-content-center bg-background h-1/7 w-full group-hover:h-full group-hover:bg-background/50 transition-all duration-300 ">
                        <h3>{f.title}</h3>
                    </div>
                </div>
            ))}
        </div>
        <div className="flex xl:hidden w-full h-full">
            <Carrousel className="w-full h-full" slideClassName="!flex justify-center items-center p-6" modules={['navigation', 'autoplay']} speed={300} spaceBetween={20} slidesPerView={1} loop navigation breakpoints={{ 426: { slidesPerView: 2 } }}>
                {focusCard.map((f, idx) => (
                    <div key={idx} className="relative h-100 w-80 overflow-hidden shadow-lg/60 rounded-xl group transition-all duration-300">
                        <Image src={f.image} alt="Vivienda" fill className="h-4/5 object-cover" preload={idx <= 1 }/>
                        <div className="absolute overflow-hidden bottom-0 place-items-center place-content-center bg-background h-1/7 w-full group-hover:h-full group-hover:bg-background/50 transition-all duration-300 ">
                            <h3>{f.title}</h3>
                        </div>
                    </div>
                ))}
            </Carrousel>
        </div>
    </div>
}