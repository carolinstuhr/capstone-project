import React, { useState, useEffect } from 'react'
import { auth } from './firebaseConfig'
import styled from 'styled-components/macro'
import ChefsHat from './images/chefs-hat.png'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})
  const [pending, setPending] = useState(true)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user)
        localStorage.setItem('uid', user.uid)
        console.log(user)
        console.log(currentUser)
        setPending(false)
      } else {
        setCurrentUser({})
        setPending(false)
      }
    })
  }, [])

  if (pending) {
    return <LoadingLogo src={ChefsHat} alt="loading" />
  }

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  )
}
const LoadingLogo = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 40%;
  right: 40%;
`
