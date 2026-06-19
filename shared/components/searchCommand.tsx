import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import Search from "@/public/Search.svg";
export default function SearchCommand() {
    return <Popover>
        <PopoverTrigger render={<button className="rounded-full border-2 aspect-square h-8 p-1"><Search className="stroke-text h-auto" /></button>} />
        <PopoverContent >
            <div className="flex gap-3">
                <input type="text" name="" id="" />
                <button>buscar inmueble</button>
            </div>
        </PopoverContent>
    </Popover>
}