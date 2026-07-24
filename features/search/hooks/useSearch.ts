import { SearchPropertyQuery } from "@/features/properties/types/ProperyQuery.type";
import queryToUrl from "../mappers/queryToUrl";
import { useRouter } from "next/navigation";

export default function useSearch(){
    const router = useRouter();

    const search = async ( query: SearchPropertyQuery ) => {
        console.log(query)
        return router.push(queryToUrl(query))
    } 

    const getParams = async() => {
        
    }
    return {search}
}