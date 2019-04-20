import React, { Fragment } from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import Board from './components/Board';
import { GameConsumer, GameProvider, Player } from './GameContext';

const App = () => (
  <GameProvider>
    <View style={styles.container}>
      <GameConsumer>
        {({ handleReset, winner, isDraw }) => (
          <Fragment>
            <Text h1>Tic-Tac-Toe</Text>
            <Board />
            {(winner !== null || isDraw) && (
              <View>
                <Text h2>
                  {winner !== null
                    ? `Player ${winner === Player.One ? 'X' : 'O'} won!`
                    : "It's a Draw!"}
                </Text>
              </View>
            )}
            <View>
              <Button title="Reset" onPress={handleReset} />
            </View>
          </Fragment>
        )}
      </GameConsumer>
    </View>
  </GameProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dedede',
    paddingTop: StatusBar.currentHeight,
  },
});

export default App;
