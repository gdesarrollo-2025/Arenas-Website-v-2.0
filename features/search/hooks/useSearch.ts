import { SearchPropertyQuery } from "@/features/properties/types/ProperyQuery.type";
import queryToUrl from "../mappers/queryToUrl";
import { useRouter } from "next/navigation";

export default function useSearch(){
    const router = useRouter();

    const search = async ( query: SearchPropertyQuery, section:string ) => {
        
        console.log("search",queryToUrl(query))
        return router.push(`/${section}/${queryToUrl(query)}`)
    } 

    return {search}
}