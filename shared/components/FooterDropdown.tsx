'use client'
import { useState } from "react";
import { branch } from "../type/location.type";
import { schedule } from "../type/schedule.type";
function isBranchArray(
    items: branch[] | schedule[]
): items is branch[] {
    return items.length > 0 && "address" in items[0];
}
export default function FooterDropdown({ title, items }: { title: string, items: branch[] | schedule[] }) {
    const [state, setState] = useState(false);

    if (isBranchArray(items)) {
        return <div className="">
            <button className="text-accent font-semibold" onClick={() => setState(!state)}>{title}</button>
            <ul className={`list-disc list-inside flex flex-col gap-2 overflow-hidden ${state ? "opacity-100 max-h-90 " : "opacity-0 max-h-0"}  transition-all duration-300`}>{items.map((b, idx) => (
                <li key={idx} className="flex flex-col">
                    <p className="font-semibold">{b.name}</p>
                    <p>{b.address}</p>
                    <ul className="list-disc list-inside">{b.phones.map((p, idx) => (
                        <li key={idx}><small>{p.team} {p.number}</small></li>
                    ))}
                    </ul>
                </li>
            ))}
            </ul>
        </div>
    } else {
        return <div className="">
            <p className="font-semibold text-accent">{title}</p>
            {
                items.map((s, idx) => (
                    <div key={idx}>
                        <p className="text-accent">{s.days}</p>
                        <div>
                            {s.openingHours.map((h, idx) => (
                                <p key={idx}>{h.start} - {h.end}</p>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    }

}