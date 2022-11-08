import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

export default function Politicos() {
    return (
        <View style={styles.container}>
            
        <View style={styles.componentePolitico}>
            <Image style={styles.imagemPolitico} source={{uri: 'https://classic.exame.com/wp-content/uploads/2021/05/LULA-RICARDO-STUCKERT.jpg?quality=70&strip=info&w=1024'}}/>     
            <Text style={styles.TextoPolitico} onPress={() => {Linking.openURL('https://lula.com.br/')}}>Lula</Text>
        </View>  

        <View style={styles.componentePolitico}>
            <Image style={styles.imagemPolitico} source={{uri: 'https://classic.exame.com/wp-content/uploads/2021/05/LULA-RICARDO-STUCKERT.jpg?quality=70&strip=info&w=1024'}}/>     
            <Text style={styles.TextoPolitico} onPress={() => {Linking.openURL('https://lula.com.br/')}}>Lula</Text>
        </View>  

        <View style={styles.componentePolitico}>
            <Image style={styles.imagemPolitico} source={{uri: 'https://classic.exame.com/wp-content/uploads/2021/05/LULA-RICARDO-STUCKERT.jpg?quality=70&strip=info&w=1024'}}/>     
            <Text style={styles.TextoPolitico} onPress={() => {Linking.openURL('https://lula.com.br/')}}>Lula</Text>
        </View>  

        <View style={styles.componentePolitico}>
            <Image style={styles.imagemPolitico} source={{uri: 'https://classic.exame.com/wp-content/uploads/2021/05/LULA-RICARDO-STUCKERT.jpg?quality=70&strip=info&w=1024'}}/>     
            <Text style={styles.TextoPolitico} onPress={() => {Linking.openURL('https://lula.com.br/')}}>Lula</Text>
        </View>  

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
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