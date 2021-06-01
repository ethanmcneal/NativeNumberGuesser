import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import BodyText from "../components/BodyText";
import Card from "../components/Card";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <Card style={styles.endCard}>
        <BodyText>Number of Rounds:</BodyText>
        <BodyText style={styles.numOfRoundsText}>{props.guessRounds}</BodyText>
        <BodyText>Your Number:</BodyText>
        <BodyText style={styles.numOfRoundsText}>{props.userNumber}</BodyText>

        <Button title="New Game" onPress={props.onRestart} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  endCard: {
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  numOfRoundsText: {
    color: Colors.secondary,
    borderColor: Colors.secondary,
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginVertical: 10,
  },
});

export default GameOverScreen;
