import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView } from "react-native";
import BoasVindas from '../pages/BoasVindas'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
              name="BoasVindas"
              component={BoasVindas}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />  

            <Stack.Screen
              name="Cadastro"
              component={Cadastro}
              options={{ headerShown: false }}
            /> 
        </Stack.Navigator>      
    )
}