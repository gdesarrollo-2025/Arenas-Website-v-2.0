import Image from "next/image";

export default function ImportantSection() {
    return <section className="container-small h-[60vh] flex justify-around items-center bg-primary ">
        <div className="w-1/2 h-full flex flex-col justify-evenly items-center">
            <h2 className="text-white font-semibold">Importante</h2>
            <div className="flex w-full justify-between items-center border-2 border-white">
                <div className="bg-accent size-16 rounded-full"></div>
                <p className="text-white text-balance w-fit ">Los pagos son realizados mes vencido, es decir,
                    que usted recibirá cada mes el dinero entre el 6 y
                    8 día hábil del mes siguiente.</p>
            </div>
            <div className="flex w-full justify-between items-center border-2 border-white ">
                <div className="bg-accent size-16 rounded-full"></div>
                <p className="text-white text-balance w-fit  ">**La promoción y mercadeo corresponde al
                    cobro que realiza la inmobiliaria al propietario
                    por la publicidad y la gestión comercial realizada
                    para lograr el arrendamiento del inmueble.</p>
            </div>
        </div>
        <div className="relative w-1/3 h-full aspect-square border-2 border-white">
            <Image src="/Importante.webp" alt="Ia importante" fill className="object-cover object-bottom" sizes="23vw" />
        </div>
    </section>
}