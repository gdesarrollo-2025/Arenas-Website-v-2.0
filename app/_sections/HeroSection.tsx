'use client'
import Image from "next/image";
import phraseToQuery from "@/features/search/parsers/phraseToQuery";
import { useState } from "react";
import useSearch from "@/features/search/hooks/useSearch";
import HeroSearch from "../../features/search/components/SearchComponent";


export default function HeroSection() {
    const [phrase, setPhrase] = useState('')

    const {search} = useSearch();

    const submit = async (phrase: string) => {
        const query = phraseToQuery(phrase);
        await search(query)
    }

    return <section className="relative flex lg:justify-end items-center justify-center max-w-[90vw] h-[80vh] mx-auto rounded-[20px] overflow-hidden">
        <div className="relative w-full lg:w-1/2 h-full rounded-[20px] overflow-hidden">
            <Image src={"/hero-house.webp"} alt="Sección principal filtros arenas inmobiliaria" fill className="object-cover" preload={true} sizes="(min-width: 1025px) 45vw, 90vw " />
        </div>
        <div className="absolute flex flex-col items-center lg:items-start justify-center w-full h-full p-5  lg:p-0 bg-background/50 backdrop-blur-xs lg:bg-transparent lg:backdrop-blur-none">
            <h2 className="font-bold text-text w-fit text-center lg:text-left ">Somos un <br /> ecosistema inmobiliario</h2>
            <div className="w-fit left-0 mx-1 px-4 py-2 bg-background rounded-lg  shadow-md/40 z-10">
                <HeroSearch/>
            </div>
        </div>
    </section>
}

