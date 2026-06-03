import { propertyComercial } from "@/shared/constants/properties.constants";

import { Property } from "../types/Property.type";
import PropertyComercialCard from "./PropertyComercialCard";
import PropertyLivingCard from "./PropertyLivingCard";

export default function propertyCardResolver({ property }: { property: Property }) {

    const location = `${property.neighborhood ? property.neighborhood : property.city_zone ? property.city_zone : property.zone}, ${property.city}`;
    const title = `${property.type} en ${property.biz}`;

    if (propertyComercial.some((p) => p.name.toLowerCase() === property.type.toLowerCase())) {
        return <PropertyComercialCard property={property} location={location} title={title} />
    } else {
        return <PropertyLivingCard property={property} location={location} title={title} />
    }

}