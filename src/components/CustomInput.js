import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'

const CustomInput = ({
    placeholder, 
    secureTextEntry, 
    value, 
    onChangeText, 
    name,
    icon,
    onIconPress
}) => {

    const renderInput = () => (
        <TextInput
            style = {styles.input}
            placeholder = {placeholder}
            autoCapitalize = 'none'
            autoCorrect = {false}
            onChangeText = {val => onChangeText(val, name)}
            secureTextEntry = {secureTextEntry}
            value = {value}
        />
    )

    const renderImage = () => (
        <TouchableOpacity onPress = {onIconPress}>
            <Image style = {styles.tinyLogo} source = {icon}/>
        </TouchableOpacity>
    )

    return (
        <View style = {styles.container}>
            <View style = {styles.inputRoot}>
                { renderInput() }
                { renderImage() }
            </View>
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 65,
    },
    inputRoot: {
        borderColor: "#DC7633",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 12,
        borderWidth: 1.2,
    },
    input: {
        width: "80%",
        height: "100%",
        fontSize: 15
    },
    tinyLogo: {
        width: 25,
        height: 25,
    },
})
