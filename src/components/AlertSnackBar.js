import React from 'react'
import { StyleSheet, View } from "react-native"

import Snackbar from 'react-native-snackbar'

const AlertSnackBar = ({message, action}) => {
    return (
        <View style = {styles.container}>
            {
                Snackbar.show({
                    text: message,
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        text: action,
                        textColor: action === 'Error' ? 'red' : 'green',
                    },
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute"
    },
})

export default AlertSnackBar
