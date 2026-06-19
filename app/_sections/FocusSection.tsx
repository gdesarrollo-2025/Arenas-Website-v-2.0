import Image from "next/image";
import dynamic from "next/dynamic";

const Carrousel = dynamic(() => import("@/shared/components/Carrousel")) ;

const focusCard = [
    {
        title: "Vivienda",
        image: "/hero-house.webp"
    },
    {
        title: "Comercio",
        image: "/Comercial.webp"
    },
    {
        title: "Proyectos Inmobiliario",
        image: "/projects.webp"
    },
    {
        title: "Arenas Boutique",
        image: "/hero-house.webp"
    },

]
export default function FocusSection() {
    return <section className="w-full max-w-[90vw] mx-auto my-5 gap-20">
        <div className=" hidden xl:flex justify-center  gap-2">
            {focusCard.map((f, idx) => (
                <div key={idx} className="relative h-100 w-76 overflow-hidden shadow-lg/60 rounded-xl group transition-all duration-300">
                    <Image src={f.image} alt={`Imagen para ${f.title}`} fill className="h-4/5 object-cover" sizes="304px" />
                    <div className="absolute overflow-hidden bottom-0 place-items-center place-content-center bg-background h-1/7 w-full group-hover:h-full group-hover:bg-background/50 transition-all duration-300 ">
                        <h3>{f.title}</h3>
                    </div>
                </div>
            ))}
        </div>
        <div className="flex xl:hidden relative w-full h-full">
            <Carrousel className="w-full h-full " slideClassName="!flex justify-center items-center p-6" modules={['navigation', 'autoplay']} speed={300} spaceBetween={20} slidesPerView={1} loop navigation breakpoints={{ 426: { slidesPerView: 2 } }}>
                {focusCard.map((f, idx) => (
                    <div key={idx} className="relative h-100 w-80 overflow-hidden shadow-lg/60 rounded-xl group transition-all duration-300">
                        <Image src={f.image} alt={`Imagen para ${f.title}`} fill className="h-4/5 object-cover" preload={idx <= 1 } sizes="(min-width: 426px) 45vw,90vw"/>
                        <div className="absolute overflow-hidden bottom-0 place-items-center place-content-center bg-background h-1/7 w-full group-hover:h-full group-hover:bg-background/50 transition-all duration-300 ">
                            <h3>{f.title}</h3>
                        </div>
                    </div>
                ))}
            </Carrousel>
        </div>
    </section>
}