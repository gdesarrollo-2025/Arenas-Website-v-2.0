'use client'
import { FieldGroup, FieldSeparator } from "@/shared/ui/field"
import FiltersPropertyType from "./FiltersPropertyType"
import FiltersBiz from "./FiltersBiz"
import FiltersBathrooms from "./FiltersBathrooms"
import FiltersBedrooms from "./FiltersBedrooms"
import FiltersArea from "./FiltersArea"
import FiltersPrice from "./filtersPrice"
import FiltersButtons from "./FiltersButtons"
import { SearchPropertyQuery } from "@/features/properties/types/ProperyQuery.type"
import { propertyVivienda } from "@/shared/constants/properties.constants"
import useFilters from "../hooks/useFilters"

type props = {
    query: SearchPropertyQuery;
}
export default function ViviendaFiltersPanel({ query }: props) {

    const { finalQuery, onChangeCheckbox, onChangeSelect, onChangeToggle, onChangeSlider, applyFilters, resetFilters } = useFilters({ query});

    const bedroomsArray = finalQuery.bedrooms?.split(",").filter(Boolean) ?? [];
    const bathroomsArray = finalQuery.bathrooms?.split(",").filter(Boolean) ?? [];


    return <FieldGroup className="flex flex-col w-full h-full justify-evenly">
        <FiltersPropertyType options={propertyVivienda} value={finalQuery.property ?? ""} onChange={(code) => onChangeCheckbox("property", code)} />
        <FieldSeparator />
        <FiltersBiz value={finalQuery.biz ?? ""} onChange={(value) => onChangeSelect("biz", value)} />
        <FieldSeparator />
        <FiltersBedrooms value={bedroomsArray ?? ""} onChange={(values) => onChangeToggle("bedrooms", values)} />
        <FieldSeparator />
        <FiltersBathrooms value={bathroomsArray ?? ""} onChange={(values) => onChangeToggle("bathrooms", values)} />
        <FieldSeparator />
        <FiltersArea min={finalQuery.minArea ?? 0} max={finalQuery.maxArea ?? 200} onChange={(values) => onChangeSlider("minArea", "maxArea", values)} />
        <FieldSeparator />
        <FiltersPrice min={finalQuery.minPrice ?? 1000000} max={finalQuery.maxPrice ?? 5000000} onChange={(values) => onChangeSlider("minPrice", "maxPrice", values)} />
        <FiltersButtons onApply={applyFilters} onReset={resetFilters} />
    </FieldGroup>
}