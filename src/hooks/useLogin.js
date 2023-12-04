import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState()
    const { dispatch } = useAuthContext()

    const login = async (IDToken) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`${REACT_APP_SERVER_URL}/api/user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ IDToken })
        })

        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
            setIsLoading(false)
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify({...json, IDToken: IDToken}))

            // update authContext
            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false)
        }
    }

    return { login, isLoading, error }
}