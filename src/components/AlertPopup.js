import React from 'react'
import { Modal, StyleSheet, Text, View } from "react-native";

const AlertPopup = ({open, message}) => {

    const renderContent = () => {
        return (
            <View style = {styles.centeredView}>
                <View style = {styles.modalView}>
                    <Text style = {styles.modalText}>{message}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style = {styles.container}>
            <Modal animationType = "slide" transparent = {true} visible = {open}>
                { renderContent() }
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
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
        elevation: 5
    },
    modalText: {
        textAlign: "center"
    }
})

export default AlertPopup
