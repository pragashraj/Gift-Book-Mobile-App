import { StyleSheet, Dimensions } from 'react-native'

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
    filterItemText: {
        fontSize: 12,
        color: "#000"
    },
    merchantsBlock: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginTop: 10
    },
    merchantList: {
        marginTop: 20
    },
    merchant: {
        marginVertical: 5,
    }
})