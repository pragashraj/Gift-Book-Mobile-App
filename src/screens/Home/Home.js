import React, { Component } from 'react'
import { Text, SafeAreaView, ScrollView, Image, View, TouchableOpacity } from 'react-native'

import TopBar from '../../components/TopBar'
import ImageCarousel from '../../components/ImageCarousel'
import Loading from '../../components/Loading'

import care from '../../assets/images/carousels/care.png'
import fashion from '../../assets/images/carousels/fashion.png'
import watches from '../../assets/images/carousels/watches.png'
import hotels from '../../assets/images/carousels/hotels.png'
import food from '../../assets/images/carousels/food.png'
import baby from '../../assets/images/carousels/baby.png'

import book from '../../assets/images/categories/book.png'
import fashions from '../../assets/images/categories/fashions.jpg'
import foods from '../../assets/images/categories/foods.jpg'
import fitness from '../../assets/images/categories/fitness.png'
import valentine from '../../assets/images/categories/valentine.jpg'
import personal from '../../assets/images/categories/personal.png'
import watch from '../../assets/images/categories/watches.png'

import cover from '../../assets/images/screens/cover.jpg'
import merchants from '../../assets/images/icons/shops.png'
import onlinePayment from '../../assets/images/icons/onlinePayment.png'
import delivery from '../../assets/images/icons/delivery.png'
import anonymous from '../../assets/images/icons/anonymous.png'
import smartGift from '../../assets/images/icons/smartGift.png'
import giftBox from '../../assets/images/icons/giftbox.png'
import love from '../../assets/images/icons/love.png'
import eVoucher from '../../assets/images/icons/eVoucher.png'

import {styles} from './styles'

class Home extends Component {
    state = {
        loading: false,
    }

    carouselData = [
        {src: care, title: "Care"},
        {src: fashion, title: "Fashion"},
        {src: watches, title: "Accessories"},
        {src: hotels, title: "Hotesls"},
        {src: food, title: "Food"},
        {src: baby, title: "Baby"},
    ]

    featureData = [
        {id: "1", content: "Merchants", src: merchants},
        {id: "2", content: "Online Pay", src: onlinePayment},
        {id: "3", content: "Anonymous sender", src: anonymous},
        {id: "4", content: "Delivery", src: delivery},
        {id: "5", content: "E-Voucher", src: eVoucher},
        {id: "6", content: "Share Voucher", src: smartGift},
    ]

    categoryListData = [
        {id: "1", src: book, title: "Books"},
        {id: "2", src: fashions, title: "Fashion"},
        {id: "3", src: foods, title: "Food"},
        {id: "4", src: fitness, title: "Fitness"},
        {id: "5", src: valentine, title: "Valentine special"},
        {id: "6", src: personal, title: "Personal care"},
        {id: "7", src: watch, title: "Wearables"},
        {id: "8", src: hotels, title: "Hotels"},
    ]

    componentDidMount() {

    }

    renderAttribute = (source, title) => {
        return (
            <View style = {styles.attribute}>
                <Image style = {styles.featureImg} source = {source}/>
                <Text style = {styles.attributeText}>{title}</Text>
            </View>
        )
    }

    renderFooter = () => {
        return (
            <View style = {styles.footer}>
                <TouchableOpacity>
                    <Text style = {styles.footerLink}>Subscribe to our newletter</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderCategoriesBlock = () => {
        return (
            <View style = {styles.categoryListBlock}>
                <Text style = {styles.header}>Explore our top categories</Text>
                <View style = {styles.categoryList}>
                    <View style = {styles.row}>
                        {this.categoryListData.map((item) => (
                            <View style = {styles.feature} key = {item.id}>
                                <Image style = {styles.categoryListImage} source = {item.src}/>
                                <View style = {styles.categoryListTitle}>
                                    <Text style = {styles.title}>{item.title}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        )
    }

    renderCarouselBlock = () => {
        return (
            <View style = {styles.carouselBlock}>
                <Text style = {styles.header}>We Have Got Something For Everyone!</Text>
                <View style = {styles.carouselRoot}>
                    <ImageCarousel data = {this.carouselData}/>
                </View>
            </View>
        )
    }

    renderFeaturetBlock = () => {
        return (
            <View style = {styles.block}>
                <Text style = {styles.header}>Discover Our Exciting Features</Text>
                <View style = {styles.featureRoot}>
                    <View style = {styles.row}>
                    {this.featureData.map((item) => (
                        <View style = {styles.feature} key = {item.id}>
                            <Image style = {styles.featureImg} source = {item.src}/>
                            <Text>{item.content}</Text>
                        </View>
                    ))}
                    </View>
                </View>
            </View>
        )
    }

    renderTextBlock = () => {
        return (
            <View style = {styles.texBlock}>
                <Text style = {styles.header}>Celebrate All Your Moments With Us</Text>
                <Text style = {styles.para}>
                    We are Sri Lanka’s largest e-gift voucher platform that allows you to 
                    purchase and manage your gift vouchers from a range of merchants with just a few clicks.
                    Our hassle free and easy to use voucher platform gives you the freedom of 
                    gifting personalised vouchers from your favourite merchants to your loved ones. 
                </Text>
                <View style = {styles.attributesRoot}>
                    { this.renderAttribute(smartGift, "Transfer") }
                    { this.renderAttribute(giftBox, "Smart Gift") }
                    { this.renderAttribute(love, "Loved once") }
                </View>
            </View>
        )
    }

    renderCover = () => {
        return (
            <View style = {styles.coverRoot}>
                <Image style = {styles.coverWallpaper} source = {cover}/>
            </View>
        )
    }
    
    renderBackground = () => (
        <Image style = {styles.wallpaper} source = {wallpaper}/>
    )

    render() {
        const {loading} = this.state
        return (
            <SafeAreaView style = {styles.container}>
                <TopBar title = "Home" navigation = {this.props.navigation}/>
                <ScrollView style = {styles.scrollView} indicatorStyle = "white">
                    { this.renderCover() }
                    { this.renderTextBlock() }
                    { this.renderCategoriesBlock() }
                    { this.renderCarouselBlock() }
                    { this.renderFeaturetBlock() }
                    { this.renderFooter() }
                </ScrollView>
                { loading && <Loading open = {loading}/> }
            </SafeAreaView>
        )
    }
}

export default Home