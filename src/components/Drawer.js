import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Drawer = () => {
    return (
        <View style = {styles.container}>
            <Text>Drawer</Text>
        </View>
    )
}

export default Drawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%"
    }
})
