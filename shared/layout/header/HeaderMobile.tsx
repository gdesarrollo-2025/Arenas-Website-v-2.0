'use client'
import { useState } from "react";

import { MenuItem } from "./constants/menu.constants";
import { quickItem } from "./constants/icons.constants";

export default function HeaderMobile({ menu, quickButtons }: { menu: MenuItem[], quickButtons: quickItem[] }) {
    const [toggle, setToggle] = useState(false);

    return <div className="lg:hidden">
        {quickButtons.map((q, idx) => (
            <div key={idx}>
                {q.content}
            </div>
        ))
        }
        <button onClick={() => setToggle(!toggle)}>abrir</button>
        {toggle && (
            <div>
                {menu.map((m, idx) => (
                    <div key={idx}>
                        {m.name}
                    </div>
                ))}
            </div>
        )}
    </div>
}