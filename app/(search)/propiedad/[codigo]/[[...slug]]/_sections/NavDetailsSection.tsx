'use client'
export default function NavDetailsSection() {
    return <nav className="h-10 flex justify-around  items-stretch">
        <button type="button" className="group" onClick={() => document.getElementById("details")?.scrollIntoView()}>
            Detalles
            <hr className="border-2 border-black rounded-full group-hover:w-full w-0 group-hover:opacity-100  opacity-0 transition-all duration-500" />
        </button>

        <button type="button" className="group" onClick={() => document.getElementById("Description")?.scrollIntoView()}>
            Descripción general
            <hr className="border-2 border-black rounded-full group-hover:w-full w-0 group-hover:opacity-100  opacity-0 transition-all duration-500" />
        </button>
        <button type="button" className="group" onClick={() => document.getElementById("Location")?.scrollIntoView()}>
            Ubicación
            <hr className="border-2 border-black rounded-full group-hover:w-full w-0 group-hover:opacity-100  opacity-0 transition-all duration-500" />
        </button>
    </nav>
}