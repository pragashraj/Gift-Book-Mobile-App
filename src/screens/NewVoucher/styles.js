import { StyleSheet, Dimensions } from 'react-native'

import {primaryColor} from '../../values/values'

const screenHight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#EAECEE",
    },
    scrollView: {
        width: "100%",
        height: "100%",
    },
    footerRoot: {
        height: 70,
        width: "100%",
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DC7633",
        padding: 10,
    },
    footerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        width: "100%"
    },
    footerText: {
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    footerBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "45%"
    },
    mainRoot: {
        width: "94%",
        marginLeft: "3%",
        borderRadius: 30,
        height: "100%",
        marginTop: 15,
        marginBottom: 5,
        backgroundColor: "#fff",
    },
    categoryBlock: {
        padding: 10,
    },
    headerTitle: {
        color: "#000",
        textTransform: "uppercase",
        letterSpacing: 1.5
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    category: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 2,
        marginVertical: 5
    },
    categoryText: {
        color: "grey",
        fontSize: 10
    },
    merchantBlock: {
        padding: 10
    },
    merchant: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 2,
        marginVertical: 5,
    },
    detailContainer: {
        marginTop: 15,
        padding: 5
    },
    detailBlock: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    detailContent: {
        fontWeight: "bold",
        fontSize: 16,
    },
})