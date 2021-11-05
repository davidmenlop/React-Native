import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import {Boton} from '../components/Boton';
import {styles} from '../theme/appTheme';
import {useState} from 'react';
import {useCalculadora} from '../Hooks/useCalculadora';

export const Calculadora = () => {
  const {
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <Boton texto="C" color="#9b9b9b" action={limpiar} />
        <Boton texto="+/-" color="#9b9b9b" action={positivoNegativo} />
        <Boton texto="del" color="#9b9b9b" action={btnDelete} />
        <Boton texto="/" color="#ff9427" action={btnDividir} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <Boton texto="7" action={armarNumero} />
        <Boton texto="8" action={armarNumero} />
        <Boton texto="9" action={armarNumero} />
        <Boton texto="X" color="#ff9427" action={btnMultiplicar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <Boton texto="4" action={armarNumero} />
        <Boton texto="5" action={armarNumero} />
        <Boton texto="6" action={armarNumero} />
        <Boton texto="-" color="#ff9427" action={btnRestar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <Boton texto="1" action={armarNumero} />
        <Boton texto="2" action={armarNumero} />
        <Boton texto="3" action={armarNumero} />
        <Boton texto="+" color="#ff9427" action={btnSumar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <Boton texto="0" ancho action={armarNumero} />
        <Boton texto="." action={armarNumero} />
        <Boton texto="=" color="#ff9427" action={calcular} />
      </View>
    </View>
  );
};
