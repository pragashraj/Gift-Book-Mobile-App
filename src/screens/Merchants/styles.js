import { StyleSheet, Dimensions } from 'react-native'

import { primaryColor } from '../../values/values'

const screenHight = Dimensions.get('screen').height

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
    mainRoot: {
        padding: 10
    },
    searchBlock: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10
    },
    filterBlock: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 10,
        padding: 10
    },
    headerTitle: {
        color: "#000",
        textTransform: "uppercase",
        letterSpacing: 1.5,
        fontWeight: "bold",
        fontSize: 12
    },
    filterItemRoot: {
        marginTop: 20
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    filterItem: {
        backgroundColor: "#F9EBEA",
        padding: 10,
        margin: 5,
        borderRadius: 15
    },
    filterItemSelected: {
        backgroundColor: primaryColor,
        padding: 10,
        margin: 5,
        borderRadius: 15
    },
    filterItemText: {
        fontSize: 12,
        color: "#000"
    },
    filterItemTextSelected: {
        fontSize: 12,
        color: "#ffff"
    },
    merchantsBlock: {
        padding: 5,
        marginTop: 10
    },
    merchantList: {
        marginTop: 20
    },
    merchant: {
        marginVertical: 5,
    },
    paginationRoot: {
        marginTop: 10,
        backgroundColor: "#fff"
    },
    noDataAvailableRoot: {
        flex: 1,
        width: "100%",
        height: screenHight * 0.4,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    noDataAvailable: {
        textTransform: "uppercase",
        fontWeight: "700",
        letterSpacing: 1.2
    }
})