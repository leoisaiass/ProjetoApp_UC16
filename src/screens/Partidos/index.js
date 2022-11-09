import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking,ScrollView } from 'react-native';

export default function Partidos() {
    return (
        <View style={styles.container}>

        <ScrollView horizontal={false} style={{height:700}}>

          {/* partidos de esquerda */}
        <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://pt.org.br/')}} >
            <Text style={styles.titulo}>Partidos de Esquerda</Text>
            <Image style={styles.imagemPolitico} source={{uri: 'https://pt.org.br/wp-content/uploads/2022/08/partido-dos-trabalhadores.png'}}/>     
            <Text style={styles.TextoPolitico}>Partido dos Trabalhadores</Text>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://pco.org.br/')}}>
            <Image style={styles.imagemPolitico} source={{uri: 'https://botucatuonline.com/wp-content/uploads/2020/09/pco.png'}}/>     
            <Text style={styles.TextoPolitico}>Partido da Causa Operária</Text>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://www.pstu.org.br/')}}>
            <Image style={styles.imagemPolitico} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_PSTU.png'}}/>     
            <Text style={styles.TextoPolitico}>Partido Socialista dos Trabalhadores Unificado</Text>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://psol50.org.br/partido/')}}>
            <Image style={styles.imagemPolitico} source={{uri: 'https://psol50sp.org.br/wp-content/uploads/2019/12/Logo_PSOL-SP-13.png'}}/>     
            <Text style={styles.TextoPolitico}>Partido Socialismo e Liberdade</Text>
        </TouchableOpacity>  
        {/* fim dos partidos de esquerda */}

          {/* partidos de centro-esquerda */}
        <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://www.psb40.org.br/')}} >
            <Text style={styles.titulo}>Partidos de Centro-Esquerda</Text>
            <Image style={styles.imagemPolitico} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/PSB._12345678987654321.png'}}/>     
            <Text style={styles.TextoPolitico}>Partido Socialista Brasileiro</Text>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://www.pdt.org.br/')}}>
            <Image style={styles.imagemPolitico} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyEv7CxlpjhniADwVT0fXOmKpefhJGOb6gg&usqp=CAU'}}/>     
            <Text style={styles.TextoPolitico}>Partido Democrático Trabalhista</Text>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://pcdob.org.br/')}}>
            <Image style={styles.imagemPolitico} source={{uri: 'https://pcdob.org.br/wp-content/uploads/2020/01/00239-logo-do-pcdob.jpg'}}/>     
            <Text style={styles.TextoPolitico}>Partido Comunista do Brasil</Text>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://www.pmn.org.br/')}}>
            <Image style={styles.imagemPolitico} source={{uri: 'https://pmn.org.br/wp-content/uploads/2019/05/PMN_MOBILIZAR-PRA-MUDAR.png'}}/>     
            <Text style={styles.TextoPolitico}>Partido da Mobilização Nacional</Text>
        </TouchableOpacity>  
        {/* fim dos partidos de centro-esquerda */}

          {/* partidos de Centro-Direita */}
        <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://republicanos10.org.br/')}} >
            <Text style={styles.titulo}>Partidos de Centro-Direita</Text>
            <Image style={styles.imagemPolitico} source={{uri: 'https://pbs.twimg.com/profile_images/1375462616395612171/r0ztwbPb_400x400.png'}}/>     
            <Text style={styles.TextoPolitico}>Republicanos</Text>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://www.psdb.org.br/')}}>
            <Image style={styles.imagemPolitico} source={{uri: 'https://static.poder360.com.br/2022/06/Logo-PSDB.png'}}/>     
            <Text style={styles.TextoPolitico}>Partido da Social Democracia Brasileira</Text>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://www.mdb.org.br/')}}>
            <Image style={styles.imagemPolitico} source={{uri: 'https://static.poder360.com.br/2021/07/logo-MDB-1.jpeg'}}/>     
            <Text style={styles.TextoPolitico}>Movimento Democrático Brasileiro</Text>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('http://www.ptb.org.br/')}}>
            <Image style={styles.imagemPolitico} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/PTB_logo%281981-2019%29.png'}}/>     
            <Text style={styles.TextoPolitico}>Partido Trabalhista Brasileiro</Text>
        </TouchableOpacity>  
        {/* fim dos partidos de centro-direita */}

          {/* partidos de Direita */}
        <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://pt.org.br/')}} >
            <Text style={styles.titulo}>Partidos de Direita</Text>
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
        {/* fim dos partidos de Direita */}

           </ScrollView>
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
    },
    titulo:{
        fontSize:25, 
        }
}
);