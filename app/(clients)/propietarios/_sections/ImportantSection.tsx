import Image from "next/image";

export default function ImportantSection() {
    return <section className="container-small h-[60vh] flex justify-center  items-center bg-primary rounded-[20px] p-2 ">
        <div className="grow flex flex-col w-1/2 h-full gap-5 justify-evenly items-center">
            <h2 className="h-1/4 place-content-end text-display text-white font-semibold">Importante</h2>
            <div className="grid grid-rows-2 auto-rows-fr grow w-full p-5 gap-5 ">
                <div className="flex gap-4 w-full justify-between items-center ">
                    <div className="h-full w-auto aspect-square bg-accent rounded-full" />
                    <p className="text-body text-white ">Los pagos son realizados mes vencido, es decir,
                        que usted recibirá cada mes el dinero entre el 6 y
                        8 día hábil del mes siguiente.</p>
                </div>
                <div className="flex gap-4 w-full justify-between items-center ">
                    <div className="h-full w-auto aspect-square bg-accent rounded-full" />
                    <p className="text-body text-white ">**La promoción y mercadeo corresponde al
                        cobro que realiza la inmobiliaria al propietario
                        por la publicidad y la gestión comercial realizada
                        para lograr el arrendamiento del inmueble.</p>
                </div>
            </div>
        </div>
        <div className="relative w-1/3 h-full aspect-square">
            <Image src="/Importante.webp" alt="Ia importante" fill className="object-cover object-bottom" sizes="23vw" />
        </div>
    </section>
}