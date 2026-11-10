import { propertyComercial } from "@/shared/constants/properties.constants";
import { Capitalize } from "@/shared/utils/formatText";
import { Property } from "../types/Property.type";
import PropertyComercialCard from "./PropertyComercialCard";
import PropertyLivingCard from "./PropertyLivingCard";

type props = {
    property: Property;
    view?: "comercio" | "vivienda"
}
export default function PropertyCardResolver({ property, view= "vivienda"}: props) {

    const location = `${property.neighborhood ? Capitalize(property.neighborhood) : Capitalize(property.city_zone) ? Capitalize(property.city_zone) : Capitalize(property.zone)}, ${Capitalize(property.city)}`;
    const title = `${property.type} en ${property.biz}`;

    if (view == "comercio") {
        return <PropertyComercialCard property={property} location={location} title={title} />
    } else if (view == "vivienda") {
        return <PropertyLivingCard property={property} location={location} title={title} />
    } else {
        if (propertyComercial.some((p) => p.name.toLowerCase() === property.type.toLowerCase())) {
            return <PropertyComercialCard property={property} location={location} title={title} />
        } else {
            return <PropertyLivingCard property={property} location={location} title={title} />
        }

    }
}