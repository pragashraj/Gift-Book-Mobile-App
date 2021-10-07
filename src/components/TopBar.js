import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import menuIcon from '../assets/images/icons/menu.png'
import profile from '../assets/images/icons/pro.png'

import {primaryColor} from '../values/values'

const TopBar = ({title, navigation}) => {

    const profileOnPress = () => {
        navigation.navigate("Profile")
    }

    const menuOnPress = () => {
        navigation.openDrawer()
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.root}>
                <View style = {styles.menuRoot}>
                    <TouchableOpacity onPress = {menuOnPress}>
                        <Image source = {menuIcon} style = {styles.icon}/>
                    </TouchableOpacity>
                    <Text style = {styles.title}>{title}</Text>
                </View>
                <TouchableOpacity onPress = {profileOnPress}>
                    <Image source = {profile} style = {styles.proIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        paddingHorizontal: 10,
        elevation: 1,
        backgroundColor: primaryColor
    },
    root: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menuRoot: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        height: 20,
        width: 20
    },
    title: {
        paddingHorizontal: 10,
        fontSize: 15,
        textTransform: "uppercase",
        color: "#fff"
    },
    proIcon: {
        height: 25,
        width: 25
    }
})
