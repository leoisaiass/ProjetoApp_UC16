import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, Alert } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { ipserver } from '../../config/servidor';


export default function Login() {
    const navigation = useNavigation();

    const [image, setImage] = useState(null);

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };

    const [senha, setSenha] = useState("");
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [email, setEmail] = useState("");
    const [idade,setidade] = useState("");
    


    return (

        <View style={styles.container}>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastre-se</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder='Digite seu nome completo'
                    style={styles.input}
                    value={nomeCompleto}
                    onChangeText={(value) => setNomeCompleto(value)}
                />

                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder='Digite um email'
                    style={styles.input}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Digite uma senha'
                    style={styles.input}
                    secureTextEntry
                    value={senha}
                    onChangeText={(value) => setSenha(value)}
                />  

                <Text style={styles.title}>Idade</Text>
                <TextInput
                    placeholder='Digite sua idade'
                    style={styles.input}
                     value={idade}
                    onChangeText={(value) => setidade(value)}
                />  

                <TouchableOpacity  onPress={() =>{
                efetuarCadastro(senha,nomeCompleto,email,idade,"usuario.jpg");
                setSenha("");
                setNomeCompleto("");
                setEmail("");
            }} style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <Button style={styles.botaoGaleria} title="Selecione sua imagem de perfil" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

            </Animatable.View>

        </View>    
    )
}

function efetuarCadastro(senha,nome,email,idade,imgUsuario){
    
    if(
    senha=="" || 
    nome == "" || 
    email == "" ) {
        return Alert.alert("Você deve preencher todos os campos");
    }
    fetch(`${ipserver}/usuarios/cadastro`,{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            senha:senha,
            nomeUsuario:nome,
            email:email.toLowerCase(),
            idade: idade,
            imgUsuario: imgUsuario
        })
    })
    .then((response)=>response.json())
    .then((rs)=>{
        console.log(rs)
        Alert.alert("Cadastro","Cadastro realizado")
    })
    .catch((erro)=>console.error(`Erro ao tentar acessar a api -> ${erro}`))
    
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "gray"
    },
    containerHeader:{
        marginTop: "14%",
        marginBottom: "8%",
        paddingStart: '5%'
    },
    message:{
        fontSize: 28,
        fontWeight:'bold',
        color:'white'
    },
    containerForm:{
        backgroundColor:'#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button:{
        backgroundColor: 'red',
        widht: "100%",
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        marginBottom: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: 'white',
        fontSize: 18,
        fontWeight:'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText:{
        color: '#a1a1a1'
    }
});