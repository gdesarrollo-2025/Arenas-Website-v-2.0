import PropertyCardResolver from "@/features/properties/components/PropertyCardResolver"
import { getPropertiesAll } from "@/features/properties/services/properties.service"

import Carrousel from "@/shared/components/Carrousel"


export default async function PropertiesSection() {


    const data = await getPropertiesAll({ page: Math.floor(Math.random() * 100), destination: 1, biz: "1" }, 10)
    return <div className="max-w-[90vw] h-fit my-5 mx-auto ">
        <div className="flex flex-col lg:flex-row items-start justify-between ">
            <h3 className="font-semibold">Descubre el inmueble perfecto para ti</h3>
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
                <p>Encuentra la propiedad ideal para ti, hemos seleccionado estos inmuebles por sus características, precio y ubicación, quizás puedan interesarte.</p>
                <p>Si no se ajustan a tu necesidad ingresa en el buscador en la parte superior de este sitio web</p>
            </div>
        </div>
        <Carrousel className="w-full" slideClassName="flex place-items-center p-5 " modules={["navigation"]} speed={300} spaceBetween={20} slidesPerView={1} loop={true} navigation={true} autoplay={{ delay: 10000 }} breakpoints={{ 426: { slidesPerView: 2 }, 769: { slidesPerView: 3 }, 1025: { slidesPerView: 4 } }}>
            {data.properties.map((p) => (
                <PropertyCardResolver key={p.id} property={p} />
            ))}
        </Carrousel>
    </div>
}