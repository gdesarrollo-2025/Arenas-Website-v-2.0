import dynamic from "next/dynamic";
import { Suspense } from "react";

import { getPropertiesAll } from "@/features/properties/services/properties.service";
import { SearchPropertyQuery } from "@/features/properties/types/ProperyQuery.type";
import PropertyCardResolver from "@/features/properties/components/PropertyCardResolver";

const Carrousel = dynamic(() => import("@/shared/components/Carrousel"));

async function FeaturedPropertiesData({ query, view }: { query: SearchPropertyQuery, view?: "comercio" | "vivienda" }) {
    const data = await getPropertiesAll(query, 6)

    if (view === "comercio") {
        return <div>
            <div className="relative w-full h-full">
                <Carrousel className="w-full" slideClassName="flex place-items-center py-5" modules={['navigation']} speed={300} spaceBetween={1} slidesPerView={1} loop={true} navigation={true} breakpoints={{ 1025: { slidesPerView: 2 } }}>
                    {data.properties.map((p, idx) => (
                        <PropertyCardResolver key={idx} property={p} view={view} />
                    ))}
                </Carrousel>
            </div>
        </div>
    }
    return <div>
        <div className="relative w-full h-full">
            <Carrousel className="" slideClassName="flex place-items-center p-5" modules={['navigation']} speed={300} spaceBetween={1} slidesPerView={1} loop={true} navigation={true} breakpoints={{ 426: { slidesPerView: 2 }, 1025: { slidesPerView: 3 } }}>
                {data.properties.map((p, idx) => (
                    <PropertyCardResolver key={idx} property={p} view={view} />
                ))}
            </Carrousel>
        </div>
    </div>
}

async function PropertieSkeleton({view}: {view:"comercio" | "vivienda"}) {
    return <div>
        cartera
    </div>
}
type props = {
    query: SearchPropertyQuery,
    view: "comercio" | "vivienda";
}
export default function FeaturedProperties({ query, view }: props) {
    return <div>
        <Suspense fallback={<PropertieSkeleton view={view} />}>
            <FeaturedPropertiesData query={query} view={view} />
        </Suspense>
    </div>
}