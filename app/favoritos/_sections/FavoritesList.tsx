'use client';

import PropertyCardResolver from "@/features/properties/components/PropertyCardResolver";
import { usePropertyStore } from "@/features/properties/store/usePropertyStore";

export default function FavoriteList() {
    const { favorites } = usePropertyStore();
    return <div className="container-large grid grid-cols-4 place-items-center gap-y-5 gap-x-10 ">
        {favorites.map((f, idx) => (
            <PropertyCardResolver key={f.code}property={f} view="vivienda" />
        ))}
    </div>
}