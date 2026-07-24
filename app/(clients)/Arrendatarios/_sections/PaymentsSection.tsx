import Image from "next/image";

export default function PaymentsSection() {
    return <div className="container-medium  h-[80vh] border-2">
        <div className="flex  items-center justify-between  w-full h-full">
            <div className="self-end relative h-full w-1/2">
                <Image src="/Ia_payments.png" alt="margarita pse" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-4  w-1/2">
                <div>
                    <h2 className="font-semibold">Realiza tus pagos</h2>
                    <p>Somos un ecosistema inmobiliario que conecta propietarios, compradores, inversionistas y proyectos con
                        soluciones claras, seguras y rentables.</p>
                    <button type="button" className="px-6 py-3 bg-accent rounded-[20px] text-white ">
                        Paga por PSE
                    </button>
                </div>
                <div>
                    <h3 className="font-semibold">Al dia con tu obligación</h3>
                    <p>Somos un ecosistema inmobiliario que conecta propietarios, compradores, inversionistas y proyectos con
                        soluciones claras, seguras y rentables.</p>
                    <button type="button" className="px-6 py-3 bg-accent rounded-[20px] text-white ">
                        Paga por PSE
                    </button>
                </div>
            </div>

        </div>
    </div>
}