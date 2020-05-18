import React from 'react'
import { FaPlus } from 'react-icons/fa'
import styled from 'styled-components/macro'

export default function CreateRecipeButton() {
  return <IconStyled />
}

const IconStyled = styled(FaPlus)`
  height: 36px;
  width: 36px;
  z-index: 2;
  color: #514f4b;
  position: fixed;
  top: 92%;
  left: 84%;
  padding: 4px;

  border: 2px solid #514f4b;
  border-radius: 24px;
`
