import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView } from 'react-native'

import {connect} from 'react-redux'

import {getMerchants, getMerchantsByCategory, getMerchantByName, getMerchantCategories} from '../../api/merchant'
import {getItemsByMerchant, getItemByName} from '../../api/Item'
import {create} from '../../api/payment'

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
        senderContact: "",
        receiverName: "",
        receiverAddress: "",
        receiverDistrict: "Gampaha",
        openAlert: false,
        alertMessage: "",
        openConfirmPopup: false,
        loading: false,
        alertAction: '',
        merchantsData: [],
        total: 0,
        current: 0,
        categoriesData: [],
        itemsData: [],
        itemTotal: 0,
        itemCurrent: 0,
    }

    footerText = ["Select a merchant", "Select a gift", "Delivery details", "Payment summary"]

    districts = [
        {id: "1", label: "Gampaha", value: "Gampaha"},
        {id: "2", label: "Colombo", value: "Colombo"},
    ]

    componentDidMount() {
        this.getMerchantCategoriesApi()
        this.getMerchantsApi(0)
    }

    getMerchantsApi = async(page) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const data = await getMerchants(page, token)
            this.setState({ loading: false, merchantsData: data.merchantList, total: data.total, current: data.current + 1 })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    getMerchantCategoriesApi = async() => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const categoriesData = await getMerchantCategories(token)
            this.setState({ loading: false, categoriesData })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    searchMerchantApi = async(value, page) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const data = await getMerchantByName(value, page, token)
            this.setState({ loading: false, merchantsData: data.merchantList, total: data.total, current: data.current + 1 })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    getMerchantsByCategoryApi = async(value, page) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const data = await getMerchantsByCategory(value, page, token)
            this.setState({ loading: false, merchantsData: data.merchantList, total: data.total, current: data.current + 1 })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    getItemsByMerchantApi = async(merchant, page) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const data = await getItemsByMerchant(merchant, page, token)
            this.setState({ loading: false, itemsData: data.itemList, itemTotal: data.total, itemCurrent: data.current + 1 })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    } 

    searchItemApi = async(name, merchant, page) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const data = await getItemByName(name, merchant, page, token)
            this.setState({ loading: false, itemsData: data.itemList, itemTotal: data.total, itemCurrent: data.current + 1 })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }

    createNewPaymentApi = async(data) => {
        try {
            this.setState({ loading: true })
            const token = this.props.user.token
            const response = await create(data, token)
            if (response.success) {
                this.setSuccessSnack(response.message)
            }
            this.setState({ 
                loading: false,
                index: 0,
                merchantSearch: "",
                selectedCategory: null,
                selectedMerchant: null,
                itemSearch: "",
                selectedItem: null,
                radioValue: "",
                senderName: "",
                senderAddress: "",
                senderContact: "",
                receiverName: "",
                receiverAddress: "",
                receiverDistrict: "Gampaha",
            })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnack(e.response.data.message)
        }
    }
    
    handleMerchantOnSearch = () => {
        const merchantSearch = this.state.merchantSearch
        if (merchantSearch) {
            this.searchMerchantApi(merchantSearch, 0)
        }
        else {
            this.setErrorSnack("Please enter a value")
        }
    }

    handleItemOnSearch = () => {
        const {itemSearch, selectedMerchant} = this.state
        if (itemSearch) {
            this.searchItemApi(itemSearch, selectedMerchant.title, 0)
        }
        else {
            this.setErrorSnack("Please enter a value")
        }
    }

    handleOnChangeText = (value, name) => {
        this.setState({ [name]: value })
    }

    handlePayOnPress = () => {
        this.handleConfirmPopup()
        const {
            selectedMerchant, selectedItem, radioValue, senderName, 
            senderAddress, receiverName, receiverAddress, receiverDistrict
        } = this.state
        const data = {
            email: this.props.user.email,
            value: selectedItem.price,
            senderType: radioValue ? "Anonymous" : "Own",
            merchantName: selectedMerchant.title,
            itemName: selectedItem.title,
            receiverName,
            receiverAddress,
            receiverDistrict,
            senderName,
            senderAddress,
            senderContact
        }
        this.createNewPaymentApi(data)
    }

    handleCategoryOnPress = (item) => {
        this.setState({ selectedCategory: item, selectedMerchant: null, openAlert: false })
        this.getMerchantsByCategoryApi(item.title, 0)
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
            receiverDistrict,
            senderContact 
        } = this.state

        let idx = index

        if (index === 0) {
            if (selectedMerchant) { 
                idx = index + 1
                this.getItemsByMerchantApi(selectedMerchant.title, 0) 
            }
            else {
                this.setErrorSnack("Please select a merchant")
            }
        }
        else if (index === 1) {
            if (selectedItem) {
                idx = index + 1 
            }
            else this.setErrorSnack("Please select an item")
        }
        else if (index === 2) {
            let receiverDetail = receiverName && receiverAddress && receiverDistrict
            let senderDetail = senderName && senderAddress && senderContact
            if (radioValue === "anonymous" && receiverDetail) {
                idx = index + 1
            }
            else if (radioValue !== "anonymous" && senderDetail && receiverDetail) {
                idx = index + 1
            }
            else {
                this.setErrorSnack("Fields cannot be empty")
            }
        }
        else {
            this.setState({ openConfirmPopup: true })
        }

        this.setState({ index: idx })
    }

    handlePagination = (no) => {
        this.setState({ current: no})
    }

    setSuccessSnack = (message) => {
        this.setAlert(message, 'Success')
    }

    setErrorSnack = (message) => {
        this.setAlert(message, 'Error')
    }

    setAlert = (message, action) => {
        this.setState({ openAlert: true, alertMessage: message, alertAction: action })
        setTimeout(() => { this.setState({ openAlert: false, alertMessage: "", alertAction: '' }) }, 3000)
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
                profile = {this.props.profile}
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
        const {itemSearch, selectedItem, selectedCategory, selectedMerchant, itemsData, itemTotal, itemCurrent} = this.state
        return (
            <GiftSelector
                itemSearch = {itemSearch}
                items = {itemsData}
                selectedItem = {selectedItem}
                selectedCategory = {selectedCategory}
                selectedMerchant = {selectedMerchant}
                handleOnChangeText = {this.handleOnChangeText}
                handleSearchOnPress = {this.handleItemOnSearch}
                handleItemOnPress = {this.handleItemOnPress}
                total = {itemTotal}
                current = {itemCurrent}
                handlePagination = {this.handlePagination}
            />
        )
    }

    renderMerchantSelector = () => {
        const {merchantSearch, selectedCategory, selectedMerchant, merchantsData, categoriesData, total, current} = this.state
        return (
            <MerchantSelector 
                merchantSearch = {merchantSearch}
                selectedCategory = {selectedCategory}
                selectedMerchant = {selectedMerchant}
                categories = {categoriesData}
                merchants = {merchantsData}
                handleOnChangeText = {this.handleOnChangeText}
                handleSearchOnPress = {this.handleMerchantOnSearch}
                handleCategoryOnPress = {this.handleCategoryOnPress}
                handleMerchantOnPress = {this.handleMerchantOnPress}
                total = {total}
                current = {current}
                handlePagination = {this.handlePagination}
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
        const {selectedItem, openItemModal, openAlert, alertMessage, openConfirmPopup, loading, alertAction} = this.state
        return (
            <SafeAreaView style = {styles.container}>
                <TopBar title = "New Voucher" navigation = {this.props.navigation}/>
                <ScrollView style = {styles.scrollView} indicatorStyle = "white">
                    { this.renderMain() }
                </ScrollView>
                { this.renderFooter() }
                { openItemModal && selectedItem &&  this.renderItemModal(openItemModal, selectedItem ) }
                { openAlert && alertMessage && <AlertSnackBar message = {alertMessage} action = {alertAction}/> }
                { openConfirmPopup && this.renderConfirmModal(openConfirmPopup) }
                { loading && <Loading open = {loading}/> }
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    profile: state.profile.profile
})

export default connect(mapStateToProps)(NewVoucher)