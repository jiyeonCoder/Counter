import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MinusButton from './components/MinusButton';
import PlusButton from './components/PlusButton';

export default function App() {
  const [state, setState] = useState(0);

  const Plus = ()=>{
    setState(state + 1);
  };

  const Minus = ()=>{
    setState(state - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Counter: {state}</Text>
      <View style={styles.buttonContainer}>
        <PlusButton Plus={Plus}/>
        <MinusButton Minus={Minus}/>
      </View>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer:{
    fontSize: 20
  },
  buttonContainer:{
    marginTop: 50,
    flexDirection: 'row'
  }
});
