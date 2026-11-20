import HeroSearchSection from "../../_sections/HeroSearchSection";
import SearchSection from "../../_sections/SearchSection";
import { SearchPropertyQuery } from "@/features/properties/types/ProperyQuery.type";
import FeatureSection from "../../_sections/FeatureSection";
import PropertyList from "@/features/properties/components/PropertyList";
import ViviendaFiltersPanel from "@/features/filters/components/ViviendaFiltersPanel";
import urlToQuery from "@/features/search/mappers/urlToQuery";

type props = {
    params: Promise<{
        slug: string[];
    }>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata({ params }: props) {

}

export default async function Page({params, searchParams}: props) {

    const [{ slug }, queryParams] = await Promise.all([params, searchParams]);

    const query: SearchPropertyQuery = { destination: 1, ...urlToQuery(slug), ...queryParams }
    if (!query.page) query.page = 1;

    return <div className="flex flex-col gap-5">
        <HeroSearchSection title="vivienda" image="/hero-house.webp" />
        <SearchSection filtersPanel={<ViviendaFiltersPanel query={query} />}>
            <PropertyList query={query} />
        </SearchSection>
        <FeatureSection querySearch={{ destination: 1, great: "on" }} view="vivienda" />
    </div>
}