import { domusQuery } from "../dtos/domusQuery.dto";
import { SearchPropertyQuery } from "../types/ProperyQuery.type";

export default function toDomusQuery(q: SearchPropertyQuery): domusQuery {


    const base = {
        page: q.page,
        city: q.location,
        neighborhood_code: q.neighborhood,
        type: q.property,
        biz: q.biz,
        minarea: q.minArea,
        maxarea: q.maxArea,
        stratum: q.stratum,
        destination: q.destination,
        great: q.great,
    }

    /* Establece el minimo y maximo para baños y o habitaciones */
    let bedrooms, bathrooms, minbed, minbath, maxbed, maxbath
    if (q.bathrooms && q.bathrooms.split(",").length > 1) {
        minbath = q.bathrooms.split(",").shift()
        maxbath = q.bathrooms.split(",").pop()
    } else {
        bathrooms = q.bathrooms
    }
    if (q.bedrooms && q.bedrooms.split(",").length > 1) {
        minbed = q.bedrooms.split(",").shift()
        maxbed = q.bedrooms.split(",").pop()
    } else {
        bedrooms = q.bedrooms
    }
    /* Establece los precios minimos y maximos segun el tipo negocio */
    let pvmin, pvmax, pcmin, pcmax
    if (q.biz == "1") {
        if (q.minPrice) pcmin = q.minPrice
        if (q.maxPrice) pcmax = q.maxPrice
    } else if (q.biz == "2") {
        if (q.minPrice) pvmin = q.minPrice
        if (q.maxPrice) pvmax = q.maxPrice
    }

    return {
        ...base,
        bedrooms,
        bathrooms,
        minbed,
        minbath,
        maxbed,
        maxbath,
        pvmin,
        pvmax,
        pcmin,
        pcmax,

    }
}