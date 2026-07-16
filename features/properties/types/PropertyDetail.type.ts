
export type amenitie = {
    id: number,
    name: string
}

export type PropertyDetail = {
    id: number,
    code: number,
    city: string,
    estate: string,
    zone: string;
    city_zone: string,
    neighborhood: string;
    type: string;
    biz: string;
    area_cons: number,
    area_lot: number,
    bedrooms: number,
    bathrooms: number,
    stratum: number,
    build_year: number,
    price_format: string,
    administration: number,
    description: string,
    latitude: number,
    longitude: number,
    images: string[],
    images360: string[],
    amenities: amenitie[],
}