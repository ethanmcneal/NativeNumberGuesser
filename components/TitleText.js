import { StyleSheet, Text } from "react-native"
import React from 'react'

const TitleText = props => {
    return <Text style={{...styles.title, ...props.style}}>{props.children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
    }
})

export default TitleText