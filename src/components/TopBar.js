import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TopBar = () => {
    return (
        <View style = {styles.container}>
            <Text>Home</Text>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        elevation: 5
    },
})
