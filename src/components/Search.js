import React from 'react'
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'

import search from '../assets/images/icons/search.png'

const Search = ({placeholder, value, onChangeText, name, onPress}) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.inputRoot}>
                <TextInput
                    style = {styles.input}
                    placeholder = {placeholder}
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    onChangeText = {val => onChangeText(val, name)}
                    secureTextEntry = {false}
                    value = {value}
                    placeholderTextColor = "grey"
                />
                <TouchableOpacity onPress = {onPress}>
                    <Image style = {styles.tinyLogo} source = {search}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 65,
    },
    inputRoot: {
        borderRadius: 20,
        borderColor: "#DC7633",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 12,
        borderWidth: 1
    },
    input: {
        width: "80%",
        height: "100%",
        color: "#000",
        fontSize: 15
    },
    tinyLogo: {
        width: 25,
        height: 25,
    },
})
