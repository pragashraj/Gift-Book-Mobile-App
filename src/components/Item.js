import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Item = ({source, title, onPress, onSelected}) => {

    const getImageSource = () => {
        return `data:image/png;base64,${source}`
    }

    return (
        <View style = {[ styles.container, onSelected && styles.selected]}>
            <TouchableOpacity style = {styles.content} onPress = {onPress}>
                <Image style = {styles.image} source = {{uri: getImageSource()}}/>
                <Text style = {styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 180,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        elevation: 5,
        padding: 2,
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 10,
        marginTop: 5,
        color: "grey"
    },
    selected: {
        backgroundColor: "#F9EBEA",
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: "stretch",
        borderRadius: 10
    }
})
