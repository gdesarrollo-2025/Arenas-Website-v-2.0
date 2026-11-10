export default function StepsSection() {
    return <section className="container-small h-[80vh] flex bg-secondary/10  rounded-[20px] p-10 gap-10 ">
        <div className="flex flex-col items-start justify-center w-7/10 gap-5  ">
            <h2 className="text-display/14 font-semibold ">Recibe <br /> un anticipo <br /> de tu canon</h2>
            <p className="w-4/5">En Arenas Inmobiliaria puedes recibir un anticipo de hasta 3 veces el canon de
                arrendamiento, para hacerlo radica tu solicitud siguiendo los pasos a continuación.
                Recuerda que aplican términos y condiciones.</p>
        </div>
        <div className="w-4 h-full bg-primary rounded-full" />
        <div className="grid grid-rows-fr w-3/10">
            <div className="flex flex-col justify-center gap-2">
                <div className="leading-6">
                    <h3 className="text-heading-md font-semibold">Paso 1</h3>
                    <p className="font-bold">Accede al formulario</p>
                </div>
                <small className="text-caption">Haz clic en "Haz tu requerimiento".</small>
            </div>
            <div className="flex flex-col justify-center gap-2">
                <div className="leading-6">
                    <h3 className="text-heading-md  font-semibold">Paso 2</h3>
                    <p className="font-bold">Completa el formulario</p>
                </div>
                <small className="text-caption">Rellena los campos</small>
            </div>
            <div className="flex flex-col justify-center gap-2">
                <div className="leading-6">
                    <h3 className="text-heading-md  font-semibold">Paso 3</h3>
                    <p className="font-bold">Clase de requerimiento</p>
                </div>
                <small className="text-caption">En "Clase de Requerimiento",
                    selecciona "Solicitud".</small>
            </div>
            <div className="flex flex-col justify-center gap-2">
                <div className="leading-6">
                    <h3 className="text-heading-md font-semibold">Paso 4</h3>
                    <p className="font-bold">Área de requerimiento</p>
                </div>
                <small className="text-caption">En "Área de requerimiento"
                    selecciona "Cartera"</small>
            </div>
            <div className="flex flex-col justify-center gap-2">
                <div className="leading-6">
                    <h3 className="text-heading-md font-semibold">Paso 5</h3>
                    <p className="font-bold">Requerimiento de cartera</p>
                </div>
                <small className="text-caption">En "Requerimiento de Cartera"
                    selecciona "anticipo a propietarios
                    (Préstamos).</small>
            </div>
        </div>

    </section>
}