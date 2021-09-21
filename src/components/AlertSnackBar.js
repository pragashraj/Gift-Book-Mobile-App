import React from 'react'
import { StyleSheet, View } from "react-native"

import Snackbar from 'react-native-snackbar'

const AlertSnackBar = ({message}) => {
    return (
        <View style = {styles.container}>
            {
                Snackbar.show({
                    text: message,
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        text: 'Error',
                        textColor: 'red',
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
