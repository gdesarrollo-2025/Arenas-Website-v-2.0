import { buildSearchParams } from "@/shared/utils/buildSearchParam";
import { domusPropertySearchResponse } from "../dtos/domusPropertySearchResponse.dto";
import toPropertySearch from "../mappers/PropertiesSearchResponse.mapper";
import toDomusQuery from "../mappers/Query.mapper";
import { PropertySearch } from "../types/PropertySearch.type";
import { SearchPropertyQuery } from "../types/ProperyQuery.type";

const token = process.env.DOMUS_API_TOKEN;
const base = process.env.DOMUS_BASE

export async function getPropertiesAll(query: SearchPropertyQuery, perPage: number): Promise<PropertySearch> {

    const options = {
        method: "GET",
        headers: {
            Authorization: `${token}`,
            "Inmobiliaria": "1",
            Accept: "application/json",
            "PerPage": `${perPage}`
        },
    }


    const finalQuery = buildSearchParams(toDomusQuery(query))
    const params = new URLSearchParams(finalQuery)
    const url = base + "/properties?" + params.toString();
    const res = await fetch(url, options);
    const data: domusPropertySearchResponse = await res.json();

    return toPropertySearch(data);
}

export async function getPropertyByID() {


}