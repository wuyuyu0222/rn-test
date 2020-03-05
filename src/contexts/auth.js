import React, { useReducer, useContext, useMemo, useEffect } from 'react'
import { authService } from '../api/authService'
import { AsyncStorage } from 'react-native'

const AuthContext = React.createContext()

const useAuth = () => {
    const authContext = useContext(AuthContext)
    return {
        isAuthorized: Boolean(authContext.token),
        ...authContext
    }
}

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer((_, action) => {
        switch (action.type) {
            case 'SIGN_IN':
                return { token: action.token }
            case 'SIGN_OUT':
                return { token: null }
        }
    }, { token: AsyncStorage.getItem('token') || null })

    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem('token')
            dispatch({ type: 'SIGN_IN', token })
        })()
    }, [])

    const funcs = useMemo(() => ({
        signIn: async (username, password) => {
            if (!username || !password) {
                return
            }
            try {
                const res = await authService.login(username, password)
                await AsyncStorage.setItem('token', res)
                return dispatch({ type: 'SIGN_IN', token: res })
            } catch {
                return
            }
        },
        signOut: async () => {
            await AsyncStorage.removeItem('token')
            return dispatch({ type: 'SIGN_OUT' })
        }
    }), [])

    return (
        <AuthContext.Provider value={{ ...state, ...funcs }} >
            {children}
        </AuthContext.Provider >
    )
}

export { useAuth, AuthProvider }