import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const RadioButton = ({text, name, value, onPress}) => {
    return (
        <View style = {styles.container}>
            <TouchableOpacity
                style = {styles.radioCircle}
                onPress = {() => onPress(name)}
            >
                {value === name && <View style = {styles.selectedRb} />}
            </TouchableOpacity>
            <Text style = {styles.radioText}>{text}</Text>
        </View>
    )
}

export default RadioButton

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    radioText: {
        fontSize: 16,
        color: '#000',
    },
	radioCircle: {
		height: 20,
		width: 20,
		borderRadius: 10,
		borderWidth: 1.5,
		borderColor: "#DC7633",
		alignItems: 'center',
		justifyContent: 'center',
        marginRight: 10
	},
	selectedRb: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: "#DC7633",
    },
})
