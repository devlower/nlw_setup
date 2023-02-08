// interface HabitDayProps {
//     completed: number
// }

interface HabitDayProps {
    dateH: Date
    completedH: number
    amountH: number
}

import { DayPopover } from "./DayPopover";

export function HabitDay({completedH, amountH, dateH}: HabitDayProps) {
    return (
        <DayPopover completed={completedH} amount={amountH} date={dateH}/>
    )
}