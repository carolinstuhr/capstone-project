import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { RiArrowLeftSLine } from 'react-icons/ri'

export default function CreateHeader({ children }) {
  return (
    <header>
      <Link exact to="/">
        <ArrowIconStyled />
      </Link>
      <h1>{children}</h1>
    </header>
  )
}

const ArrowIconStyled = styled(RiArrowLeftSLine)`
  border-radius: 4px;
  height: 40px;
  width: 40px;
  position: absolute;
  left: 12px;
  top: 4px;
  color: #514f4b;
`
