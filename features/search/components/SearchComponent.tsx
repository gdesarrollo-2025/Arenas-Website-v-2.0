'use client'

import useSearch from "@/features/search/hooks/useSearch";
import Search from "@/public/Search.svg";

import { useState } from "react";


import phraseToQuery from "@/features/search/parsers/phraseToQuery";

const buttons = ["Arriendo", "Venta", "Codigo"]
export default function SearchComponent() {

    const [phrase, setPhrase] = useState('');

    const [typeSearch, settypeSearch] = useState("Arriendo");

    const { search } = useSearch();

    const submit = async () => {
        if (typeSearch == "Codigo") {
            console.log("es busqueda por codigo")
        } else {
            const query = phraseToQuery(phrase)
            query.biz = typeSearch == "Arriendo" ? "1" : "2"            
            await search(query)
        }
    }
    return <div className="flex flex-col gap-2 w-full md:w-[50vw]  ">
        <div className="flex items-center gap-2">
            {buttons.map((b, idx) => (
                <button key={idx} type="button" onClick={() => settypeSearch(b)}
                    className={`px-2 py-1 rounded-md text-text ${typeSearch == b ? "bg-primary text-white" : "hover:underline hover:underline-offset-2"} transition-all duration-300`}>{b}</button>
            ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-between items-stretch h-full lg:h-12 p-1 ">
            <input value={phrase} onChange={(e) => setPhrase(e.target.value)} type="text" name="searchInput" id="searchInput"
                className="grow h-auto px-4 py-2  border-2 border-accent rounded-[20px] "></input>
            <button onClick={submit} className=" h-10 lg:h-full aspect-square p-1 rounded-[20px] border-2 border-primary text-white bg-accent active:brightness-110 transition-all duration-300">
                <Search className="h-auto aspect-square hidden lg:block" />
                <p className="block lg:hidden font-semibold">Buscar</p>
            </button>
        </div>
    </div>
}
