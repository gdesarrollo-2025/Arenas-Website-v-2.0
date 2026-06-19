import { FieldGroup, FieldSeparator } from "@/shared/ui/field"
import FiltersPropertyType from "./FiltersPropertyType"
import FiltersBiz from "./FiltersBiz"
import FiltersBathrooms from "./FiltersBathrooms"
import FiltersBedrooms from "./FiltersBedrooms"
import FiltersArea from "./FiltersArea"
import FiltersPrice from "./filtersPrice"
import FiltersButtons from "./FiltersButtons"
import { SearchPropertyQuery } from "@/features/properties/types/ProperyQuery.type"

type props = {
    typeFilters: "general" | "comercial" | "vivienda",
    query: SearchPropertyQuery;
}
export default function FiltersContent({ typeFilters, query }: props) {
    
    if (typeFilters == "general") {
        return <FieldGroup>
            <FiltersPropertyType value="1,2" />
            <FieldSeparator />
            <FiltersBiz />
            <FieldSeparator />
            <FiltersBathrooms />
            <FieldSeparator />
            <FiltersBedrooms />
            <FieldSeparator />
            <FiltersArea />
            <FieldSeparator />
            <FiltersPrice />
            <FiltersButtons />
        </FieldGroup>
    }
    if (typeFilters == "comercial") {

    }
    if (typeFilters == "vivienda") {

    }
}