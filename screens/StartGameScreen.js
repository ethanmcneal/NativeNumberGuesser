import React, { useState } from "react";
import { Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [selectedNumber, setSelectedNumber] = useState('')
    const [confirmed, setConfirmed] = useState(false)

    const onChange = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const confirmInput = () => {
        let chosenNumber = parseInt(enteredValue)
        if(chosenNumber == NaN || chosenNumber <= 0 || chosenNumber > 99){
            return;
        }
        setConfirmed(true)
        setEnteredValue('')
        setSelectedNumber(chosenNumber)
    }

    const resetButton = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    let confirmedOutput;

    if(confirmed) { 
        confirmedOutput = <Text>ChosenNumber: {selectedNumber}</Text>
    }
  return (
    <TouchableWithoutFeedback onPress={()=> {Keyboard.dismiss()}}>
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input blurOnSubmit keyboardType="number-pad" onChangeText={onChange} value={enteredValue} />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Reset"
            color={Colors.secondary}
            onPress={resetButton}
          />
          <Button
            style={styles.button}
            title="Confirm"
            color={Colors.primary}
            onPress={confirmInput}
          />
        </View>
      </Card>
      {confirmedOutput}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    // margin: 10,
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
  },
  button: {
    width: 80,
    // paddingHorizontal: 20
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
});

export default StartGameScreen;
