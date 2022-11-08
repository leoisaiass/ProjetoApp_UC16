import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function BoasVindas() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../../img/itemBrasao.png')}
                    style={{width: '100%'}}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>São Paulo Para Todos</Text>
                <Text style={styles.text}>Acompanhe os políticos eleitos no estado de São Paulo</Text>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => navigation.navigate('Login')}
                    >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'gray'
    },
    containerLogo:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    containerForm:{
        flex:1,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 12
    },
    text:{
        color:"#a1a1a1"
    },
    button:{
        position: "absolute", //botão flutuante
        backgroundColor: "red",
        borderRadius: 50,
        paddingVertical: 8,
        width: "60%",
        alignSelf: "center",
        bottom: "15%", 
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText:{
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    }
});