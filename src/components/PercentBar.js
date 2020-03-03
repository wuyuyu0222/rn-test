import React from 'react'
import { View, StyleSheet } from 'react-native';
import COLORS from '../constants/Colors';
import { toPercent } from '../utils/common';
import BaseText from './Text/BaseText';
import { borderStyle } from '../constants/Styles';

export default function PercentBar({ value }) {
    if (value === null || value === undefined || isNaN(+value)) {
        return null
    }
    const label = toPercent(+value)
    const width = toPercent(+value, 0)
    return (
        <View style={styles.percentBarContainer}>
            <View style={styles.percentBarOuter}>
                <View style={[styles.percentBarInner, { width: width }]} />
            </View>
            <BaseText>{label}</BaseText>
        </View>
    )
}

const styles = StyleSheet.create({
    percentBarContainer: {
        width: '100%',
    },
    percentBarOuter: {
        backgroundColor: COLORS.shadow,
        width: '100%',
        height: 4,
        position: 'relative',
        zIndex: 1
    },
    percentBarInner: {
        backgroundColor: COLORS.black,
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
    }
})