import Link from "next/link";
import { MenuItem } from "../types/menu.type";

export default function List({ content }: { content: MenuItem[] }) {
    return <div className="grid grid-cols-2 lg:grid-cols-4 w-full lg:place-content-center">
        {content.map((i, idx) => (
            <div key={idx} className="w-full h-full flex flex-col justify-start items-center text-center gap-2 ">
                <p className="text-base font-bold text-accent">{i.name}</p>
                <ul>
                    {i.pages.map((p, idx) => (
                        <li key={idx} className="pl-2">
                            <Link href={p.link} className="text-body  text-background hover:text-accent active:text-accent/80 ">{p.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
}