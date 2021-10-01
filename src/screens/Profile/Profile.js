import React, { Component } from 'react'
import { Text, SafeAreaView, ScrollView, Image, View } from 'react-native'

import TopBar from '../../components/TopBar'

import ProfileCover from '../../assets/wallpapers/Profile.jpg'
import user from '../../assets/otherImages/user.jpg'

import {styles} from './styles'

class Profile extends Component {

    stat = [
        {id: "1", count: 0, label: "Total"},
        {id: "2", count: 0, label: "Active"},
        {id: "3", count: 0, label: "Expired"},
    ]

    renderMainRoot = () => {
        return (
            <View style = {styles.mainRoot}>
                <View style = {styles.profileDetails}>
                    <Text style = {styles.contentHeader}>Profile Details</Text>
                </View>
            </View>
        )
    }

    renderProfiler = () => {
        return (
            <View style = {styles.profileRoot}>
                <View style = {styles.personal}>
                    <View style = {styles.profileImageBlock}>
                        <Image style = {styles.profileImage} source = {user}/>
                    </View>
                    <View style = {styles.profilerBlock}>
                        <Text style = {styles.profilerFN}>Chris</Text>
                        <Text style = {styles.profilerLN}>Evans</Text>
                    </View>
                </View>
                <View style = {styles.vouchers}>
                    { this.stat.map(item => {
                        const {id, count, label} = item 
                        return (
                            <View style = {styles.countRoot} key = {id}>
                                <Text style = {styles.vouchersCount}>{count}</Text>
                                <Text style = {styles.voucherText}>{label}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }

    renderProfileCover = () => {
        return (
            <View style = {styles.profileCoverRoot}>
                <Image style = {styles.coverWallpaper} source = {ProfileCover}/>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <TopBar title = "My Profile" navigation = {this.props.navigation}/>
                <ScrollView style = {styles.scrollView} indicatorStyle = "white">
                    { this.renderProfileCover() }
                    { this.renderProfiler() }
                    { this.renderMainRoot() }
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Profile