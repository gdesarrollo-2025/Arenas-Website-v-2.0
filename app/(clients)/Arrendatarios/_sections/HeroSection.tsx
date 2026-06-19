import Image from "next/image";

export default function HeroSection() {
    return <section className="max-w-[90vw] h-[80vh] mx-auto p-5 ">
        <div className="relative  flex justify-end  w-full h-full rounded-[20px] bg-secondary/10">
            <div className="flex flex-col justify-between items-start w-full h-full p-10 ">
                <div className="flex flex-col gap-8 w-1/2 justify-between">
                    <h2>Arrendatarios</h2>
                    <h1 className="font-semibold">Bienvenido al <br /> portal de clientes</h1>
                    <p>Gracias por confiar en nosotros, queremos brindarte un servicio excepcional; por eso nuestros
                        canales de comunicación siempre estarán disponibles para ti. Si tienes algún requerimiento puedes
                        radicarlo a través del siguiente enlace.</p>
                </div>
                <button>Haz tu requerimiento</button>
            </div>
            <div className="flex items-center justify-center absolute w-2/5 h-full p-10 ">
                <Image src="/Tenants.png" alt="Propietarios Hero Section Image" fill className="object-scale-down overflow-visible" />
            </div>

        </div>
    </section>
}