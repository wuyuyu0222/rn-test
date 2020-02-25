import React from 'react'
import { SHARED_STYLE } from "../constants/Styles";
import { Button } from "react-native-paper";

export default function OutlinedButton({ onPress, loading, disabled, children }) {
    return (
        <Button
            mode="outlined"
            style={SHARED_STYLE.button}
            labelStyle={SHARED_STYLE.buttonText}
            onPress={onPress}
            loading={loading}
            disabled={loading || disabled}
        >
            {children}
        </Button>
    )
}