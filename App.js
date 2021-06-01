import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GamesScreen from './screens/GamesScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null)
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds)
  }

  let content = <StartGameScreen onStartGame={handleStartGame}/>

  if(userNumber && guessRounds <= 0) {
    content = <GamesScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if(guessRounds > 0) {
    content = <GameOverScreen guessRounds={guessRounds} userNumber={userNumber} onRestart={newGameHandler}/>
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
     {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})

