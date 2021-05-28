import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from '../components/Card';

const StartGameScreen = props => {
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Reset"/>
                    <Button style={styles.button} title="Confirm" color='green'/>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center'  
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // width: '60%',
        margin: 10,
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center'
    },
    button: {
        paddingHorizontal: 20
    },
    title: {
        fontSize: 22,
        marginVertical: 10,
    }
})

export default StartGameScreen