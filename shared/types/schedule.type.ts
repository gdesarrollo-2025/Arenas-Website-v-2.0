type timeframe ={
    start: string,
    end: string
}
export type schedule = {
    days: string,
    openingHours: timeframe[],
}