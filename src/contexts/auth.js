import React, { useReducer, useContext, useMemo } from 'react'
import { authService } from '../api/authService'

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
    }, { token: null })

    const funcs = useMemo(() => ({
        signIn: async (username, password) => {
            if (!username || !password) {
                return
            }
            try {
                await authService.login(username, password)
                return dispatch({ type: 'SIGN_IN', token: 'auth-token' })
            } catch {
                return
            }
        },
        signOut: () => dispatch({ type: 'SIGN_OUT' })
    }), [])

    return (
        <AuthContext.Provider value={{ ...state, ...funcs }} >
            {children}
        </AuthContext.Provider >
    )
}

export { useAuth, AuthProvider }