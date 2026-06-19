import Image from "next/image";
import Link from "next/link";
import Service2 from "@/public/service_2.svg";
import Service3 from "@/public/service_3.svg";
import Service4 from "@/public/service_4.svg";

const services = [
    {
        icon: "/service_1.svg",
        title: "Administración de propiedades en arriendo",
        text: "Administramos tu inmueble de principio a fin, desde la promoción y selección del arrendatario hasta el seguimiento del contrato, recaudo y acompañamiento permanente.",
        catchPhrase: "Ideal para quien busca rentabilidad, tranquilidad y respaldo profesional.",
    },
    {
        icon: <Service2 className="w-2/5 md:w-1/5 lg:w-2/5 h-full aspect-square text-secondary group-hover:text-white " />,
        title: "Venta de propiedades",
        text: "Acompañamos la venta de tu inmueble con asesoría comercial, valoración, promoción estratégica y gestión de clientes interesados hasta el cierre del negocio.",
        catchPhrase: "Vendemos con método, visibilidad y experiencia.",
    },
    {
        icon: <Service3 className="w-2/5 md:w-1/5 lg:w-2/5 h-full aspect-square text-secondary group-hover:text-white " />,
        title: "Proyectos Inmobiliarios",
        text: "Comercializamos proyectos de vivienda VIS, NO VIS y exclusivos, conectando a compradores e inversionistas con oportunidades seguras y bien ubicadas.",
        catchPhrase: "Te acompañamos desde la elección hasta la compra.",
    },
    {
        icon: <Service4 className="w-2/5 md:w-1/5 lg:w-2/5 h-full aspect-square text-secondary group-hover:text-white " />,
        title: "Consigna tu inmueble",
        text: "Recibimos tu propiedad para venta o arriendo y la impulsamos a través de nuestros canales comerciales, digitales y red de clientes activos.",
        catchPhrase: "Tu inmueble gana exposición, gestión y respaldo experto.",
    },
]
export default function ServicesSection() {
    return <section className="max-w-[90vw] w-full h-full flex flex-col items-center justify-evenly gap-2 mx-auto my-5 ">
        <h2 className="font-semibold text-center ">Nuestros servicios</h2>
        <p className="text-center">Somos un ecosistema inmobiliario que conecta propietarios, compradores, inversionistas y proyectos con
            soluciones claras, seguras y rentables.</p>
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:auto-rows-fr w-full gap-5 p-5 h-full  bg-secondary/20 rounded-xl lg:bg-transparent">
            {services.map((s, idx) => (
                <div key={idx} className="group flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 h-full lg:px-2 lg:py-4 rounded-xl bg-transparent lg:bg-secondary/20 hover:bg-primary hover:text-white transition-all duration-300">
                    {s.icon}
                    <div className="w-full flex flex-col gap-1 ">
                        <h4 className="font-bold ">{s.title}</h4>
                        <p className="text-pretty">{s.text}</p>
                        <p className="font-semibold">{s.catchPhrase}</p>
                    </div>
                </div>
            ))}
        </div>
        <Link href="" className="self-center lg:self-end bg-accent text-white  mx-5 px-2 py-1 rounded-sm hover:bg-primary active:brightness-125 transition-all duration-300">Ver mas...</Link>

    </section>
}














