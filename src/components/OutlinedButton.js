import React from 'react'
import { SHARED_STYLE, borderStyle } from "../constants/Styles";
import { Button } from "react-native-paper";
import COLORS from '../constants/Colors';

export default function OutlinedButton({ onPress, loading, disabled, children }) {
    return (
        <Button
            mode="outlined"
            style={SHARED_STYLE.button}
            labelStyle={[SHARED_STYLE.text, SHARED_STYLE.buttonText]}
            onPress={onPress}
            loading={loading}
            disabled={loading || disabled}
        >
            {children}
        </Button>
    )
}