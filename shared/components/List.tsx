import Link from "next/link";
import { MenuItem } from "../type/menu.type";

export default function List({ content }: { content: MenuItem[] }) {
    return <div className="w-full lg:w-1/2  grid grid-cols-2 sm:grid-cols-4 text-background">
        {content.map((i, idx) => (
            <div key={idx} className="flex flex-col gap-2">
                <p className="text-lg font-bold text-accent">{i.name}</p>
                <ul>
                    {i.pages.map((p, idx) => (
                        <li key={idx} className="pl-2">
                            <Link href={p.link} className="text-sm  hover:text-accent active:text-accent/80 ">{p.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
}