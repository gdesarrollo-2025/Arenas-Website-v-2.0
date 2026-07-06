import Image from "next/image";
import Link from "next/link"
import { FaBath, FaBed, FaRulerCombined } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";

import { Property } from "../types/Property.type";

import formatPrice from "@/shared/utils/formatPrice";
import FavoriteButton from "./FavoriteButton";
/* pasar a un helper en shared/helpers */


export default function PropertyLivingCard({ property, location, title }: { property: Property, location: string, title: string }) {

    return <Link href={`/propiedad/${property.code}`} className="flex flex-col h-87.5 w-60 justify-between overflow-hidden shadow-lg/40  rounded-xl ">
        <div className="relative h-1/2 w-full">
            <FavoriteButton p={property}/>
            <Image src={property.image} alt="propiedad" fill className="object-cover " sizes="240px" />
        </div>
        <div className=" flex flex-col justify-between w-full h-1/2 bg-background p-5">
            <p className="font-bold">Cod: {property.code}</p>
            <div className="flex flex-col gap-1 ">
                <div className="flex flex-col">
                    <small>{location}</small>
                    <p className=" font-semibold">{title}</p>
                </div>
                <p className="font-bold"> {property.price_format}</p>
                {(property.administration !== 0) && (
                    <div className="flex flex-col">
                        <small>Admnistración</small>
                        <p className="font-bold">{formatPrice(property.administration)}</p>
                    </div>
                )}
            </div>
            <div className="flex justify-between">
                <span className="flex items-center gap-2 "><FaRulerCombined /> {property.area_cons ? property.area_cons : property.area_lot}</span>
                <span className="flex items-center gap-2 "><FaBed />{property.bedrooms}</span>
                <span className="flex items-center gap-2 "><FaBath />{property.bathrooms}</span>
                <span className="flex items-center gap-2 "><FaParking />{property.parking}</span>
            </div>
        </div>
    </Link>
}