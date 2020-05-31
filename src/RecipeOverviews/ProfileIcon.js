import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function ProfileIcon() {
  return (
    <Link to="/profile">
      <ProfileImage className="profile-button" />
    </Link>
  )
}
const ProfileImage = styled(FaRegUser)`
  height: 36px;
  width: 36px;
  color: var(--primary);
  position: fixed;
  top: 6px;
  right: 16px;
  padding: 6px;
  border: 1px solid var(--primary);
  border-radius: 50%;
`
