import dynamic from "next/dynamic";


import PropertyCardResolver from "@/features/properties/components/PropertyCardResolver"
import { getPropertiesAll } from "@/features/properties/services/properties.service"
import SkeletonCard from "@/shared/components/SkeletonCard";
import { Suspense } from "react";

const Carrousel = dynamic(() => import("@/shared/components/Carrousel"));

/* Cuántos inmuebles se traen de la API (una sola página, cacheada) y cuántos se muestran */
const POOL_SIZE = 40;
const SHOWN = 10;
/* La respuesta de Domus se guarda en caché 1 hora; después se refresca en segundo plano */
const REVALIDATE_SECONDS = 3600;

function shuffle<T>(items: T[]): T[] {
    const arr = [...items];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

async function CarrouselProperties({ biz }: { biz: "1" | "2" }) {
    // Siempre la misma URL (page 1) => Next la cachea y no se llama a Domus en cada visita.
    const data = await getPropertiesAll({ page: 1, biz }, POOL_SIZE, {
        revalidate: REVALIDATE_SECONDS,
        tags: ["properties", `properties-biz-${biz}`],
    })
    const properties = shuffle(data.properties).slice(0, SHOWN)

    return <div className="w-full h-full relative">
        <Carrousel className="w-full " slideClassName="flex items-center justify-center py-5 px-2" modules={["navigation"]} speed={300} spaceBetween={20} slidesPerView={1} loop={true} navigation={true} autoplay={{ delay: 10000 }} breakpoints={{ 426: { slidesPerView: 2 }, 769: { slidesPerView: 3 }, 1025: { slidesPerView: 4 } }}>
            {properties.map((p) => (
                <PropertyCardResolver key={p.id} property={p} view="vivienda" />
            ))}
        </Carrousel>
    </div>
}



function CarrouselSkeleton() {
    // 1 tarjeta en móvil, 2 en md, 3 en lg, 4 en xl (igual que los breakpoints del carrusel)
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full h-full py-5">
        <SkeletonCard />
        <SkeletonCard className="hidden md:block" />
        <SkeletonCard className="hidden lg:block" />
        <SkeletonCard className="hidden xl:block" />
    </div>
}

export default function PropertiesSection() {
    return <section className="flex flex-col items-center container-medium xl:container-small gap-24">
        {/* arriendo */}
        <div className="flex flex-col items-center w-full gap-7">
            <div className="flex flex-col items-center w-1/4">
                <h2 className="text-base">Arriendo</h2>
                <hr className="w-full border-black border"/>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6">
                <h3 className="w-full text-heading-sm md:text-heading-lg xl:text-display font-semibold ">Descubre el inmueble <br/> perfecto para ti</h3>
                <div className="flex flex-col w-full lg:w-1/2 xl:w-1/3 gap-3 text-body ">
                    <p className="text-body">Encuentra la propiedad ideal para ti, hemos seleccionado estos inmuebles por sus
                        caracteristicas, precio y ubicación, quizás puedan interesarte.
                    </p>
                    <p className="text-body">Si no se ajustan a tu necesidad ingresa en el buscador en la parte superior de
                        este sitio web.
                    </p>
                </div>
            </div>
            <Suspense fallback={<CarrouselSkeleton />}>
                <CarrouselProperties biz="1" />
            </Suspense>
        </div>
        <div className="flex flex-col items-center w-full gap-7">
            <div className="flex flex-col items-center w-1/4">
                <h2 className="text-base">Venta</h2>
                <hr className="w-full border-black border"/>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6">
                <h3 className="w-full text-heading-sm md:text-heading-lg xl:text-display font-semibold">¡Una oportunidad que <br/> no da espera!</h3>
                <div className="flex flex-col w-full lg:w-1/2 xl:w-1/3 gap-3 text-body">
                    <p className="text-body">Encuentra la propiedad ideal para ti, hemos seleccionado estos inmuebles por sus
                        caracteristicas, precio y ubicación, quizas puedan interesarte.
                    </p>
                    <p className="text-body">Si no se ajustan a tu necesidad ingresa en el buscador en la parte superior de
                         este sitio web.</p>
                </div>
            </div>
            <Suspense fallback={<CarrouselSkeleton />}>
                <CarrouselProperties biz="2" />
            </Suspense>
        </div>
    </section>
}

