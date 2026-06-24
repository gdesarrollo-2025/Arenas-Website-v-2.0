import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Property } from "../types/Property.type";

type propertyStore ={
    favorites: Property[]
    addFavorite: (property: Property) => void;
    removeFavorite: (property: Property) => void;
}

export const usePropertyStore = create<propertyStore>()(
    persist(
        (set, get) => ({
            favorites: [],
            addFavorite:(property: Property) =>
                set((state) => {
                    const exists= state.favorites.some(
                        (f: Property) => f.code == property.code
                    );

                    if (exists) return state;

                    return {
                        favorites: [ ...state.favorites, property]
                    }
                }) ,

            removeFavorite: (property: Property) =>
                set((state) => ({
                    favorites: state.favorites.filter((f:Property) => f.code !== property.code)
                }))
        })
        ,
        {
            name: "propertyStorage"
        }
    )
)