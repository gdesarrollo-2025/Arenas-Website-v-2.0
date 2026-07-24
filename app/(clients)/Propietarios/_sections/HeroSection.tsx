import Image from "next/image";

export default function HeroSection() {
    return <section className="container-large h-[80vh]  p-5 ">
        <div className="relative  flex justify-end  w-full h-full rounded-[20px] bg-secondary/10">
            <div className="flex flex-col justify-between items-start w-full h-full p-10 ">
                <div className="flex flex-col gap-8 w-1/2 justify-between">
                    <h2>Propietarios</h2>
                    <h1 className="font-semibold">Bienvenido al <br /> portal de clientes</h1>
                    <p>Gracias por confiar en Arenas Inmobiliaria, en este espacio, como propietario, podrás realizar
                        consultas, peticiones, solicitudes o realizar anticipo del canon de arriendo de tu inmueble. También
                        podrás descargar tu estado de cuenta y conocer los conceptos.</p>
                </div>
                <button>Haz tu requerimiento</button>
            </div>
            <div className="flex items-center justify-center absolute w-2/5 h-full p-10 ">
                <div className="bg-primary w-full aspect-square rounded-full" />
                <Image src="/Ia_owners.webp" alt="Propietarios Hero Section Image" fill className="object-scale-down overflow-visible" sizes="36vw"/>
            </div>

        </div>
    </section>
}