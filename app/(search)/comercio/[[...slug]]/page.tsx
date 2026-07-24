import Image from "next/image";
import HeroSearchSection from "../../_sections/HeroSearchSection";
import SearchSection from "../../_sections/SearchSection";
import ComercialFiltersPanel from "@/features/filters/components/ComercialFiltersPanel";
import { SearchPropertyQuery } from "@/features/properties/types/ProperyQuery.type";
import FeatureSection from "../../_sections/FeatureSection";
import PropertyList from "@/features/properties/components/PropertyList";

export default function Page() {

    const query: SearchPropertyQuery = { destination: 2 }
    if (!query.page) query.page = 1;
    
    return <div className="flex flex-col gap-5">
        <HeroSearchSection title="comercio" image="/Comercial.webp" />
        <SearchSection filtersPanel={<ComercialFiltersPanel query={query} />}>
            <PropertyList query={query} />
        </SearchSection>
        <FeatureSection querySearch={{ destination: 2, great: "on" }} view="comercio" />
    </div>
}