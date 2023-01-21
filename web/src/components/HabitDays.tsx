// interface HabitDayProps {
//     completed: number
// }

interface HabitDayProps {
    completedH: number
    amountH: number
}

import { DayPopover } from "./DayPopover";

export function HabitDay({completedH, amountH}: HabitDayProps) {
    return (
        <DayPopover completed={completedH} amount={amountH}/>
    )
}