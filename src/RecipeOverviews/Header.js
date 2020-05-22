import React from 'react'
import styled from 'styled-components/macro'
import ProfileIcon from '../UserProfile/ProfileIcon'

export default function Header({ children }) {
  return (
    <HeaderStyled>
      <h1>{children}</h1>
      <ProfileIcon />
    </HeaderStyled>
  )
}
const HeaderStyled = styled.header``
