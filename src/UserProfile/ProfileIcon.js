import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function ProfileIcon() {
  return (
    <Link to="/profile">
      <ProfileImage />
    </Link>
  )
}
const ProfileImage = styled(FaRegUser)`
  height: 36px;
  width: 36px;
  z-index: 2;
  color: var(--primary);
  position: fixed;
  top: 1%;
  left: 84%;
  padding: 6px;
  border: 1px solid var(--primary);
  border-radius: 50%;
`
