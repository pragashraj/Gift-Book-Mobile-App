import React from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'

const SelectorPopup = ({open, options, onClose, handleOptionOnPress}) => {

    const renderModalContent = () => {
        return (
            <View style = {[styles.centeredView, styles.background]}>
                <View style = {styles.modalView}>
                    { options.map(item => {
                        const {id, value} = item
                        return (
                            <View style = {styles.optionBlock} key = {id}>
                                <TouchableOpacity onPress = {() => handleOptionOnPress(value)}>
                                    <Text style = {styles.option}>{value}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }) }
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

export default SelectorPopup

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
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 6
    },
    optionBlock: {
        width: "100%",
        height: 20,
        marginVertical: 8,
        padding: 2,
    },
    option: {
        textAlign: "left"
    }
})
