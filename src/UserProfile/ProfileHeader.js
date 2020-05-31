import React from 'react'
import styled from 'styled-components/macro'
import Header from '../Shared/Header'
import { Link } from 'react-router-dom'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { auth } from '../firebaseConfig'
import LogoutButton from './LogoutButton'
import { removeFromStorage } from '../services'

export default function ProfileHeader({ setUserStatus }) {
  return (
    <Header>
      <Link exact to="/">
        <ArrowIconStyled alt="return" />
      </Link>
      profile
      <LogoutButton onClick={logoutUser} alt="logout" data-testid="logout" />
    </Header>
  )
  function logoutUser(event) {
    event.preventDefault()
    auth
      .signOut()
      .then(() => {
        removeFromStorage('uid')
        setUserStatus(false)
      })
      .catch((err) => console.log(err))
  }
}
const ArrowIconStyled = styled(RiArrowLeftSLine)`
  height: 40px;
  width: 40px;
  position: absolute;
  left: 12px;
  margin-top: -2px;
  color: var(--primary);
`
