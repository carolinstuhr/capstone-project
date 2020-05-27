import React from 'react'
import styled from 'styled-components/macro'
import Header from '../Shared/Header'
import { Link } from 'react-router-dom'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { auth } from '../firebaseConfig'
import LogoutButton from './LogoutButton'

export default function ProfileHeader({ setUserStatus }) {
  return (
    <Header>
      <Link exact to="/">
        <ArrowIconStyled alt="return" />
      </Link>
      profile
      <LogoutButton onClick={logoutUser} alt="logout" />
    </Header>
  )
  function logoutUser(event) {
    event.preventDefault()
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem('uid')
        setUserStatus(false)
      })
      .catch((err) => console.log(err))
  }
}
const ArrowIconStyled = styled(RiArrowLeftSLine)`
  border-radius: 4px;
  height: 40px;
  width: 40px;
  position: absolute;
  left: 12px;
  top: 4px;
  color: var(--primary);
`
