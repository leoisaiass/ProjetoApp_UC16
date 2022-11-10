import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking,ScrollView } from 'react-native';

export default function Partidos() {
    return (
        <View style={styles.container}>

        <ScrollView horizontal={false} style={{height:700}}>


        {/* partidos de esquerda */}
        <Text style={styles.titulo}>Partidos de Esquerda</Text>
          
            <ScrollView horizontal={true}>
                <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://pt.org.br/')}} >
                    <Image style={styles.imagemPolitico} source={{uri: 'https://play-lh.googleusercontent.com/ZblIMkO9bgKHgogb8oOfjKzYy4rIuEVpaCXP6JzuJuaK0FjfDnooulxuJnj6wU4uTDs'}}/>     
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
            </ScrollView>
        {/* fim dos partidos de esquerda */}

        {/* partidos de centro-esquerda */}
        <Text style={styles.titulo}>Partidos de Centro-Esquerda</Text>

        <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://www.psb40.org.br/')}} >        
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
        </ScrollView >
        {/* fim dos partidos de centro-esquerda */}

        {/* partidos de Centro-Direita */}
        <Text style={styles.titulo}>Partidos de Centro-Direita</Text>

        <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://republicanos10.org.br/')}} >        
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
        </ScrollView>  
        {/* fim dos partidos de centro-direita */}

        {/* partidos de Direita */}
        <Text style={styles.titulo}>Partidos de Direita</Text>

        <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://psd.org.br/')}} >
                <Image style={styles.imagemPolitico} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNWi7mqoo5AhyleFsWnkIOCcA7auFcqRJezWzyyDU86F-skd71TP2U5-2yODem7HV6Gs&usqp=CAU'}}/>     
                <Text style={styles.TextoPolitico}>Partido Social Democrático</Text>
            </TouchableOpacity>  

            <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://psc.org.br/')}}>
                <Image style={styles.imagemPolitico} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMtCsvJ9Td6EKpPYgMpQ8LDdJLSGf5d79wYJ7pU_uZJr9_GazfoVYGFeZSby62e48U-Y&usqp=CAU'}}/>     
                <Text style={styles.TextoPolitico}>Partido Social Cristão</Text>
            </TouchableOpacity>  

            <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://psl.org.br/opsl/')}}>
                <Image style={styles.imagemPolitico} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDr-fmeo549QYJ_JTRWTrbVZMOdnthvpJMDw&usqp=CAU'}}/>     
                <Text style={styles.TextoPolitico}>Partido Social Liberal</Text>
            </TouchableOpacity>  

            <TouchableOpacity style={styles.componentePolitico} onPress={() => {Linking.openURL('https://prtb.org.br/cgi-sys/suspendedpage.cgi')}}>
                <Image style={styles.imagemPolitico} source={{uri: 'https://neamp.pucsp.br/images/logos/partido-renovador-trabalhista-brasileiro-prtb.png'}}/>     
                <Text style={styles.TextoPolitico}>Partido Renovador Trabalhista Brasileiro</Text>
            </TouchableOpacity>  
        </ScrollView>
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