import React from 'react'
import { View, Text } from 'react-native'

import CategoryItem from '../../components/CategoryItem'
import MerchantItem from '../../components/MerchantItem'
import Search from '../../components/Search'
import Pagination from '../../components/Pagination'

import {styles} from './styles'
import list from '../../assets/images/icons/list.png'

const MerchantSelector = ({
    merchantSearch, 
    selectedCategory,
    selectedMerchant, 
    categories, 
    merchants,
    handleOnChangeText, 
    handleSearchOnPress, 
    handleCategoryOnPress,
    handleMerchantOnPress,
    total,
    current,
    handlePagination,
    onClear,
    searched
}) => {

    const getImageSource = (source) => {
        const uri = { uri: `data:image/jpeg;base64,${source}` }
        return uri
    }

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

    const renderMerchantItem = (item) => {
        const {id, name, src} = item
        return (
            <View style = {styles.merchant} key = {id}>
                <MerchantItem
                    title = {name}
                    source = {src}
                    onPress = {() => handleMerchantOnPress(item)}
                    onSelected = { selectedMerchant && selectedMerchant.name === name }
                />
            </View>
        )
    }

    const renderCatergoryItem = (item) => {
        const {id, title, src} = item
        return (
            <View style = {styles.category} key = {id}>
                <CategoryItem 
                    source = {title === "All" ? src : getImageSource(src)} 
                    onPress = {() => handleCategoryOnPress(item)} 
                    onSelected = { selectedCategory && selectedCategory.title === title }
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
                onClear = {onClear}
                searched = {searched}
            />
            <View style = {styles.categoryBlock}>
                <Text style = {styles.headerTitle}>Categories</Text>
                <View style = {styles.row}>
                    { renderCatergoryItem({id: 0, title: "All", src: list}, 0) }
                    { categories.map(item => renderCatergoryItem(item)) }
                </View>
            </View>
            <View style = {styles.merchantBlock}>
                <Text style = {styles.headerTitle}>Merchants</Text>
                <View style = {styles.row}>
                    { 
                        merchants.length > 0 ? merchants.map(item => renderMerchantItem(item)) 
                        :
                        renderNodataAvailable()
                    }
                </View>
                { total > 0 && renderPagination() }
            </View>
        </View>
    )
}

export default MerchantSelector
