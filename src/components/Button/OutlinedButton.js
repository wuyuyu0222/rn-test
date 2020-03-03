import React from 'react'
import BaseButton from './BaseButton';
import { borderStyle, paddingStyle } from '../../constants/Styles';
import COLORS from '../../constants/Colors';

export default function OutlinedButton({ style, children, ...props }) {
    return (
        <BaseButton {...props} style={[{
            borderRadius: 8,
            ...paddingStyle(8),
            ...borderStyle(1, 'solid', COLORS.lightBlack)
        }, style]}>
            {children}
        </BaseButton>
    )
}