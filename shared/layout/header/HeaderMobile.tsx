'use client'
import { useState } from "react";
import Link from "next/link"
import MobileNavDropdown from "@/shared/components/MobileNavDropdown";
import { MenuItem, quickItem } from "@/shared/type/menu.type";

import Menu from "@/public/Menu.svg";
import Image from "next/image";

export default function HeaderMobile({ menu, quickButtons }: { menu: MenuItem[], quickButtons: quickItem[] }) {
    const [toggle, setToggle] = useState(false);

    return <div className="relative flex items-center justify-between lg:hidden">
        <Link href="/"> <Image src="/Logo.svg" alt="Logo arenas" width={160} height={80} /></Link>
        <div className="flex items-center gap-1 ">
            {quickButtons.map((q, idx) => (
                <div key={idx}>
                    {q.content}
                </div>
            ))}
            <button className="h-10 p-1 aspect-square rounded-sm bg-accent border-2" onClick={() => setToggle(!toggle)}><Menu className=" text-white" /></button>
        </div>
        <div className={`  absolute top-full w-full bg-primary ${toggle ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-300`}>
            {menu.map((m, idx) => (
                <MobileNavDropdown key={idx} content={m} />
            ))}
        </div>
    </div>
}