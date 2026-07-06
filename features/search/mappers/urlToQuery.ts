import { SearchPropertyQuery } from "@/features/properties/types/ProperyQuery.type";
import { propertyTypes } from "@/shared/constants/properties.constants";
import normalizeString from "../utils/normalizeString";
import { cities } from "@/shared/constants/cities.constants";
import { Neighborhoods } from "@/shared/constants/neighborhoods.constants";

function unslugify(str: string): string {
    return str.replaceAll("-y-",",")
    .replaceAll("-"," ")
}

function extractBiz(str: string): string  {

    let text= unslugify(str);

    let foundVenta= false;
    let foundArriendo = false;

    const Allbiz: string[] = text.split(" ");

    for (const biz of Allbiz) {
        if(biz == "arriendo"){
            foundArriendo = true;
        }
        if(biz == "venta"){
            foundVenta = true;
        }
    }

    if(foundArriendo && foundVenta){
        return "3"
    }
    if(foundVenta){
        return "2"
    }
    if(foundArriendo){
        return "1"
    }

    return ""
}

function extractPropertyType(str: string): string{
 
    let text= unslugify(str);
    let codes: number [] = []
    const properties: string[] = text.split(",");
    for (const property of properties) {

        if(propertyTypes.some((p) => normalizeString(p.name) == property)){
            const code = propertyTypes.find((p) => normalizeString(p.name) == property)?.code
            if (code) codes.push(code)
        }
    }

    return codes.join(",");
}

function extractCities(str: string): string {
  let text= unslugify(str);
    let codes: number [] = []
    const properties: string[] = text.split(",");
    for (const property of properties) {

        if(cities.some((c) => normalizeString(c.name) == property)){
            const code = cities.find((c) => normalizeString(c.name) == property)?.code
            if (code) codes.push(code)
        }
    }

    return codes.join(",");
}
function extractNeighborhood(str: string): string {
   let text= unslugify(str);
    let codes: number [] = []
    const properties: string[] = text.split(",");
    for (const property of properties) {

        if(Neighborhoods.some((n) => normalizeString(n.name) == property)){
            const code = Neighborhoods.find((n) => normalizeString(n.name) == property)?.code
            if (code) codes.push(code)
        }
    }

    return codes.join(",");
}
export default function urlToQuery(slug: string[]) : SearchPropertyQuery{

    let query: SearchPropertyQuery ={}

    for (const partSlug of slug) {
        if(!query.biz) query.biz = extractBiz(partSlug);
        if(!query.property) query.property = extractPropertyType(partSlug);
        if(!query.location) query.location = extractCities(partSlug);
        if(!query.neighborhood) query.neighborhood = extractNeighborhood(partSlug);
    }
    return query
}