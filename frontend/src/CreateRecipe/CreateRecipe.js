import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import InstructionsSection from './InstructionsSection'
import { FaPlus } from 'react-icons/fa'
import { Redirect } from 'react-router-dom'
import IngredientsSection from './IngredientsSection'

export default function CreateRecipe({ recipes, setRecipes }) {
  const [ingredientsNumber, setIngredientsNumber] = useState(1)
  const [instructionsNumber, setInstructionsNumber] = useState(1)
  const titleRef = useRef()

  useEffect(() => {
    titleRef.current.focus()
  }, [])
  const [formData, setFormData] = useState({
    title: '',
    tag1: '',
    tag2: '',
    tag3: '',
    serving: '',
    timehour: '',
    timeminutes: '',
    ingredientsamount1: '',
    ingredientsamount2: '',
    ingredientsamount3: '',
    ingredientsamount4: '',
    ingredientsamount5: '',
    ingredientsamount6: '',
    ingredientsamount7: '',
    ingredientsamount8: '',
    ingredientsamount9: '',
    ingredientsamount10: '',
    ingredientsamount11: '',
    ingredientsamount12: '',
    ingredientsamount13: '',
    ingredientsamount14: '',
    ingredientsamount15: '',
    ingredientsamount16: '',
    ingredientsamount17: '',
    ingredientsamount18: '',
    ingredientsamount19: '',
    ingredientsamount20: '',
    ingredientsname1: '',
    ingredientsname2: '',
    ingredientsname3: '',
    ingredientsname4: '',
    ingredientsname5: '',
    ingredientsname6: '',
    ingredientsname7: '',
    ingredientsname8: '',
    ingredientsname9: '',
    ingredientsname10: '',
    ingredientsname11: '',
    ingredientsname12: '',
    ingredientsname13: '',
    ingredientsname14: '',
    ingredientsname15: '',
    ingredientsname16: '',
    ingredientsname17: '',
    ingredientsname18: '',
    ingredientsname19: '',
    ingredientsname20: '',
    instruction1: '',
    instruction2: '',
    instruction3: '',
    instruction4: '',
    instruction5: '',
    instruction6: '',
    instruction7: '',
    instruction9: '',
    instruction10: '',
    instruction11: '',
    instruction12: '',
    instruction13: '',
    instruction14: '',
    instruction15: '',
    instruction16: '',
    instruction17: '',
    instruction18: '',
    instruction19: '',
    instruction20: '',
  })
  const [recipeSaved, setRecipeSaved] = useState(false)
  if (recipeSaved === true) {
    return <Redirect exact to="/" />
  }

  return (
    <MainStyled>
      <FormStyled onSubmit={saveNewRecipetoLocalStorage}>
        <LabelStyled htmlFor="title">Title</LabelStyled>
        <TitleInput
          type="text"
          name="title"
          placeholder="Title of Recipe..."
          id="title"
          onChange={storeInput}
          value={formData.title}
          minLength="2"
          maxLength="40"
          ref={titleRef}
          required
        />
        <LabelStyled htmlFor="tags">Tags</LabelStyled>
        <TagsInput
          type="text"
          id="tags"
          onChange={storeInput}
          name="tag1"
          value={formData.tag1}
          minLength="2"
          maxLength="15"
          data-testid="tag1"
        />
        <TagsInput
          type="text"
          id="tags"
          onChange={storeInput}
          name="tag2"
          value={formData.tag2}
          minLength="2"
          maxLength="15"
          data-testid="tag2"
        />
        <TagsInput
          type="text"
          id="tags"
          onChange={storeInput}
          name="tag3"
          value={formData.tag3}
          minLength="2"
          maxLength="15"
          data-testid="tag3"
        />
        <ServingsLabel htmlFor="portion">Servings</ServingsLabel>
        <ServingsInput
          type="number"
          id="portion"
          onChange={storeInput}
          name="serving"
          value={formData.serving}
          min="1"
          maxLength="2"
          placeholder="1"
          required
        />
        <TimeLabel htmlFor="">Time</TimeLabel>
        <HourInput
          type="number"
          id="hour"
          onChange={storeInput}
          name="timehour"
          value={formData.timehour}
          maxLength="2"
          min="0"
          required
          data-testid="hour"
        />
        <DetailTimeLabel htmlFor="hour">hours</DetailTimeLabel>
        <MinutesInput
          type="number"
          id="minute"
          onChange={storeInput}
          name="timeminutes"
          value={formData.timeminutes}
          step="10"
          maxLength="2"
          min="0"
          max="60"
          required
          data-testid="minute"
        />
        <DetailTimeLabel htmlFor="minute">minutes</DetailTimeLabel>
        <IngredientsLabel htmlFor="ingredients">Ingredients</IngredientsLabel>
        <IngredientsSection
          ingredientsNumber={ingredientsNumber}
          storeInput={storeInput}
          formData={formData}
        />
        {ingredientsNumber < 20 || (
          <ParagraphStyled>Max amount reached</ParagraphStyled>
        )}
        {ingredientsNumber < 20 && (
          <IngredientsButton onClick={addIngredientsLine} />
        )}
        <InstructionsLabel htmlFor="instructions">
          Instructions
        </InstructionsLabel>
        <InstructionsSection
          storeInput={storeInput}
          instructionsNumber={instructionsNumber}
          formData={formData}
        />
        {instructionsNumber < 20 || (
          <ParagraphStyled>Max amount reached</ParagraphStyled>
        )}
        {instructionsNumber < 20 && (
          <InstructionsButton onClick={addInstructionsLine} />
        )}
        <ButtonWrapper>
          <ButtonStyled>Submit</ButtonStyled>
        </ButtonWrapper>
      </FormStyled>
    </MainStyled>
  )

  function saveNewRecipetoLocalStorage(event) {
    event.preventDefault()
    let ingredients = []
    if (formData.ingredientsname1) {
      ingredients.push(formData.ingredientsamount1, formData.ingredientsname1)
    }
    if (formData.ingredientsname2) {
      ingredients.push(formData.ingredientsamount2, formData.ingredientsname2)
    }
    if (formData.ingredientsname3) {
      ingredients.push(formData.ingredientsamount3, formData.ingredientsname3)
    }
    if (formData.ingredientsname4) {
      ingredients.push(formData.ingredientsamount4, formData.ingredientsname4)
    }
    if (formData.ingredientsname5) {
      ingredients.push(formData.ingredientsamount5, formData.ingredientsname5)
    }
    if (formData.ingredientsname6) {
      ingredients.push(formData.ingredientsamount6, formData.ingredientsname6)
    }
    if (formData.ingredientsname7) {
      ingredients.push(formData.ingredientsamount7, formData.ingredientsname7)
    }
    if (formData.ingredientsname8) {
      ingredients.push(formData.ingredientsamount8, formData.ingredientsname8)
    }
    if (formData.ingredientsname9) {
      ingredients.push(formData.ingredientsamount9, formData.ingredientsname9)
    }
    if (formData.ingredientsname10) {
      ingredients.push(formData.ingredientsamount10, formData.ingredientsname10)
    }
    if (formData.ingredientsname11) {
      ingredients.push(formData.ingredientsamount11, formData.ingredientsname11)
    }
    if (formData.ingredientsname12) {
      ingredients.push(formData.ingredientsamount12, formData.ingredientsname12)
    }
    if (formData.ingredientsname13) {
      ingredients.push(formData.ingredientsamount13, formData.ingredientsname13)
    }
    if (formData.ingredientsname14) {
      ingredients.push(formData.ingredientsamount14, formData.ingredientsname14)
    }
    if (formData.ingredientsname15) {
      ingredients.push(formData.ingredientsamount15, formData.ingredientsname15)
    }
    if (formData.ingredientsname16) {
      ingredients.push(formData.ingredientsamount16, formData.ingredientsname16)
    }
    if (formData.ingredientsname17) {
      ingredients.push(formData.ingredientsamount17, formData.ingredientsname17)
    }
    if (formData.ingredientsname18) {
      ingredients.push(formData.ingredientsamount18, formData.ingredientsname18)
    }
    if (formData.ingredientsname19) {
      ingredients.push(formData.ingredientsamount19, formData.ingredientsname19)
    }
    if (formData.ingredientsname20) {
      ingredients.push(formData.ingredientsamount20, formData.ingredientsname20)
    }
    let newRecipe = {
      id: recipes.length + 1,
      title: formData.title,
      tags: [formData.tag1, formData.tag2, formData.tag3],
      image: './images/default.png',
      serving: formData.serving,
      timehour: formData.timehour,
      timeminutes: formData.timeminutes,
      ingredients: ingredients,
      instructions: [
        formData.instruction1,
        formData.instruction2,
        formData.instruction3,
        formData.instruction4,
        formData.instruction5,
        formData.instruction6,
        formData.instruction7,
        formData.instruction8,
        formData.instruction9,
        formData.instruction10,
        formData.instruction11,
        formData.instruction12,
        formData.instruction13,
        formData.instruction14,
        formData.instruction15,
        formData.instruction16,
        formData.instruction17,
        formData.instruction18,
        formData.instruction19,
        formData.instruction20,
      ],
      isFavourite: true,
    }
    setRecipes([...recipes, newRecipe])
    setRecipeSaved(true)
  }

  function storeInput(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  function addIngredientsLine() {
    setIngredientsNumber(ingredientsNumber + 1)
  }

  function addInstructionsLine() {
    setInstructionsNumber(instructionsNumber + 1)
  }
}

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
`
const IngredientsButton = styled(FaPlus)`
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
`

const MainStyled = styled.main`
  margin-top: 18px;
`

const FormStyled = styled.form`
  margin-left: 12px;
`
const LabelStyled = styled.label`
  font-weight: 300;
  font-size: 20px;
`
const InputStyled = styled.input`
  font-weight: 200;
  font-size: 14px;
  padding-left: 4px;
  border-radius: 4px;
  border: 1px solid #a09e9a;
  color: #514f4b;
  font-family: 'Josefin Sans', sans-serif;
  background: #f2efe9;
  ::placeholder {
    font-style: italic;
    color: #a09e9a;
  }
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
const DetailTimeLabel = styled(LabelStyled)`
  font-size: 16px;
`
const HourInput = styled(InputStyled)`
  width: 40px;
  height: 28px;
  margin-top: 4px;
  margin-right: 4px;
`
const MinutesInput = styled(InputStyled)`
  width: 40px;
  height: 28px;
  margin-top: 4px;
  margin-left: 12px;
  margin-right: 4px;
`
const IngredientsLabel = styled(LabelStyled)`
  display: block;
  margin-top: 22px;
`

const ParagraphStyled = styled.p`
  margin-top: 4px;
  margin-bottom: 22px;
`

const InstructionsLabel = styled(LabelStyled)`
  display: block;
  margin-top: 12px;
`

const ButtonWrapper = styled.div`
  position: relative;
  margin-bottom: 18px;
`

const ButtonStyled = styled.button`
  position: absolute;
  left: 33%;
  margin-top: 18px;
  margin-bottom: 18px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  background: #514f4b;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #514f4b;
  color: #f2efe9;
`
