import { FaChevronDown } from "react-icons/fa";
import { MenuItem } from "../type/menu.type";
import Link from "next/link";

export default function Navdropdown({ content }: { content: MenuItem }) {
    return <div className="relative group">
        <button className="flex gap-1 items-center justify-between h-full group-hover:text-accent">
            {content.name} <FaChevronDown className=" text-inherit rotate-180 group-hover:rotate-0 transition-all duration-300 " />
        </button>
        <div className="absolute left-0 mt-2 w-48 bg-white  rounded-sm shadow-lg opacity-0  group-hover:opacity-100  group-hover:visible  invisible transition-all z-20">
            {content.pages.map((p, i) => (
                <Link key={i} href={p.link} className="block px-4 py-2 text-sm text-gray-800 hover:bg-primary hover:text-white transition-colors"><p>{p.name}</p><hr/></Link>
            ))}
        </div>
    </div>
}