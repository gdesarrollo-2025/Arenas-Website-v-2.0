import { PropertyDetail } from "@/features/properties/types/PropertyDetail.type";

export default function DetailsSection({ areacons, bedrooms, bathrooms, stratum, buildyear }:
    { areacons: number, bedrooms: number, bathrooms: number, stratum: number, buildyear: number }) {
    return <section id="Details" className="grid grid-cols-[repeat(5,minmax(max-content,auto))] gap-5">
        <div>Área construida: {areacons} m<sup>2</sup></div>
        <div>Nro. de cuartos: {bedrooms} </div>
        <div>Nro. de baños: {bathrooms} </div>
        <div>Estrato: {stratum}</div>
        <div>A. de construcción: {buildyear}</div>
    </section>
}

/* Año de construcción
Area construida
Habitaciobnes
Baños
Estrato */