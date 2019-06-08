import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import GameContext from '../GameContext';
import Cell from './Cell';

const Board = () => {
  const { board, handleCellPress } = useContext(GameContext);

  return (
    <View style={styles.board}>
      {board.map((cell, i) => (
        <Cell key={i} cell={cell} onPress={handleCellPress(i)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 330,
  },
});

export default Board;
