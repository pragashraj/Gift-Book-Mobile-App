import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

import {primaryColor} from '../values/values'

const Loading = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.root}>
                <ActivityIndicator size = "large" color = {primaryColor}/>
            </View>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
