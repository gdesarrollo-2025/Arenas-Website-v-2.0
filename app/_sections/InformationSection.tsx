
import Image from "next/image";


export default function InformationSection() {
    return <section className="max-w-[90vw] h-full lg:h-[80vh] mx-auto my-10 ">
        <div className="w-full h-full flex flex-col lg:grid lg:grid-cols-[3fr_2fr] lg:grid-rows-[auto_1fr]">
            <h2 className="font-bold w-full">Confia en los verdaderos agentes inmobiliarios</h2>
            <div className=" hidden lg:flex lg:flex-col justify-evenly">
                <p>Somos una compania con mas de 83 anos de experiencia en la comercialización
                    de inmuebles y proyecto inmobiliarios.</p>
                <p>Contamos con sedes y salas de negocios en Barranquilla y Cartagena.</p>
            </div>
            <div className="grid grid-cols-2 auto-rows-fr lg:p-10 gap-4 lg:gap-10">
                <div className="flex flex-col items-start justify-center bg-secondary/20 w-full p-4 lg:p-10 lg:gap-5 hover:bg-primary hover:scale-105 hover:text-white rounded-xl transition-all duration-300">
                    <span className="font-semibold text-3xl lg:text-5xl">83+</span>
                    <p>Años de experiencia</p>
                </div>
                <div className="flex flex-col items-start justify-center bg-secondary/20 w-full p-4 lg:p-10 lg:gap-5 hover:bg-primary hover:scale-105 hover:text-white rounded-xl transition-all duration-300">
                    <span className="font-semibold text-3xl lg:text-5xl">2300+</span>
                    <p>Contratos activos</p>
                </div>
                <div className="flex flex-col items-start justify-center bg-secondary/20 w-full p-4 lg:p-10 lg:gap-5 hover:bg-primary hover:scale-105 hover:text-white rounded-xl transition-all duration-300">
                    <span className="font-semibold text-3xl lg:text-5xl">3400+</span>
                    <p>Inmuebles administrados</p>
                </div>
                <div className="flex flex-col items-start justify-center bg-secondary/20 w-full p-4 lg:p-10 lg:gap-5 hover:bg-primary hover:scale-105 hover:text-white rounded-xl transition-all duration-300">
                    <span className="font-semibold text-3xl lg:text-5xl">6+</span>
                    <p>Salas de negocio</p>
                </div>
            </div>
            <div className="hidden lg:block relative pt-5">
                <Image src="/IA.webp" alt="margarita ia" fill className="object-scale-down" />
                <div className="mx-auto w-2/3 h-[90%] bg-primary rounded-2xl" />
            </div>
        </div>
    </section>
}