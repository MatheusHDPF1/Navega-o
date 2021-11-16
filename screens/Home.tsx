import  * as React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { estilo } from '../css/Styles';
import { Ionicons,Entypo,Feather } from '@expo/vector-icons'; 

export default function Home({navigation}){
    return(
        <View style={estilo.conteudo}>
            <Text>Tela Home</Text> 

            <View style={estilo.barra}>
                <TouchableOpacity style={estilo.btn} onPress={()=>{
                    navigation.navigate("Cliente");
                }} >
                   <Ionicons name="person" size={24} color="white" />
                   <Text style={estilo.txtbtn}>Cliente</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={estilo.btn} onPress={()=>{
                    navigation.navigate("Contato");
                }} >
                    <Entypo name="mail" size={24} color="white" />
                    <Text style={estilo.txtbtn}>Contato</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilo.btn} onPress={()=>{
                    navigation.navigate("Portifolio");
                }} >
                    <Feather name="list" size={24} color="white" />
                    <Text style={estilo.txtbtn}>Portifolio</Text>
                </TouchableOpacity>
            </View>

           

            
            
           
        </View>
    )
}