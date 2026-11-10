import Image from "next/image";

export default function PaymentRefundsSection() {
    return <section className="relative container-small h-[75svh] py-15">
        <div className=" flex items-center justify-start bg-secondary/10 w-full h-full rounded-[20px]">

            <div className="flex flex-col w-fit max-w-full items-start justify-center h-full p-10">
                <h2 className="text-display font-semibold">Pagos y Reembolsos</h2>
                <p className="text-base w-0 min-w-full">Te presentamos el paso a paso para el pago y reembolso de los servicios públicos.</p>
                <p className="text-base w-0 min-w-full">
                    Si tienes dudas o inquietudes, contáctanos a través de nuestras líneas de atención,
                    redes sociales y formularios digitales.
                </p>
            </div>
            <div className="absolute right-15 w-1/3 h-full">
                <Image src={"/VideoTenants.webp"} alt="Video explicación pasos de pagos de y reembolsos" fill className="object-scale-down" />
            </div>
        </div>
    </section>
}