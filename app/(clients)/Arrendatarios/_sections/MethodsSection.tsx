
const methods = [
    {
        icon: "",
        title: "Cajero multifuncional Bancolombia",
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
    return <div className="max-w-[90vw] w-full  mx-auto flex flex-col gap-3 ">
        <div className="flex flex-col items-center">
            <h2>Otras alternativas de pago</h2>
            <p>Somos un ecosistema inmobiliario que conecta propietarios, compradores, inversionistas y proyectos con
                soluciones claras, seguras y rentables</p>
        </div>
        <div className="h-60 grid grid-cols-3 gap-5 ">
            {methods.map((m,idx) => (
                <div key={idx} className="bg-secondary/10">
                    <span>{m.icon}</span>
                    <h3>{m.title}</h3>
                    <p>{m.text}</p>
                </div>
            ))}
        </div>
    </div>
}