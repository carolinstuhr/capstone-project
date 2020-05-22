import React, { useState, useEffect } from 'react'
import { auth } from './firebaseConfig'
import styled from 'styled-components/macro'
import ChefsHat from './images/chefs-hat.png'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children, history }) => {
  const [currentUser, setCurrentUser] = useState()
  const [pending, setPending] = useState(true)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user)
        localStorage.setItem('uid', user.uid)

        setTimeout(() => {
          setPending(false)
        }, 1000)
      } else {
        setCurrentUser(null)
        setPending(false)
      }
    })
  }, [])

  if (pending) {
    return <LoadingLogo src={ChefsHat} alt="loading" />
  }

  function logout() {
    setCurrentUser(null)
    history.pushState('/signup')
  }

  return (
    <AuthContext.Provider value={{ currentUser, logout, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
const LoadingLogo = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 40%;
  right: 40%;
  animation-duration: 1s;
  animation-name: fadein;
  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 100;
    }
  }
`

export const AuthConsumer = AuthContext.Consumer
