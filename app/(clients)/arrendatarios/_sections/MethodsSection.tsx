type Method = {
    icon: string;
    title: string;
    text: string;
    link?: {  href:string; label:string};
}

const methods: Method[] = [
    {
        icon: "",
        title: `Cajero multifuncional \nBancolombia`,
        text: " Descarga el cupón de pago, podrá realizar el pago con el código de barras digital en cajeros multifuncionales con lector de código de barras.",
    },
    {
        icon: "",
        title: "En almacenes de cadena",
        text: "Puedes hacer tus pagos en sitios autorizados como Almacenes Éxito, Almacenes Olímpica o en cualquier Corresponsal Bancolombia del país.",
    },
    {
        icon: "",
        title: "Paga en efectivo o cheque",
        text: "Pague su arriendo en efectivo o cheque en cualquier oficina del grupo Bancolombia del país. Haz clic en el siguiente enlace para hallar la más cercana ",
    },
]

export default function MethodsSection() {
    return <section className="container-medium flex flex-col items-center gap-14 ">
        <div className="relative flex flex-col items-center w-fit max-w-full gap-14 ">
            <h2 className="text-display font-semibold">Otras alternativas de pago</h2>
            <p className=" w-0 min-w-full text-body text-center ">Somos un ecosistema inmobiliario que conecta propietarios, compradores, inversionistas y proyectos con
                soluciones claras, seguras y rentables</p>
        </div>
        <div className="grid grid-cols-3 gap-20 ">
            {methods.map((m, idx) => (
                <div key={idx} className="flex flex-col items-start justify-around aspect-4/3 bg-secondary/10 p-8 rounded-xl hover:bg-primary hover:text-background hover:shadow-lg         /60 hover:-translate-y-4 transition-all">
                    <span>{m.icon}</span>
                    <h3 className="text-heading-sm font-semibold text-left whitespace-break-spaces border-2">{m.title}</h3>
                    <p className="text-body">{m.text}</p>
                </div>
            ))}
        </div>
    </section>
}