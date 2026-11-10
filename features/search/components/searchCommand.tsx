import SearchComponent from "@/features/search/components/SearchComponent";
import { Popover, PopoverContent, PopoverTrigger } from "../../../shared/ui/popover"
import Search from "@/public/Search.svg";
export default function SearchCommand() {
    return <Popover>
        <PopoverTrigger render={<button className=" aspect-square h-8 "><Search className="stroke-text h-auto" /></button>} />
        <PopoverContent className=" w-full lg:w-[50vw] xl:w-[30vw]">
            <SearchComponent/>
        </PopoverContent>
    </Popover>
}