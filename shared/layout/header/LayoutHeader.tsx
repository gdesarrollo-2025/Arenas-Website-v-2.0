import Link from "next/link";
import { menu } from "../../constants/menu.constants";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { quickItem } from "@/shared/type/menu.type";

import Pse from "@/public/PSE.svg";
import Favorites from "@/public/Favorites.svg"
import SearchCommand from "@/shared/components/searchCommand";

export default function LayoutHeader() {

    const quick: quickItem[] = [
        {
            content: <SearchCommand/>
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
                <Pse className="h-auto stroke-text" />
            </a>
        }
    ]

    return <header className="fixed w-full z-20 bg-background px-5 shadow-md">
        <HeaderDesktop menu={menu} quickButtons={quick} />
        <HeaderMobile menu={menu} quickButtons={quick} />
    </header>
}