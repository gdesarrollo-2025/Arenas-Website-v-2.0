import { amenitie } from "@/features/properties/types/PropertyDetail.type";

export default function DetailsSection({c}: {c: amenitie[]}) {
    return <section className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
            <h2 className="font-semibold text-heading-md">Caracteristicas</h2>
            <span className="text-base">{c.length} en total</span>
        </div>
        <div className="grid grid-cols-3">
            <div className="flex flex-col gap-3">
                <p>Interior</p>
                <ul className="list-inside list-disc">
                    {c.filter(c => c.type == 1).slice(0, 6).map(c => (
                        <li key={c.id}>{c.name}</li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-3">
                <p>Exterior</p>
                <ul className="list-inside list-disc">
                    {c.filter(c => c.type == 2).slice(0, 6).map(c => (
                        <li key={c.id}>{c.name}</li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-3">
                <p>Entorno</p>
                <ul className="list-inside list-disc">
                    {c.filter(c => c.type == 3).slice(0, 6).map(c => (
                        <li key={c.id}>{c.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
}