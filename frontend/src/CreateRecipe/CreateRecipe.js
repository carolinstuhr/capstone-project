import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import InstructionsSection from './InstructionsSection'
import { FaPlus } from 'react-icons/fa'
import IngredientsSection from './IngredientsSection'

export default function CreateRecipe() {
  const [ingredientsNumber, setIngredientsNumber] = useState(1)
  const [instructionsNumber, setInstructionsNumber] = useState(1)
  useEffect(() => {
    setInstructionsNumber(2)
    setIngredientsNumber(2)
  }, [])
  const [formData, setFormData] = useState({
    // title: '',
    // tag1: '',
    // tag2: '',
    // tag3: '',
    // serving: '',
    // timehour: '',
    // timeminutes: '',
    // ['ingredientsamount' + ingredientsNumber]: '',
    // ['ingredientsname' + ingredientsNumber]: '',
    // ['instruction' + instructionsNumber]: '',
  })

  const [ingredients, setIngredients] = useState([
    <IngredientsSection
      storeInput={storeInput}
      ingredientsNumber={ingredientsNumber}
      formData={formData}
    />,
  ])
  const [instructions, setInstructions] = useState([
    <InstructionsSection
      storeInput={storeInput}
      formData={formData}
      instructionsNumber={instructionsNumber}
    />,
  ])
  return (
    <MainStyled>
      <FormStyled>
        <LabelStyled htmlFor="title">Title</LabelStyled>
        <TitleInput
          type="text"
          name="title"
          placeholder="Title of Recipe..."
          id="title"
          onChange={storeInput}
          value={formData.title}
        />
        <LabelStyled htmlFor="tags">Description Tags</LabelStyled>
        <TagsInput
          type="text"
          id="tags"
          onChange={storeInput}
          name="tag1"
          value={formData.tag1}
        />
        <TagsInput
          type="text"
          id="tags"
          onChange={storeInput}
          name="tag2"
          value={formData.tag2}
        />
        <TagsInput
          type="text"
          id="tags"
          onChange={storeInput}
          name="tag3"
          value={formData.tag3}
        />
        <ServingsLabel htmlFor="portion">Servings</ServingsLabel>
        <ServingsInput
          type="text"
          id="portion"
          onChange={storeInput}
          name="serving"
          value={formData.serving}
        />
        <TimeLabel htmlFor="">Time</TimeLabel>
        <HourInput
          type="text"
          id="hour"
          onChange={storeInput}
          name="timehour"
          value={formData.timehour}
        />
        <LabelStyled htmlFor="hour">hours</LabelStyled>
        <MinutesInput
          type="text"
          id="minute"
          onChange={storeInput}
          name="timeminutes"
          value={formData.timeminutes}
        />
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
        {console.log(formData)}
        {console.log(instructionsNumber)}
      </FormStyled>
    </MainStyled>
  )
  function storeInput(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  function addIngredientsLine() {
    setIngredientsNumber(ingredientsNumber + 1)
    setIngredients([
      ...ingredients,
      <IngredientsSection
        storeInput={storeInput}
        ingredientsNumber={ingredientsNumber}
        formData={formData}
      />,
    ])
  }
  function addInstructionsLine() {
    setInstructionsNumber(instructionsNumber + 1)
    setInstructions([
      ...instructions,
      <InstructionsSection
        storeInput={storeInput}
        instructionsNumber={instructionsNumber}
        formData={formData}
      />,
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

const ServingsLabel = styled(LabelStyled)`
  display: block;
  margin-top: 18px;
`

const ServingsInput = styled(InputStyled)`
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
