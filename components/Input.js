import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = props => {
    return(
        <TextInput {...props} style={{...styles.input, ...props.style}}/>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 35,
        borderColor: '#222',
        borderWidth: 1,
        marginVertical: 8,
        width: '65%',
        borderRadius: 8,
        textAlign: 'center'
    }
})
export default Input