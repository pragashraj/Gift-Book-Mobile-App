import React from 'react'
import { StyleSheet, Text, View, Modal, Dimensions } from 'react-native'

import CustomButton from './CustomButton'
import Voucher from './Voucher'

const VoucherPopup = ({open, onClose, selectedItem, handleCancel, handleShare}) => {

    const {value, merchantName, itemName, status, createdAt, owner} = selectedItem

    const getDate = () => {
        if (createdAt) {
            const spliter = createdAt.split("T")
            return spliter[0] + ", " + spliter[1]
        }
        else 
            return "N/A"
    }

    const renderDetailContent = (content, value) => {
        return (
            <View style = {styles.detailBlock}>
                <Text>{content}</Text>
                <Text>{value}</Text>
            </View>
        )
    }

    const renderModalContent = () => {
        return (
            <View style = {[styles.centeredView, styles.background]}>
                <View style = {styles.modalView}>
                    <View style = {styles.headerBlock}>
                        <Text style = {styles.headerTitle}>Gift voucher for {itemName}</Text>
                    </View>
                    <View style = {styles.voucher}>
                        <Voucher voucherItem = {selectedItem}/>
                    </View>
                    <View style = {styles.descriptiveBlock}>
                        { renderDetailContent("Merchant", merchantName) }
                        { renderDetailContent("Price", value) }
                        { renderDetailContent("Status", status) }
                        { renderDetailContent("Date", getDate()) }
                        { renderDetailContent("Owned By", owner) }
                    </View>
                    <View style = {styles.footerBtn}>
                        <CustomButton text = "cancel" btnType = "secondary" handleBtnOnClick = {handleCancel}/>
                        <CustomButton text = "Share" btnType = "primary" handleBtnOnClick = {handleShare}/>
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

export default VoucherPopup

const screenHight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        position: "absolute",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    background: {
        backgroundColor: "rgba(0, 0, 0, 0.4)"
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
        elevation: 6,
        width: "90%"
    },
    headerBlock: {
        padding: 10,
    },
    headerTitle: {
        color: "#000",
        textTransform: "uppercase",
        letterSpacing: 1.5
    },
    imageBlock: {
        width: screenWidth * 0.7,
        height: screenHight * 0.25
    },
    image: {
        width: "100%",
        height: "100%"
    },
    footerBtn: {
        width: "80%",
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    voucher: {
        marginVertical: 5,
        backgroundColor: "#fff",
    },
    descriptiveBlock: {
        marginTop: 10,
        marginBottom: 10,
        width: "100%"
    },
    detailBlock: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    detailValue: {
        fontSize: 13,
    },
})
