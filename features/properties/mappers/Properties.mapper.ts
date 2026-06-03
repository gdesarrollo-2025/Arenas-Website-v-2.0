import { domusProperty } from "../dtos/domusProperty.dto";
import { domusPropertyDetail } from "../dtos/domusPropertyDetail.dto";
import { Property } from "../types/Property.type";
import { PropertyDetail } from "../types/PropertyDetail.type";

/* domusPropertyDetail --> PropertyDetail */
export function toPropertyDetail(p: domusPropertyDetail): PropertyDetail {
    return {
        id: p.idpro,
        code: p.codpro,
        city: p.city,
        estate: p.estate,
        zone: p.zone,
        city_zone: p.city_zone,
        neighborhood: p.neighborhood,
        type: p.type,
        biz: p.biz,
        area_cons: p.area_cons,
        area_lot: p.area_lot,
        bedrooms: p.bedrooms,
        bathrooms: p.bathrooms,
        stratum: p.stratum,
        price_format: p.price_format,
        administration: p.administration,
        description: p.description,
        latitude: p.latitude,
        longitude: p.longitude,
        images: p.images.map((i) => i.imageurl),
        images360: p.images.map((i) => i.imageurl),
        amenities: p.amenities.map((a) => a.name),
    }
}

/* domusProperty --> Property */
export function toProperty(p: domusProperty): Property {
    return {
        id: p.idpro,
        code: p.codpro,
        city: p.city,
        zone: p.zone,
        city_zone: p.city_zone,
        neighborhood: p.neighborhood,
        type: p.type,
        biz: p.biz,
        area_cons: p.area_cons,
        area_lot: p.area_lot,
        bedrooms: p.bedrooms,
        bathrooms: p.bathrooms,
        parking: p.parking,
        price_format: p.price_format,
        administration: p.administration,
        latitude: p.latitude,
        longitude: p.longitude,
        description: p.description,
        image: p.image1 || "/hero-house.webp",
    }
}