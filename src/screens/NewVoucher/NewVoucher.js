import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView } from 'react-native'

import TopBar from '../../components/TopBar'
import CustomButton from './CustomButton'
import MerchantSelector from './MerchantSelector'
import GiftSelector from './GiftSelector'

import {styles} from './styles'
import shirt from '../../assets/images/icons/shirt.png'
import food from '../../assets/images/icons/food-tray.png'
import allude from '../../assets/images/merchants/allude.png'
import spring from '../../assets/images/merchants/spring-and-summer.png'
import factory from '../../assets/images/merchants/the-factory-oulet.png'
import burger from '../../assets/images/categories/foods.jpg'

class NewVoucher extends Component {
    state = {
        index: 0,
        merchantSearch: "",
        selectedCategory: "Fashion",
        selectedMerchant: null,
        itemSearch: "",
        selectedItem: null,
        openItemModal: false
    }

    footerText = ["Select a merchant", "Select a gift"]

    categories = [
        {id: "1", title: "Fashion", src: shirt},
        {id: "2", title: "Food", src: food},
        {id: "3", title: "Accessories", src: food},
        {id: "4", title: "Baby", src: food},
        {id: "5", title: "Books", src: food},
        {id: "6", title: "Groceries", src: food},
        {id: "7", title: "Health", src: food},
        {id: "8", title: "Homeware", src: food},
        {id: "9", title: "Hotels", src: food},
        {id: "10", title: "Valentine", src: food},
    ]

    merchants = [
        {id: "1", title: "Allude", src: allude},
        {id: "2", title: "Spring & Summer", src: spring},
        {id: "3", title: "Factory outlet", src: factory},
        {id: "4", title: "Spring & Summer", src: spring},
        {id: "5", title: "Factory outlet", src: factory},
        {id: "6", title: "Allude", src: allude},
    ]

    items = [
        {id: "1", title: "Burger", src: burger},
        {id: "2", title: "Burger", src: burger},
        {id: "3", title: "Burger", src: burger},
        {id: "4", title: "Burger", src: burger},
        {id: "5", title: "Burger", src: burger},
        {id: "6", title: "Burger", src: burger},
    ]

    handleOnChangeText = (value, name) => {
        this.setState({ [name]: value })
    }

    handleMerchantOnSearch = () => {

    }

    handleItemOnSearch = () => {

    }

    handleCategoryOnPress = (title) => {
        this.setState({ selectedCategory: title, selectedMerchant: null })
    }

    handleMerchantOnPress = (title) => {
        this.setState({ selectedMerchant: title })
    }

    handleItemOnPress = (title) => {
        this.setState({ selectedItem: title, openItemModal: true })
    }

    handlePrevOnClick = () => {
        const idx = this.state.index
        if (idx !== 0) {
            this.setState({ index: idx - 1 })
        }
    }

    handleNxtOnClick = () => {
        const idx = this.state.index
        if (idx !== 3) {
            this.setState({ index: idx + 1 })
        }
    }

    renderFooter = () => {
        const idx = this.state.index
        return (
            <View style = {styles.footerRoot}>
                <View style = {styles.footerContent}>
                    <Text style = {styles.footerText}>{this.footerText[idx]}</Text>
                    <View style = {styles.footerBtns}>
                        <CustomButton text = "Previous" handleBtnOnClick = {this.handlePrevOnClick} btnType = "prev"/>
                        <CustomButton text = "Next" handleBtnOnClick = {this.handleNxtOnClick} btnType = "nxt"/>
                    </View>
                </View>
            </View>
        )
    }

    renderGiftSelector = () => {
        const {itemSearch, selectedItem} = this.state
        return (
            <GiftSelector
                itemSearch = {itemSearch}
                items = {this.items}
                selectedItem = {selectedItem}
                handleOnChangeText = {this.handleOnChangeText}
                handleSearchOnPress = {this.handleItemOnSearch}
                handleItemOnPress = {this.handleItemOnPress}
            />
        )
    }

    renderMerchantSelector = () => {
        const {merchantSearch, selectedCategory, selectedMerchant} = this.state
        return (
            <MerchantSelector 
                merchantSearch = {merchantSearch}
                selectedCategory = {selectedCategory}
                selectedMerchant = {selectedMerchant}
                categories = {this.categories}
                merchants = {this.merchants}
                handleOnChangeText = {this.handleOnChangeText}
                handleSearchOnPress = {this.handleMerchantOnSearch}
                handleCategoryOnPress = {this.handleCategoryOnPress}
                handleMerchantOnPress = {this.handleMerchantOnPress}
            />
        ) 
    }

    renderMain = () => {
        return (
            <View style = {styles.mainRoot}>
                { this.renderGiftSelector() }
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <TopBar title = "New Voucher" navigation = {this.props.navigation}/>
                <ScrollView style = {styles.scrollView} indicatorStyle = "white">
                    { this.renderMain() }
                </ScrollView>
                { this.renderFooter() }
            </SafeAreaView>
        )
    }
}


export default NewVoucher