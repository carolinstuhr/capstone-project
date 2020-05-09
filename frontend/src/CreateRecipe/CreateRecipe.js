import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import InstructionsSection from './InstructionsSection'
import { FaPlus } from 'react-icons/fa'
import IngredientsSection from './IngredientsSection'

export default function CreateRecipe({ recipes, setRecipes }) {
  const [ingredientsNumber, setIngredientsNumber] = useState(1)
  const [instructionsNumber, setInstructionsNumber] = useState(1)
  useEffect(() => {
    setInstructionsNumber(2)
    setIngredientsNumber(2)
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
    instruction1: '',
    instruction2: '',
    instruction3: '',
    instruction4: '',
    instruction5: '',
    instruction6: '',
    instruction7: '',
    instruction9: '',
    instruction10: '',
  })

  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState([])

  const [maxIngredients, setMaxIngredients] = useState(false)
  const [maxInstructions, setMaxInstructions] = useState(false)

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
        />
        <LabelStyled htmlFor="tags">Description Tags</LabelStyled>
        <TagsInput
          type="text"
          id="tags"
          onChange={storeInput}
          name="tag1"
          value={formData.tag1}
          minLength="2"
          maxLength="15"
        />
        <TagsInput
          type="text"
          id="tags"
          onChange={storeInput}
          name="tag2"
          value={formData.tag2}
          minLength="2"
          maxLength="15"
        />
        <TagsInput
          type="text"
          id="tags"
          onChange={storeInput}
          name="tag3"
          value={formData.tag3}
          minLength="2"
          maxLength="15"
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
        />
        <TimeLabel htmlFor="">Time</TimeLabel>
        <HourInput
          type="number"
          id="hour"
          onChange={storeInput}
          name="timehour"
          value={formData.timehour}
          placeholder="0"
          maxLength="2"
        />
        <LabelStyled htmlFor="hour">hours</LabelStyled>
        <MinutesInput
          type="text"
          id="minute"
          onChange={storeInput}
          name="timeminutes"
          value={formData.timeminutes}
          placeholder="0"
          maxLength="2"
        />
        <LabelStyled htmlFor="minute">minutes</LabelStyled>
        <IngredientsLabel htmlFor="ingredients">Ingredients</IngredientsLabel>
        <IngredientsSection
          storeInput={storeInput}
          ingredientsNumber={1}
          formData={formData}
        />
        {ingredients}
        {maxIngredients && <p>Max amount reached</p>}
        {maxIngredients || <IngredientsButton onClick={addIngredientsLine} />}
        <InstructionsLabel htmlFor="instructions">
          Instructions
        </InstructionsLabel>
        <InstructionsSection
          storeInput={storeInput}
          formData={formData}
          instructionsNumber={1}
        />
        {instructions}
        {maxInstructions && <p>Max amount reached</p>}
        {maxInstructions || (
          <InstructionsButton onClick={addInstructionsLine} />
        )}
        <ButtonWrapper>
          <ButtonStyled>Submit</ButtonStyled>
        </ButtonWrapper>
        {console.log(formData)}
        {console.log(instructionsNumber)}
      </FormStyled>
    </MainStyled>
  )
  function saveNewRecipetoLocalStorage(event) {
    event.preventDefault()
    let newRecipe = {
      id: recipes.length + 1,
      title: formData.title,
      tags: [formData.tag1, formData.tag2, formData.tag3],
      image: './images/default.png',
      timehour: formData.timehour,
      timeminutes: formData.timeminutes,
      ingredients: [
        formData.ingredientsamount1,
        formData.ingredientsname1,
        formData.ingredientsamount2,
        formData.ingredientsname2,
        formData.ingredientsamount3,
        formData.ingredientsname3,
        formData.ingredientsamount4,
        formData.ingredientsname4,
        formData.ingredientsamount5,
        formData.ingredientsname5,
        formData.ingredientsamount6,
        formData.ingredientsname6,
        formData.ingredientsamount7,
        formData.ingredientsname7,
        formData.ingredientsamount8,
        formData.ingredientsname8,
        formData.ingredientsamount9,
        formData.ingredientsname9,
        formData.ingredientsamount10,
        formData.ingredientsname10,
      ],
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
      ],
      isFavourite: true,
    }
    setRecipes([...recipes, newRecipe])
  }

  function storeInput(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  function addIngredientsLine() {
    setIngredientsNumber(ingredientsNumber + 1)
    return ingredients.length < 3
      ? setIngredients([
          ...ingredients,
          <IngredientsSection
            storeInput={storeInput}
            ingredientsNumber={ingredientsNumber}
            formData={formData}
          />,
        ])
      : setMaxIngredients(true) &
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
    return instructions.length < 3
      ? setInstructions([
          ...instructions,
          <InstructionsSection
            storeInput={storeInput}
            instructionsNumber={instructionsNumber}
            formData={formData}
          />,
        ])
      : setMaxInstructions(true) &
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
  font-family: 'Josefin Sans', sans-serif;
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
  margin-top: 4px;
  margin-right: 4px;
`
const MinutesInput = styled(InputStyled)`
  width: 32px;
  height: 28px;
  margin-top: 4px;
  margin-left: 12px;
  margin-right: 4px;
`
const IngredientsLabel = styled(LabelStyled)`
  display: block;
  margin-top: 22px;
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
  left: 32%;
  margin-top: 18px;
  margin-bottom: 18px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  background: rgba(221, 216, 206, 1);
  padding: 4px 8px;
  border-radius: 4px;
  color: #514f4b;
`
