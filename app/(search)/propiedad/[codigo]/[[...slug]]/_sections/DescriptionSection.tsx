import { amenitie, PropertyDetail } from "@/features/properties/types/PropertyDetail.type";

export default function DescriptionSection({ d }: { d: string}) {
    
    return <section id="Description" className="relative flex flex-col gap-3">
        <h2 className="text-heading-md font-semibold">Descripción</h2>
        <p className="whitespace-pre-line ">{d}</p>
    </section>
}