'use client'
import { PropertyDetail } from "@/features/properties/types/PropertyDetail.type";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/shared/components/Map"), { ssr: false });

export default function LocationSection({ lat, lon }: { lat: number, lon: number }) {
    return <section id="Location" className="rounded-md z-10" >
        <h2 className="text-heading-md font-semibold">Ubicación</h2>
        <Map position={[lat, lon]} />
    </section>
}