import Carrousel from "@/shared/components/Carrousel";
import Image from "next/image";

const glosario = [{
    icon: "",
    text: "Esto hace referencia a la cuota mensual de la aseguradora por concepto de administración.",
    title: "Seguro Admon"
},
{
    icon: "",
    text: "Esto hace referencia a la cuota mensual de la aseguradora por concepto de administración.",
    title: "Seguro Admon"
},
{
    icon: "",
    text: "Esto hace referencia a la cuota mensual de la aseguradora por concepto de administración.",
    title: "Seguro Admon"
},
{
    icon: "",
    text: "Esto hace referencia a la cuota mensual de la aseguradora por concepto de administración.",
    title: "Seguro Admon"
},{
    icon: "",
    text: "Esto hace referencia a la cuota mensual de la aseguradora por concepto de administración.",
    title: "Seguro Admon"
}]
export default function GlossarySection() {
    return <section className="relative flex  container-small h-[60dvh] bg-secondary/10  px-5 py-10 rounded-[20px] overflow-y-visible">
        <div className="flex flex-col w-full h-full ">
            <h2 className="text-heading-md">Glosario inmobiliario</h2>
            <h3 className="text-display/16 font-semibold">Conoce los conceptos de tu <br/> estado de cuenta</h3>
            <div className="relative grow  ">
                <Carrousel className="h-full w-full border-2 border-red-500 z-40" slideClassName="h-full w-full border-2 border-green-500" modules={['autoplay']} speed={100} spaceBetween={10} slidesPerView={4} loop navigation>
                    {glosario.map((g,idx) => (
                        <div className="bg-[#F4F3F4] flex flex-col items-start justify-between h-full border-yellow-500 border-2">
                            <div></div>
                            <p>{g.text}</p>
                            <p className="font-semibold">{g.title}</p>
                        </div>
                    ))}
                    </Carrousel>
            </div>
        </div>
        <div className="absolute w-1/2 h-full left-3/4 top-20 overflow-y-visible">
            <Image src="/comercial.webp" alt="prueba" fill className="object-cover rounded-[20px] " />
        </div>
    </section>
}