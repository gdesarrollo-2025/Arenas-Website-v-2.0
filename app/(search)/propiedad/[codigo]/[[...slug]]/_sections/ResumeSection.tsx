import { PropertyDetail } from "@/features/properties/types/PropertyDetail.type";

export default function ResumeSection({ areacons, bedrooms, bathrooms, stratum, buildyear }:
    { areacons: number, bedrooms: number, bathrooms: number, stratum: number, buildyear: number }) {
    return <section id="Resume" className="w-full grid grid-cols-5 gap-5">
        <div className="flex flex-col items-start justify-center w-full px-4 aspect-square bg-neutral-50 rounded-2xl ">
            <span className="text-heading-md font-semibold">{areacons} m<sup>2</sup></span>
            <p className="text-body text-neutral-500">Área construida</p>
        </div>
        {(bedrooms != 0) && (
            <div className="flex flex-col items-start justify-center w-full px-4 aspect-square bg-neutral-50 rounded-2xl ">
                <span className="text-heading-md font-semibold">{bedrooms}</span>
                <p className="text-body text-neutral-500">Habitaciones</p>
            </div>
        )}
        {(bathrooms != 0) && (<div className="flex flex-col items-start justify-center w-full px-4 aspect-square bg-neutral-50 rounded-2xl ">
            <span className="text-heading-md font-semibold">{bathrooms}</span>
            <p className="text-body text-neutral-500">Baños</p>
        </div>)}
        <div className="flex flex-col items-start justify-center w-full px-4 aspect-square bg-neutral-50 rounded-2xl ">
            <span className="text-heading-md font-semibold">{stratum}</span>
            <p className="text-body text-neutral-500">Estrato</p>
        </div>
        <div className="flex flex-col items-start justify-center w-full px-4 aspect-square bg-neutral-50 rounded-2xl ">
            <span className="text-heading-md font-semibold">{buildyear}</span>
            <p className="text-body text-neutral-500">Año de construcción</p>
        </div>
    </section>
}

{/* <div>Área construida: {areacons} m<sup>2</sup></div>
        <div>Nro. de cuartos: {bedrooms} </div>
        <div>Nro. de baños: {bathrooms} </div>
        <div>Estrato: {stratum}</div>
        <div>A. de construcción: {buildyear}</div> */}