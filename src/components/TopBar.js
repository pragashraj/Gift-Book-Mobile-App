import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import menuIcon from '../assets/icons/menu.png'
import { primaryColor } from '../values/values'

const TopBar = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.root}>
                <TouchableOpacity>
                    <Image source = {menuIcon} style = {styles.menuIcon}/>
                </TouchableOpacity>
                <Text style = {styles.title}>Gift Book</Text>
            </View>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        elevation: 4,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
    },
    root: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuIcon: {
        height: 25,
        width: 25
    },
    title: {
        paddingHorizontal: 10,
        fontSize: 18,
        color: primaryColor
    }
})
