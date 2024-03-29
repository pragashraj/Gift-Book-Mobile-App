import React from 'react'
import { View, TextInput, StyleSheet, Image } from 'react-native'

import {primaryColor} from '../values/values'

const Input = ({
    placeholder,  
    secureTextEntry, 
    value, 
    onChangeText, 
    name,
    icon
}) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.inputRoot}>
                <TextInput
                    style = {styles.input}
                    placeholder = {placeholder}
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    onChangeText = {val => onChangeText(val, name)}
                    secureTextEntry = {secureTextEntry}
                    value = {value}
                    placeholderTextColor = "#000"
                />
                <Image style = {styles.tinyLogo} source = {icon}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
    },
    inputRoot: {
        borderRadius: 20,
        borderColor: primaryColor,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 12,
        borderWidth: 1.2,
    },
    input: {
        width: "80%",
        color: "#000",
        fontSize: 17
    },
    tinyLogo: {
        width: 25,
        height: 25,
    },
})

export default Input
