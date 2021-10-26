import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useState} from 'react';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {contador}</Text>

        <Fab title='+' onPress={ () => setContador(contador + 1)} position='br'/>

        <Fab title='-' onPress={ () => setContador(contador - 1)} position='bl'/>

     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    textAlign: 'center',
    fontSize: 25,
  },
});
