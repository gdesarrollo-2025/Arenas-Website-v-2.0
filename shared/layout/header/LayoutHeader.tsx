import Link from "next/link";
import { Menu } from "./constants/menu.constants";
import { quickItem } from "./constants/icons.constants";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function LayoutHeader() {
    const quick: quickItem[] = [
        {
            svg: "",
            content: <button>Buscar</button>
        },
        {
            svg: "",
            content: <Link href="/favorites">favoritos</Link>
        },
        {
            svg: "",
            content: <a>
                pagos pse
            </a>
        }
    ]

    return <header>
        <Link href="/">
        </Link>
        <HeaderDesktop menu={Menu} quickButtons={quick}/>
        <HeaderMobile menu={Menu} quickButtons={quick}/>
    </header>
}