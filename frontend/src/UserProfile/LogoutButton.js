import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import styled from 'styled-components/macro'

export default function LogoutButton({ logoutUser }) {
  return <LogoutImageStyled alt="logout" onClick={logoutUser} />
}
const LogoutImageStyled = styled(FaSignOutAlt)`
  height: 32px;
  width: 32px;
  z-index: 2;
  color: #514f4b;
  position: fixed;
  top: 92%;
  left: 84%;
`
