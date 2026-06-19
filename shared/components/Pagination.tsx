'use client'
import { useRouter, usePathname, useSearchParams } from "next/navigation";

type paginationProps ={
    current: number,
    total: number;
}

export default function Pagination ({current, total}: paginationProps){

    console.log( current, typeof current )
    console.log(current - 1 ,current, current + 1, total)
    const router = useRouter();
    const searchParams = useSearchParams();
    const path = usePathname();

    const buttons = Array.from({length: total}, (_,i) => i+1);

    const changePage = (page: number) =>{
        const params = new URLSearchParams(searchParams.toString());
        params.set("page",String(page))
        router.replace(`${path}?${params.toString()}`,{})
    }
    return <div className="flex justify-center gap-5 w-full ">            
        {buttons.map((b,idx) => (
            <button disabled={b == current} key={idx} onClick={() => changePage(b)} 
            className={` ${b == current-1 || b == current  || b == current+1  ||  b == 1 || b == total ?"block":" hidden"} ${ current == b ? "bg-primary font-semibold" : "bg-accent"} size-10  text-background `}>{b}</button>
        ))}
    </div>
}