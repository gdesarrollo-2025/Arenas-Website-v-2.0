'use client'

import { FieldGroup, FieldSeparator } from "@/shared/ui/field"
import FiltersPropertyType from "./FiltersPropertyType"
import FiltersBiz from "./FiltersBiz"
import FiltersBathrooms from "./FiltersBathrooms"
import FiltersBedrooms from "./FiltersBedrooms"
import FiltersArea from "./FiltersArea"
import FiltersPrice from "./FiltersPrice"
import FiltersButtons from "./FiltersButtons"
import { SearchPropertyQuery } from "@/features/properties/types/ProperyQuery.type"
import useFilters from "../hooks/useFilters"
import useSearch from "@/features/search/hooks/useSearch"
import { propertyTypes } from "@/shared/constants/properties.constants"
import FiltersCity from "./FiltersCity"
import FiltersNeighborhood from "./FiltersNeighborhood"

type props = {
    query: SearchPropertyQuery;
}
export default function SearchFiltersPanel({ query }: props) {

    const { search } = useSearch();

    const { finalQuery, onChangeCheckbox, onChangeSelect, onChangeToggle, onChangeSlider, applyFilters, resetFilters } = useFilters({ query, onApply: search });

    const bedroomsArray = finalQuery.bedrooms?.split(",").filter(Boolean) ?? [];
    const bathroomsArray = finalQuery.bathrooms?.split(",").filter(Boolean) ?? [];


    return <FieldGroup className="flex flex-col w-full h-full justify-evenly">
        <FiltersCity value={finalQuery.location ?? ""} onChange={(value) => onChangeSelect("location", value)} />
        <FieldSeparator />
        <FiltersNeighborhood value={finalQuery.neighborhood ?? ""} city={finalQuery.location ?? ""} onChange={(value) => onChangeSelect("neighborhood", value)} />
        <FieldSeparator />
        <FiltersPropertyType options={propertyTypes} value={finalQuery.property ?? ""} onChange={(code) => onChangeCheckbox("property", code)} />
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