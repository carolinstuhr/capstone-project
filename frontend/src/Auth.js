import React, { useState, useEffect } from 'react'
import { auth } from './firebaseConfig'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})
  const [pending, setPending] = useState(true)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser({ id: user.uid })
        localStorage.setItem('uid', user.uid)
        console.log(user)
        setPending(false)
      } else {
        setCurrentUser({})
        setPending(false)
      }
    })
  }, [])

  if (pending) {
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  )
}
