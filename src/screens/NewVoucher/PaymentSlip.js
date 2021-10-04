import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {styles} from './styles'

const PaymentSlip = () => {

    const sender = [
        {id: "1", content: "Name", value: "Chris evans"},
        {id: "2", content: "Address", value: "22/A, Brooklyn"},
    ]

    const receiver = [
        {id: "1", content: "Name", value: "Peter parker"},
        {id: "2", content: "Address", value: "115/ 1, Queens"},
        {id: "3", content: "District", value: "Gampaha"},
    ]

    const payment = [
        {id: "1", content: "Merchant", value: "ISSO"},
        {id: "2", content: "Item", value: "Burger"},
        {id: "3", content: "Price", value: "Rs 450"},
        {id: "4", content: "Delivery Charge", value: "Rs 100"},
        {id: "5", content: "Platform Charge", value: "Rs 50"},
    ]

    const renderDetailContent = (item) => {
        const {id, content, value} = item
        return (
            <View style = {styles.detailBlock} key = {id}>
                <Text>{content}</Text>
                <Text style = {styles.detailValue}>{value}</Text>
            </View>
        )
    }

    const renderPaymentBlock = () => {
        return (
            <View style = {styles.paymentDetailer}>
                <View style = {styles.detailContainer}>
                    { payment.map(item => renderDetailContent(item) ) }
                </View>
                <View style = {styles.detailContainer}>
                    <View style = {styles.detailBlock}>
                        <Text style = {styles.totalText}>Total</Text>
                        <Text style = {styles.totalValue}>Rs 600</Text>
                    </View>
                </View>
            </View>
        )
    }

    const renderReceiverBlock = () => {
        return (
            <View style = {styles.infoRoot}>
                <View style = {styles.detailContainer}>
                    { receiver.map(item => renderDetailContent(item) ) }
                </View>
            </View>
        )
    }

    const renderSenderBlock = () => {
        return (
            <View style = {styles.infoRoot}>
                <View style = {styles.detailContainer}>
                    { sender.map(item => renderDetailContent(item) ) }
                </View>
            </View>
        )
    }

    return (
        <View style = {styles.paymentRoot}>
            <View style = {styles.deliveryHeaderBlock}>
                <Text style = {styles.headerTitle}>Payment Details</Text>
            </View>
            <View style = {styles.senderBlock}>
                <Text style = {styles.subHeader}>Sender</Text>
                { renderSenderBlock() }
            </View>
            <View style = {styles.RecieverBlock}>
                <Text style = {styles.subHeader}>Receiver</Text>
                { renderReceiverBlock() }
            </View>
            <View style = {styles.paymentBlock}>
                <Text style = {styles.subHeader}>Payment</Text>
                { renderPaymentBlock() }
            </View>
        </View>
    )
}

export default PaymentSlip
