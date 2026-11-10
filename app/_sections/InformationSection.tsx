import Image from "next/image";


export default function InformationSection() {
    return <section className="flex flex-col lg:grid lg:grid-cols-[3fr_2fr] lg:grid-rows-[1fr_3fr] lg:bg-secondary/15 container-medium h-auto lg:h-[80vh] rounded-4xl gap-8 lg:px-8 py-12">
        <h2 className=" text-heading-sm lg:text-heading-lg xl:text-display font-semibold"> Confia en los verdaderos <br/> <span className="text-heading-lg lg:text-inherit">agentes inmobiliarios</span></h2>
        <div className="hidden lg:flex flex-col justify-center gap-4 ">
            <p className="text-sm">Somos una compania con mas de 83 anos de experiencia en la comercialización
                de inmuebles y proyecto inmobiliarios.</p>
            <p className="text-sm">Contamos con sedes y salas de negocios en Barranquilla y Cartagena.</p>
        </div>
        <div className="aspect-square lg:aspect-auto grid grid-cols-[2fr_2fr] gap-4">
            <div className="flex flex-col justify-center p-4 lg:p-6 rounded-2xl bg-blue-100/70 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
                <span className="text-heading-md md:text-heading-lg lg:text-display font-semibold">83+</span>
                <p className=" text-body md:text-heading-sm font-semibold">Años de experiencia</p>
            </div>
            <div className="flex flex-col justify-center p-4 lg:p-6 rounded-2xl bg-blue-100/70 hover:bg-primary hover:text-white transition-all duration-150 ease-in-out">
                <span className="text-heading-md md:text-heading-lg lg:text-display font-semibold">2300+</span>
                <p className=" text-body md:text-heading-sm font-semibold">Contratos activos</p>
            </div>
            <div className="flex flex-col justify-center p-4 lg:p-6 rounded-2xl bg-blue-100/70 hover:bg-primary hover:text-white transition-all duration-150 ease-in-out">
                <span className="text-heading-md md:text-heading-lg lg:text-display font-semibold">3400+</span>
                <p className=" text-body md:text-heading-sm font-semibold">Inmuebles administrados</p>
            </div>
            <div className="flex flex-col justify-center p-4 lg:p-6 rounded-2xl bg-blue-100/70 hover:bg-primary hover:text-white transition-all duration-150 ease-in-out">
                <span className="text-heading-md md:text-heading-lg lg:text-display font-semibold">6+</span>
                <p className=" text-body md:text-heading-sm font-semibold">Salas de negocio</p>
            </div>
        </div>
        <div>
            <div className="hidden lg:block relative w-full h-full">
                <Image src="/Ia_landingpage.webp" alt="margarita ia" fill className="object-scale-down" sizes="36vw"/>
                <div className="absolute -z-10 bottom-12 inset-x-1/5 w-2/3 h-auto aspect-square bg-primary rounded-full" />
            </div>
        </div>
    </section>
}

/* 
<section className="container-medium h-full   bg-secondary/10 px-5 py-10 rounded-[20px]">
        <div className="w-full h-full flex flex-col lg:grid lg:grid-cols-[3fr_2fr] lg:grid-rows-[auto_1fr]  lg:gap-y-5 lg:gap-x-10 border-2">
            <div>
                <h2 className=" hidden lg:block font-bold text-h1 w-full">Confia en los verdaderos <br/> agentes inmobiliarios</h2>
                <div className="block lg:hidden "><h2 className="font-bold text-h3 ">Confia en los verdaderos</h2> <h2 className="font-bold text-h2">agentes <br/> inmobiliarios</h2></div>
            </div>
            <div className=" hidden lg:flex lg:flex-col justify-center gap-4 ">
                <p className="text-p">Somos una compania con mas de 83 anos de experiencia en la comercialización
                    de inmuebles y proyecto inmobiliarios.</p>
                <p className="text-p">Contamos con sedes y salas de negocios en Barranquilla y Cartagena.</p>
            </div>
            <div className="grid grid-cols-2 auto-rows-fr gap-5 border-2">
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
            <div className="hidden lg:block relative ">
                <Image src="/Ia_landingpage.webp" alt="margarita ia" fill className="object-scale-down" sizes="36vw"/>
                <div className="absolute -z-10 bottom-12 inset-x-1/5 w-2/3 h-auto aspect-square bg-primary rounded-full" />
            </div>
        </div>
    </section>
*/