import { schedule } from "../type/schedule.type";

export const schedules: schedule[] = [
    {
        days: "Lunes a Viernes",
        openingHours: [{
            start: "7:45 am",
            end: "12:00 am"
        },
        {
            start: "1:15 pm",
            end: "5:00 pm"
        }]
    },
    {
        days: "Sabados",
        openingHours: [{
            start: "9:00 am",
            end: "12:00 am"
        }]
    },
]
