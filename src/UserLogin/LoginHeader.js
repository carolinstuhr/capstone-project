import React from 'react'
import styled from 'styled-components/macro'
import chefsHat from '../images/chefs-hat.png'

export default function LoginHeader({ children }) {
  return (
    <header>
      <LogoLeftStyled src={chefsHat} alt="" />
      <NameStyled>get cooking</NameStyled>
      <LogoRightStyled src={chefsHat} alt="" />
      <TitleStyled>{children}</TitleStyled>
    </header>
  )
}

const NameStyled = styled.h1`
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
  left: 16%;
`
const LogoRightStyled = styled(LogoStyled)`
  right: 15%;
`
const TitleStyled = styled.h4`
  font-family: 'Nanum Myeongjo', serif;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
`
