import Image from "next/image";

export default function PaymentsSection() {
    return <div className="max-w-[90vw] mx-auto h-[80vh]">
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h2>Realiza tus pagos</h2>
            <p>Somos un ecosistema inmobiliario que conecta propietarios, compradores, inversionistas y proyectos con
                soluciones claras, seguras y rentables.</p>
            <div className="self-end relative h-full w-1/3">
            <Image src="/Ia_payments.png" alt="margarita pse" fill className="object-cover"/>
            </div>
        </div>
    </div>
}