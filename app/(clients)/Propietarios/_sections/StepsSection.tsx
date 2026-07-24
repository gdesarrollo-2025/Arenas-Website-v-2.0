export default function StepsSection() {
    return <section className="container-small h-[80vh] flex bg-secondary/10  rounded-[20px] p-10 gap-10 ">
        <div className="flex flex-col items-start justify-center w-7/10 gap-5  ">
            <h2>Recibe <br /> un anticipo</h2>
            <p className="w-4/5">En Arenas Inmobiliaria puedes recibir un anticipo de hasta 3 veces el canon de
                arrendamiento, para hacerlo radica tu solicitud siguiendo los pasos a continuación.
                Recuerda que aplican términos y condiciones.</p>
        </div>
        <div className="w-4 h-full bg-primary rounded-full" />
        <div className="grid grid-rows-fr w-3/10">
            <div className="flex flex-col justify-center gap-2">
                <h3 className="font-bold">Paso 1</h3>
                <p className="font-semibold">Accede al formulario</p>
                <small>Haz clic en "Haz tu requerimiento".</small>
            </div>
            <div className="flex flex-col justify-center gap-2">
                <h3 className="font-bold">Paso 2</h3>
                <p className="font-semibold">Completa el formulario</p>
                <small>Rellena los campos</small>
            </div>
            <div className="flex flex-col justify-center gap-2">
                <h3 className="font-bold">Paso 3</h3>
                <p className="font-semibold">Clase de requerimiento</p>
                <small>En "Clase de Requerimiento",
                    selecciona "Solicitud".</small>
            </div>
            <div className="flex flex-col justify-center gap-2">
                <h3 className="font-bold">Paso 4</h3>
                <p className="font-semibold">Área de requerimiento</p>
                <small>En "Área de requerimiento"
                    selecciona "Cartera"</small>
            </div>
            <div className="flex flex-col justify-center gap-2">
                <h3 className="font-bold">Paso 5</h3>
                <p className="font-semibold">Requerimiento de cartera</p>
                <small>En "Requerimiento de Cartera"
                    selecciona "anticipo a propietarios
                    (Préstamos).</small>
            </div>
        </div>

    </section>
}