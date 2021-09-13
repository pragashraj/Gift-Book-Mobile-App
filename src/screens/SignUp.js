import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Input from '../components/Input'

import {backgroundColor} from '../values/values'

import nameIcon from '../assets/icons/name.png'
import emailIcon from '../assets/icons/email.png'
import keyIcon from '../assets/icons/key.png'
import confirmIcon from '../assets/icons/confirm.png'

class SignUp extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    INPUTS = [
        {id: "1", name: "name", value: this.state.name, placeholder: "Name", secureTextEntry: false, icon: nameIcon},
        {id: "2", name: "email", value: this.state.email, placeholder: "Email", secureTextEntry: false, icon: emailIcon},
        {id: "3", name: "password", value: this.state.password, placeholder: "Password", secureTextEntry: true, icon: keyIcon},
        {id: "4", name: "confirmPassword", value: this.state.confirmPassword, placeholder: "Confirm Password", secureTextEntry: true, icon: confirmIcon},
    ]

    handleOnChangeText = (value, name) => {
        this.setState({ [name]: value })
    }

    renderForm = () => {
        return (
            <View style = {styles.form}>
                { this.INPUTS.map(input => {
                    const {placeholder, secureTextEntry, value, name, icon, id} = input
                    return (
                        <Input
                            placeholder = {placeholder}
                            defaultValue = ""
                            secureTextEntry = {secureTextEntry}
                            value = {value}
                            onChangeText = {this.handleOnChangeText}
                            name = {name}
                            icon = {icon}
                            key = {id}
                        />
                    )
                }) }
            </View>
        )
    }

    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.formRoot}>
                    { this.renderForm() }
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: backgroundColor,
        flex: 1
    },
    formRoot: {
        padding: 15
    },
    form: {
        elevation: 4,
        backgroundColor: "#fff",
        padding: 10
    }
})

export default SignUp