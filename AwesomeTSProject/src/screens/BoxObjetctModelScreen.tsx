import React from 'react';
import {View, Text, StyleSheet, Dimensions, useWindowDimensions} from 'react-native';

//const {width, height} = Dimensions.get('window');

export const BoxObjetctModelScreen = () => {

const {height, width} = useWindowDimensions();


  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.cajaMorada, width: width * 0.5}} />
        <View style={styles.cajaNaranja} />
      </View>
        <Text>
          W: {width}, H:{height}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },

  cajaMorada: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: '50%',
  },

  cajaNaranja: {
    backgroundColor: '#F0A23B',
  },
});
