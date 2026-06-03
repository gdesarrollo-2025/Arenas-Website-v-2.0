
export type SearchPropertyQuery = {
    page?:number,
    location?: string,
    neighborhood?: string,
    property?: string,
    biz?: string,
    bedrooms?: string,
    bathrooms?: string,
    minPrice?: number,
    maxPrice?: number,
    minArea?: number,
    maxArea?: number,
    stratum?: string,
    destination?: number,
}