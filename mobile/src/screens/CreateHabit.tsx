import { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";
import { Feather } from '@expo/vector-icons'
import  colors from 'tailwindcss/colors' 

const availableWeekDays = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']

export function CreateHabit() {
    const [weekDays, setWeekDays] = useState<number[]>([])

    function handleToggleWeekDay(weekDayIndex: number){
        if(weekDays.includes(weekDayIndex)){
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
        } else {
            setWeekDays(prevState => [...prevState, weekDayIndex])
        }
    }

    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 100}}>
                <BackButton  />
                <Text className="mt-6 text-white font-extrabold text-3xl">
                    Criar hábito
                </Text>

                <Text className="mt-6 text-white font-semibold text-base">
                    Qual seu comprometimento?
                </Text>
                <TextInput className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600" placeholder="Exercícios, leitura, etc..." placeholderTextColor={colors.zinc[400]}>

                </TextInput>
                <Text className="text-white font-semibold mt-4 mb-3 text-base">
                    Qual a recorrência?
                </Text>
                {
                    availableWeekDays.map((weekDay, index) => (
                        <CheckBox key={weekDay} title={weekDay} checked={weekDays.includes(index)} onPress={() => handleToggleWeekDay(index)}/>
                    ))
                }

                <TouchableOpacity className="w-full h-14 rounded-md bg-green-600 flex-row mt-6 p-3 items-center justify-center">
                    <Feather name="check" size={20} color={colors.white} className="text-white"/>
                    <Text className="text-white text-base ml-2 font-semibold">Confirmar</Text>
                </TouchableOpacity>
                
            </ScrollView>
        </View>

    )
}