'use client'
import { PropertyDetail } from "@/features/properties/types/PropertyDetail.type";
import { useState } from "react";
import Image from "next/image";

import Carrousel from "@/shared/components/Carrousel";

export default function MainInfoSection({ p }: { p: PropertyDetail }) {

    const [display, setDisplay] = useState("images");

    return <section className="max-w-[90vw] h-fit mx-auto">
        <div className="flex flex-col gap-3">
            <div className="flex justify-between">
                <button type="button" onClick={() => setDisplay("images")} className={`${display == "images" ? "bg-accent text-white font-semibold" : " bg-white text-black "} w-1/3 px-2 py-1 rounded-md transition-all duration-500`}>Ver imagenes</button>
                <button type="button" onClick={() => setDisplay("360visor")} className={`${display == "360visor" ? "bg-accent text-white font-semibold" : " bg-white text-black "} w-1/3 px-2 py-1 rounded-md transition-all duration-500`}> Ver imagenes 360°</button>
            </div>
            {display == "images" && (
                <div className="relative w-full h-full aspect-video  ">
                    <Carrousel className="w-full h-full overflow-hidden rounded-[20px]" modules={['autoplay']} speed={200} spaceBetween={10} slidesPerView={1} loop navigation>
                        {p.images.map((i, idx) => (
                            <Image src={i} alt={`Imagen ${i}`} fill className="object-cover aspect-video" />
                        ))}
                    </Carrousel>
                </div>
            )}
            {display == "360visor" && (
                <div>
                </div>
            )}

        </div>

    </section>
}