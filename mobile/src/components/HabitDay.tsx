import {  TouchableOpacity, Dimensions, TouchableOpacityProps } from "react-native";

const week_days = 7
const screen_horizontal_padding = (32 * 2) / 5

export const day_margin_between = 8
export const day_size = (Dimensions.get('screen').width / week_days) - (screen_horizontal_padding + 5)

interface Props extends TouchableOpacityProps {
    amountOfHabits?: number
    amountCompleted?: number
    date: Date
}

export function HabitDay({amountOfHabits = 0, amountCompleted =0, date, ...rest}: Props) {
    return (
        <TouchableOpacity className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 " style={{width: day_size, height: day_size}} activeOpacity={0.7} {...rest}/>
    )
}