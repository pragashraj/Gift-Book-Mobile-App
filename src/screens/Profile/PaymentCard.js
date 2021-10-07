import React from 'react'
import { Text, View, Modal} from 'react-native'

import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

import {styles} from './styles'

const PaymentCard = ({open, values, onClose, handleCancel, handleUpdateOnPress, handleOnChangeText}) => {

    const renderInput = (placeholder, name) => {
        return (
            <View style = {styles.inputRoot}>
                <CustomInput
                    placeholder = {placeholder}
                    secureTextEntry = {false}
                    value = {values[name]}
                    onChangeText = {handleOnChangeText}
                    name = {name}
                />
            </View>
        )
    }

    const renderModalContent = () => {
        return (
            <View style = {[styles.centeredView, styles.background]}>
                <View style = {styles.modalView}>
                    <View style = {styles.headerBlock}>
                        <Text style = {styles.headerTitle}>Update your card here</Text>
                    </View>
                    <View style = {styles.editBlock}>
                        { renderInput("Card Type", "cardType") }
                        { renderInput("Card No", "cardNo") }
                    </View>
                    <View style = {styles.info}>
                        <Text style = {styles.infoText}>* We are going to use this card in your payments</Text>
                    </View>
                    <View style = {styles.footerBtn}>
                        <CustomButton text = "cancel" btnType = "secondary" handleBtnOnClick = {handleCancel}/>
                        <CustomButton text = "Update" btnType = "primary" handleBtnOnClick = {handleUpdateOnPress}/>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style = {[styles.popupContainer, styles.centeredView]}>
            <Modal
                animationType = "slide"
                transparent = {true}
                visible = {open}
                onRequestClose = {onClose}
            >
            { renderModalContent() }
            </Modal>
        </View>
    )
}

export default PaymentCard
