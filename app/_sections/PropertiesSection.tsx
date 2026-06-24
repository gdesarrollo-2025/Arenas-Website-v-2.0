import dynamic from "next/dynamic";

import PropertyCardResolver from "@/features/properties/components/PropertyCardResolver"
import { getPropertiesAll } from "@/features/properties/services/properties.service"

import { Suspense } from "react";

const Carrousel = dynamic(() => import("@/shared/components/Carrousel"));


async function CarrouselRentProperties() {
    const data = await getPropertiesAll({ page: Math.floor(Math.random() * 100), biz: "1" }, 10)
    return <div className="w-full h-full relative">
        <Carrousel className="w-full" slideClassName="flex items-center justify-center py-5 " modules={["navigation"]} speed={300} spaceBetween={20} slidesPerView={1} loop={true} navigation={true} autoplay={{ delay: 10000 }} breakpoints={{ 426: { slidesPerView: 2 }, 769: { slidesPerView: 3 }, 1025: { slidesPerView: 4 } }}>

            {data.properties.map((p) => (
                <PropertyCardResolver key={p.id} property={p} view="vivienda" />
            ))}
        </Carrousel>
    </div>
}

async function CarrouselSellProperties() {
    const data = await getPropertiesAll({ page: Math.floor(Math.random() * 100), biz: "2" }, 10)
    return <div className="w-full h-full relative">
        <Carrousel className="w-full" slideClassName="flex items-center justify-center py-5 " modules={["navigation"]} speed={300} spaceBetween={20} slidesPerView={1} loop={true} navigation={true} autoplay={{ delay: 10000 }} breakpoints={{ 426: { slidesPerView: 2 }, 769: { slidesPerView: 3 }, 1025: { slidesPerView: 4 } }}>

            {data.properties.map((p) => (
                <PropertyCardResolver key={p.id} property={p} view="vivienda" />
            ))}
        </Carrousel>
    </div>
}
function CarrouselSkeleton() {
    return <div>
        <div className="hidden xl:grid grid-cols-4 w-full h-full ">
            <div className="place-self-center h-87.5 w-60 rounded-xl shadow-lg/40 bg-secondary/10 animate-pulse " />
            <div className="place-self-center h-87.5 w-60 rounded-xl shadow-lg/40 bg-secondary/10 animate-pulse " />
            <div className="place-self-center h-87.5 w-60 rounded-xl shadow-lg/40 bg-secondary/10 animate-pulse " />
            <div className="place-self-center h-87.5 w-60 rounded-xl shadow-lg/40 bg-secondary/10 animate-pulse " />
        </div>
        <div className="hidden lg:grid  xl:hidden grid-cols-3 w-full h-full ">
            <div className="place-self-center h-87.5 w-60 rounded-xl shadow-lg/40 bg-secondary/10 animate-pulse " />
            <div className="place-self-center h-87.5 w-60 rounded-xl shadow-lg/40 bg-secondary/10 animate-pulse " />
            <div className="place-self-center h-87.5 w-60 rounded-xl shadow-lg/40 bg-secondary/10 animate-pulse " />
        </div>
        <div className="hidden md:grid  lg:hidden grid-cols-2 w-full h-full ">
            <div className="place-self-center h-87.5 w-60 rounded-xl shadow-lg/40 bg-secondary/10 animate-pulse " />
            <div className="place-self-center h-87.5 w-60 rounded-xl shadow-lg/40 bg-secondary/10 animate-pulse " />
        </div>
        <div className="grid md:hidden  lg:hidden grid-cols-1 w-full h-full ">
            <div className="place-self-center h-87.5 w-60 rounded-xl shadow-lg/40 bg-secondary/10 animate-pulse " />
        </div>
    </div>
}

export default async function PropertiesSection() {


    return <section className="flex flex-col gap-2 max-w-[90vw] h-fit my-5 mx-auto ">
        <div>
            <h2 className="w-1/2 mx-auto text-center">Arriendo</h2>
            <hr className="border w-1/2 mx-auto"/>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between ">
            <h3 className="font-semibold">Descubre el inmueble perfecto para ti</h3>
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
                <p>Encuentra la propiedad ideal para ti, hemos seleccionado estos inmuebles por sus características, precio y ubicación, quizás puedan interesarte.</p>
                <p>Si no se ajustan a tu necesidad ingresa en el buscador en la parte superior de este sitio web</p>
            </div>
        </div>
        <Suspense fallback={<CarrouselSkeleton />}>
            <CarrouselRentProperties />
        </Suspense>
        <div>
            <h2 className="w-1/2 mx-auto text-center">Venta</h2>
            <hr className="border w-1/2 mx-auto"/>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between ">
            <h3 className="font-semibold">¡Una oportunidad que no da espera!</h3>
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
                <p>Encuentra la propiedad ideal para ti, hemos seleccionado estos inmuebles por sus características, precio y ubicación, quizás puedan interesarte.</p>
                <p>Si no se ajustan a tu necesidad ingresa en el buscador en la parte superior de este sitio web</p>
            </div>
        </div>
        <Suspense fallback={<CarrouselSkeleton />}>
            <CarrouselSellProperties />
        </Suspense>
    </section>
}