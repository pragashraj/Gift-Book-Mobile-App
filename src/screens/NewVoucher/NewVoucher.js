import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {styles} from './styles'

class NewVoucher extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text> New Voucher </Text>
            </View>
        )
    }
}


export default NewVoucher