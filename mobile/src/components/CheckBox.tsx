import { TouchableOpacity, TouchableOpacityProps, View, Text } from "react-native";
import { Feather } from '@expo/vector-icons' 
import colors from "tailwindcss/colors";

interface Props extends TouchableOpacityProps {
    title: string
    checked?: boolean
}

export function CheckBox({title, checked = false, ...rest }: Props) {
    return (
        <TouchableOpacity className="flex-row mt-2 items-center" {...rest}>
            {
                checked 
                ?
                <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center border-2">
                    <Feather name="check" size={20} color={colors.white}/>
                </View>
                : 
                <View className="h-8 w-8 bg-zinc-900 rounded-lg"/>
            }
            <Text className="text-white text-base ml-2" >{title}</Text>
        </TouchableOpacity>
    )
}