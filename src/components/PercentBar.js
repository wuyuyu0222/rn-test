import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { SHARED_STYLE } from "../constants/Styles";
import COLORS from '../constants/Colors';
import { toPercent } from '../utils/common';

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
            <Text style={[SHARED_STYLE.text, styles.percentBarLabel]}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    percentBarContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        marginBottom: 24
    },
    percentBarLabel: {
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