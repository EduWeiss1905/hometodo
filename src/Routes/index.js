import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'
import Rooms from '../pages/Rooms'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name='Login'
            component= { Login }
            options= { { headerShown: false} }
            />
             <Stack.Screen
            name='Cadastro'
            component= { Cadastro }
            options= { { headerShown: false} }
            />
             <Stack.Screen
            name='Rooms'
            component= { Rooms }
            options= { { headerShown: false} }
            />

        </Stack.Navigator>
    )
}

