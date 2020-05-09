import React from 'react'
import styled from 'styled-components/macro'

export default function InstructionsSection({
  storeInput,
  instructionsNumber,
}) {
  return (
    <InstructionsPart>
      <InstructionsNumber>{instructionsNumber}. </InstructionsNumber>
      <InstructionsInput
        type="text"
        rows="5"
        id="instructions"
        placeholder="Description"
        onChange={storeInput}
        name={`instruction${instructionsNumber}`}
      />
    </InstructionsPart>
  )
}

const InstructionsPart = styled.section`
  display: flex;
`
const InstructionsNumber = styled.p`
  margin-right: 8px;
  margin-top: 10px;
  font-weight: 300;
`

const InstructionsInput = styled.textarea`
  width: 300px;
  height: 140px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  font-weight: 200;
  padding-top: 4px;
  padding-left: 8px;
  border-radius: 4px;
  border: 1px solid #a09e9a;
  margin-bottom: 8px;
  margin-top: 8px;
`
