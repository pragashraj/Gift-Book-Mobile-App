import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Item = ({source, title, onPress, onSelected}) => {
    return (
        <View style = {[styles.container, onSelected && styles.selcted]}>
            <TouchableOpacity style = {styles.content} onPress = {onPress}>
                <Image style = {styles.image} source = {source}/>
                <Text style = {styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
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
        height: 60,
    }
})
