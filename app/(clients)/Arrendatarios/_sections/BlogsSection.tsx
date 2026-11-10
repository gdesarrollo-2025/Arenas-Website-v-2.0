import Image from "next/image";
import Link from "next/link";

export default function BlogsSection() {
    return <div className="container-large grid grid-cols-3 h-[75dvh] gap-10 bg-secondary/10 rounded-[20px] p-10 "  >
        <div className="flex flex-col gap-10 items-start justify-between">
            <div className="w-full">
                <h2 className="text-heading-md">Blog</h2>
                <hr className="border-neutral-500 border rounded-full" />
            </div>

            <div className="flex flex-col gap-5 grow">
                <h3 className="text-display font-semibold">Incremento del canon de Arrendamiento</h3>
                <p className="text-heading-sm">Los cánones de arrendamiento de inmuebles urbanos destinados a vivienda y/o habitación se ajustarán en el año 2026, dependiendo de la fecha en que se celebró el contrato.</p>
            </div>
        </div>
        <div className="relative  overflow-hidden rounded-[20px]">
            <Image src="/Blog.webp" alt="Blog " fill className="object-cover" />
        </div>
        <div className="relative flex flex-col justify-center gap-5  py-10">
            <div className="flex flex-col gap-2">
                <p>Para contratos de arrendamiento de vivienda suscritos a partir del 10 de julio de 2003:</p>
                <p>El canon de arrendamiento podrá incrementarse hasta el</p>
                <span className="text-5xl font-bold ">5.1%</span>
            </div>
            <div className="flex flex-col gap-2">
                <p>Para contratos de arrendamiento de vivienda suscritos con anterioridad al 10 de julio de 2003:</p>
                <p>El canon de arrendamiento podrá incrementarse hasta el</p>
                <span className="text-5xl font-bold ">3.0%</span>
            </div>
            <div className="mt-20 flex flex-col  ">
                <p>Si deseas saber más te invitamos a ver el siguiente artículo:</p>
                <Link href="" className="bg-accent text-white rounded-full py-2 px-5 w-fit">Ver mas</Link>
            </div>
        </div>
    </div>
}