import React from 'react'
import { StyleSheet, Text, View, Modal, Image, Dimensions } from 'react-native'

import CustomButton from './CustomButton'

const MerchantPopup = ({open, onClose, selectedItem, handleCancel}) => {

    const {title, src, description, location, merchantCategory} = selectedItem

    const getImageSource = () => {
        return `data:image/png;base64,${src}`
    }

    const renderDetail = (content, value) => {
        return (
            <View style = {styles.row}>
                <Text style = {styles.detailContent}>{content} : </Text>
                <Text style = {styles.detailValue}>{value}</Text>
            </View>
        )
    }

    const renderModalContent = () => {
        return (
            <View style = {[styles.centeredView, styles.background]}>
                <View style = {styles.modalView}>
                    <View style = {styles.headerBlock}>
                        <Text style = {styles.headerTitle}>{title}</Text>
                    </View>
                    <View style = {styles.imageBlock}>
                        <Image style = {styles.image} source = {{uri: getImageSource()}}/>
                    </View>
                    <View style = {styles.descriptiveBlock}>
                        <View style = {styles.description}>
                            <Text style = {styles.descriptionText}>{description}</Text>
                        </View>
                    </View>
                    <View style = {styles.locationRoot}>
                        { renderDetail("Location", location) }
                        { renderDetail("Category", merchantCategory.title) }
                    </View>
                    <View style = {styles.footerBtn}>
                        <CustomButton text = "cancel" btnType = "secondary" handleBtnOnClick = {handleCancel}/>
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

export default MerchantPopup

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
        height: "100%",
        resizeMode: "stretch",
    },
    locationRoot: {
        marginTop: 10,
        padding: 5,
        width: "100%"
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
        textAlign: "left"
    },
    footerBtn: {
        width: "80%",
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    detailContent: {
        fontSize: 12,
        marginHorizontal: 15
    },
    detailValue: {
        fontSize: 12,
        fontWeight: "bold"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
})
