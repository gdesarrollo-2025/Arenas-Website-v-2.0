import { domusPropertySearchResponse } from "../dtos/domusPropertySearchResponse.dto";
import { PropertySearch } from "../types/PropertySearch.type";
import { toProperty } from "./Properties.mapper";

export default function toPropertySearch(response: domusPropertySearchResponse): PropertySearch {
    return {
        total: response.total,
        current_page: response.current_page,
        last_page: response.last_page,
        properties: response.data.map((d) => toProperty(d)),
    }
}