import Pagination from "@/shared/components/Pagination";
import { getPropertiesAll } from "../services/properties.service";
import { SearchPropertyQuery } from "../types/ProperyQuery.type";
import PropertyCardResolver from "./PropertyCardResolver";
import { Suspense } from "react";
import SkeletonCard from "@/shared/components/SkeletonCard";


async function Properties({ query }: { query: SearchPropertyQuery }) {
    const data = await getPropertiesAll(query, 12)

    if (data.total === 0) {
        return <div className="w-full h-full">
            <h2> No logramos encontrar inmuebles que se adapten con lo que buscas</h2>
        </div>
    } else {
        return <div className="relative flex flex-col gap-5 w-full h-full ">
            <h2 className="text-center text-wrap w-full">Estas son <span className="font-semibold text-accent">{data.total}</span> propiedades que mejor coinciden con lo que buscas.</h2>
            <div className={`grid ${query.destination == 2 ? " xl:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-4"} place-items-center gap-y-5 gap-x-10 grow w-full  mb-10`}>
                {data.properties.map((p) => (
                    <PropertyCardResolver key={p.id} property={p} view={query.destination == 2 ? "comercio" : "vivienda"} />
                ))}
            </div>
            <Pagination current={Number(query.page)} total={Number(data.last_page)} />
        </div>
    }
}


function PropertiesSkeleton({ typecard }: { typecard: number }) {

    if (typecard == 2) {
        return <div className="grid xl:grid-cols-2  h-full w-full grow  gap-y-5 gap-x-10 place-items-center ">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    } else {
        return <div className="grid md:grid-cols-2 xl:grid-cols-4 h-full w-full grow place-items-center gap-y-5 gap-x-10">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    }
}
export default function PropertyList({ query }: { query: SearchPropertyQuery }) {

    return <Suspense fallback={<PropertiesSkeleton typecard={query.destination ?? 1} />}>
        <Properties query={query} />
    </Suspense>

}