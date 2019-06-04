import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Player } from '../GameContext';

const Cell = ({ cell, onPress }) => (
  <TouchableHighlight onPress={onPress} underlayColor="white">
    <View style={styles.cell}>
      <Text>{cell !== null && (cell === Player.One ? 'X' : 'O')}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
    width: 100,
    height: 100,
  },
});

export default Cell;
