import Link from "next/link";
import { menu } from "../../constants/menu.constants";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { quickItem } from "@/shared/type/menu.type";
import { Search, Menu, Favorites, Pse } from "@/shared/components/Icons";

export default function LayoutHeader() {
    
    const quick: quickItem[] = [
        {
            content: <button className="rounded-full border-2 aspect-square h-8 p-1"><Search className="stroke-text h-auto" /></button>
        },
        {
            content: <Link
                className="rounded-full border-2 aspect-square h-8 p-1 flex "
                href="/favorites"
            >
                <Favorites className="h-auto stroke-text" />
            </Link>
        },
        {
            content: <a className="rounded-full border-2 aspect-square h-8 p-1 flex "
                href="/favorites">
                <Pse className="h-auto stroke-text"/>
            </a>
        }
    ]

    return <header className="fixed w-full z-20 bg-background px-5 shadow-md">
        <HeaderDesktop menu={menu} quickButtons={quick} />
        <HeaderMobile menu={menu} quickButtons={quick} />
    </header>
}