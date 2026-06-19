import Pagination from "@/shared/components/Pagination";
import { getPropertiesAll } from "../services/properties.service";
import { SearchPropertyQuery } from "../types/ProperyQuery.type";
import PropertyCardResolver from "./PropertyCardResolver";
import { Suspense } from "react";


async function Properties({ query }: { query: SearchPropertyQuery }) {
    const data = await getPropertiesAll(query, 12)

    if (data.total === 0) {
        return <div className="w-full h-full">
            <h3> No logramos encontrar inmuebles que se adapten con lo que buscas</h3>
        </div>
    } else {
        return <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-center">Estas son <span className="font-semibold text-accent">{data.total}</span> propiedades que mejor coinciden con lo que buscas.</h3>
            <div className={`grid ${query.destination == 2 ? " xl:grid-cols-2":"md:grid-cols-2 xl:grid-cols-3"} place-items-center gap-y-5 grow `}>
                {data.properties.map((p) => (
                    <PropertyCardResolver key={p.id} property={p} view={query.destination == 2 ? "comercio":"vivienda"}/>
                ))}
            </div>
            <Pagination current={Number(query.page)} total={Number(data.last_page)} />
        </div>
    }
}


function PropertiesSkeleton({typecard}: {typecard:number}) {

    if (typecard == 2) {
        return <div className="grid  xl:grid-cols-2 place-items-center gap-y-5">
            <div className="h-72.5 w-92.5 bg-secondary/10 animate-pulse shadow-lg/40 rounded-xl" />
            <div className="h-72.5 w-92.5 bg-secondary/10 animate-pulse shadow-lg/40 rounded-xl" />
            <div className="h-72.5 w-92.5 bg-secondary/10 animate-pulse shadow-lg/40 rounded-xl" />
            <div className="h-72.5 w-92.5 bg-secondary/10 animate-pulse shadow-lg/40 rounded-xl" />
            <div className="h-72.5 w-92.5 bg-secondary/10 animate-pulse shadow-lg/40 rounded-xl" />
            <div className="h-72.5 w-92.5 bg-secondary/10 animate-pulse shadow-lg/40 rounded-xl" />
            <div className="h-72.5 w-92.5 bg-secondary/10 animate-pulse shadow-lg/40 rounded-xl" />
            <div className="h-72.5 w-92.5 bg-secondary/10 animate-pulse shadow-lg/40 rounded-xl" />
            <div className="h-72.5 w-92.5 bg-secondary/10 animate-pulse shadow-lg/40 rounded-xl" />
            <div className="h-72.5 w-92.5 bg-secondary/10 animate-pulse shadow-lg/40 rounded-xl" />
            <div className="h-72.5 w-92.5 bg-secondary/10 animate-pulse shadow-lg/40 rounded-xl" />
            <div className="h-72.5 w-92.5 bg-secondary/10 animate-pulse shadow-lg/40 rounded-xl" />
        </div>
    } else {
        return <div className="grid md:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-5">
            <div className="h-87.5 w-60 bg-secondary/10 shadow-lg/40 rounded-xl"/>
            <div className="h-87.5 w-60 bg-secondary/10 shadow-lg/40 rounded-xl"/>
            <div className="h-87.5 w-60 bg-secondary/10 shadow-lg/40 rounded-xl"/>
            <div className="h-87.5 w-60 bg-secondary/10 shadow-lg/40 rounded-xl"/>
            <div className="h-87.5 w-60 bg-secondary/10 shadow-lg/40 rounded-xl"/>
            <div className="h-87.5 w-60 bg-secondary/10 shadow-lg/40 rounded-xl"/>
            <div className="h-87.5 w-60 bg-secondary/10 shadow-lg/40 rounded-xl"/>
            <div className="h-87.5 w-60 bg-secondary/10 shadow-lg/40 rounded-xl"/>
            <div className="h-87.5 w-60 bg-secondary/10 shadow-lg/40 rounded-xl"/>
            <div className="h-87.5 w-60 bg-secondary/10 shadow-lg/40 rounded-xl"/>
            <div className="h-87.5 w-60 bg-secondary/10 shadow-lg/40 rounded-xl"/>
            <div className="h-87.5 w-60 bg-secondary/10 shadow-lg/40 rounded-xl"/>
        </div>
    }
}
export default function PropertyList({ query }: { query: SearchPropertyQuery }) {

    return <Suspense fallback={<PropertiesSkeleton typecard={query.destination ?? 1 }/>}>
        <Properties query={query} />
    </Suspense>

}