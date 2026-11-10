import Link from "next/link";
import LogoArenas from "@/public/Logo.svg";
import NavDropdown from "@/shared/components/NavDropdown";
import { MenuItem, quickItem } from "@/shared/types/menu.type";
import Image from "next/image";

export default function HeaderDesktop({ menu, quickButtons }: { menu: MenuItem[], quickButtons: quickItem[] }) {
    return <div className="hidden lg:grid lg:grid-cols-[auto_1fr_auto] h-[12vh] items-center container-large ">
        <nav className="flex gap-2 xl:gap-4 w-fit ">
            {menu.map((m: MenuItem, idx: number) => (
                <NavDropdown key={idx} content={m} />
            ))}
        </nav>
        <Link href="/" className=" relative flex  place-self-start xl:place-self-center h-[12vh] aspect-video mx-5 "><Image src="/Logo.svg" alt="Logo Arenas" fill className="self-center object-scale-down "/></Link>
        <div className="flex justify-self-end items-center gap-3 ">
            <div className="flex items-center gap-1">
                {quickButtons.map((q: quickItem, idx: number) => (
                    <div key={idx} className="h-8">
                        {q.content}
                    </div>
                ))}
            </div>
            <a href="https://grupoarenas.buk.co/trabaja-con-nosotros" className="w-fit text-sm  text-white text-center px-2 xl:px-4 py-1 xl:py-2 bg-accent hover:bg-primary">Trabaja con nosotros </a>
        </div>
    </div>
}