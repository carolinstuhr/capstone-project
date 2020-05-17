import React from 'react'
import styled from 'styled-components/macro'

export default function LoginButton({ children }) {
  return <ButtonStyled>{children}</ButtonStyled>
}
const ButtonStyled = styled.button`
  grid-column: 1 / 3;
  width: 80px;
  padding: 4px;
  justify-self: center;
  margin-top: 18px;
  border-radius: 4px;
  background: white;
  font-size: 16px;
  font-weight: 300;
`
