import Image from "next/image";
import { FaBath, FaBed, FaRulerCombined, FaSquareParking } from "react-icons/fa6";
import { Property } from "../types/Property.type";
import formatPrice from "@/shared/utils/formatPrice";
export default function PropertyComercialCard({ property, location, title }: { property: Property, location: string, title: string }) {
    return <div className="relative flex flex-col justify-end h-72.5 w-92.5  shadow-lg/40  rounded-xl overflow-hidden border-2 border-blue-500">
        <Image src={property.image} alt="propiedad" fill className="object-cover" sizes=""/>
        <div className="absolute flex items-center justify-between bottom-0  left-2 right-2 mb-2  bg-background/60 backdrop-blur-xs p-2 rounded-lg ">
            <div>
                <p className="font-bold">Cod. {property.code}</p>
                <div className="flex flex-col gap-0.5">
                    <small>{location}</small>
                    <p className="font-semibold">{title}</p>
                </div>
                <div className="flex gap-2 justify-between">
                    <span className="flex items-center gap-2 "><FaRulerCombined /> {property.area_cons ? property.area_cons : property.area_lot}</span>
                    <span className="flex items-center gap-2 "><FaBed />{property.bedrooms}</span>
                    <span className="flex items-center gap-2 "><FaBath />{property.bathrooms}</span>
                    <span className="flex items-center gap-2 "><FaSquareParking />{property.parking}</span>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center">
                    <small></small>
                    <p className="font-bold">{property.price_format}</p>
                </div>
                {(property.administration !== 0) && (
                    <div className="flex flex-col">
                        <small>Admnistración</small>
                        <p className="font-bold">{formatPrice(property.administration)}</p>
                    </div>
                )}
            </div>
        </div>
    </div>
}