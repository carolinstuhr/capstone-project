import React, { useRef, useEffect } from 'react'
import styled from 'styled-components/macro'
import { FaPlus } from 'react-icons/fa'

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
          />
        </InstructionsPart>
      ))}
      {console.log(instructions)}
      <InstructionsButton onClick={addInstructionsLine} />
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
  background: #f2efe9;
  ::placeholder {
    font-style: italic;
    color: #a09e9a;
  }
`
const InstructionsButton = styled(FaPlus)`
  height: 28px;
  width: 28px;
  z-index: 2;
  color: #514f4b;
  padding: 4px;
  background: #f2efe9;
  border: 1px solid #514f4b;
  border-radius: 24px;
  display: block;
  margin-left: 40%;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.2),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.2),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.15);
`
