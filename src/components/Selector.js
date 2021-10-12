import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native'

import {primaryColor} from '../values/values'
import down from '../assets/images/icons/down.png'

const Selector = ({selectedValue, onPress}) => {
    return (
        <View style = {styles.selectorContainer}>
            <View style = {styles.selectorRoot}>
                <View style = {styles.selector}>
                    <Text>{selectedValue}</Text>
                </View>
                <TouchableOpacity onPress = {onPress}>
                    <Image style = {styles.tinyLogo} source = {down}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Selector

const styles = StyleSheet.create({
    selectorContainer: {
        width: '100%',
        height: 80,
    },
    selectorRoot: {
        borderColor: primaryColor,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 12,
        borderWidth: 1.2,
    },
    selector: {
        width: "80%",
        color: "#000",
        fontSize: 17
    },
    tinyLogo: {
        width: 25,
        height: 25,
    },
})
