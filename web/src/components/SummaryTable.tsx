import { useEffect, useState } from "react"
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning"
import { HabitDay } from "./HabitDays"
import { PlaceHolder } from "./PlaceHolder"
import { api } from "../lib/axios"
import dayjs from "dayjs"
import { DayPopover } from "./DayPopover"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const summaryDates = generateDatesFromYearBeginning()
const minimumSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

type Summary = {
    id: string;
    date: string;
    amount: number;
    completed: number;
}[]

export function SummaryTable() {
    const [summary, setSummary] = useState([])

    useEffect(() => {
        api.get('summary').then(response => {
            setSummary(response.data)
        })
    }, [])
    return (
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {weekDays.map((weekDay, i) => {
                    return (
                        <div key={`${weekDay}-${i}`} className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
                            {weekDay}
                        </div>
                    )
                })}
            </div>
            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {summaryDates.map(date => {
                    const dayInSummary = summary.find(day => {
                        return dayjs(date).isSame(day.date, 'day')
                    })

                    return (
                        <HabitDay completedH={dayInSummary?.completed} amountH={dayInSummary?.amount} date={date} key={date.toString()} />
                    )
                })}
                {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_ , i) => {
                    return (
                        <PlaceHolder key={i} />
                    )
                })}
            </div>
        </div>
    )
}