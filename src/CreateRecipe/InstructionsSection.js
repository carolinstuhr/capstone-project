import React, { useRef, useEffect } from 'react'
import styled from 'styled-components/macro'
import AdditionalLineButton from './AdditionalLineButton'

export default function InstructionsSection({ instructions, setInstructions }) {
  const instructionsRef = useRef()

  useEffect(() => {
    if (instructions.length > 0) {
      instructionsRef.current.focus()
    }
  }, [instructions.length])
  return (
    <>
      {instructions.map((instruction, index) => (
        <InstructionsPart>
          <InstructionsNumber>{index + 1}. </InstructionsNumber>
          <InstructionsInput
            type="text"
            rows="5"
            id="instructions"
            placeholder="Description"
            onChange={storeInput(index)}
            name="instruction"
            minLength="5"
            maxLength="300"
            ref={instructionsRef}
            value={instruction}
            className={`create_instructions${index}`}
          />
        </InstructionsPart>
      ))}
      <AdditionalLineButton onClick={addInstructionsLine} />
    </>
  )
  function storeInput(index) {
    return (event) => {
      const input = event.target
      setInstructions([
        ...instructions.slice(0, index),
        input.value,
        ...instructions.slice(index + 1),
      ])
    }
  }

  function addInstructionsLine() {
    setInstructions([...instructions, ''])
  }
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
  background: var(--input-background);
  ::placeholder {
    font-style: italic;
    color: var(--tertiary);
  }
`
