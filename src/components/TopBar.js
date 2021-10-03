import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import menuIcon from '../assets/images/icons/menu.png'
import user from '../assets/images/icons/user.png'

import {primaryColor} from '../values/values'

const TopBar = ({title, navigation}) => {

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
                <TouchableOpacity>
                    <Image source = {user} style = {styles.icon}/>
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
        backgroundColor: "#DC7633"
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
    }
})
