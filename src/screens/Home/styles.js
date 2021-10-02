import { StyleSheet, Dimensions } from 'react-native'

import {primaryColor} from '../../values/values'

const screenHight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EAECEE"
    },
    scrollView: {
        width: "100%",
        height: "100%",
    },
    coverRoot: {
        width: "100%",
        height: screenHight * 0.3,
    },
    coverWallpaper: {
        width: "100%",
        height: "100%"
    },
    texBlock: {
        marginTop: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        backgroundColor: "#fff"
    },
    header: {
        fontSize: 16,
        color: primaryColor,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    para: {
        width: "90%",
        alignItems: "center",
        color: "#2C3E50",
        textAlign: "center",
        marginTop: 10
    },
    block: {
        marginTop: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 5
    },
    featureRoot: {
        marginTop: 15,
        width: "100%",
        flex: 1,
        flexDirection: "row",
    },
    feature: {
        width: "47%",
        height: 100,
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 10,
        marginBottom: "2%",
        marginLeft: "2%",
        borderStyle: 'dashed',
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    featureImg: {
        width: 50,
        height: 50
    },
    carouselBlock: {
        marginTop: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        backgroundColor: "#fff"
    },
    carouselRoot: {
        marginTop: 15
    }
})