import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [isCancel, setIsCancel] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)

            if (!res) {
                throw new Error('Could not complete signup')
            }

            await res.user.updateProfile({ displayName })

            dispatch({ type:'LOGIN', payload: res.user})

            if (!isCancel) {
                setIsPending(false)
                setError(null)
            }
            
        } catch (err) {
            if (!isCancel) {
                setError(err.message)
                console.log(err.message)
                setIsPending(false)
            }
            
        }
    }

    useEffect(() => {
        return () => setIsCancel(true)
    }, [])

    return { error, isPending, signup }
}