import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GamesScreen from './screens/GamesScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handleStartGame}/>

  if(userNumber) {
    content = <GamesScreen userChoice={userNumber}/>
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

