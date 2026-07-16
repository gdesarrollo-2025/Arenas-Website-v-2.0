import { amenitie, PropertyDetail } from "@/features/properties/types/PropertyDetail.type";

export default function DescriptionSection({ d, c }: { d: string, c: amenitie[] }) {
    return <section id="Description" className="relative flex flex-col gap-3">
        <h3 className="font-semibold">Descripción general</h3>
        <p>{d}</p>
        <p className="text-sm">
            Nota: La estratificación y/o la facturación de servicios públicos puede variar según la información
            reportada por autoridades o empresas prestadoras
        </p>
        <h3 className="font-semibold">Detalles del inmueble</h3>
        <ul className="bg-white rounded-[20px] px-4 py-2 grid grid-cols-[repeat(3,minmax(200px,1fr))]">
            {c.map((c) => (
                <li key={c.id} className="flex items-center gap-1"><span className="size-2 bg-accent rounded-full"></span>{c.name}</li>
            ))}
        </ul>
    </section>
}