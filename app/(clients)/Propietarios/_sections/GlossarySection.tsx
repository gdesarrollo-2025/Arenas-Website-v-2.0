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
    return <section className="relative container-small h-[60vh] bg-secondary/10 rounded-[20px]">
        <div className="w-full h-full ">
            <h3>Glosario inmobiliario</h3>
            <h2>Conoce los conceptos de tu estado de cuenta</h2>
            <div className="relative">
                <Carrousel modules={['autoplay']} speed={100} spaceBetween={10} slidesPerView={4} loop navigation>
                    {glosario.map((g,idx) => (
                        <div>
                            <div></div>
                            <p>{g.text}</p>
                            <p className="font-semibold">{g.title}</p>
                        </div>
                    ))}
                    </Carrousel>
            </div>
        </div>
        <div>
            <Image src="/" alt="prueba" fill className="object-cover" />
        </div>
    </section>
}