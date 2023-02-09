import { View, Text, ScrollView, Alert }  from "react-native";
import { Header } from "../components/Hearder";
import { HabitDay, day_size } from "../components/HabitDay"
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning"
import { PlaceHolder } from "../components/PlaceHolder";
import { useNavigation } from "@react-navigation/native";
import { api } from "../lib/axios";
import { useState, useEffect } from "react";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const summaryDates = generateDatesFromYearBeginning()
const minimumSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

export function Home() {

    const { navigate } = useNavigation()
    const [loading, setLoading] = useState(true)
    const [summary, setSummary] = useState(null)

    async function fetchData(){
        try {
            setLoading(true)
            const response = await api.get('/summary')
            console.log(response.data)
            setSummary(response.data)
        } catch(error) {
            Alert.alert('Ops', 'Não foi possível carregar o sumário de hábitos')
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <Header/>
            <View className="flex-row mt-6 mb-2">
                {
                    weekDays.map((weekDay, i) => (
                        <Text key={`${weekDay}-${i}`} className="text-zinc-400 text-xl font-bold text-center mx-1" style={{width: day_size}}>{weekDay}</Text>
                    ))
                }
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:100}}>
                <View className="flex-row flex-wrap">
                    {
                        summaryDates.map(date => (
                            <HabitDay key={date.toISOString()} onPress={() => navigate('detailsHabit', {date: date.toISOString() })}/>
                        ))
                    }
                    {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_ , i) => {
                        return (
                            <PlaceHolder key={i} />
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}