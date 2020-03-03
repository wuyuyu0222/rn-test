import React from 'react'
import BaseText from './BaseText';

export default function TitleText({ style, children }) {
    return (
        <BaseText style={[{ fontSize: 21 }, style]}>
            {children}
        </BaseText>
    )
}