import React from 'react'
import styled from 'styled-components/macro'
import { FaPlus } from 'react-icons/fa'

export default function AdditionalLineButton({ addAdditionalLine }) {
  return <StyledButton onClick={addAdditionalLine}></StyledButton>
}
const StyledButton = styled(FaPlus)`
  height: 28px;
  width: 28px;
  z-index: 2;
  color: #514f4b;
  padding: 4px;
  background: white;
  border: 1px solid #514f4b;
  border-radius: 24px;
  display: block;
  margin-left: 40%;
`
