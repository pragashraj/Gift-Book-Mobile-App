import React from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'

import CustomButton from './CustomButton'

const ConfirmPopup = ({open, onClose, handleCancel, handleSelect}) => {

    const renderModalContent = () => {
       return (
            <View style = {styles.centeredView}>
                <View style = {styles.modalView}>
                    <View style = {styles.messageRoot}>
                        <Text style = {styles.message}>Are you confrim your order ? </Text>
                    </View>
                    <View style = {styles.footerBtn}>
                        <CustomButton text = "cancel" btnType = "secondary" handleBtnOnClick = {handleCancel}/>
                        <CustomButton text = "Yes, Pay" btnType = "primary" handleBtnOnClick = {handleSelect}/>
                    </View>
                </View>
            </View>
       )
    }

    return (
        <View style = {[styles.container, styles.centeredView]}>
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

export default ConfirmPopup

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        padding: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 6
    },
    messageRoot: {
        alignItems: "center",
        justifyContent: "center"
    },
    footerBtn: {
        width: "80%",
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-evenly",
    }
})
