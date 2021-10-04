import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const CustomButton = ({text, handleBtnOnClick, btnType}) => {
    return (
        <TouchableOpacity onPress = {handleBtnOnClick}>
            <View style = {[styles.btn, btnType === "prev" ? styles.btnPrev : styles.btnNxt]}>
                <Text style = {[styles.text, btnType === "prev" ? styles.textPrev : styles.textNxt]}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btn:{
        width: 70,
        height: 40,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    btnPrev: {
        borderColor: "#EAECEE",
    },
    btnNxt: {
        borderColor: "#fff",
        backgroundColor: "#F9EBEA",
    },
    text:{
        fontSize: 12,
        textTransform: "uppercase"
    },
    textPrev: {
        color: '#fff',
    },
    textNxt: {
        color: '#000',
    }
})
