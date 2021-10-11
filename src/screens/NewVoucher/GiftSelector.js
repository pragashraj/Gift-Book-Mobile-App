import React from 'react'
import { Text, View } from 'react-native'

import Search from '../../components/Search'
import Item from '../../components/Item'
import Pagination from '../../components/Pagination'

import {styles} from './styles'

const GiftSelector = ({
    itemSearch,
    items,
    selectedItem,
    selectedCategory,
    selectedMerchant,
    handleOnChangeText,
    handleSearchOnPress,
    handleItemOnPress,
    total,
    current,
    handlePagination,
    onClear,
    searched
}) => {

    const renderNodataAvailable = () => {
        return (
            <View style = {styles.noDataAvailableRoot}>
                <Text style = {styles.noDataAvailable}>No data available</Text>
            </View>
        )
    }

    const renderPagination = () => {
        return (
            <View style = {styles.paginationRoot}>
                <Pagination total = {total} current = {current} handlePaginationNumberOnPress = {handlePagination}/>
            </View>
        )
    }

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
            <View style = {styles.giftItem} key = {id}>
                <Item
                    title = {title}
                    source = {src}
                    onPress = {() => handleItemOnPress(item)}
                    onSelected = { selectedItem && selectedItem.title === title }
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
                onClear = {onClear}
                searched = {searched}
            />
            <View style = {styles.giftSelectorTopBlock}>
                <Text style = {styles.headerTitle}>Your selection</Text>
                <View style = {styles.detailContainer}>
                    { renderDetailContent("Category", selectedCategory && selectedCategory.title) }
                    { renderDetailContent("Merchant", selectedMerchant && selectedMerchant.name) }
                </View>
            </View>
            <View style = {styles.merchantBlock}>
                <Text style = {styles.headerTitle}>Popular  Items</Text>
                <View style = {styles.row}>
                    { 
                        items.length > 0 ? items.map(item => renderItem(item)) 
                        :
                        renderNodataAvailable()
                    }
                </View>
                { total > 0 && renderPagination() }
            </View>
        </View>
    )
}

export default GiftSelector
