import React, {useEffect, useState} from 'react'
import { Text, View, Image } from 'react-native'

import {styles} from './styles'
import paymentSrc from '../../assets/images/icons/payment.png'
import priceSrc from '../../assets/images/icons/price.png'
import invoice from '../../assets/images/others/invoice.png'
import invoiceFooter from '../../assets/images/others/invoiceFooter.png'

const PaymentSlip = ({values, profile}) => {
    const selectedMerchant = values["selectedMerchant"]
    const selectedItem = values["selectedItem"]
    const radioValue = values["radioValue"]
    const senderName = values["senderName"]
    const senderAddress = values["senderAddress"]
    const receiverName = values["receiverName"]
    const receiverAddress = values["receiverAddress"]
    const receiverDistrict = values["receiverDistrict"]

    const [sender, setSender] = useState([])
    const [receiver, setReceiver] = useState([])
    const [payment, setPayment] = useState([])
    const [card, setCard] = useState([])

    const deliveryCharge = 100
    const platformCharge = 50

    useEffect(() => {
        createSender()
        createReciever()
        createPayment()
        createCard()
    }, [])

    const createSender = () => {
        let sender = []
        if (radioValue === "anonymous") {
            sender.push(createContent("Name", "Anonymous"))
        } 
        else {
            sender.push(createContent("Name", senderName))
            sender.push(createContent("Address", senderAddress))
        }
        setSender(sender)
    }

    const createReciever = () => {
        let receiver = []
        receiver.push(createContent("Name", receiverName))
        receiver.push(createContent("Address", receiverAddress))
        receiver.push(createContent("District", receiverDistrict))

        setReceiver(receiver)
    }

    const createPayment = () => {
        let payment = []
        payment.push(createContent("Merchant", selectedMerchant && selectedMerchant.title))
        payment.push(createContent("Item", selectedItem && selectedItem.title))
        payment.push(createContent("Price", `Rs. ${selectedItem && selectedItem.price}`))
        payment.push(createContent("Delivery Charge", `Rs. ${deliveryCharge}`))
        payment.push(createContent("Platform Charge", `Rs. ${platformCharge}`))

        setPayment(payment)
    }

    const createCard = () => {
        let card = []
        card.push(createContent("Type", profile && profile.cardType))
        card.push(createContent("Card number", profile && profile.cardNo))

        setCard(card)
    }

    const createContent = (content, value) => {
        const item = {content: content, value: value}
        return item
    }

    const getTotal = () => {
        const price = selectedItem && selectedItem.price ? selectedItem.price : 0
        return price + deliveryCharge + platformCharge
    }

    const renderDetailContent = (item, id) => {
        const {content, value} = item
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
                    { payment.map((item, idx) => renderDetailContent(item, idx) ) }
                </View>
                <View style = {styles.detailContainer}>
                    <View style = {styles.detailBlock}>
                        <Text style = {styles.totalText}>Total</Text>
                        <View style = {styles.taotalValueRoot}>
                            <Image style = {styles.priceImage} source = {priceSrc}/>
                            <Text style = {styles.totalValue}>Rs {getTotal()}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    const renderCardBlock = () => {
        return (
            <View style = {styles.infoRoot}>
                <View style = {styles.detailContainer}>
                    { card.map((item, idx) => renderDetailContent(item, idx) ) }
                </View>
            </View>
        )
    }

    const renderReceiverBlock = () => {
        return (
            <View style = {styles.infoRoot}>
                <View style = {styles.detailContainer}>
                    { receiver.map((item, idx) => renderDetailContent(item, idx) ) }
                </View>
            </View>
        )
    }

    const renderSenderBlock = () => {
        return (
            <View style = {styles.infoRoot}>
                <View style = {styles.detailContainer}>
                    { sender.map((item, idx) => renderDetailContent(item, idx) ) }
                </View>
            </View>
        )
    }

    return (
        <View style = {styles.paymentRoot}>
            <View style = {styles.paymentHeaderBlock}>
                <Image style = {styles.headerImage} source = {paymentSrc}/>
                <Text style = {styles.headerTitle}>Payment Summary</Text>
            </View>
            <View style = {styles.invoiceHeader}>
                <Image style = {styles.invoiceImg} source = {invoice}/>
            </View>
            <View style = {styles.senderBlock}>
                <Text style = {styles.subHeader}>Sender</Text>
                { renderSenderBlock() }
            </View>
            <View style = {styles.RecieverBlock}>
                <Text style = {styles.subHeader}>Receiver</Text>
                { renderReceiverBlock() }
            </View>
            <View style = {styles.cardBlock}>
                <Text style = {styles.subHeader}>Payment Card</Text>
                { renderCardBlock() }
            </View>
            <View style = {styles.paymentBlock}>
                <Text style = {styles.subHeader}>Payment</Text>
                { renderPaymentBlock() }
            </View>
            <View style = {styles.invoiceFooter}>
                <Image style = {styles.invoiceFooterImg} source = {invoiceFooter}/>
            </View>
        </View>
    )
}

export default PaymentSlip
