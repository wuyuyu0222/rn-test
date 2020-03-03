import React from 'react'
import { TouchableOpacity } from 'react-native'
import ButtonText from './ButtonText'
import { paddingStyle } from '../../constants/Styles'

export default function BaseButton({ style, labelStyle, disabled, children, ...props }) {
    return (
        <TouchableOpacity {...props} style={[{
            alignItems: 'center',
            justifyContent: 'center',
        }, disabled && { opacity: 0.2 }, style]}>
            <ButtonText style={labelStyle}>
                {children}
            </ButtonText>
        </TouchableOpacity>
    )
}