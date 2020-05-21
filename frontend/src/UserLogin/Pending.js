import React from 'react'
import LoginHeader from './LoginHeader'
import ChefsHat from '../images/chefs-hat.png'
import styled from 'styled-components/macro'
import PageLayout from './PageLayout'

export default function Pending({ children }) {
  return (
    <PageLayout>
      <LoginHeader></LoginHeader>
      <PendingHeading>{children}</PendingHeading>
      <Wrapper>
        <LoadingLogo src={ChefsHat} alt="loading" />
      </Wrapper>
    </PageLayout>
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

  animation-duration: 3s;
  animation-iteration-count: 2;
  animation-name: fadein;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const PendingHeading = styled.h1`
  margin-top: 70px;
`
