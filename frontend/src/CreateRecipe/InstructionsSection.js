import React, { useRef, useEffect } from 'react'
import styled from 'styled-components/macro'

export default function InstructionsSection({
  storeInput,
  instructionsNumber,
}) {
  const instructionsRef = useRef()
  useEffect(() => {
    instructionsRef.current.focus()
  }, [])

  return (
    <>
      {instructionsNumber < 1 || (
        <InstructionsPart>
          <InstructionsNumber>1. </InstructionsNumber>
          <InstructionsInput
            type="text"
            rows="5"
            id="instructions"
            placeholder="Description"
            onChange={storeInput}
            name="instruction1"
            minLength="5"
            maxLength="200"
            ref={instructionsRef}
          />
        </InstructionsPart>
      )}
      {instructionsNumber < 2 || (
        <InstructionsPart>
          <InstructionsNumber>2. </InstructionsNumber>
          <InstructionsInput
            type="text"
            rows="5"
            id="instructions"
            placeholder="Description"
            onChange={storeInput}
            name="instruction2"
            minLength="5"
            maxLength="200"
            ref={instructionsRef}
          />
        </InstructionsPart>
      )}
      {instructionsNumber < 3 || (
        <InstructionsPart>
          <InstructionsNumber>3. </InstructionsNumber>
          <InstructionsInput
            type="text"
            rows="5"
            id="instructions"
            placeholder="Description"
            onChange={storeInput}
            name="instruction3"
            minLength="5"
            maxLength="200"
            ref={instructionsRef}
          />
        </InstructionsPart>
      )}
      {instructionsNumber < 4 || (
        <InstructionsPart>
          <InstructionsNumber>4. </InstructionsNumber>
          <InstructionsInput
            type="text"
            rows="5"
            id="instructions"
            placeholder="Description"
            onChange={storeInput}
            name="instruction4"
            minLength="5"
            maxLength="200"
            ref={instructionsRef}
          />
        </InstructionsPart>
      )}
    </>
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
  background: #f2efe9;
  ::placeholder {
    font-style: italic;
    color: #a09e9a;
  }
`
