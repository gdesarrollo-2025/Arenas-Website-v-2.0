import { SearchPropertyQuery } from "@/features/properties/types/ProperyQuery.type"
import { useState } from "react";

type props = {
    query: SearchPropertyQuery;
    onApply?: (query: SearchPropertyQuery) => void | Promise<void> ;
}
export default function useFilters({ query, onApply }: props) {

    const initialQuery = query
    const [finalQuery, setQuery] = useState<SearchPropertyQuery>(initialQuery)

    const onChangeCheckbox = (field: keyof SearchPropertyQuery, value: string) => {
        setQuery((prev) => {
            const current = (prev[field] as string | undefined) ?? "";
            const items = current ? current.split(",").filter(Boolean) : [];
            const updated = items.includes(value)
                ? items.filter((i) => i !== value)
                : [...items, value];
            return { ...prev, [field]: updated.join(",") };
        });
    };

    const onChangeSelect = (field: keyof SearchPropertyQuery, value: string) => {
        setQuery((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const onChangeToggle = (field: keyof SearchPropertyQuery, values: string[]) => {
        setQuery((prev) => ({
            ...prev,
            [field]: values.join(","),
        }));
    };

    const onChangeSlider = (
        minField: keyof SearchPropertyQuery,
        maxField: keyof SearchPropertyQuery,
        values: number[]
    ) => {
        setQuery((prev) => ({
            ...prev,
            [minField]: values[0],
            [maxField]: values[1],
        }));
    };
    
    const applyFilters = () => {
        console.log("usefilters", finalQuery)
        onApply?.(finalQuery)
    }

    const resetFilters = () => {
        setQuery(initialQuery)
    }
    /* onChange */
    /* apply filters */
    /* reset filters */

    return { finalQuery, onChangeCheckbox, onChangeSelect, onChangeToggle, onChangeSlider, applyFilters, resetFilters}
}