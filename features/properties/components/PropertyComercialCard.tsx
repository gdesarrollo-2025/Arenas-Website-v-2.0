import Image from "next/image";
import Link from "next/link";
import { Property } from "../types/Property.type";
import formatPrice from "@/shared/utils/formatPrice";
import FavoriteButton from "./FavoriteButton";
import { Feature } from "./PropertyCardResolver";

type Props = { property: Property; location: string; title: string, hasAdmin: boolean, features: Feature[] }
export default function PropertyComercialCard({ property, location, title, hasAdmin, features }: Props) {

    let priceTitle;
    if (property.biz === "Arriendo/venta") {
        priceTitle = "Canon mensual / Precio venta"
    } else if (property.biz === "Arriendo") {
        priceTitle = "Canon mensual"
    } else {
        priceTitle = "Precio venta"
    }

    return <article className="relative flex justify-center items-end w-full aspect-video overflow-hidden rounded-xl shadow-lg/40 transition-shadow hover:shadow-xl/40 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-offset-2 p-2">
        <Image src={property.image} alt={title} fill className=" object-cover" />
        <div className="z-10  flex flex-col gap-2 w-4/5 h-auto bg-background rounded-[14px] p-2">
            <div className="absolute w-auto h-auto left-3 top-3 z-10 ">
                <FavoriteButton p={property} />
            </div>
            <div className="flex items-center justify-between ">
                <div>
                    <h3 className="font-bold text-heading-sm"><Link href={`/propiedad/${property.code}`} className="outline-none after:absolute after:inset-0">{title}</Link></h3>
                    <p className="text-body">{location}</p>
                </div>
                <div className="flex flex-col items-end text-right">
                    <p className="text-body">{priceTitle}</p>
                    <p className="font-bold text-heading-sm tabular-nums">{property.price_format}</p>
                    {hasAdmin && (
                        <p className="text-body tabular-nums"> + {formatPrice(property.administration)} admón.</p>
                    )}
                </div>
            </div>
            <hr />
            <div className="flex justify-between">
                <ul className="flex items-center gap-x-3 text-body ">
                    {features.map(({ icon: Icon, display, label }) => (
                        <li key={label} className="flex items-center gap-1">
                            <Icon aria-hidden className="shrink-0 text-neutral-400" />
                            <span className="tabular-nums text-primary">{display}</span>
                            <span className="sr-only">{label}</span>
                        </li>
                    ))
                    }
                </ul>
                <p className="text-body">Cod. {property.code}</p>
            </div>
        </div>
    </article>
}

/* 
<Link href={`/propiedad/${property.code}`}className="relative flex flex-col justify-end h-72.5 w-full sm:w-92.5  shadow-lg/40  rounded-xl overflow-hidden ">
        <Image src={property.image} alt="propiedad" fill className="object-cover" sizes="370px" />
        <FavoriteButton p={property} />
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
    </Link> */