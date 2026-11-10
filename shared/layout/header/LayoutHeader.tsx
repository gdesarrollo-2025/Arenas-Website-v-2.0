import Link from "next/link";
import { menu } from "../../constants/menu.constants";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { quickItem } from "@/shared/types/menu.type";

import Pse from "@/public/PSE.svg";
import Favorites from "@/public/Favorites.svg"
import SearchCommand from "@/features/search/components/searchCommand";

export default function LayoutHeader() {

    const quick: quickItem[] = [
        {
            content: <SearchCommand/>
        },
        {
            content: <Link
                className=" aspect-square w-8 "
                href="/favoritos"
            >
                <Favorites className="w-8 stroke-text " />
            </Link>
        },
        {
            content: <a className=" aspect-square w-8 "
                href="https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=5025">
                <Pse className="w-full h-full bg-[#1F4272] lg:bg-transparent rounded-full" />
            </a>
        }
    ]

    return <header className="fixed w-full z-20 bg-background px-5 shadow-md">
        <HeaderDesktop menu={menu} quickButtons={quick} />
        <HeaderMobile menu={menu} quickButtons={quick} />
    </header>
}