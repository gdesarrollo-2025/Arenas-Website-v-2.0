
import { MenuItem } from "./constants/menu.constants";
import { quickItem } from "./constants/icons.constants";

export default function HeaderDesktop({ menu, quickButtons }: { menu: MenuItem[], quickButtons: quickItem[] }) {
    return <div className="hidden lg:block">
        <nav>
            {menu.map((m: MenuItem, idx: number) => (
                <div key={idx}> {m.name}</div>
            ))}
        </nav>
        {quickButtons.map((q: quickItem, idx: number) => (
            <div key={idx}>
                {q.content}
            </div>
        ))}

    </div>
}