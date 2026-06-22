import HeroSection from "../_sections/HeroSection";
import SearchSection from "../_sections/SearchSection";
import { SearchPropertyQuery } from "@/features/properties/types/ProperyQuery.type";
import FeatureSection from "../_sections/FeatureSection";
import PropertyList from "@/features/properties/components/PropertyList";
import ViviendaFiltersPanel from "@/features/filters/components/ViviendaFiltersPanel";

export default function Page() {

    const query: SearchPropertyQuery = { destination: 1 }
    if (!query.page) query.page = 1;
    
    return <div className="flex flex-col gap-5">
        <HeroSection title="vivienda" image="/hero-house..webp" />
        <SearchSection filtersPanel={<ViviendaFiltersPanel query={query} />}>
            <PropertyList query={query} />
        </SearchSection>
        <FeatureSection querySearch={{ destination: 1, great: "on" }} view="vivienda" />
    </div>
}