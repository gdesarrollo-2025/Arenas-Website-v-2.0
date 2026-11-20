import { IconType } from "react-icons";
import { FaBath, FaBed, FaRulerCombined, FaToilet, FaDoorOpen } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
import { propertyComercial } from "@/shared/constants/properties.constants";
import { Capitalize } from "@/shared/utils/formatText";
import { Property } from "../types/Property.type";
import PropertyComercialCard from "./PropertyComercialCard";
import PropertyLivingCard from "./PropertyLivingCard";

type props = {
    property: Property;
    view?: "comercio" | "vivienda"
}

export type Feature = { icon: IconType; value: number; display: string; label: string };

const areaFormatter = new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 });

export default function PropertyCardResolver({ property, view = "vivienda" }: props) {

    const area = Number(property.area_cons || property.area_lot || 0);
    const hasAdmin = Number(property.administration) > 0;

    const features: Feature[] = [
        { icon: FaRulerCombined, value: area, display: `${areaFormatter.format(area)} m²`, label: "de área" },
        { icon:  view == "comercio" ? FaDoorOpen:FaBed, value: Number(property.bedrooms), display: String(property.bedrooms), label: "habitaciones" },
        { icon:  view == "comercio" ? FaToilet:FaBath, value: Number(property.bathrooms), display: String(property.bathrooms), label: "baños" },
        { icon: FaParking, value: Number(property.parking), display: String(property.parking), label: "parqueaderos" },
    ].filter((f) => f.value > 0);

    const location = `${property.neighborhood ? Capitalize(property.neighborhood) : Capitalize(property.city_zone) ? Capitalize(property.city_zone) : Capitalize(property.zone)}, ${Capitalize(property.city)}`;
    const title = `${property.type} en ${property.biz}`;

    if (view == "comercio") {
        return <PropertyComercialCard property={property} location={location} title={title} hasAdmin={hasAdmin} features={features}/>
    } else if (view == "vivienda") {
        return <PropertyLivingCard property={property} location={location} title={title} hasAdmin={hasAdmin} features={features}/>
    } else {
        if (propertyComercial.some((p) => p.name.toLowerCase() === property.type.toLowerCase())) {
            return <PropertyComercialCard property={property} location={location} title={title} hasAdmin={hasAdmin} features={features}/>
        } else {
            return <PropertyLivingCard property={property} location={location} title={title} hasAdmin={hasAdmin} features={features}/>
        }

    }
}