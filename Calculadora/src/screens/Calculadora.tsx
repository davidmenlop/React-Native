import React from 'react';
import {View, Text} from 'react-native';
import {Boton} from '../components/Boton';
import {styles} from '../theme/appTheme';
import {useState} from 'react';

export const Calculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const limpiar = () => {
    setNumero('0');
  };

  const armarNumero = (numeroTexto: string) => {
    setNumero(numero + numeroTexto)
  }

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <Boton texto="C" color="#9b9b9b" action={limpiar} />
        <Boton texto="+/-" color="#9b9b9b" action={limpiar}/>
        <Boton texto="del" color="#9b9b9b" action={limpiar}/>
        <Boton texto="/" color="#ff9427" action={limpiar}/>
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <Boton texto="7" action={armarNumero}/>
        <Boton texto="8" action={armarNumero}/>
        <Boton texto="9" action={armarNumero}/>
        <Boton texto="X" color="#ff9427" action={limpiar}/>
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <Boton texto="4" action={armarNumero}/>
        <Boton texto="5" action={armarNumero}/>
        <Boton texto="6" action={armarNumero}/>
        <Boton texto="-" color="#ff9427" action={limpiar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <Boton texto="1" action={armarNumero}/>
        <Boton texto="2" action={armarNumero}/>
        <Boton texto="3" action={armarNumero}/>
        <Boton texto="+" color="#ff9427" action={limpiar}/>
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <Boton texto="0" ancho action={armarNumero}/>
        <Boton texto="." action={armarNumero}/>
        <Boton texto="=" color="#ff9427" action={limpiar}/>
      </View>
    </View>
  );
};
