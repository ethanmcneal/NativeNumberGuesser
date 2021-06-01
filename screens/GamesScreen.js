import React, { useState, useRef, useEffect } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card';
import Colors from '../constants/colors'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum == exclude){
        return generateRandomBetween(min, max, exclude)
    } else {
    return rndNum;
    }
}

const GamesScreen = (props) => {

    const [rounds, setRounds] = useState(0)
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
    const currentLow = useRef(1);
    const currentHigh = useRef(99);

    const {userChoice, onGameOver} = props;

    useEffect(()=> {
        if(currentGuess === userChoice){
            onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if ((direction == 'lower' && currentGuess < props.userChoice) || (direction == 'greater' && currentGuess > props.userChoice)){
            Alert.alert("Don't Lie!", "Please answer honestly...", [
                {text: 'Sorry!', style: 'cancel'}
            ]);
            return;
        }
        if(direction == 'lower'){
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(curRounds => rounds + 1)
    }
    return(
        <View style={styles.screen}>
            <Card style={styles.confirmCard}>
        <Text>Computer Guessed:</Text>
        <Text style={styles.chosenNumber}>{currentGuess}</Text>
        <View style={styles.buttonContainer}>
            <Button title='lower' onPress={nextGuessHandler.bind(this, 'lower')}/>
            <Button title='higher' onPress={nextGuessHandler.bind(this, 'greater')}/>
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