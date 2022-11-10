import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView } from "react-native";
import BoasVindas from '../screens/BoasVindas'
import Login from '../screens/Login'
import Cadastro from '../screens/Cadastro'
import TelaInicial from "../screens/TelaInicial";
import Politicos from "../screens/Politicos";
import Partidos from "../screens/Partidos";
import Favoritos from "../screens/Favoritos";
import MinhaConta from "../screens/MinhaConta";


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

            <Stack.Screen
              name="TelaInicial"
              component={TelaInicial}
              options={{ headerShown: false }}
            /> 

            
            <Stack.Screen
              name="Politicos"
              component={Politicos}
              // options={{ headerShown: false }}
            /> 

            <Stack.Screen
              name="Partidos"
              component={Partidos}
              // options={{ headerShown: false }}
            /> 

            <Stack.Screen
              name="Favoritos"
              component={Favoritos}
              options={{ headerShown: false }}
            /> 
            
            <Stack.Screen
              name="MinhaConta"
              component={MinhaConta}
              options={{ headerShown: false }}
            /> 
            
        </Stack.Navigator>      
    )
}