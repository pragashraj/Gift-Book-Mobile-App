import React from 'react'
import { View, Text } from 'react-native'

import CategoryItem from '../../components/CategoryItem'
import Merchant from '../../components/Item'
import Search from '../../components/Search'

import {styles} from './styles'

const MerchantSelector = ({
    merchantSearch, 
    selectedCategory,
    selectedMerchant, 
    categories, 
    merchants,
    handleOnChangeText, 
    handleSearchOnPress, 
    handleCategoryOnPress,
    handleMerchantOnPress
}) => {

    const renderMerchantItem = (item) => {
        const {id, title, src} = item
        return (
            <View style = {styles.merchant} key = {id}>
                <Merchant
                    title = {title}
                    source = {src}
                    onPress = {() => handleMerchantOnPress(title)}
                    onSelected = { selectedMerchant === title }
                />
            </View>
        )
    }

    const renderCatergoryItem = (item) => {
        const {id, title, src} = item
        return (
            <View style = {styles.category} key = {id}>
                <CategoryItem 
                    source = {src} 
                    onPress = {() => handleCategoryOnPress(title)} 
                    onSelected = { selectedCategory === title }
                />
                <Text style = {styles.categoryText}>{title}</Text>
            </View>
        )
    }

    return (
        <View style = {styles.block}>
            <Search 
                placeholder = "Merchant name" 
                value = {merchantSearch} 
                onChangeText = {handleOnChangeText}
                name = "merchantSearch"
                onPress = {handleSearchOnPress}
            />
            <View style = {styles.categoryBlock}>
                <Text style = {styles.headerTitle}>Categories</Text>
                <View style = {styles.row}>
                    { categories.map(item => renderCatergoryItem(item)) }
                </View>
            </View>
            <View style = {styles.merchantBlock}>
                <Text style = {styles.headerTitle}>Merchants</Text>
                <View style = {styles.row}>
                    { merchants.map(item => renderMerchantItem(item)) }
                </View>
            </View>
        </View>
    )
}

export default MerchantSelector
