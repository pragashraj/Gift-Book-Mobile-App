import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import {primaryColor} from '../values/values'

const Button = ({text, handleBtnOnClick}) => {
    return (
        <TouchableOpacity onPress = {handleBtnOnClick}>
            <View style = {styles.btn}>
                <Text style = {styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        width: '100%',
        height: 48,
        backgroundColor: "#DC7633",
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 19,
        color: 'white'
    },
})

export default Button
