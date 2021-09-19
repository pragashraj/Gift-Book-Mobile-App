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
    infoRoot: {
        padding: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15%",
        marginBottom: 10,
        width: "80%"
    },
    infoText: {
        color: "white",
        fontSize: 18
    },
    mainRoot: {
        padding: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    main: {
        elevation: 1,
        padding: 5,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    btnRoot: {
        justifyContent: "center",
        width: "90%",
        marginTop: 20,
    },
})