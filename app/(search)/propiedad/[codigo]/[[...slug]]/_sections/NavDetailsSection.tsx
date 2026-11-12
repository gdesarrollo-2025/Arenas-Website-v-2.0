'use client'

type navLink = {
    title: string;
    href: string;
}
const navProperty: navLink[] = [
    { title: "Resumen", href: "" },
    { title: "Descripción", href: "" },
    { title: "Caracteristicas", href: "" },
    { title: "Ubicación", href: "" },
    { title: "Similares", href: "" },
]
export default function NavDetailsSection() {
    return <nav className="h-10 flex justify-around  items-stretch ">
        {navProperty.map((n: navLink) => (
            <a key={n.title} href={n.href} title={n.title} className="group w-full focus-withi:text-primary">
                <span>{n.title}</span>
                <hr className="border border-neutral-200 group-hover:border-neutral-900 transition-colors duration-300"/>
            </a>
        ))}
    </nav>
}
/* 
<button type="button" className=" border-2 w-full justify-items-left relative group" onClick={() => document.getElementById("details")?.scrollIntoView()}>
            <div className="flex flex-col items-left w-fit">
                <h2>Detalles</h2>
                <hr className="border-2 border-black rounded-full group-hover:w-[120%] w-0 group-hover:opacity-100  opacity-0 transition-all duration-500" />
            </div>
        </button>
        <button type="button" className=" border-2 w-full justify-items-left relative group" onClick={() => document.getElementById("Description")?.scrollIntoView()}>
            <div className="flex flex-col items-left w-fit ">
                <h2>Descripción general</h2>
                <hr className="border-2 border-black rounded-full group-hover:w-[120%] w-0 group-hover:opacity-100  opacity-0 transition-all duration-500" />
            </div>
        </button>
        <button type="button" className=" border-2 w-full justify-items-left relative group" onClick={() => document.getElementById("Location")?.scrollIntoView()}>
            <div className="flex flex-col items-left w-fit ">
                <h2>Inmuebles similares</h2>
                <hr className="border-2 border-black rounded-full group-hover:w-[120%] w-0 group-hover:opacity-100  opacity-0 transition-all duration-500" />
            </div>
        </button> */