import React from 'react'
import { Image, Dimensions } from 'react-native'

export default function BaseImage({ uri, style, width, height }) {
    if (!uri) {
        return null
    }
    if (width && height) {
        style[width] = width
        style[height] = height
    }
    const windowWidth = Dimensions.get('window').width
    return (
        <Image
            source={{ uri: uri }}
            style={[{ width: windowWidth, height: windowWidth * 0.75, maxWidth: windowWidth - 24 }, style]}
        />
    )
}