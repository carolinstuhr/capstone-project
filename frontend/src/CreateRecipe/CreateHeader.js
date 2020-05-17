import React from 'react'
import styled from 'styled-components/macro'
import LeftArrow from '../images/left-arrow.svg'
import { Link } from 'react-router-dom'

export default function CreateHeader({ children }) {
  return (
    <header>
      <Link exact to="/">
        <ArrowIconStyled src={LeftArrow} alt="return Button" />
      </Link>
      <h1>{children}</h1>
    </header>
  )
}

const ArrowIconStyled = styled.img`
  border-radius: 4px;
  height: 32px;
  width: 32px;
  position: absolute;
  left: 12px;
  top: 12px;
  padding: 4px;
`
