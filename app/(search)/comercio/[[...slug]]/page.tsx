
import HeroSearchSection from "../../_sections/HeroSearchSection";
import SearchSection from "../../_sections/SearchSection";
import ComercialFiltersPanel from "@/features/filters/components/ComercialFiltersPanel";
import { SearchPropertyQuery } from "@/features/properties/types/ProperyQuery.type";
import FeatureSection from "../../_sections/FeatureSection";
import PropertyList from "@/features/properties/components/PropertyList";
import urlToQuery from "@/features/search/mappers/urlToQuery";


type props = {
    params: Promise<{
        slug: string[];
    }>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata({params}:props){

}

export default async function Page({params, searchParams}: props) {

    const [{slug}, queryParams]= await Promise.all([params, searchParams]);

    const query: SearchPropertyQuery = { destination: 2 , ...urlToQuery(slug), ...queryParams}
    if (!query.page) query.page = 1;
    
    return <div className="flex flex-col w-full gap-5 ">
        <HeroSearchSection title="comercio" image="/Comercial.webp" />
        <SearchSection filtersPanel={<ComercialFiltersPanel query={query} />}>
            <PropertyList query={query} />
        </SearchSection>
        <FeatureSection querySearch={{ destination: 2, great: "on" }} view="comercio" />
    </div>
}