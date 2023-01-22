import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import { Home } from '../screens/Home'
import { CreateHabit } from '../screens/CreateHabit'
import { DetailsHabit } from '../screens/DetailHabit'

export function AppRoutes() {
    return (
    <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home}/>
        <Screen name="createHabit" component={CreateHabit}/>
        <Screen name="detailsHabit" component={DetailsHabit}/>
    </Navigator>
    )

}
