import React from 'react'
import { Text, View } from 'react-native'

import RadioButton from '../../components/RadioButton'
import CustomInput from '../../components/CustomInput'
import Selector from '../../components/Selector'

import {styles} from './styles'

const Delivery = ({
    values, 
    options, 
    handleOnChangeText, 
    handleRadioOnPress, 
    handleOptionOnPress
}) => {

    const renderSelector = (text) => {
        return (
            <View style = {styles.input}>
                <Text style = {styles.inputText}>{text}</Text>
                <Selector 
                    options = {options}
                    selectedValue = {values["receiverDistrict"]} 
                    setSelectedValue = {handleOptionOnPress}
                />
            </View>
        )
    }

    const renderInput = (text, placeholder, name, icon) => {
        return (
            <View style = {styles.input}>
                <Text style = {styles.inputText}>{text}</Text>
                <CustomInput
                    placeholder = {placeholder}
                    secureTextEntry = {false}
                    value = {values[name]}
                    onChangeText = {handleOnChangeText}
                    name = {name}
                    icon = {icon}
                    onIconPress = {handleOptionOnPress}
                />
            </View>
        )
    }

    const renderReceiverBlock = () => {
        return (
            <View style = {styles.formRoot}>
                { renderInput("Full Name", "Name", "receiverName", null) }
                { renderInput("Address", "Address", "receiverAddress", null) }
                { renderSelector("District") }
            </View>
        )
    }

    const renderSenderBlock = () => {
        return (
            <View style = {styles.formRoot}>
                <View style = {styles.radioSelector}>
                    <RadioButton 
                        text = "Send as anonymous" 
                        name = "anonymous" 
                        value = {values["radioValue"]} 
                        onPress = {handleRadioOnPress}
                    />
                </View>
                { 
                    values["radioValue"] !== "anonymous" &&
                    <View style = {styles.inputForm}>
                        { renderInput("Full Name", "Name", "senderName", null) }
                        { renderInput("Address", "Address", "senderAddress", null) }
                    </View>
                }
            </View>
        )
    }

    return (
        <View style = {styles.deliveryRoot}>
            <View style = {styles.deliveryHeaderBlock}>
                <Text style = {styles.headerTitle}>Delivery Details</Text>
            </View>
            <View style = {styles.senderBlock}>
                <Text style = {styles.subHeader}>Sender</Text>
                { renderSenderBlock() }
            </View>
            <View style = {styles.RecieverBlock}>
                <Text style = {styles.subHeader}>Receiver</Text>
                { renderReceiverBlock() }
            </View>
        </View>
    )
}

export default Delivery
