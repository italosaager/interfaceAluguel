import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import New from '../components/New';
import Detail from './Detail';
import { TouchableOpacity } from 'react-native';
import House from '../components/House'
import Recommended from '../components/Recommended';

export default function Home() {
  const navigation = useNavigation();

 return (
   <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{backgroundColor: '#FFF',}}>

    <View style={styles.header}>
      <View style={styles.inputArea}>
        <Feather name="search" size={24} color="black"/>
        <TextInput placeholder='Digite sua busca aqui!' style={styles.input}/>
      </View>
    </View>

    <View style={styles.newContent}>
      <Text style={styles.title}>Novidades</Text> 
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15,}}>

      <New 
      cover={require('../../assets/casa1.jpg')}
      name="Casa 2 andares"
      description="Linda casa 2 andares com quintal"
      price="R$ 4500,00"
      onPress={() => navigation.navigate('detail')}
      />

      <New 
      cover={require('../../assets/casa2.jpg')}
      name="Linda casa com piscina"
      description="Casa com paredes de vidro e piscina"
      price="R$ 6300,00"
      onPress={() => {}}
      />

      <New 
      cover={require('../../assets/casa3.jpg')}
      name="Mansão do Lago"
      description="Mansão 10 quartos, 15 banheiros e muito mais"
      price="R$ 8200,00"
      onPress={() => {}}
      />

      <New 
      cover={require('../../assets/casa4.jpg')}
      name="Casa topzera"
      description="Excelente casa em condomínio privado"
      price="R$ 7400,00"
      onPress={() => {}}
      />
    </ScrollView>

    <View style={{flexDirection: 'row', marginBottom: 10, alignItems: 'center', }}>
      <Text style={[styles.title, {marginTop: 20}] }>Próximo de você</Text>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, height: 75 }}>
      
      <House
      cover={require('../../assets/casa5.jpg')}
      description="Linda casa temática com luzes quentes que fornecem paz e tranquilidade"
      price="R$ 6200,00"
      />

      <House
      cover={require('../../assets/casa6.jpg')}
      description="Casa linda, recebe reflexo da piscina dando uma coloração azul brilhante à casa"
      price="R$ 5100,00"
      />

      <House
      cover={require('../../assets/casa7.jpg')}
      description="Linda casa próxima a praia com 2 andares"
      price="R$ 6900,00"
      />
    </ScrollView>

    <Text style={[styles.title, {marginTop: 20}]}>Dica do dia</Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, }}>

      <Recommended
      cover={require('../../assets/casa8.jpg')}
      house="Mansão Farcity"
      offer="25% OFF"
      />

      <Recommended
      cover={require('../../assets/casa10.jpg')}
      house="Mansão estilo casa branca"
      offer="10% OFF"
      />

      <Recommended
      cover={require('../../assets/casa9.jpg')}
      house="Maior Mansão do mundo"
      offer="15% OFF"

      />

    </ScrollView>

   </ScrollView>
   
  );

}

const styles = StyleSheet.create({
  header:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    width: '100%',
    marginVertical: 20,
  },
  inputArea:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor: 'azure',
    elevation: 5,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 44 / 2,
  },
  input:{
    paddingHorizontal: 10,
    fontSize: 15,
    width: '95%',
  },
  newContent:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  title:{
    paddingHorizontal: 15,
    fontWeight: 'bold',
    color: '#4f4a4a',
  }
});