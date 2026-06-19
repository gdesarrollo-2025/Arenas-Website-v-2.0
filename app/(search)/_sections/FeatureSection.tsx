import { SearchPropertyQuery } from "@/features/properties/types/ProperyQuery.type";
import FeaturedProperties from "@/shared/components/FeaturedProperties";
export default function FeatureSection({querySearch, view}: {querySearch: SearchPropertyQuery, view: "comercio" | "vivienda"}) {
    return <section className="flex flex-col lg:flex-row max-w-[83dvw] w-full mx-auto h-[75dvh]">
        <div className="flex flex-col items-start justify-start lg:justify-center text-white bg-primary grow rounded-[20px] p-10 ">
            <p>Propiedades</p>
            <h3>Destacadas</h3>
            <span>Ver mas</span>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-end w-full h-1/5 lg:h-full lg:w-1/5   rounded-[20px]">
            <div className="w-full lg:w-[60dvw] p-5 lg:p-10 overflow-visible ">
                <FeaturedProperties query={querySearch} view={view} />
            </div>
        </div>
    </section>
}