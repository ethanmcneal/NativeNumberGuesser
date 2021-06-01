import React from 'react'
import { Button, StyleSheet, Text, View } from "react-native"
import Card from '../components/Card'
import Colors from '../constants/colors'

const GameOverScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>
                Game Over!
            </Text>
            <Card style={styles.endCard}>
            <Text>
                    Number of Rounds: 
                </Text>
            <Text style={styles.numOfRoundsText}>
                {props.guessRounds}
            </Text>
            <Text>
                    Your Number: 
                </Text>
            <Text style={styles.numOfRoundsText}>
                {props.userNumber}
            </Text>
            
            <Button title="New Game" onPress={props.onRestart}/>
            </Card> 
        </View>

    )
}

const styles = StyleSheet.create({
    screen:{
        marginVertical: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    endCard: {
        marginVertical: 30,
        justifyContent: 'center',
        alignItems: 'center'

    },
    numOfRoundsText: {
        color: Colors.secondary,
        borderColor: Colors.secondary,
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        marginVertical: 10,
    }
})

export default GameOverScreen