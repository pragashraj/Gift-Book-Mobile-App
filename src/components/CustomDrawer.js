import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'

import { DrawerItem } from '@react-navigation/drawer'

import DrawerHeader from '../assets/images/screens/coverD.jpg'
import home from '../assets/images/icons/home.png'
import profile from '../assets/images/icons/profile.png'
import merchants from '../assets/images/icons/merchants.png'
import newVoucher from '../assets/images/icons/new.png'
import vouchers from '../assets/images/icons/vouchers.png'
import payments from '../assets/images/icons/payments.png'

import {primaryColor} from '../values/values'

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
        <SafeAreaView style = {styles.container}>
            <View style = {styles.headerRoot}>
                <Image style = {styles.headerWallpaper} source = {DrawerHeader}/>
                <Text style = {styles.headerText}>Chris evans</Text>
            </View>
            <ScrollView style = {styles.scrollView}>
                <View style = {styles.DrawerItemsRoot}>
                    <View style = {styles.drawerItemBlock}>
                        { DrawerItems.slice(0, 2).map(item =>renderDrawerItem(item.id, item.label, item.icon)) }
                        <View style = {styles.divider}/>
                        { DrawerItems.slice(2, 6).map(item =>renderDrawerItem(item.id, item.label, item.icon)) }
                    </View>
                </View>
            </ScrollView>
            <View style = {styles.footerRoot}>
                { renderFooter() }
            </View>
        </SafeAreaView>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: screenHight * 0.88,
    },
    scrollView: {
        width: "100%",
        height: "100%"
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
        fontSize: 20,
        bottom: 0,
        marginBottom: 20,
        marginTop: 7,
        marginLeft: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 2
    },
    DrawerItemsRoot: {
        width: "100%",
        height: screenHight * 0.6,
        padding: 10,
        backgroundColor: "#EAECEE"
    },
    drawerItemBlock: {
        width: "100%",
        height: "100%",
        marginTop: 0,
        borderRadius: 30,
        backgroundColor: "#fff",
        padding: 5,
        paddingTop: 10,
    },
    drawerItem: {
        backgroundColor: "#F9EBEA",
        borderRadius: 10,
    },
    drawerItemLabel: {
        color: primaryColor, 
        marginLeft: -10, 
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: 'serif',
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
        height: screenHight * 0.08,
        width: "100%",
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: primaryColor,
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