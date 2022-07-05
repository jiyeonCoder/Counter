import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MinusButton({ Minus }) {
  return (
    <TouchableOpacity onPress={Minus} style={styles.minusButtonContainer}>
      <Text> Minus </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  minusButtonContainer:{
    flex: 1,
    backgroundColor: '#407A0B',
    height: 50,
    alignItems: 'center'
  }
});
