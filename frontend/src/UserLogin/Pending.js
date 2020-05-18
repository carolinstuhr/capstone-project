import React from 'react'
import LoginHeader from './LoginHeader'
import ChefsHat from '../images/chefs-hat.png'
import styled from 'styled-components/macro'

export default function Pending({ children }) {
  return (
    <>
      <LoginHeader></LoginHeader>
      <PendingHeading>{children}</PendingHeading>
      <Wrapper>
        <LoadingLogo src={ChefsHat} alt="loading" />
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  height: 50px;
`

const LoadingLogo = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 40%;
  margin-left: 45%;

  animation-duration: 1s;
  animation-name: slidein;
  @keyframes slidein {
    from {
      margin-left: 100%;
    }

    to {
      margin-left: 45%;
    }
  }
`

const PendingHeading = styled.h1`
  margin-top: 70px;
`