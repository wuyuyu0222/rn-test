import { StyleSheet } from "react-native";
import COLORS from "./Colors";

export const paddingStyle = (...param) => {
    let paddingObj = {}
    switch (param.length) {
        case 1:
            paddingObj =  { padding: param[0] }
            break
        case 2:
            paddingObj = {
                paddingTop: param[0],
                paddingBottom: param[0],
                paddingLeft: param[1],
                paddingRight: param[1]
            }
            break
        case 4:
            paddingObj = {
                paddingTop: param[0],
                paddingBottom: param[1],
                paddingLeft: param[2],
                paddingRight: param[3]
            }
            break
        default:
            break
    }
    return paddingObj
}

export const borderStyle = (width, style, color) => {
    const borderObj = {
        borderWidth: width,
        borderStyle: style,
        borderColor: color
    }
    return borderObj
}

export const SHARED_STYLE = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.blue900
    },
    text: {
        color: COLORS.white,
        fontSize: 14
    },
    button: {
        width: 120,
        height: 40,
        borderRadius: 8,
        backgroundColor: COLORS.turquoise400,
        alignItems: 'center',
        justifyContent: 'center',
        ...paddingStyle(10, 24)
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '700'
    }
})