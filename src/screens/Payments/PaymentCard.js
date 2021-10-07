import React, {useState} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import {styles} from './styles'
import down from '../../assets/images/icons/down.png'
import up from '../../assets/images/icons/up.png'

const PaymentCard = ({paymentItem}) => {
    const [open, setOpen] = useState({id: 0})

    const {id, category, merchant, item, quantity, date, sender, receiver, payment} = paymentItem

    const handleMoreOrLessOnPress = (id) => {
        let idx = open.id === id ? 0 : id
        setOpen({id: idx})
    }

    const renderDetail = (content, value) => {
        return (
            <View style = {styles.row}>
                <Text style = {styles.cardContent}>{content}</Text>
                <Text style = {styles.cardValue}>{value}</Text>
            </View>
        )
    }

    const renderMoreOrLess = () => {
        return (
            <View style = {styles.iconRoot}>
                <View style = {styles.row}>
                    <Text style = {styles.cardContent}/>
                    <TouchableOpacity onPress = {() => handleMoreOrLessOnPress(id)} style = {styles.moreIconRoot}>
                        <Text style = {styles.moreText}>{ open.id !== id ? "More" : "Less"}</Text>
                        <Image style = {styles.moreIcon} source = { open.id !== id ? down : up}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderMoreDetail = () => {
        return (
            <View>
                { renderDetail("Item Quantity", quantity) }
                { renderDetail("Payment Date", date) }
                { renderDetail("Sender", sender) }
                { renderDetail("Receiver", receiver) }
            </View>
        )
    }

    return (
        <View style = {styles.PaymentCard}>
            <View style = {styles.card}>
                { renderDetail("Category", category) }
                { renderDetail("Merchant", merchant) }
                { renderDetail("Item", item) }
                { open.id === id && renderMoreDetail() }
                { renderMoreOrLess() }
                <View style = {styles.cardFooter}>
                    { renderDetail("Payment", `Rs.${payment}`) }
                </View>
            </View>
        </View>
    )
}

export default PaymentCard
