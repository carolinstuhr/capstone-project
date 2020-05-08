import React, { useState } from 'react'
import styled from 'styled-components/macro'
import InstructionsSection from './InstructionsSection'
import { FaPlus } from 'react-icons/fa'
import IngredientsSection from './IngredientsSection'

export default function CreateRecipe() {
  const [formData, setFormData] = useState('')
  const [number, setNumber] = useState(1)
  const [ingredients, setIngredients] = useState([
    <IngredientsSection storeInput={storeInput} />,
  ])
  const [instructions, setInstructions] = useState([
    <InstructionsSection storeInput={storeInput} number={number} />,
  ])
  return (
    <MainStyled>
      <FormStyled>
        <LabelStyled htmlFor="title">Title</LabelStyled>
        <TitleInput
          type="text"
          name=""
          placeholder="Title of Recipe..."
          id="title"
          onInput={storeInput}
        />
        <LabelStyled htmlFor="tags">Description Tags</LabelStyled>
        <TagsInput type="text" id="tags" onInput={storeInput} />
        <TagsInput type="text" id="tags" onInput={storeInput} />
        <TagsInput type="text" id="tags" onInput={storeInput} />
        <PortionLabel htmlFor="portion">Portion Size</PortionLabel>
        <PortionInput type="text" id="portion" onInput={storeInput} />
        <TimeLabel htmlFor="">Time</TimeLabel>
        <HourInput type="text" id="hour" onInput={storeInput} />
        <LabelStyled htmlFor="hour">hours</LabelStyled>
        <MinutesInput type="text" id="minute" onInput={storeInput} />
        <LabelStyled htmlFor="minute">minutes</LabelStyled>
        <IngredientsLabel htmlFor="ingredients">Ingredients</IngredientsLabel>
        {ingredients}
        <IngredientsButton onClick={addIngredientsLine} />
        <InstructionsLabel htmlFor="instructions">
          Instructions
        </InstructionsLabel>
        {instructions}
        <InstructionsButton onClick={addInstructionsLine} />
        <ButtonWrapper>
          <ButtonStyled>Submit</ButtonStyled>
        </ButtonWrapper>
      </FormStyled>
    </MainStyled>
  )
  function storeInput(event) {
    setFormData([...formData, ([event.target.name] = event.target.vale)])
  }
  function addIngredientsLine() {
    setIngredients([
      ...ingredients,
      <IngredientsSection storeInput={storeInput} />,
    ])
  }
  function addInstructionsLine() {
    setNumber(number + 1)
    setInstructions([
      ...instructions,
      <InstructionsSection storeInput={storeInput} number={number} />,
    ])
  }
}
const InstructionsButton = styled(FaPlus)`
  height: 28px;
  width: 28px;
  z-index: 2;
  color: #514f4b;
  padding: 4px;
  background: white;
  border: 2px solid #514f4b;
  border-radius: 24px;
  display: block;
  margin-left: 40%;
`
const IngredientsButton = styled(FaPlus)`
  height: 28px;
  width: 28px;
  z-index: 2;
  color: #514f4b;
  padding: 4px;
  background: white;
  border: 2px solid #514f4b;
  border-radius: 24px;
  display: block;
  margin-left: 40%;
`

const MainStyled = styled.main`
  margin-top: 18px;
`

const FormStyled = styled.form`
  margin-left: 12px;
`
const LabelStyled = styled.label`
  font-weight: 300;
`
const InputStyled = styled.input`
  font-weight: 200;
  font-size: 14px;
  padding-left: 4px;
  border-radius: 4px;
  border: 1px solid #a09e9a;
`
const TitleInput = styled(InputStyled)`
  display: block;
  width: 200px;
  height: 28px;
  margin-bottom: 22px;
  margin-top: 4px;
`
const TagsInput = styled(InputStyled)`
  display: block;
  width: 200px;
  height: 28px;
  margin-bottom: 4px;
  margin-top: 4px;
`

const PortionLabel = styled(LabelStyled)`
  display: block;
  margin-top: 18px;
`

const PortionInput = styled(InputStyled)`
  display: block;
  width: 32px;
  height: 28px;
  margin-bottom: 22px;
  margin-top: 4px;
`
const TimeLabel = styled(LabelStyled)`
  display: block;
`
const HourInput = styled(InputStyled)`
  width: 32px;
  height: 28px;
  margin-bottom: 12px;
  margin-top: 4px;
  margin-right: 4px;
`
const MinutesInput = styled(InputStyled)`
  width: 32px;
  height: 28px;
  margin-bottom: 12px;
  margin-top: 4px;
  margin-left: 12px;
  margin-right: 4px;
`
const IngredientsLabel = styled(LabelStyled)`
  display: block;
`

const InstructionsLabel = styled(LabelStyled)`
  display: block;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
`

const ButtonStyled = styled.button`
  display: block;
  margin-top: 18px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  background: rgba(221, 216, 206, 1);
  padding: 4px 8px;
  border-radius: 4px;
  color: #514f4b;
`
