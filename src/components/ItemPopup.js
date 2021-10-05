import React from 'react'
import { StyleSheet, Text, View, Modal, Image, Dimensions } from 'react-native'

import CustomButton from './CustomButton'

const ItemPopup = ({open, onClose, selectedItem, handleCancel, handleSelect}) => {

    const {id, title, src} = selectedItem

    const renderModalContent = () => {
        return (
            <View style = {styles.centeredView}>
                <View style = {styles.modalView}>
                    <View style = {styles.headerBlock}>
                        <Text style = {styles.headerTitle}>{title}</Text>
                    </View>
                    <View style = {styles.imageBlock}>
                        <Image style = {styles.image} source = {src}/>
                    </View>
                    <View style = {styles.descriptiveBlock}>
                        <View style = {styles.description}>
                            <Text style = {styles.descriptionText}>
                                The onRequestClose callback is called when the user taps the hardware 
                                back button on Android or the menu button on Apple TV.
                            </Text>
                        </View>
                        <View style = {styles.price}>
                            <Text style = {styles.priceText}>Price</Text>
                            <Text style = {styles.priceValue}>Rs. 450</Text>
                        </View>
                    </View>
                    <View style = {styles.footerBtn}>
                        <CustomButton text = "cancel" btnType = "secondary" handleBtnOnClick = {handleCancel}/>
                        <CustomButton text = "select" btnType = "primary" handleBtnOnClick = {handleSelect}/>
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

export default ItemPopup


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
    descriptiveBlock: {
        marginTop: 10
    },
    description: {
        alignItems: "center",
        justifyContent: "center"
    },
    descriptionText: {
        fontSize: 13,
        color: "grey",
        textAlign: "center"
    },
    price: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    priceText: {
        textTransform: "uppercase",
        fontSize: 16
    },
    priceValue: {
        fontSize: 20
    },
    footerBtn: {
        width: "80%",
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-evenly",
    }
})
