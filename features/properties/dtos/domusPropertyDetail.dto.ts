type Images = {
    imageurl: string,
    thumburl:string,
}



type amenity = {
    id: number,
    name: string,
    type: number,
}
export type domusPropertyDetail = {
    idpro: number,
    codpro: number,
    address: string,
    city: string,
    estate: string,
    zone: string,
    city_zone: string,
    neighborhood: string,
    type: string,
    biz: string,
    area_cons: number,
    area_lot: number,
    private_area: number,
    bedrooms: number,
    bathrooms: number,
    stratum: number,
    build_year: number,
    price_format: string,
    administration: number,
    description: string,
    parking: string,
    latitude: string,
    longitude: string,
    images: Images[],
    images360: Images[]
    amenities: amenity[]
}