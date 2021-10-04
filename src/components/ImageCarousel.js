import React, { Component } from 'react'
import { View, Dimensions, StyleSheet, Image } from 'react-native'

import Carousel from 'react-native-snap-carousel'

import { scrollInterpolator, animatedStyles } from '../utils/animations'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9)
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 2.5 / 4)

export default class ImageCarousel extends Component {
  
    state = {
        index: 0
    }

    renderItem({ item }) {
        return (
            <View style = {styles.paper}>
                <View style = {styles.itemContainer}>
                    <Image style = {styles.carouselImage} source = {item.src}/>
                </View>
            </View>
        )
    }
  
    render() {
        return (
            <View style = {styles.container}>
                <Carousel
                    ref = {(c) => this.carousel = c}
                    data = {this.props.data}
                    renderItem = {this.renderItem}
                    sliderWidth = {SLIDER_WIDTH}
                    itemWidth = {ITEM_WIDTH}
                    containerCustomStyle = {styles.carouselContainer}
                    inactiveSlideShift = {0}
                    onSnapToItem = {(index) => this.setState({ index })}
                    scrollInterpolator = {scrollInterpolator}
                    slideInterpolatedStyle = {animatedStyles}
                    useScrollView = {true} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 200
    },
    carouselContainer: {
        padding: 5,
    },
    paper: {
        padding: 5,
        backgroundColor: "#fff",
        elevation: 5
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'silver',
        elevation: 2,
    },
    carouselImage: {
        width: "100%",
        height: "100%",
    },
})
