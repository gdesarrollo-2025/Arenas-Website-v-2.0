import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaBath, FaBed, FaRulerCombined } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";

import { Property } from "../types/Property.type";

import formatPrice from "@/shared/utils/formatPrice";
import FavoriteButton from "./FavoriteButton";

// 156.81 -> "157" con separadores colombianos
const areaFormatter = new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 });

type Feature = { icon: IconType; value: number; display: string; label: string };

type Props = { property: Property; location: string; title: string };

export default function PropertyLivingCard({ property, location, title }: Props) {
    const area = Number(property.area_cons || property.area_lot || 0);
    const hasAdmin = Number(property.administration) > 0;

    const features: Feature[] = [
        { icon: FaRulerCombined, value: area, display: `${areaFormatter.format(area)} m²`, label: "de área" },
        { icon: FaBed, value: Number(property.bedrooms), display: String(property.bedrooms), label: "habitaciones" },
        { icon: FaBath, value: Number(property.bathrooms), display: String(property.bathrooms), label: "baños" },
        { icon: FaParking, value: Number(property.parking), display: String(property.parking), label: "parqueaderos" },
    ].filter((f) => f.value > 0);

    return (
        <article className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-background shadow-lg/40 transition-shadow hover:shadow-xl/40 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-offset-2">
            <div className="relative aspect-4/3 w-full bg-neutral-100 ">
                <Image
                    src={property.image}
                    alt={`${title} en ${location}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                {/* Arriba a la izquierda: las fotos del CRM traen el sello de código arriba a la derecha */}
                <div className="absolute w-auto h-auto left-3 bottom-3 z-10 ">
                    <FavoriteButton p={property} />
                </div>
            </div>

            <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
                {/* Orden del mockup: código, ubicación, tipo, precio, administración, características */}
                <p className="text-caption text-neutral-400">Cód. {property.code}</p>
                <p className="mt-1 truncate text-caption text-neutral-500">{location}</p>

                {/* Hasta 2 líneas y siempre reserva el alto de 2: "Apartamento en Arriendo" no se corta */}
                <h3 className="line-clamp-2 min-h-[2lh] text-body font-semibold leading-snug">
                    <Link href={`/propiedad/${property.code}`} className="outline-none after:absolute after:inset-0">
                        {title}
                    </Link>
                </h3>

                {/* Único elemento en negrita fuerte. Usa el campo numérico del precio (price_format no trae "$") */}
                <p className="mt-2 text-heading-sm font-bold tabular-nums">{property.price_format}</p>

                {/* Siempre se renderiza: si no hay administración queda invisible pero conserva su alto */}
                <div className={hasAdmin ? "" : "invisible"} aria-hidden={!hasAdmin}>
                    <p className="text-caption text-neutral-500">Administración</p>
                    <p className="text-body tabular-nums">{hasAdmin ? formatPrice(Number(property.administration)) : "—"}</p>
                </div>

                {/* mt-auto: las características quedan a la misma altura en todas las cards */}
                <ul className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-3 text-caption">
                    {features.map(({ icon: Icon, display, label }) => (
                        <li key={label} className="flex items-center gap-1">
                            <Icon aria-hidden className="shrink-0 text-neutral-400" />
                            <span className="tabular-nums text-primary">{display}</span>
                            <span className="sr-only">{label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
