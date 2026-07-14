import { amenitie, PropertyDetail } from "@/features/properties/types/PropertyDetail.type";

export default function DescriptionSection({ d, c }: { d: string, c: amenitie[] }) {
    return <section id="Description" className="relative">
        <h3>Descripción general</h3>
        <p>{d}</p>
        <span>
            Nota: La estratificación y/o la facturación de servicios públicos puede variar según la información
            reportada por autoridades o empresas prestadoras
        </span>
        <h3>Detalles del inmueble</h3>
        <ul className="list-disc list-inside grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
            {c.map((c) => (
                <li key={c.id} className="">{c.name}</li>
            ))}
        </ul>
    </section>
}