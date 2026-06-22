import SearchComponent from "@/features/search/components/SearchComponent";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import Search from "@/public/Search.svg";
export default function SearchCommand() {
    return <Popover>
        <PopoverTrigger render={<button className="rounded-full border-2 aspect-square h-8 p-1"><Search className="stroke-text h-auto" /></button>} />
        <PopoverContent className="w-full">
            <SearchComponent/>
        </PopoverContent>
    </Popover>
}