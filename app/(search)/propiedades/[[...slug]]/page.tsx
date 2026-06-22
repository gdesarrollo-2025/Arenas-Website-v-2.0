
import PropertyCardResolver from "@/features/properties/components/PropertyCardResolver";
import { getPropertiesAll } from "@/features/properties/services/properties.service";
import { SearchPropertyQuery } from "@/features/properties/types/ProperyQuery.type";
import urlToQuery from "@/features/search/mappers/urlToQuery";
import Pagination from "@/shared/components/Pagination";
import Image from "next/image";
import SearchFiltersPanel from "@/features/filters/components/SearchFiltersPanel";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";
import FeaturedProperties from "@/shared/components/FeaturedProperties";
import HeroSection from "../../_sections/HeroSection";
import SearchSection from "../../_sections/SearchSection";
import FeatureSection from "../../_sections/FeatureSection";
import PropertyList from "@/features/properties/components/PropertyList";

type props = {
    params: Promise<{
        slug: string[];
    }>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Page({ params, searchParams }: props) {

    const [{ slug }, queryParams] = await Promise.all([params, searchParams])

    /* crea el query a partir de la información obtenida por el slug y queryparams */
    const query: SearchPropertyQuery = { ...urlToQuery(slug), ...queryParams }
    if (!query.page) query.page = 1;


    return <div className="flex flex-col gap-5">
        <HeroSection title="Buscador de inmuebles" image="/hero-house.webp" />
        {/* SearchList */}
        <SearchSection filtersPanel={<SearchFiltersPanel query={query} />}>
            <PropertyList query={query}/>
        </SearchSection>
        {/* featured */}
        <FeatureSection querySearch={{ location: query.location, great: "on" }} view="vivienda"/>
    </div>
}
