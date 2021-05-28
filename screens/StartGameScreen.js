import React, { useState } from "react";
import { Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('')

    const onChange = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }
  return (
    <TouchableWithoutFeedback onPress={()=> {Keyboard.dismiss()}}>
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input blurOnSubmit keyboardType="number-pad" placeholder="#" onChangeText={onChange} value={enteredValue} />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Reset"
            color={Colors.secondary}
          />
          <Button
            style={styles.button}
            title="Confirm"
            color={Colors.primary}
          />
        </View>
      </Card>
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
