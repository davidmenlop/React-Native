import React from 'react';
import {SafeAreaView} from 'react-native';
import {BoxObjetctModelScreen} from './src/screens/BoxObjetctModelScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { PosititionScreen } from './src/screens/PosititionScreen';
//import { ContadorScreen } from './src/screens/ContadorScreen';

const App = () => {
  return (
    //<ContadorScreen/>
    /* <SafeAreaView style={{flex: 1}}>
      <BoxObjetctModelScreen />
    </SafeAreaView> */

    //<PosititionScreen />
    <FlexScreen/>
  );
};

export default App;
