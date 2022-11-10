import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';

export default function Politicos() {
    return (
        <View style={styles.container}>
        
        <ScrollView>
        <Text style={styles.posicaoPolitico}>Deputados Federais</Text>   
        
        <ScrollView horizontal={true} >
                 
         {/* Vereadores */}
            <View style={styles.roloPoliticos}>
                <TouchableOpacity style={styles.botaoPolitico} onPress={() => {Linking.openURL('https://www.saopaulo.sp.leg.br/vereador/marlon-luz/')}}>
                    <Image style={styles.imagemPolitico} source={{uri: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2020/12/marlon-1.jpg'}}/>     
                    <Text style={styles.TextoPolitico}>Marlon Luz</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.botaoPolitico} onPress={() => {Linking.openURL('https://www.saopaulo.sp.leg.br/vereador/aurelio-nomura/')}}>
                    <Image style={styles.imagemPolitico} source={{uri: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2014/10/WhatsApp-Image-2020-12-15-at-15.34.jpg'}}/>     
                    <Text style={styles.TextoPolitico}> Aurélio Nomura</Text>
                </TouchableOpacity>
                        
                <TouchableOpacity style={styles.botaoPolitico} onPress={() => {Linking.openURL('https://www.saopaulo.sp.leg.br/vereador/alessandro-guedes/')}}>
                    <Image style={styles.imagemPolitico} source={{uri: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2017/01/aguedes.jpg'}}/>     
                    <Text style={styles.TextoPolitico}>Alessandro Guedes</Text>
                </TouchableOpacity>
                
                 <TouchableOpacity style={styles.botaoPolitico} onPress={() => {Linking.openURL('https://www.saopaulo.sp.leg.br/vereador/celso-luis-giannazi/')}}>
                    <Image style={styles.imagemPolitico} source={{uri: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2017/05/gianazi.jpg'}}/>     
                    <Text style={styles.TextoPolitico}>Celso Giannazi</Text>
                </TouchableOpacity> 
            </View>
        </ScrollView>

        <Text style={styles.posicaoPolitico}>Deputados Federais</Text>   

        <ScrollView horizontal={true}>
            <View style={styles.roloPoliticos}>
                <TouchableOpacity style={styles.botaoPolitico} onPress={() => {Linking.openURL('https://www.saopaulo.sp.leg.br/vereador/rute-costa/')}}>
                    <Image style={styles.imagemPolitico} source={{uri: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2017/01/WhatsApp-Image-2020-12-11-at-10.36.jpg'}}/>     
                    <Text style={styles.TextoPolitico}>Rute Freire</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.botaoPolitico} onPress={() => {Linking.openURL('https://www.saopaulo.sp.leg.br/vereador/janaina-lima/')}}>
                    <Image style={styles.imagemPolitico} source={{uri: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2017/01/MG_3936-3.jpg'}}/>     
                    <Text style={styles.TextoPolitico}>Janaína Lima</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.botaoPolitico} onPress={() => {Linking.openURL('https://www.saopaulo.sp.leg.br/vereador/luana-alves/')}}>
                    <Image style={styles.imagemPolitico} source={{uri: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2020/12/Foto-Lu-fundo-colorido_Prancheta-1.jpg'}}/>     
                    <Text style={styles.TextoPolitico}>Luana Alves</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.botaoPolitico} onPress={() => {Linking.openURL('https://www.saopaulo.sp.leg.br/vereador/juliana-cardoso/')}}>
                    <Image style={styles.imagemPolitico} source={{uri: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2014/10/Juliana-Cardoso-1.jpg'}}/>     
                    <Text style={styles.TextoPolitico}>Juliana Cardoso</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

        <Text style={styles.posicaoPolitico}>Deputados Federais</Text>   

        <ScrollView horizontal={true}>
            <View style={styles.roloPoliticos}>
                <TouchableOpacity style={styles.botaoPolitico} onPress={() => {Linking.openURL('https://www.saopaulo.sp.leg.br/vereador/rute-costa/')}}>
                    <Image style={styles.imagemPolitico} source={{uri: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2017/01/WhatsApp-Image-2020-12-11-at-10.36.jpg'}}/>     
                    <Text style={styles.TextoPolitico}>Rute Freire</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.botaoPolitico} onPress={() => {Linking.openURL('https://www.saopaulo.sp.leg.br/vereador/janaina-lima/')}}>
                    <Image style={styles.imagemPolitico} source={{uri: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2017/01/MG_3936-3.jpg'}}/>     
                    <Text style={styles.TextoPolitico}>Janaína Lima</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.botaoPolitico} onPress={() => {Linking.openURL('https://www.saopaulo.sp.leg.br/vereador/luana-alves/')}}>
                    <Image style={styles.imagemPolitico} source={{uri: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2020/12/Foto-Lu-fundo-colorido_Prancheta-1.jpg'}}/>     
                    <Text style={styles.TextoPolitico}>Luana Alves</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.botaoPolitico} onPress={() => {Linking.openURL('https://www.saopaulo.sp.leg.br/vereador/juliana-cardoso/')}}>
                    <Image style={styles.imagemPolitico} source={{uri: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2014/10/Juliana-Cardoso-1.jpg'}}/>     
                    <Text style={styles.TextoPolitico}>Juliana Cardoso</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

        <Text style={styles.posicaoPolitico}>Deputados Federais</Text>   

        <ScrollView horizontal={true}>
            <View style={styles.roloPoliticos}>
                <TouchableOpacity style={styles.botaoPolitico} onPress={() => {Linking.openURL('https://www.saopaulo.sp.leg.br/vereador/rute-costa/')}}>
                    <Image style={styles.imagemPolitico} source={{uri: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2017/01/WhatsApp-Image-2020-12-11-at-10.36.jpg'}}/>     
                    <Text style={styles.TextoPolitico}>Rute Freire</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.botaoPolitico} onPress={() => {Linking.openURL('https://www.saopaulo.sp.leg.br/vereador/janaina-lima/')}}>
                    <Image style={styles.imagemPolitico} source={{uri: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2017/01/MG_3936-3.jpg'}}/>     
                    <Text style={styles.TextoPolitico}>Janaína Lima</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.botaoPolitico} onPress={() => {Linking.openURL('https://www.saopaulo.sp.leg.br/vereador/luana-alves/')}}>
                    <Image style={styles.imagemPolitico} source={{uri: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2020/12/Foto-Lu-fundo-colorido_Prancheta-1.jpg'}}/>     
                    <Text style={styles.TextoPolitico}>Luana Alves</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.botaoPolitico} onPress={() => {Linking.openURL('https://www.saopaulo.sp.leg.br/vereador/juliana-cardoso/')}}>
                    <Image style={styles.imagemPolitico} source={{uri: 'https://www.saopaulo.sp.leg.br/wp-content/uploads/2014/10/Juliana-Cardoso-1.jpg'}}/>     
                    <Text style={styles.TextoPolitico}>Juliana Cardoso</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20
    },
    TextoPolitico: {
        color: "black",
        textAlign: "center"
    },
    imagemPolitico: {
        borderRadius: 100,
        width: 125,
        height: 125,
        margin:10,
        paddingTop: 15
    },
    botaoPolitico: {
        margin: 10,
    },
    roloPoliticos: {
        flexDirection: "row",
        padding: 10
    },
    posicaoPolitico: {
        fontSize: 23,
        marginLeft: 15,
        borderBottomWidth: 0.5,
        marginRight: 30,
        paddingBottom: 8,
    }
}
);