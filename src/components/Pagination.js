import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import {primaryColor} from '../values/values'

const Pagination = ({total, current, handlePaginationNumberOnPress}) => {

    const renderPaginatorItem = (no) => {
        let selected = current === no
        return (
            <TouchableOpacity onPress = {() => handlePaginationNumberOnPress(no)} key = {no} style = {styles.paginatorItemRoot}>
                <View style = {[styles.paginatorItem, selected && styles.itemSelected ]}>
                    <Text style = {selected ? styles.numberTextSelected : styles.numberText}>
                        {no}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const renderMain = () => {
        const totalPages = []
        for (let i = 0; i < total; i++) {
            totalPages.push(i + 1)
        }
        return (
            <View style = {styles.row}>
                { totalPages.map(item => renderPaginatorItem(item)) }
            </View>
        )
    }

    return (
        <View style = {styles.container}>
            <View>
                { renderMain() }
            </View>
        </View>
    )
}

export default Pagination

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        alignItems: "center",
        justifyContent: "center"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    paginatorItemRoot: {
        marginHorizontal: 5
    },
    paginatorItem: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: primaryColor,
        alignItems: "center",
        justifyContent: "center"
    },
    itemSelected: {
        backgroundColor: primaryColor
    },
    numberText: {
        color: '#000'
    },
    numberTextSelected: {
        color: '#fff'
    }
})
