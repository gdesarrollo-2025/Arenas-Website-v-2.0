import { PropertyDetail } from "@/features/properties/types/PropertyDetail.type";

export default function LocationSection({ lat, lon }: { lat: string, lon: string }) {
    return <section id="Location" className="border-2 border-blue-500">
        <h3>Ubicación</h3>
        <div>
            {/* Mapa */}
        </div>
    </section>
}