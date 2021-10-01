import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'

import { DrawerItem } from '@react-navigation/drawer'

import {primaryColor} from '../values/values'
import DrawerHeader from '../assets/wallpapers/DrawerHead.jpg'
import home from '../assets/icons/home.png'
import profile from '../assets/icons/profile.png'
import merchants from '../assets/icons/merchants.png'
import newVoucher from '../assets/icons/new.png'
import vouchers from '../assets/icons/vouchers.png'
import payments from '../assets/icons/payments.png'

const screenHight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

const CustomDrawer = ({props}) => {
    const width = screenWidth * 0.3

    const DrawerItems = [
        {id: "1", label: "Home", icon: home},
        {id: "2", label: "Profile", icon: profile},
        {id: "3", label: "Merchants", icon: merchants},
        {id: "4", label: "New Voucher", icon: newVoucher},
        {id: "5", label: "My Vouchers", icon: vouchers},
        {id: "6", label: "My Payments", icon: payments},
    ]

    const renderFooter = () => (
        <View style = {styles.footer}>
            <TouchableOpacity>
                <Text style = {styles.footerText}>Log out</Text>
            </TouchableOpacity>
        </View>
    )

    const renderDrawerItem = (key, label, icon) => (
        <DrawerItem
            label = {label}
            labelStyle = {styles.drawerItemLabel}
            onPress = {() => { props.navigation.navigate(label) }}
            icon = {() => <Image source = {icon} style = {styles.drawerItemIcon}/>}
            key = {key}
            style = {styles.drawerItem}
        />
    )

    return (
        <View style = {styles.container}>
            <View style = {styles.headerRoot}>
                <Image style = {styles.headerWallpaper} source = {DrawerHeader}/>
                <Text style = {styles.headerText}>Chris evans</Text>
            </View>
            <View style = {styles.DrawerItemsRoot}>
                { DrawerItems.slice(0, 2).map(item =>renderDrawerItem(item.id, item.label, item.icon)) }
                <View style = {styles.divider}/>
                { DrawerItems.slice(2, 6).map(item =>renderDrawerItem(item.id, item.label, item.icon)) }
            </View>
            <View style = {styles.footerRoot}>
                { renderFooter() }
            </View>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: screenHight * 0.88,
    },
    headerRoot: {
        width: "100%",
        height: screenHight * 0.25,
        marginTop: -5,
    },
    headerWallpaper: {
        width: "100%",
        height: "100%"
    },
    headerText:{
        position: "absolute",
        color: "silver",
        fontSize: 15,
        right: 0,
        marginRight: 45,
        marginTop: 7
    },
    DrawerItemsRoot: {
        width: "100%",
        height: screenHight * 0.72,
        padding: 10,
    },
    drawerItem: {
        backgroundColor: "#F9EBEA",
        borderRadius: 10,
    },
    drawerItemLabel: {
        color: primaryColor, 
        marginLeft: -10, 
        fontSize: 14,
        fontWeight: "bold"
    },
    drawerItemIcon: {
        width: 18,
        height: 18,
    },
    divider: {
        width: "100%",
        marginTop: 10,
        marginBottom: 10,
        height: 0.3,
        backgroundColor: "grey"
    },
    footerRoot: {
        position: "absolute",
        height: screenHight * 0.08,
        width: "100%",
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#772726",
    },
    footerText: {
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    imageRoot: {
        height: screenHight,
        width: screenWidth,
        position: "absolute"
    },
    wallpaper: {
        width: "100%",
        height: "100%"
    },
})