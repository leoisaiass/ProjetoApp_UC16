import { StyleSheet, Text, View, ViewBase, TouchableOpacity } from "react-native";
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'

export default function TelaInicial(){
    const navigation = useNavigation();

    return(

        <View style={styles.footer}>
            <TouchableOpacity style={styles.estiloicone}>
                <AntDesign name="home" size={35} style={styles.iconeemsi}/>
                <Text style={styles.texto}>Home</Text>
            </TouchableOpacity>

            <View>
            <TouchableOpacity style={styles.estiloicone}
            onPress={ () => navigation.navigate('Politicos')}>
                <AntDesign size={35} name="search1" style={styles.iconeemsi}/>
                <Text style={styles.texto}>Políticos</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.estiloicone} onPress={ () => navigation.navigate('Partidos')}>
                <AntDesign size={35} name="book" style={styles.iconeemsi}/>
                <Text style={styles.texto}>Partidos</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.estiloicone} onPress={ () => navigation.navigate('Favoritos')}>
                <AntDesign size={35} name="book" style={styles.iconeemsi}/>
                <Text style={styles.texto}>Favoritos</Text>
            </TouchableOpacity> */}
{/* 
            <TouchableOpacity style={styles.estiloicone} onPress={ () => navigation.navigate('MinhaConta')}>
                <AntDesign size={35} name="book" style={styles.iconeemsi}/>
                <Text style={styles.texto}>Minha Conta</Text>
            </TouchableOpacity> */}

        </View>
    )
}

export const styles = StyleSheet.create({
    footer: {
        // position: "relative",
        // position: 'absolute',
        bottom: 0,
        flexDirection: "row",
        backgroundColor: "#404040",
        justifyContent: "space-between",
        paddingLeft: 50,
        paddingRight: 50,
        padding: 5,
    },
    estiloicone: {
        justifyContent: "center",
        alignItems: "center",
    },
    iconeemsi: {
        color: "white",
        

    },
    texto: {
        textAlign: "center",
        color: "#FFFFFF",
    }

});

