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
                <Text style = {styles.footerLink}>Log out</Text>
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
        />
    )

    return (
        <View style = {styles.container}>
            <View style = {styles.headerRoot}>
                <Image style = {styles.headerWallpaper} source = {DrawerHeader}/>
            </View>
            <View style = {styles.DrawerItemsRoot}>
                { DrawerItems.map(item =>renderDrawerItem(item.id, item.label, item.icon)) }
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
        marginTop: -5
    },
    headerWallpaper: {
        width: "100%",
        height: "100%"
    },
    DrawerItemsRoot: {
        width: "100%",
        height: screenHight * 0.72,
        padding: 10
    },
    drawerItemLabel: {
        color: primaryColor, 
        marginLeft: -10, 
        fontSize: 15 
    },
    drawerItemIcon: {
        width: 18,
        height: 18
    },
    footerRoot: {
        position: "absolute",
        height: screenHight * 0.08,
        width: "100%",
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        borderTopWidth: 0.5
    },
})
