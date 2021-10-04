import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const CustomButton = ({text, handleBtnOnClick, btnType}) => {

    const renderPrimaryBtn = () => {
        return (
            <View style = {[styles.btn, styles.btnNxt]}>
                <Text style = {[styles.text, styles.textNxt]}>
                    {text}
                </Text>
            </View>
        )
    }

    const renderSecondaryBtn = () => {
        return (
            <View style = {[styles.btn, styles.btnPrev]}>
                <Text style = {[styles.text, styles.textPrev]}>
                    {text}
                </Text>
            </View>
        )
    }

    return (
        <TouchableOpacity onPress = {handleBtnOnClick}>
            { btnType === "primary" ? renderPrimaryBtn() : renderSecondaryBtn() }
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
        borderColor: "silver",
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
        color: 'silver',
    },
    textNxt: {
        color: '#000',
    }
})
