import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker'

const DatePicker = ({date, onChange}) => {
    return (
        <DateTimePicker
            testID = "dateTimePicker"
            value = {date}
            mode = {'date'}
            is24Hour = {true}
            display = "default"
            onChange = {onChange}
        />
    )
}

export default DatePicker

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    }
})
