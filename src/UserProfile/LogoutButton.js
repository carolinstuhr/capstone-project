import React from 'react'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import styled from 'styled-components/macro'

export default function LogoutButton({ logoutUser }) {
  return (
    <>
      <LogoutImageStyled alt="logout" onClick={logoutUser} />
    </>
  )
}

const LogoutImageStyled = styled(RiLogoutCircleRLine)`
  height: 32px;
  width: 32px;
  z-index: 2;
  color: #514f4b;
  position: fixed;
  top: 8px;
  right: 4%;
`
