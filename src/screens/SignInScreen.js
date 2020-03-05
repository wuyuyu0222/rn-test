import React, { useState } from 'react'
import Container from '../components/Container'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { useAuth } from '../contexts/auth'
import BaseTextInput from '../components/BaseTextInput'
import { paddingStyle } from '../constants/Styles'
import BaseButton from '../components/Button/BaseButton'

export default function SignInScreen() {
    const auth = useAuth()
    const [{ username, password }, setFormState] = useState({
        username: '',
        password: ''
    })
    const onInputChange = (field, value) => setFormState(prev => ({ ...prev, [field]: value }))
    return (
        <Container style={styles.container}>
            <KeyboardAvoidingView style={styles.form}>
                <View>
                    <BaseTextInput
                        style={styles.input}
                        label="Username"
                        value={username}
                        onChangeText={(value) => { onInputChange('username', value) }}
                    />
                    <BaseTextInput
                        style={styles.input}
                        label="Password"
                        value={password}
                        onChangeText={(value) => { onInputChange('password', value) }}
                    />
                </View>
                <BaseButton style={styles.button} onPress={() => auth.signIn(username, password)}>Sign in</BaseButton>
            </KeyboardAvoidingView>
        </Container>
    )
}

const styles = StyleSheet.create({
    form: {
        width: '100%',
        justifyContent: 'space-between',
        ...paddingStyle(0, 24),
        marginTop: '30%'
    },
    input: {
        marginBottom: 32
    },
    button: {
        marginTop: 16
    }
})