import { Sheet, SheetTrigger, SheetContent,  } from "@/shared/ui/sheet";
import { FaGears } from "react-icons/fa6";

type props ={
    filtersPanel: React.ReactNode,
    children: React.ReactNode;
}
export default function SearchSection ({filtersPanel, children}: props){
    return <section className="relative flex max-w-[90vw] w-full mx-auto">
        <aside className="w-fit lg:w-1/3 xl:w-1/4">
            <div className="hidden lg:block w-full px-4 py-6  h-fit shadow-md/70 rounded-[20px]">
                {filtersPanel}
            </div>
            <Sheet>
                <SheetTrigger render={<button className="sticky flex items-center justify-center top-20 lg:hidden bg-accent size-10 aspect-square"><FaGears className="text-white size-8"/></button>}/>
                <SheetContent side={"left"} className="px-4 py-6 overflow-y-scroll">
                    {filtersPanel}
                </SheetContent>
            </Sheet>
        </aside>
        <main className="flex flex-col gap-5 grow px-4 py-2 ">
            {children}
        </main>
    </section>
}