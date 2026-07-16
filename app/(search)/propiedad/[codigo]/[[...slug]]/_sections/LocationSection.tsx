'use client'
import { PropertyDetail } from "@/features/properties/types/PropertyDetail.type";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/shared/components/Map"), { ssr: false });

export default function LocationSection({ lat, lon }: { lat: number, lon: number }) {
    return <section id="Location" className="rounded-md z-10" >
        <h3 className="font-semibold">Ubicación</h3>
        <Map position={[lat, lon]} />
    </section>
}