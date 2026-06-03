import { domusProperty } from "./domusProperty.dto"

export type domusPropertySearchResponse = {
    total: number,
    per_page: number,
    current_page: number,
    last_page: number,
    data: domusProperty[]
}