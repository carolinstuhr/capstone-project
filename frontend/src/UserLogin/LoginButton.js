import React from 'react'
import styled from 'styled-components/macro'

export default function LoginButton({ children }) {
  return <ButtonStyled>{children}</ButtonStyled>
}
const ButtonStyled = styled.button`
  grid-column: 1 / 3;
  width: 100px;
  padding: 8px;
  justify-self: center;
  margin-top: 18px;
  border-radius: 4px;
  font-family: 'Josefin Sans', sans-serif;
`
