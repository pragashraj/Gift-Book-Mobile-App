import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

import voucherTemplate01 from '../assets/images/others/voucherTemplate.png'

const Voucher = ({voucherItem}) => {
    const {value, merchantName, itemName} = voucherItem
    return (
        <View style = {styles.container}>
            <Image style = {styles.background} source = {voucherTemplate01}/>
            <View style = {styles.priceRoot}>
                <Text style = {styles.value}>{value}</Text>
            </View>
            <View style = {styles.details}>
                <Text style = {styles.merchant}>{merchantName}</Text>
                <Text style = {styles.item}>{itemName}</Text>
            </View>
        </View>
    )
}

export default Voucher

const screenHight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

const containerWidth = screenWidth * 0.9
const containerHeight = screenHight * 0.24

const styles = StyleSheet.create({
    container: {
        width: containerWidth,
        height: containerHeight,
        backgroundColor: "#fff",
    },
    background: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
    },
    priceRoot: {
        position: "absolute",
        bottom: 0,
        left: 0,
        marginLeft: containerWidth * 0.07,
        marginBottom: containerHeight * 0.1,
        width: containerWidth * 0.15,
        height: containerHeight * 0.3,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    value: {
        color: "white",
        fontSize: 18
    },
    details: {
        position: "absolute",
        top: 0,
        left: 0,
        marginLeft: containerWidth * 0.3,
        marginTop: containerHeight * 0.65,
        flexDirection: "row",
        justifyContent: "space-between",
        width: containerWidth * 0.4
    },
    merchant: {
        textTransform: "uppercase",
        letterSpacing: 1.5,
    },
    item: {
        textTransform: "uppercase",
        letterSpacing: 1.5,
    }
})
