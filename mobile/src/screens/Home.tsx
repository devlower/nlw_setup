import { View, Text, StyleSheet }  from "react-native";
import { Header } from "../components/Hearder";

export function Home() {
    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <Header/>
        </View>
    )
}