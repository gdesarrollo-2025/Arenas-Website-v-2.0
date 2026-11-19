
import Service4 from "@/public/service_4.svg";

const infographies = [
    {
        logo: "",
        title: "Venta de propiedades",
        text: "Acompañamos la venta de tu inmueble con asesoría comercial, valoración, promoción estratégica y gestión de clientes interesados hasta el cierre del negocio"
    },
    {
        logo: "",
        title: "Venta de propiedades",
        text: "Acompañamos la venta de tu inmueble con asesoría comercial, valoración, promoción estratégica y gestión de clientes interesados hasta el cierre del negocio"
    },
    {
        logo: "",
        title: "Venta de propiedades",
        text: "Acompañamos la venta de tu inmueble con asesoría comercial, valoración, promoción estratégica y gestión de clientes interesados hasta el cierre del negocio"
    },
    {
        logo: "",
        title: "Venta de propiedades",
        text: "Acompañamos la venta de tu inmueble con asesoría comercial, valoración, promoción estratégica y gestión de clientes interesados hasta el cierre del negocio"
    },
    {
        logo: "",
        title: "Venta de propiedades",
        text: "Acompañamos la venta de tu inmueble con asesoría comercial, valoración, promoción estratégica y gestión de clientes interesados hasta el cierre del negocio"
    },
    {
        logo: "",
        title: "Venta de propiedades",
        text: "Acompañamos la venta de tu inmueble con asesoría comercial, valoración, promoción estratégica y gestión de clientes interesados hasta el cierre del negocio"
    },
]
export default function MoreInformationSection() {
    return <section className="flex flex-col container-large gap-10">
        <div className="flex justify-between items-center">
            <h2 className="w-1/2 text-display font-semibold">Infografías para <br /> Arrendatarios</h2>
            <p className="w-2/5">Conoce algunos de los conceptos, deberes y obligaciones que debes
                tener en cuenta a la hora de ocupar o desocupar un inmueble. Si
                tienes dudas, puede contactar a tu asesor integral y este se
                encargará de despejarlas.</p>
        </div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-8">
            {infographies.map((i, idx) => (
                <div key={idx} className="group flex items-center gap-4 w-full h-70 bg-secondary/10 hover:bg-primary text-foreground hover:text-white rounded-xl transition-colors duration-150">
                    <Service4 className="w-2/5 md:w-1/5 lg:w-3/5 h-full aspect-square text-secondary group-hover:text-white" />
                    <div className="flex flex-col gap-4 ">
                        <h3 className="text-heading-sm font-semibold">{i.title}</h3>
                        <p className="text-base text-balance">{i.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
}