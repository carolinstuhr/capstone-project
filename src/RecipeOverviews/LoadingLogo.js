import React from 'react'
import chefsHat from '../images/chefs-hat.png'
import styled from 'styled-components/macro'

export default function LoadingLogo() {
  return <LoadingImg src={chefsHat} alt="loading" />
}
const LoadingImg = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 40%;
  right: 40%;
`
