import React from 'react'
import styled from 'styled-components/macro'

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>
}
const HeaderStyled = styled.h1`
  text-align: center;
  margin-left: 0;
  font-size: 30px;
  text-transform: uppercase;
  padding-top: 8px;
`
