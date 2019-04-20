import React, { Component, createContext } from 'react';

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const Player = { One: 0, Two: 1 };

const GameContext = createContext();

const initialState = {
  board: Array(9).fill(null),
  player: Player.One,
  winner: null,
  isDraw: false,
};

export class GameProvider extends Component {
  state = initialState;

  handleCellPress = index => () => {
    const { board, player, winner } = this.state;
    const newBoard = [...board];

    // Prevent it from updating the cell when it is not null,
    // or when there is already a winner
    if (board[index] !== null || winner !== null) {
      return;
    }

    newBoard[index] = player;

    this.setState(prevState => ({
      board: newBoard,
      player: prevState.player === Player.One ? Player.Two : Player.One,
      winner: this.getWinner(newBoard),
      isDraw: newBoard.every(value => value !== null),
    }));
  };

  getWinner = board => {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      const [a, b, c] = WINNING_LINES[index];
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        return this.state.player;
      }
    }
    return null;
  };

  handleReset = () => this.setState(initialState);

  render() {
    const { board, player, winner, isDraw } = this.state;

    return (
      <GameContext.Provider
        value={{
          board,
          player,
          winner,
          isDraw,
          handleCellPress: this.handleCellPress,
          handleReset: this.handleReset,
        }}
      >
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export const GameConsumer = GameContext.Consumer;

export default GameContext;
