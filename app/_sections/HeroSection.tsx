
import Image from "next/image";
import HeroSearch from "../../features/search/components/SearchComponent";

export default function HeroSection() {

    return <section className="relative flex  lg:justify-end items-center lg:items-center container-large h-[80svh]">
        <div className="absolute flex flex-col justify-center gap-6 z-10 inset-x-0 lg:left-0 w-full lg:w-1/2 h-1/2 ">
            <h2 className="text-heading-lg font-semibold text-center lg:text-left">Somos un <br/> ecosistema inmobiliario</h2>
            <div className="self-center lg:self-start w-4/5 lg:w-full px-2 py-1 bg-background rounded-lg shadow-[0px_0px_8px_rgba(0,0,0,0.25)]">
                <HeroSearch/>
            </div>
        </div>
        <div className="relative  w-full lg:w-6/10 h-full overflow-hidden rounded-4xl opacity-40">
            <Image src={"/hero-house.webp"}  preload fetchPriority="high" alt="Arenas Inmobiliaria, tu ecosistema inmobiliario" fill className="" />
        </div>
    </section>
}
