import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GameConsumer } from '../GameContext';
import Cell from './Cell';

const Board = () => (
  <GameConsumer>
    {({ board, handleCellPress }) => (
      <View style={styles.board}>
        {board.map((cell, i) => (
          <Cell key={i} cell={cell} onPress={handleCellPress(i)} />
        ))}
      </View>
    )}
  </GameConsumer>
);

const styles = StyleSheet.create({
  board: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 330,
  },
});

export default Board;
