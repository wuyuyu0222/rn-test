import React from 'react'
import BaseText from '../Text/BaseText';

export default function ButtonText({ style, children }) {
    return (
        <BaseText style={[{ fontFamily: 'Gotham', letterSpacing: 2 }, style]}>
            {children}
        </BaseText>
    )
}