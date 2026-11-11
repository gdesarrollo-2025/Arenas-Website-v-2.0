import Image from "next/image";

export default function PaymentsSection() {
    return <div className="container-small  bg-secondary/20 h-[60vh]  rounded-[20px]">
        <div className="flex  items-center justify-between  w-full h-full px-5 py-10 ">
            <div className="self-end relative h-full w-1/2 ">
                <Image src="/Ia_payments.png" alt="margarita pse" fill className="object-cover overflow-y-visible" />
            </div>
            <div className="flex flex-col gap-4  w-1/2">
                <div className="flex flex-col gap-3 ">
                    <h2 className="text-display font-semibold">Realiza tus pagos</h2>
                    <p className="text-body">Somos un ecosistema inmobiliario que conecta propietarios, compradores, inversionistas y proyectos con
                        soluciones claras, seguras y rentables.</p>
                    <button type="button" className="w-fit px-6 py-3 bg-accent rounded-[20px] text-white ">
                        Paga por PSE
                    </button>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-heading-lg font-semibold">Al dia con tu obligación</h3>
                    <p className="text-body">Somos un ecosistema inmobiliario que conecta propietarios, compradores, inversionistas y proyectos con
                        soluciones claras, seguras y rentables.</p>
                    <button type="button" className="w-fit px-6 py-3 bg-accent rounded-[20px] text-white ">
                        Paga por PSE
                    </button>
                </div>
            </div>

        </div>
    </div>
}