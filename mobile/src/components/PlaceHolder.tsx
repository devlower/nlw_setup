import { View } from "react-native";
import { day_size } from "./HabitDay";

export function PlaceHolder() {
    return (
        <View className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40" style={{width: day_size, height: day_size}}></View>
    )
}