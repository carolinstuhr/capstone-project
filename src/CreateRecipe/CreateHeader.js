import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { RiArrowLeftSLine } from 'react-icons/ri'
import Header from '../Shared/Header'

export default function CreateHeader() {
  return (
    <Header>
      <Link exact to="/">
        <ArrowIconStyled alt="return" />
      </Link>
      create
    </Header>
  )
}

const ArrowIconStyled = styled(RiArrowLeftSLine)`
  border-radius: 4px;
  height: 40px;
  width: 40px;
  position: absolute;
  left: 12px;
  top: 4px;
  color: var(--primary);
`
