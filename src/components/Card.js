import React from 'react'
import { TouchableOpacity } from 'react-native'
import { borderStyle, paddingStyle } from '../constants/Styles'
import COLORS from '../constants/Colors'

export default function Card({ style, children, ...props }) {
    return (
        <TouchableOpacity style={[{
            borderRadius: 8,
            ...borderStyle(1, 'solid', COLORS.lightBlack),
            ...paddingStyle(8)
        }, style]} {...props}>
            {children}
        </TouchableOpacity>
    )
}