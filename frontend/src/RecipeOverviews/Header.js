import React from 'react'
import styled from 'styled-components/macro'

export default function Header({ children }) {
  return (
    <HeaderStyled>
      <h1>{children}</h1>
    </HeaderStyled>
  )
}
const HeaderStyled = styled.header`
  background: white;
`
