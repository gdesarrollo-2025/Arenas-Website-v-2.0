import { domusQuery } from "../dtos/domusQuery.dto";
import { SearchPropertyQuery } from "../types/ProperyQuery.type";

export default function toDomusQuery(q: SearchPropertyQuery): domusQuery {


    const base = {
        page: q.page,
        city: q.location,
        neighborhood: q.neighborhood,
        type: q.property,
        biz: q.biz,
        minArea: q.minArea,
        maxArea: q.maxArea,
        bedrooms: q.bedrooms,
        bathrooms: q.bathrooms,
        stratum: q.stratum,
        destination: q.destination,
    }

    let pvmin, pvmax, prmin, prmax
    if( q.biz == "1"){
        if(q.minPrice) prmin = q.minPrice
        if(q.maxPrice) prmax = q.maxPrice
    } else if(q.biz == "2"){
        if(q.minPrice) pvmin = q.minPrice
        if(q.maxPrice) pvmax = q.maxPrice
    }

    return {
        ...base,
        pvmin: pvmin,
        pvmax: pvmax,
        prmin: prmin,
        prmax: prmax,

    }
}