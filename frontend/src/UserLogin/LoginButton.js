import React from 'react'
import styled from 'styled-components/macro'

export default function LoginButton({ children, buttonStatus }) {
  return (
    <ButtonStyled disabled={buttonStatus} buttonStatus={buttonStatus}>
      {children}
    </ButtonStyled>
  )
}
const ButtonStyled = styled.button`
  grid-column: 1 / 3;
  width: 80px;
  padding: 4px;
  justify-self: center;
  margin-top: 18px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 300;
  background: ${(props) =>
    props.buttonStatus === true ? 'rgba(255, 255, 255, 0.7)' : 'white'};
`
