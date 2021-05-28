import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card';
import Colors from '../constants/colors'

const generateRandomBetween = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    return rndNum;
}

const GamesScreen = () => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100))
    return(
        <View style={styles.screen}>
            <Card style={styles.confirmCard}>
        <Text>Computer Guessed:</Text>
        <Text style={styles.chosenNumber}>{currentGuess}</Text>
        <View style={styles.buttonContainer}>
            <Button title='lower'/>
            <Button title='higher'/>
        </View>
        </Card>

        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    confirmCard: {
        marginVertical: 100,
        padding: 12,
        alignItems: 'center'
    },
    chosenNumber: {
        color: Colors.secondary,
        fontSize: 30,
        textAlign: 'center'
    }
})

export default GamesScreen;