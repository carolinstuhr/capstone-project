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
  margin-left: 43%;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;

  animation-name: bounce;
  animation-timing-function: linear;

  @keyframes bounce {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(20px);
    }
    100% {
      transform: translateX(0);
    }
  }
`

const PendingHeading = styled.h1`
  margin-top: 70px;
`
