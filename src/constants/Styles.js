export const paddingStyle = (...param) => {
    let paddingObj = {}
    switch (param.length) {
        case 1:
            paddingObj = { padding: param[0] }
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