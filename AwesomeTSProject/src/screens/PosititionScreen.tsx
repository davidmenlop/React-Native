import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const PosititionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaRoja}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28C4D9',
        //width: 200,
        //height: 400
    },

    cajaMorada: {
        height: 100,
        width: 100,
        backgroundColor: '#5856d6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0
    },

    cajaRoja: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        borderWidth: 10,
        borderColor: 'black',
        position: 'absolute',
        top: 0,
        right: 0
    }
});