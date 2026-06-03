
import LogoArenas from "@/shared/components/LogoArenas";
import NavDropdown from "@/shared/components/NavDropdown";
import { MenuItem, quickItem } from "@/shared/type/menu.type";

export default function HeaderDesktop({ menu, quickButtons }: { menu: MenuItem[], quickButtons: quickItem[] }) {
    return <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] h-[12vh] items-center w-full">
        <nav className="flex gap-2 w-fit">
            {menu.map((m: MenuItem, idx: number) => (
                <NavDropdown key={idx} content={m} />
            ))}
        </nav>
        <LogoArenas className="justify-self-center fill-foreground h-[12vh]" />
        <div className="flex justify-self-end items-center gap-5">
            <div className="flex items-center gap-1">
                {quickButtons.map((q: quickItem, idx: number) => (
                    <div key={idx}>
                        {q.content}
                    </div>
                ))}
            </div>
            <a href="" className="bg-accent hover:bg-primary text-white py-4 px-2 rounded-lg">Trabaja con nosotros </a>
        </div>
    </div>
}