'use client';

import { usePropertyStore } from "../store/usePropertyStore"
import { Property } from "../types/Property.type";
import Favorites from "@/public/Favorites.svg"

export default function FavoriteButton({ p }: { p: Property }) {

    const { favorites, addFavorite, removeFavorite } = usePropertyStore();
    const isFavorite = favorites.some((f: Property) => f.code === p.code)

    return <button className="h-8 w-auto aspect-square rounded-full bg-background/50 backdrop-blur-xs p-1" type="button"
        onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            isFavorite ? removeFavorite(p) : addFavorite(p)
        }}>
        <Favorites className={`${isFavorite ? "fill-accent/85" : "fill-transparent"} `} />
    </button>
}