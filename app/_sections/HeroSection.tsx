import Image from "next/image";
import { Search } from "@/shared/components/Icons";
export default function HeroSection() {
    return <div className="relative flex lg:justify-end items-center justify-center max-w-[90vw] h-[80vh] mx-auto rounded-[20px] overflow-hidden">
        <div className="relative w-full lg:w-1/2 h-full rounded-[20px] overflow-hidden">
            <Image src={"/hero-house.webp"} alt="Sección principal filtros arenas inmobiliaria" fill className="object-cover" preload={true} />
        </div>
        <div className="absolute flex flex-col items-center lg:items-start justify-center w-full h-full p-5  lg:p-0 bg-background/50 backdrop-blur-xs lg:bg-transparent lg:backdrop-blur-none">
            <h2 className="font-bold text-text w-fit text-center lg:text-left ">Somos un <br/> ecosistema inmobiliario</h2>
            <div className="flex flex-col gap-2 w-full md:w-[50vw] left-0 px-4 py-2  bg-background rounded-lg shadow-md/40 z-10 ">
                <div className="flex items-center gap-2">
                    <button className="px-1 py-0.5 rounded-md text-text hover:underline hover:underline-offset-2 focus-within:bg-primary focus-within:text-white transition-all duration-300">Arriendo</button>
                    <button className="px-1 py-0.5 rounded-md text-text hover:underline hover:underline-offset-2 focus-within:bg-primary focus-within:text-white transition-all duration-300">Venta</button>
                    <button className="px-1 py-0.5 rounded-md text-text hover:underline hover:underline-offset-2 focus-within:bg-primary focus-within:text-white transition-all duration-300">Código</button>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 justify-between items-stretch">
                    <input type="text" name="" id="" className="bg-secondary/10 w-full lg:w-9/10 py-2 px-5 rounded-full" />
                    <button className="w-full h-auto lg:w-auto lg:h-full lg:aspect-square p-2 border-2 bg-accent text-white rounded-md lg:rounded-full"><Search className="stroke-accent h-auto aspect-square hidden lg:block" /><p className="block lg:hidden font-semibold">Buscar</p></button>
                </div>
            </div>
        </div>
    </div>
}

{/* <div className="w-1/2 h-full flex flex-col gap-2 justify-center px-5">
            <div className="relative flex flex-col items-start w-full gap-2 mx-auto">
                <h2 className="font-bold text-text w-full ">Somos un <br /> ecosistema inmobiliario</h2>
                
                <div className="flex flex-col gap-2 w-[50vw] left-0 px-4 py-2  bg-background rounded-lg shadow-md/40 z-10 ">
                    <div className="flex items-center gap-2">
                        <button className="px-1 py-0.5 rounded-md text-text hover:underline hover:underline-offset-2 focus-within:bg-primary focus-within:text-white transition-all duration-300">Arriendo</button>
                        <button className="px-1 py-0.5 rounded-md text-text hover:underline hover:underline-offset-2 focus-within:bg-primary focus-within:text-white transition-all duration-300">Venta</button>
                        <button className="px-1 py-0.5 rounded-md text-text hover:underline hover:underline-offset-2 focus-within:bg-primary focus-within:text-white transition-all duration-300">Código</button>
                    </div>
                    <div className="flex justify-between items-stretch">
                        <input type="text" name="" id="" className="bg-secondary/10 w-9/10 py-2 px-5 rounded-full" />
                        <button className="p-2 rounded-full h-full bg-accent border-2 aspect-square"><Search className="stroke-accent h-auto aspect-square" /></button>
                    </div>
                </div>
            </div>
        </div>

        <div className="relative w-full h-full rounded-xl overflow-hidden border-2">
            <Image src={"/hero-house.webp"} alt="Sección principal filtros arenas inmobiliaria" fill className="object-cover" preload={true} />
        </div> */}