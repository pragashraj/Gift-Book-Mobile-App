import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Item = ({source, title, onPress, onSelected, itemType}) => {

    const getImageSource = () => {
        return `data:image/png;base64,${source}`
    }

    return (
        <View style = {[ itemType === "item" ? styles.itemContainer: styles.container, onSelected && styles.selcted]}>
            <TouchableOpacity style = {styles.content} onPress = {onPress}>
                <Image style = {itemType === "item" ? styles.itemImage : styles.image} source = {{uri: getImageSource()}}/>
                <Text style = {styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 100,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        elevation: 5,
        padding: 2,
    },
    itemContainer: {
        width: 160,
        height: 130,
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
    selcted: {
        backgroundColor: "#F9EBEA",
    },
    image: {
        width: 100,
        height: 55,
        resizeMode: "stretch",
    },
    itemImage: {
        width: 150,
        height: 100,
        resizeMode: "stretch",
        borderRadius: 10
    }
})
