'use client'
import { useState } from "react";
import { MenuItem } from "../type/menu.type";
import Link from "next/link";

export default function MobileNavDropdown({ content }: { content: MenuItem }) {
    const [toggle, setToggle] = useState(false);

    return <div className={`mix-blend-screen w-full text-center ${toggle ? "bg-gray-100/15" : ""}  rounded-[10px] transition-all duration-700`}>
        <button
            name={content.name}
            onClick={() => setToggle(!toggle)}
            className={`w-full py-3 text-white transiton-all ease-in-out duration-400  ${toggle ? ' text-accent' : ' '} `}>
            <label className={`flex justify-center items-center gap-2 px-10 w-full text-center duration-500 ease-in-out ${toggle ? "font-semibold" : ""}`}>
                <span className={`text-center `}>{content.name}</span>
            </label>
        </button>
        <div className={`flex flex-col items-center transition-all duration-600 ease-in-out  text-white
            ${toggle ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} `}>
            {content.pages.map((p, idx) => (
                <Link key={idx} href={p.link}
                    className="w-full md:w-1/4   text-center  active:text-accent/75  duration-500 ease-in-out" >
                    {p.name}
                </Link>
            ))
            }
        </div>
    </div>
}