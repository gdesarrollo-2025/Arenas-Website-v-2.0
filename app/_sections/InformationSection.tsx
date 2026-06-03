
import Image from "next/image";


export default function InformationSection() {
    return <div className="max-w-[90vw] h-full lg:h-[80vh] mx-auto my-10 ">
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
                <Image src="/Ia.webp" alt="margarita ia" fill className="object-scale-down" />
                <div className="mx-auto w-2/3 h-[90%] bg-primary rounded-2xl" />
            </div>
        </div>
    </div>
}


/* 
 <div className="flex flex-col sm:flex-row grow justify-between ">
            <div className="place-content-center w-full">
                <h2 className="font-semibold">Lorem ipsum dolor sit amet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla lacus at iaculis laoreet. Cras ornare velit nec lacinia maximus. Duis quis nunc ipsum. Integer egestas ut purus quis rutrum.  </p>
            </div>
            <div className="w-full sm:w-1/2 grid grid-cols-2 items-center text-center place-items-stretch ">
                <div>
                    <h3>+83 </h3>
                    <p>años de experiencia</p>
                </div>
                <div>
                    <h3>+3000 </h3>
                    <p>inmuebles indexados</p>
                </div>
                <div>
                    <h3>+15 </h3>
                    <p>proyectos inmobiliarios</p>
                </div>
                <div>
                    <h3>+6 </h3>
                    <p>constructoras aliadas</p>
                </div>
            </div>
        </div>
        <Carrousel className="w-full h-1/3" modules={["autoplay", "navigation"]} spaceBetween={5} speed={300} loop={true} navigation={true} slidesPerView={2} breakpoints={{ 426: { slidesPerView: 4 }, 1025: { slidesPerView: 5 } }}>
            {company.map((idx) => (
                <div className="relative h-20 w-full ">
                    <Image src={`/company${idx}.webp`} alt={`Proyecto ${idx}`} fill className="object-contain" />
                </div>
            ))}
        </Carrousel> */