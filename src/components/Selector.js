import React from 'react'
import { StyleSheet, View, Picker } from 'react-native'

const Selector = ({options, selectedValue, setSelectedValue}) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.inputRoot}>
                <Picker
                    selectedValue = {selectedValue}
                    onValueChange = {(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    style = {styles.picker}
                >
                    { options.map((item, idx) => {
                        const {label, value} = item
                        return (
                            <Picker.Item label = {label} value = {value} key = {idx}/>
                        )
                    })}
                </Picker>
            </View>
        </View>
    )
}

export default Selector

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 65,
    },
    inputRoot: {
        borderColor: "#DC7633",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 12,
        borderWidth: 1.2,
        padding: 1
    },
    picker: {
        height: "100%", 
        width: "100%" 
    }
})
