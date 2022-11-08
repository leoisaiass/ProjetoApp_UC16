import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

export default function Partidos() {
    return (
        <View style={styles.container}>
            
        <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://pt.org.br/')}} >
            <Image style={styles.imagemPolitico} source={{uri: 'https://pt.org.br/wp-content/uploads/2022/08/partido-dos-trabalhadores.png'}}/>     
            <Text style={styles.TextoPolitico}>Partido dos Trabalhadores</Text>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://www.psdb.org.br/')}}>
            <Image style={styles.imagemPolitico} source={{uri: 'https://static.poder360.com.br/2022/06/Logo-PSDB.png'}}/>     
            <Text style={styles.TextoPolitico}>Partido da Social Democracia Brasileira</Text>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://www.mdb.org.br/')}}>
            <Image style={styles.imagemPolitico} source={{uri: 'https://static.poder360.com.br/2021/07/logo-MDB-1.jpeg'}}/>     
            <Text style={styles.TextoPolitico}>Movimento Democrático Brasileiro</Text>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://psol50.org.br/partido/')}}>
            <Image style={styles.imagemPolitico} source={{uri: 'https://psol50sp.org.br/wp-content/uploads/2019/12/Logo_PSOL-SP-13.png'}}/>     
            <Text style={styles.TextoPolitico}>Partido Socialismo e Liberdade</Text>
        </TouchableOpacity>  

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // flexDirection: "row",
    },
    TextoPolitico: {
        color: "Black"
    },
    componentePolitico: {
        position: "relative",
        alignItems: "center",
        margin: 10
    },
    imagemPolitico: {
        borderRadius: 100,
        width: 125,
        height: 125
    }
}
);