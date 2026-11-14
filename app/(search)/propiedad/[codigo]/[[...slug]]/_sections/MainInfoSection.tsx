'use client'
import { PropertyDetail } from "@/features/properties/types/PropertyDetail.type";
import { useState } from "react";
import Image from "next/image";

import Carrousel from "@/shared/components/Carrousel";
import Visor360 from "@/shared/components/Visor360";
import { Capitalize } from "@/shared/utils/formatText";
import DisplayImages from "@/shared/components/DisplayImages";

export default function MainInfoSection({ p }: { p: PropertyDetail }) {


    let bizProperty = p.biz == "ARRIENDO/VENTA" ? "Arriendo / Venta" : p.biz
    const titleProperty = `${Capitalize(p.type)} en ${bizProperty.toLowerCase()} en ${p.neighborhood}`;
    return <section className="flex flex-col gap-8 w-full ">
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between w-full ">
                <span>Breadcrumb</span>
                <div className="flex gap-4">
                    <button>Compartir</button>
                    <button>Guardar</button>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex gap-4">
                    <span className="text-sm text-background  font-semibold px-2 py-1 rounded-full bg-primary ">{Capitalize(bizProperty)}</span>
                    <span className="text-sm px-2 py-1 rounded-full bg-[] ">Codigo {p.code}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                    <h1 className="text-heading-md font-semibold">{titleProperty}</h1>
                    <p className="text-sm">{p.neighborhood}, {p.city}</p>
                </div>
            </div>
        </div>
        {/* GALERIA */}
        <div className="relative grid grid-cols-2 overflow-hidden w-full h-118 gap-2 rounded-4xl ">
            <div className="relative w-full h-full">
                <Image src={p.images[0]} alt={titleProperty} fill className="object-cover" />
            </div>
            <div className="relative grid grid-cols-2  w-full h-full  gap-2">
                <div className="relative w-full h-full">
                    <Image src={p.images[1]} alt={titleProperty} fill className="object-cover" />
                </div>
                <div className="relative w-full h-full">
                    <Image src={p.images[2]} alt={titleProperty} fill className="object-cover" />
                </div>
                <div className="relative w-full h-full">
                    <Image src={p.images[3]} alt={titleProperty} fill className="object-cover" />
                </div>
                <div className="relative w-full h-full">
                    <Image src={p.images[4]} alt={titleProperty} fill className="object-cover" />
                </div>
            </div>
            {(p.images360.length > 0) && (
                <DisplayImages images={p.images360} className={"absolute bottom-4 left-4 w-fit px-2 py-1 bg-background rounded-2xl"}> Ver imagenes 360°</DisplayImages>
            )}
            <DisplayImages images={p.images} className={"absolute bottom-4 right-4 w-fit px-2 py-1 bg-background rounded-2xl"}> Ver Todas las fotos</DisplayImages>

        </div>
    </section>
}
