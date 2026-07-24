import Image from "next/image";
import Link from "next/link";

export default function BlogsSection() {
    return <div className="max-w-[90vw] w-full mx-auto grid grid-cols-3 h-[75dvh] gap-5 bg-secondary/10 rounded-[20px] p-10 "  >
        <div className="flex flex-col gap-10 items-start justify-between">
            <div>
                <h2>Blog</h2>
                <hr/>
            </div>
            <div className="grow">
                <h3>Incremento del canon de Arrendamiento</h3>
            <p>Los cánones de arrendamiento de inmuebles urbanos destinados a vivienda y/o habitación se ajustarán en el año 2026, dependiendo de la fecha en que se celebró el contrato.</p>
            </div>
        </div>
        <div className="relative overflow-hidden rounded-[20px]">
            <Image src="/Blog.webp" alt="Blog " fill className="object-cover"/>
        </div>
        <div className="flex flex-col gap-5 justify-end ">
            <p>Para contratos de arrendamiento de vivienda suscritos a partir del 10 de julio de 2003:</p>
            <p>El canon de arrendamiento podrá incrementarse hasta el</p>
            <span className="text-5xl font-bold ">5.1%</span>
            <p>Para contratos de arrendamiento de vivienda suscritos con anterioridad al 10 de julio de 2003:</p>
            <p>El canon de arrendamiento podrá incrementarse hasta el</p>
            <span className="text-5xl font-bold ">3.0%</span>
            <div className="flex flex-col w-full h-fit ">
                <p>Si deseas saber más te invitamos a ver el siguiente artículo:</p>
                <Link href="" className="bg-accent text-white rounded-full py-2 px-5 w-fit">Ver mas</Link>
            </div>
        </div>
    </div>
}