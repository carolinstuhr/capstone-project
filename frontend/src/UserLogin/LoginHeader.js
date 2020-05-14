import React from 'react'
import styled from 'styled-components/macro'
import ChefsHat from '../images/chefs-hat.png'

export default function LoginHeader({ children }) {
  return (
    <HeaderStyled>
      <NameStyled>get cooking</NameStyled>
      <LogoStyled src={ChefsHat} alt="logo" />
      <LogoStyledL src={ChefsHat} alt="logo" />
      <TtileStyled>{children}</TtileStyled>
    </HeaderStyled>
  )
}
const HeaderStyled = styled.header`
  positions: realtive;
`

const NameStyled = styled.h1`
  font-family: 'Nanum Myeongjo', serif;
  font-weight: 600;
  text-align: center;
  padding-top: 12px;
  font-size: 36px;
`

const LogoStyled = styled.img`
  height: 32px;
  width: 32px;
  position: absolute;
  right: 15%;
  top: 16px;
`
const LogoStyledL = styled.img`
  height: 32px;
  width: 32px;
  position: absolute;
  left: 15%;
  top: 16px;
`

const TtileStyled = styled.h4`
  font-family: 'Nanum Myeongjo', serif;
  font-weight: 300;
  font-size: 28px;
  text-align: center;
`
