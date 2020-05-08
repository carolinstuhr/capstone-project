import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function CreateRecipe() {
  const [number, setNumber] = useState(1)
  return (
    <main>
      <FormStyled>
        <LabelStyled htmlFor="title">Title</LabelStyled>
        <TitleInput
          type="text"
          name=""
          placeholder="Title of Recipe..."
          id="title"
        />
        <LabelStyled htmlFor="tags">Description Tags</LabelStyled>
        <TagsInput type="text" id="tags" />
        <TagsInput type="text" id="tags" />
        <TagsInput type="text" id="tags" />
        <PortionLabel htmlFor="portion">Portion Size</PortionLabel>
        <PortionInput type="text" id="portion" />
        <TimeLabel htmlFor="">Time</TimeLabel>
        <HourInput type="text" id="hour" />
        <LabelStyled htmlFor="hour">hours</LabelStyled>
        <MinutesInput type="text" id="minute" />
        <LabelStyled htmlFor="minute">minutes</LabelStyled>
        <IngredientsLabel htmlFor="ingredients">Ingredients</IngredientsLabel>
        <IngredientsAmountInput type="text" id="ingredients" />
        <IngredientsNameInput type="text" id="ingredients" />
        <InstructionsLabel htmlFor="instructions">
          Instructions
        </InstructionsLabel>
        <InstructionsSection>
          <InstructionsNumber>{number}. </InstructionsNumber>
          <InstructionsInput
            rows="5"
            id="instructions"
            placeholder="Description"
          />
        </InstructionsSection>
        <ButtonStyled>Submit</ButtonStyled>
      </FormStyled>
    </main>
  )
}

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
const IngredientsAmountInput = styled(InputStyled)`
  width: 40px;
  height: 28px;
  margin-bottom: 22px;
  margin-top: 4px;
  margin-right: 4px;
`
const IngredientsNameInput = styled(InputStyled)`
  width: 270px;
  height: 28px;
  margin-bottom: 22px;
  margin-top: 4px;
`
const InstructionsLabel = styled(LabelStyled)`
  display: block;
`
const InstructionsSection = styled.section`
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
  font-size: 16px;
  font-weight: 200;
  padding-top: 4px;
  padding-left: 8px;
  border-radius: 4px;
  border: 1px solid #a09e9a;
  margin-bottom: 12px;
  margin-top: 8px;
  rows: 5;
  vertical-align: top;
`

const ButtonStyled = styled.button`
  display: block;
  margin-top: 30px;
`
