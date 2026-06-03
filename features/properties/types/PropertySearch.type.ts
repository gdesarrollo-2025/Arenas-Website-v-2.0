import { Property } from "@/features/properties/types/Property.type"

export type PropertySearch ={
    total: number,
    current_page: number,
    last_page: number,
    properties: Property[],
}
