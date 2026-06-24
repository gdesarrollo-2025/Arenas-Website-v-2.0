'use client';

import PropertyCardResolver from "@/features/properties/components/PropertyCardResolver";
import { usePropertyStore } from "@/features/properties/store/usePropertyStore";

export default function FavoriteList() {
    const { favorites } = usePropertyStore();
    return <div className="grid grid-cols-3 place-items-center">
        {favorites.map((f, idx) => (
            <PropertyCardResolver property={f} view="vivienda" />
        ))}
    </div>
}