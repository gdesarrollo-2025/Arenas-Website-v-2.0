import Image from "next/image"
import { ReactNode } from "react"

type HeroProps= {
    image: string,
    preload?: boolean,
    children: ReactNode
}
export default function LayoutHero ({image, preload= false, children}: HeroProps) {
    return <div className="relative flex lg:justify-end items-center justify-center max-w-[90vw] h-[80vh] mx-auto rounded-[20px] overflow-hidden">
            <div className="relative w-full lg:w-1/2 h-full rounded-[20px] overflow-hidden">
                <Image src={image} alt="Sección principal filtros arenas inmobiliaria" fill className="object-cover" preload={preload} />
            </div>
            <div>
                
            </div>
            {children}
        </div>
}