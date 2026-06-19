import { SearchPropertyQuery } from "@/features/properties/types/ProperyQuery.type";
import { propertyTypes } from "@/shared/constants/properties.constants";
import { BizTypes } from "@/shared/constants/biz.constants";
import { cities } from "@/shared/constants/cities.constants";
import { Neighborhoods } from "@/shared/constants/neighborhoods.constants";

function normalizeString(str: string): string {
    return str
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/,/g, '')
        .trim()
}


function slugify(str: string): string {
    return normalizeString(str)
        .replace(/\s+/g, '-');
}

export default function queryToUrl(query: SearchPropertyQuery): string {

    const pathSegments: string[] = ['/propiedades'];

    /* negocio */
    if (query.biz) pathSegments.push(`${slugify(String(BizTypes.find((b) => String(b.code) == query.biz)?.name))}`)

    /* tipo de propiedad */
    if (query.property) {
        const propertySlug = query.property
            .split(",")
            .map(code =>
                slugify(
                    String(
                        propertyTypes.find(
                            b => String(b.code) === code
                        )?.name
                    )
                )
            )
            .filter(Boolean)
            .join("-y-");

        pathSegments.push(propertySlug);
    }

    /* ciudad */
    if (query.location) {
        const locationSlug = query.location
            .split(",")
            .map(code =>
                slugify(
                    String(
                        cities.find(
                            b => String(b.code) === code
                        )?.name
                    )
                )
            )
            .filter(Boolean)
            .join("-y-");

        pathSegments.push(locationSlug);
    }

    /* barrio */
    if (query.neighborhood) {
        const neighborhoodSlug = query.neighborhood
            .split(",")
            .map(code =>
                slugify(
                    String(
                        Neighborhoods.find(
                            b => String(b.code) === code
                        )?.name
                    )
                )
            )
            .filter(Boolean)
            .join("-y-");

        pathSegments.push(neighborhoodSlug);
    }

    const params = new URLSearchParams();

    /* queryparams */
    if (query.bedrooms) params.append('bedrooms', query.bedrooms)
    if (query.bathrooms) params.append('bathrooms', query.bathrooms)
        
    if (query.minPrice) params.append('minPrice', String(query.minPrice))
    if (query.maxPrice) params.append('maxPrice', String(query.maxPrice))
    if (query.minArea) params.append('minArea', String(query.minArea))
    if (query.maxArea) params.append('maxArea', String(query.maxArea))
    if (query.stratum) params.append('stratum', query.stratum)

    console.log("params:",params.getAll," toString:", params.toString())
    return pathSegments.join('/') + `?${params.toString()}`;
}