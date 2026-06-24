import Image from "next/image";

export default function PaymentRefundsSection() {
    return <div className="relative flex items-center justify-end max-w-[90vw] w-full mx-auto h-[75svh] py-15 ">
        <div className="flex flex-col items-start justify-center bg-secondary/10  w-full h-full rounded-[20px] p-10 ">
            <h2>Pagos y Reembolsos</h2>
            <p>Te presentamos el paso a paso para el pago y reembolso de los servicios públicos.</p>
            <p>
                Si tienes dudas o inquietudes, contáctanos a través de nuestras líneas de atención,
                redes sociales y formularios digitales.
            </p>
        </div>
        <div className="absolute w-1/3 h-full ">
            <Image src={"/VideoTenants.webp"} alt="Video explicación pasos de pagos de y reembolsos" fill className="object-scale-down"/>
         </div>   
    </div>
}