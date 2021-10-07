import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView } from 'react-native'

import TopBar from '../../components/TopBar'
import ItemPopup from '../../components/ItemPopup'
import CustomButton from '../../components/CustomButton'
import AlertSnackBar from '../../components/AlertSnackBar'
import ConfirmPopup from '../../components/ConfirmPopup'
import MerchantSelector from './MerchantSelector'
import GiftSelector from './GiftSelector'
import Delivery from './Delivery'
import PaymentSlip from './PaymentSlip'
import Loading from '../../components/Loading'

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
        selectedCategory: null,
        selectedMerchant: null,
        itemSearch: "",
        selectedItem: null,
        openItemModal: false,
        radioValue: "",
        senderName: "",
        senderAddress: "",
        receiverName: "",
        receiverAddress: "",
        receiverDistrict: "Gampaha",
        openAlert: false,
        alertMessage: "",
        openConfirmPopup: false,
        loading: false
    }

    footerText = ["Select a merchant", "Select a gift", "Delivery details", "Payment summary"]

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

    districts = [
        {id: "1", label: "Gampaha", value: "Gampaha"},
        {id: "2", label: "Colombo", value: "Colombo"},
    ]

    componentDidMount() {
        this.setState({ selectedCategory: this.categories[0] })
    }

    fetchMerchantApi = async() => {
        try {

        } catch (e) {

        }
    }

    searchMerchantApi = async(value) => {
        try {
            
        } catch (e) {

        }
    }

    searchItemApi = async(data) => {
        try {

        } catch (e) {

        }
    }

    paymentApi = async(data) => {
        try {

        } catch (e) {

        }
    }
    
    handleMerchantOnSearch = () => {
        const merchantSearch = this.state.merchantSearch
        if (merchantSearch) {
            this.searchMerchantApi(merchantSearch)
        }
        else {
            this.setAlertBar(true, "Please enter a value")
        }
    }

    handleItemOnSearch = () => {
        const {itemSearch, selectedMerchant} = this.state
        if (itemSearch) {
            const data = {
                merchant: selectedMerchant.title,
                item: itemSearch
            }
            this.searchItemApi(data)
        }
        else {
            this.setAlertBar(true, "Please enter a value")
        }
    }

    handleOnChangeText = (value, name) => {
        this.setState({ [name]: value })
    }

    handlePayOnPress = () => {
        this.handleConfirmPopup()
    }

    handleCategoryOnPress = (item) => {
        this.setState({ selectedCategory: item, selectedMerchant: null, openAlert: false })
    }

    handleMerchantOnPress = (item) => {
        this.setState({ selectedMerchant: item, openAlert: false })
    }

    handleItemOnPress = (item) => {
        this.setState({ selectedItem: item, openItemModal: true })
    }

    handleRadioOnPress = (value) => {
        this.setState({ radioValue: this.state.radioValue ? "" : value })
    }

    handleOptionOnPress = (value) => {
        this.setState({ receiverDistrict: value })
    }

    handleItemSelect = () => {
        this.setState({ openItemModal: false })
    }

    handleModalClose = () => {
        this.setState({ selectedItem: null, openItemModal: false })
    }

    handleConfirmPopup = () => {
        this.setState({ openConfirmPopup: !this.state.openConfirmPopup })
    }

    handlePrevOnClick = () => {
        const idx = this.state.index
        if (idx !== 0) {
            this.setState({ index: idx - 1 })
        }
    }

    handleNxtOnClick = () => {
        const {
            index, 
            selectedMerchant, 
            selectedItem, 
            radioValue,
            senderName,
            senderAddress,
            receiverName,
            receiverAddress,
            receiverDistrict 
        } = this.state

        let idx = index

        if (index === 0) {
            if (selectedMerchant) { 
                idx = index + 1 
            }
            else {
                this.setAlertBar(true, "Please select a merchant")
            }
        }
        else if (index === 1) {
            if (selectedItem) {
                idx = index + 1 
            }
            else this.setAlertBar(true, "Please select an item")
        }
        else if (index === 2) {
            let receiverDetail = receiverName && receiverAddress && receiverDistrict
            let senderDetail = senderName && senderAddress
            if (radioValue === "anonymous" && receiverDetail) {
                idx = index + 1
            }
            else if (radioValue !== "anonymous" && senderDetail && receiverDetail) {
                idx = index + 1
            }
            else {
                this.setAlertBar(true, "Fields cannot be empty")
            }
        }
        else {
            this.setState({ openConfirmPopup: true })
        }
        this.setState({ index: idx })
    }

    setAlertBar = (open, message) => {
        this.setState({ openAlert: open, alertMessage: message })
        setTimeout(() => { this.setState({ openAlert: false, alertMessage: "" }) }, 3000)
    }

    renderConfirmModal = (openConfirmPopup) => {
        return (
            <ConfirmPopup 
                open = {openConfirmPopup} 
                onClose = {this.handleConfirmPopup}
                handleCancel = {this.handleConfirmPopup}
                handleSelect = {this.handlePayOnPress}
            />
        )
    }

    renderItemModal = (openItemModal, selectedItem) => {
        return (
            <ItemPopup 
                open = {openItemModal} 
                onClose = {this.handleModalClose}
                selectedItem = {selectedItem}
                handleCancel = {this.handleModalClose}
                handleSelect = {this.handleItemSelect}
            />
        )
    }

    renderFooter = () => {
        const idx = this.state.index
        return (
            <View style = {styles.footerRoot}>
                <View style = {styles.footerContent}>
                    <Text style = {styles.footerText}>{this.footerText[idx]}</Text>
                    <View style = {styles.footerBtns}>
                        <CustomButton 
                            text = "Previous" 
                            handleBtnOnClick = {this.handlePrevOnClick} 
                            btnType = "secondary"
                        />
                        <CustomButton 
                            text = { idx === 3 ? "Confirm" : "Next"} 
                            handleBtnOnClick = {this.handleNxtOnClick} 
                            btnType = "primary"
                        />
                    </View>
                </View>
            </View>
        )
    }

    renderPaymentSlip = () => {
        return (
            <PaymentSlip
                values = {this.state}
            />
        )
    }

    renderDeliveryDetail = () => {
        return (
            <Delivery
                values = {this.state}
                options = {this.districts}
                handleRadioOnPress = {this.handleRadioOnPress}
                handleOptionOnPress = {this.handleOptionOnPress}
                handleOnChangeText = {this.handleOnChangeText}
            />
        )
    }

    renderGiftSelector = () => {
        const {itemSearch, selectedItem, selectedCategory, selectedMerchant} = this.state
        return (
            <GiftSelector
                itemSearch = {itemSearch}
                items = {this.items}
                selectedItem = {selectedItem}
                selectedCategory = {selectedCategory}
                selectedMerchant = {selectedMerchant}
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
        const idx = this.state.index
        return (
            <View style = {styles.mainRoot}>
                { 
                    idx === 0 ? this.renderMerchantSelector() 
                    :
                    idx === 1 ? this.renderGiftSelector() 
                    :
                    idx === 2 ? this.renderDeliveryDetail() 
                    :
                    this.renderPaymentSlip()
                }
            </View>
        )
    }

    render() {
        const {selectedItem, openItemModal, openAlert, alertMessage, openConfirmPopup, loading} = this.state
        return (
            <SafeAreaView style = {styles.container}>
                <TopBar title = "New Voucher" navigation = {this.props.navigation}/>
                <ScrollView style = {styles.scrollView} indicatorStyle = "white">
                    { this.renderMain() }
                </ScrollView>
                { this.renderFooter() }
                { openItemModal && selectedItem &&  this.renderItemModal(openItemModal, selectedItem ) }
                { openAlert && alertMessage && <AlertSnackBar message = {alertMessage}/> }
                { openConfirmPopup && this.renderConfirmModal(openConfirmPopup) }
                { loading && <Loading open = {loading}/> }
            </SafeAreaView>
        )
    }
}


export default NewVoucher