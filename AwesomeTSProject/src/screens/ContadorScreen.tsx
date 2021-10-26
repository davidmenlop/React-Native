import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {useState} from 'react';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {contador}</Text>

      <TouchableOpacity
        onPress={() => setContador(contador + 1)}
        style={styles.fabLocationBR}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => setContador(contador - 1)}
        style={styles.fabLocationBL}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-</Text>
        </View>
      </TouchableOpacity>
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

  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },

  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },

  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },

  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
