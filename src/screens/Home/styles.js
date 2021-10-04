import { StyleSheet, Dimensions } from 'react-native'

const screenHight = Dimensions.get('screen').height

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
        width: "96%",
        marginLeft: "2%",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    header: {
        fontSize: 16,
        color: "#DC7633",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    para: {
        width: "100%",
        alignItems: "center",
        color: "#707B7C",
        textAlign: "center",
        marginTop: 10,
        fontSize: 12
    },
    attributesRoot:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
        width: "100%"
    },
    attribute: { 
        alignItems: "center",
        justifyContent: "center"
    },
    attributeText: {
        textTransform: "uppercase",
        fontSize: 12
    },
    block: {
        marginTop: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
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
        backgroundColor: "#fff",
    },
    carouselRoot: {
        marginTop: 15
    },
    categoryListBlock: {
        marginTop: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
    },
    categoryList: {
        marginTop: 15
    },
    categoryListImage: {
        width: "100%",
        height: 100
    },
    categoryListTitle: {
        position: "absolute",
        borderWidth: 1,
        borderStyle: "dashed",
        padding: 10,
        borderColor: "#DC7633"
    },
    title: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        letterSpacing: 2,
        textTransform: "uppercase"
    },
    footer: {
        width: "100%",
        height: 60,
        backgroundColor: "#DC7633",
        alignItems: "center",
        justifyContent: "center"
    },
    footerLink: {
        color: "#fff"
    }
})