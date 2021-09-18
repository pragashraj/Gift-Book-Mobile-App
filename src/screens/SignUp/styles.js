import { StyleSheet, Dimensions } from 'react-native'

import {primaryColor} from '../../values/values'

const screenHight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imageRoot: {
        height: screenHight,
        width: screenWidth,
        position: "absolute"
    },
    wallpaper: {
        width: "100%",
        height: "100%"
    },
    formRoot: {
        padding: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10%"
    },
    form: {
        elevation: 1,
        padding: 5,
        borderRadius: 30
    },
    btnRoot: {
        justifyContent: "center",
        width: "90%",
        marginTop: 20,
    },
    footerRoot: {
        height: 50,
        width: "100%",
        position: "absolute",
        elevation: 1,
        bottom: 0,
        borderColor: primaryColor,
        borderTopWidth: 1,
        borderBottomWidth: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    footer: {
        display: "flex",
        flexDirection: 'row',
    },
    footerText: {
        color: "#fff",
        fontSize: 15
    },
    footerLink: {
        color: primaryColor,
        fontSize: 16,
        marginLeft: 7,
        fontWeight: "bold"
    }
})