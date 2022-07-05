import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function PlusButton({ Plus }) {
  return (
    <TouchableOpacity onPress={Plus} style={styles.plusButtonContainer}>
      <Text> Plus </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  plusButtonContainer:{
    flex: 1,
    backgroundColor: '#EAE128',
    height: 50,
    alignItems: 'center'
  }
});
