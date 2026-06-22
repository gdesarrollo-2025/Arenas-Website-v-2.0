
import { SearchPropertyQuery } from "@/features/properties/types/ProperyQuery.type";
import { cities, city } from "@/shared/constants/cities.constants";
import { neighborhood, Neighborhoods } from "@/shared/constants/neighborhoods.constants";
import { propertyType, propertyTypes } from "@/shared/constants/properties.constants";

function normalizeString(str: string): string {
    return str
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/,/g, '')
        .trim()
}

function extractBiz(text: string): any {
    let remaining = text;
    let foundVenta = false;
    let foundArriendo = false;

    const BIZ_VENTA = ['venta', 'comprar'];
    const BIZ_ARRIENDO = ['arriendo', 'alquiler', 'arrendar'];

    for (const keyword of [...BIZ_VENTA, ...BIZ_ARRIENDO]) {
        const regex = new RegExp(`\\b${keyword}\\b`, 'i');
        if (regex.test(remaining)) {
            if (BIZ_VENTA.includes(keyword)) foundVenta = true;
            if (BIZ_ARRIENDO.includes(keyword)) foundArriendo = true;
            remaining = remaining.replace(regex, '');
        }
    }
    if (foundVenta && foundArriendo) return { code: 3, remaining }
    if (foundVenta) return { code: 2, remaining }
    if (foundArriendo) return { code: 1, remaining }
    return { code: null, slug: null, remaining };
}

function extractPropertyType(text: string, propertyTypes: propertyType[]): any {
    let remaining = text;
    const codes: number[] = [];
    for (const type of propertyTypes) {
        if (remaining.includes(normalizeString(type.name))) {
            codes.push(type.code);
            remaining = remaining.replace(normalizeString(type.name), "");
        }
    }

    return { codes, remaining }
}

function extractCity(text: string, cities: city[]): any {
    let remaining = text;
    const codes: number[] = [];
    for (const city of cities) {
        if (remaining.includes(normalizeString(city.name))) {
            codes.push(city.code);
            remaining = remaining.replace(normalizeString(city.name), "");
        }
    }
    return { codes, remaining }
}

function extractNeighborhood(text: string, neighborhoods: neighborhood[]): any {
    let remaining = text;
    const codes: number[] = [];
    let city_codes: number[] = [];
    for (const neighborhood of neighborhoods) {
        if (remaining.includes(normalizeString(neighborhood.name))) {
            codes.push(neighborhood.code);
            city_codes.push(neighborhood.city_code);
            remaining = remaining.replace(normalizeString(neighborhood.name), "");
        }
    }
    city_codes = [...new Set(city_codes)]
    return { codes, city_codes, remaining }
}

function extractNumericFilters(text:string):SearchPropertyQuery {

    let filters: SearchPropertyQuery = {}
    const roomMatch = text.match(
        /(?:de|con)?\s*(\d+)\s*(habitaciones?|alcobas?|dormitorios?|rec[aá]maras?|piezas?|cuartos?|aposentos?)/i
    );
    if (roomMatch) filters.bedrooms = roomMatch[1]

    const bathMatch = text.match(
        /(?:de|con)?\s*(\d+)\s*(ba[nñ]os?|sanitarios?|tocadores?)/i
    );
    if (bathMatch) filters.bathrooms = bathMatch[1];

    // Rango "entre X y Y millones" (tiene prioridad sobre min/max individuales)
    const priceRange = text.match(/entre\s+(\d+)\s*(?:y|-)\s*(\d+)\s*(millones?|m\b)/i);
    if (priceRange) {
        filters.minPrice = parseInt(priceRange[1]) * 1_000_000;
        filters.maxPrice = parseInt(priceRange[2]) * 1_000_000;
        return filters;                                            // si hay rango, ignoramos min/max separados
    }

    const priceMin = text.match(/(desde|minimo|m[ií]n)\s+(\d+)\s*(millones?|m\b)/i);
    const priceMax = text.match(/(maximo|m[aá]x|hasta)\s+(\d+)\s*(millones?|m\b)/i);
    
    if (priceMin) filters.minPrice = parseInt(priceMin[2]) * 1_000_000;
    if (priceMax) filters.maxPrice = parseInt(priceMax[2]) * 1_000_000;

    return filters;
}

export default function phraseToQuery(phrase: string) {

    /* Normaliza la frase de busqueda */
    let text = normalizeString(phrase);
    let query: SearchPropertyQuery = {}

    /* Extrae el negocio */
    const { code: biz, remaining: afterBiz } = extractBiz(text);
    text = afterBiz; query = { ...query, biz: biz };

    /* Extrae el tipo de propiedad */
    const { codes: types, remaining: afterType } = extractPropertyType(text, propertyTypes);
    text = afterType; query = { ...query, property: types.join(',') };

    /* Extrae la ciudad */
    const { codes: location, remaining: afterCity } = extractCity(text, cities);
    text = afterCity; if (location.length) query = { ...query, location: location.join(',') };

    /* Extrae el barrio y verifica si la query tiene ciudad, en caso de no tener ciudad, extraera de la información obtenida por el barrio */
    const { codes: neighborhood, city_codes: aux_cities, remaining: afterNeighborhood } = extractNeighborhood(text, Neighborhoods);
    text = afterNeighborhood; if (neighborhood.length) query = { ...query, neighborhood: neighborhood.join(',') }; if (!query.location) query = { ...query, location: aux_cities.join(',') }

    const numericData = extractNumericFilters(text);
    query = { ...query, ...numericData}

    return query
}