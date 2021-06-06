import React from 'react';
import {StyleSheet, Text, Image, SafeAreaView, ScrollView, View, Linking} from 'react-native';
import ButtonComponent from '../../components/Button';

export default function Tradutor({navigation}){

  
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.slide}>
        <View style={styles.titulo}>
        <Text style={styles.title}>Google Tradutor!</Text>
        </View>
        <View style={styles.botao}>
        <ButtonComponent text="Abrir" style={styles.botao} onPress={() => {Linking.openURL('https://translate.google.com.br/?hl=pt-BR'); }}/>
        </View>
      </SafeAreaView>
    </SafeAreaView>
 );
}

const styles = StyleSheet.create({
  container: {
    /* backgroundColor: '#F0FF', */
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    width: 155,
    height: 470,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 100,
    marginBottom: 50
  },
  botao1: {
    width: 155,
    height: 530,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 100
  },
  titulo:{
  },
  slide: {
    flexDirection: 'column',
    justifyContent: 'center',
    /* alignItems: 'flex-end', */
    marginTop: 70,
    width: 360,
    height: 550,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 28,
    color: '#000000',
    marginTop: 32,
    marginBottom: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#A020F0',
    marginTop: 64,
    marginLeft: 16,
    marginRight: 16,
  },
});
