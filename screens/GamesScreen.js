import React, { useState } from 'react'
import { Text, View } from 'react-native'

const generateRandomBetween = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    return rndNum;
}

const GamesScreen = () => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100))
    return(
        <View>
            <Text>

            </Text>
        </View>
    )
}

export default GamesScreen;