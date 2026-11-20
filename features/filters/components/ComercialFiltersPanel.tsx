'use client';
import { FieldGroup, FieldSeparator } from "@/shared/ui/field";
import { SearchPropertyQuery } from "@/features/properties/types/ProperyQuery.type"
import useFilters from "../hooks/useFilters";
import FiltersPropertyType from "./FiltersPropertyType";
import FiltersBiz from "./FiltersBiz";
import FiltersArea from "./FiltersArea";
import FiltersPrice from "./FiltersPrice";
import { propertyComercial } from "@/shared/constants/properties.constants";
import FiltersButtons from "./FiltersButtons";
import useSearch from "@/features/search/hooks/useSearch";

type props = {
    query: SearchPropertyQuery
}

export default function ComercialFiltersPanel({ query }: props) {
    const section = "comercio";

    const { search }= useSearch();

    const { finalQuery, onChangeCheckbox, onChangeSelect, onChangeSlider, applyFilters, resetFilters } = useFilters({ query, section , onApply: search})
    return <FieldGroup>
        <FiltersPropertyType options={propertyComercial} value={finalQuery.property ?? ""} onChange={(code) => onChangeCheckbox("property", code)} />
        <FieldSeparator />
        <FiltersBiz value={finalQuery.biz ?? ""} onChange={(value) => onChangeSelect("biz", value)} />
        <FieldSeparator />
        <FiltersArea min={finalQuery.minArea ?? 0} max={finalQuery.maxArea ?? 200} onChange={(values) => onChangeSlider("minArea", "maxArea", values)} />
        <FieldSeparator />
        <FiltersPrice min={finalQuery.minPrice ?? 1000000} max={finalQuery.maxPrice ?? 5000000} onChange={(values) => onChangeSlider("minPrice", "maxPrice", values)} />
        <FieldSeparator />
        <FiltersButtons onApply={applyFilters} onReset={resetFilters} />
    </FieldGroup>
}