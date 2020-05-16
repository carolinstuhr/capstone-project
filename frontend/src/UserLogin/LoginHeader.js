import React from 'react'
import styled from 'styled-components/macro'
import ChefsHat from '../images/chefs-hat.png'

export default function LoginHeader({ children }) {
  return (
    <HeaderStyled>
      <LogoLeftStyled src={ChefsHat} alt="logo" />
      <NameStyled>get cooking</NameStyled>
      <LogoRightStyled src={ChefsHat} alt="logo" />
      <TtileStyled>{children}</TtileStyled>
    </HeaderStyled>
  )
}
const HeaderStyled = styled.header`
  positions: relative;
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
  top: 16px;
`
const LogoLeftStyled = styled(LogoStyled)`
  left: 15%;
`
const LogoRightStyled = styled(LogoStyled)`
  right: 15%;
`
const TtileStyled = styled.h4`
  font-family: 'Nanum Myeongjo', serif;
  font-weight: 300;
  font-size: 28px;
  text-align: center;
`
