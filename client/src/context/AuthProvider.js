import React, { createContext, useEffect } from "react";
import { getAuth } from 'firebase/auth';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = usestate({});

    const getAuth = getAuth();

    useEffect(() => {
        const unsubscribed = auth.onIdTokenChanged((user) => {
            console.log('[from AuthProvider]', { user })
        })
        return () => {
            unsubscribed();
        }
    }, [])

    return (
        <AuthContext.Provider value={user, setUser}>
            {children}
        </AuthContext.Provider>
    )
}