import { StyleSheet, Text } from "react-native"
import React from 'react'

const BodyText = props => {
    return <Text style={{...styles.body, ...props.style}}>{props.children}</Text>
}

const styles = StyleSheet.create({
    body: {
        fontFamily: 'open-sans',
    }
})

export default BodyText