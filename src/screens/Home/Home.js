import React, { Component } from 'react'
import { Text, SafeAreaView, ScrollView, Image, View } from 'react-native'

import TopBar from '../../components/TopBar'
import ImageCarousel from '../../components/ImageCarousel'

import care from '../../assets/wallpapers/carousels/care.png'
import fashion from '../../assets/wallpapers/carousels/fashion.png'
import watches from '../../assets/wallpapers/carousels/watches.png'
import hotels from '../../assets/wallpapers/carousels/hotels.png'
import food from '../../assets/wallpapers/carousels/food.png'
import baby from '../../assets/wallpapers/carousels/baby.png'

import slide from '../../assets/wallpapers/screens/slide.png'
import shops from '../../assets/icons/shops.png'

import {styles} from './styles'

class Home extends Component {

    carouselData = [
        {src: care, title: "Care"},
        {src: fashion, title: "Fashion"},
        {src: watches, title: "Accessories"},
        {src: hotels, title: "Hotesls"},
        {src: food, title: "Food"},
        {src: baby, title: "Baby"},
    ]

    renderCategoriesBlock = () => {
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
                    {["1", "2", "3", "4"].map((item) => (
                        <View style = {styles.feature} key = {item}>
                            <Image style = {styles.featureImg} source = {shops}/>
                            <Text>Merchant</Text>
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
                </Text>
            </View>
        )
    }

    renderCover = () => {
        return (
            <View style = {styles.coverRoot}>
                <Image style = {styles.coverWallpaper} source = {slide}/>
            </View>
        )
    }
    
    renderBackground = () => (
        <Image style = {styles.wallpaper} source = {wallpaper}/>
    )

    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <TopBar title = "Home" navigation = {this.props.navigation}/>
                <ScrollView style = {styles.scrollView} indicatorStyle = "white">
                    { this.renderCover() }
                    { this.renderFeaturetBlock() }
                    { this.renderCategoriesBlock() }
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Home