import React from 'react'
import { StyleSheet, Image, View,TouchableOpacity } from 'react-native'

const CategoryItem = ({source, onPress, onSelected}) => {
    return (
        <View style = {[styles.container, onSelected && styles.selcted]}>
            <TouchableOpacity onPress = {onPress}>
                <Image style = {styles.image} source = {source}/>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    selcted: {
        borderWidth: 1,
        backgroundColor: "#F9EBEA",
    },
    image: {
        width: 30,
        height: 30,
    }
})
