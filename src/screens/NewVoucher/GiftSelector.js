import React from 'react'
import { Text, View } from 'react-native'

import Search from '../../components/Search'
import Item from '../../components/Item'

import {styles} from './styles'

const GiftSelector = ({
    itemSearch,
    items,
    selectedItem,
    handleOnChangeText,
    handleSearchOnPress,
    handleItemOnPress
}) => {

    const renderDetailContent = (content, value) => {
        return (
            <View style = {styles.detailBlock}>
                <Text style = {styles.detailContent}>{content}</Text>
                <Text style = {styles.detailValue}>{value}</Text>
            </View>
        )
    }

    const renderItem = (item) => {
        const {id, title, src} = item
        return (
            <View style = {styles.merchant} key = {id}>
                <Item
                    title = {title}
                    source = {src}
                    onPress = {() => handleItemOnPress(title)}
                    onSelected = { selectedItem === title }
                />
            </View>
        )
    }

    return (
        <View style = {styles.block}>
            <Search 
                placeholder = "Item" 
                value = {itemSearch} 
                onChangeText = {handleOnChangeText}
                name = "itemSearch"
                onPress = {handleSearchOnPress}
            />
            <View style = {styles.merchantBlock}>
                <Text style = {styles.headerTitle}>Your selection</Text>
                <View style = {styles.detailContainer}>
                    { renderDetailContent("Category", "Food") }
                    { renderDetailContent("Merchant", "ISSO") }
                </View>
            </View>
            <View style = {styles.merchantBlock}>
                <Text style = {styles.headerTitle}>Popular  Items</Text>
                <View style = {styles.row}>
                    { items.map(item => renderItem(item)) }
                </View>
            </View>
        </View>
    )
}

export default GiftSelector
