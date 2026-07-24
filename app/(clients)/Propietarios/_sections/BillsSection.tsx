import Image from "next/image";

export default function BillsSection() {
    return <section className="container-small h-[80vh] flex items-center justify-around border-2">
        <div className="relative w-1/3 h-auto aspect-square border-2">
            <Image src="/Facturas.webp" alt="acceder facturas y estado de cuentas" fill className="object-scale-down" sizes="23vw"/>
        </div>
        <div className="flex flex-col w-1/2">
            <h2 className="font-semibold text-balanced">Facturas y <br/> estados de cuenta</h2>
            <p className="text-balance"> Para ingresar a sus estados de cuenta, en
                la casilla Documento digite su cédula o
                NIT sin el dígito de verificación, luego en
                la casilla Clave anote 0000 (esta será su
                clave inicial). Una vez haya ingresado el
                sistema le requerirá por su seguridad
                Cambio de contraseña.</p>
        </div>
    </section>
}