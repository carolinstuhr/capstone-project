import React, { useRef, useEffect } from 'react'
import styled from 'styled-components/macro'

export default function InstructionsSection({
  storeInput,
  instructionsNumber,
  formData,
}) {
  const instructionsRef = useRef()

  useEffect(() => {
    instructionsRef.current.focus()
  }, [instructionsNumber])

  let instructions = []
  for (let i = 0; i < 20; i++) {
    instructions.push(
      <InstructionsPart>
        <InstructionsNumber>{i + 1}. </InstructionsNumber>
        <InstructionsInput
          type="text"
          rows="5"
          id="instructions"
          placeholder="Description"
          onChange={storeInput}
          name={`instruction${i + 1}`}
          minLength="5"
          maxLength="300"
          ref={instructionsRef}
          value={formData[`instruction${i + 1}`]}
        />
      </InstructionsPart>
    )
  }

  return (
    <>
      {instructionsNumber === 1 &&
        instructions.slice(0, 1).map((instruction) => instruction)}
      {instructionsNumber === 2 &&
        instructions.slice(0, 2).map((instruction) => instruction)}
      {instructionsNumber === 3 &&
        instructions.slice(0, 3).map((instruction) => instruction)}
      {instructionsNumber === 4 &&
        instructions.slice(0, 4).map((instruction) => instruction)}
      {instructionsNumber === 5 &&
        instructions.slice(0, 5).map((instruction) => instruction)}
      {instructionsNumber === 6 &&
        instructions.slice(0, 6).map((instruction) => instruction)}
      {instructionsNumber === 7 &&
        instructions.slice(0, 7).map((instruction) => instruction)}
      {instructionsNumber === 8 &&
        instructions.slice(0, 8).map((instruction) => instruction)}
      {instructionsNumber === 9 &&
        instructions.slice(0, 9).map((instruction) => instruction)}
      {instructionsNumber === 10 &&
        instructions.slice(0, 10).map((instruction) => instruction)}
      {instructionsNumber === 11 &&
        instructions.slice(0, 11).map((instruction) => instruction)}
      {instructionsNumber === 12 &&
        instructions.slice(0, 12).map((instruction) => instruction)}
      {instructionsNumber === 13 &&
        instructions.slice(0, 13).map((instruction) => instruction)}
      {instructionsNumber === 14 &&
        instructions.slice(0, 14).map((instruction) => instruction)}
      {instructionsNumber === 15 &&
        instructions.slice(0, 15).map((instruction) => instruction)}
      {instructionsNumber === 16 &&
        instructions.slice(0, 16).map((instruction) => instruction)}
      {instructionsNumber === 17 &&
        instructions.slice(0, 17).map((instruction) => instruction)}
      {instructionsNumber === 18 &&
        instructions.slice(0, 18).map((instruction) => instruction)}
      {instructionsNumber === 19 &&
        instructions.slice(0, 19).map((instruction) => instruction)}
      {instructionsNumber === 20 &&
        instructions.slice(0, 20).map((instruction) => instruction)}
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
