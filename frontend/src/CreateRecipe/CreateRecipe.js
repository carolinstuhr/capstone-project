import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import InstructionsSection from './InstructionsSection'
import { FaPlus } from 'react-icons/fa'
import { Redirect } from 'react-router-dom'
import IngredientsSection from './IngredientsSection'
import { db } from '../firebaseConfig'
import UploadImage from './UploadImage'

export default function CreateRecipe({ recipes, setRecipes }) {
  const [ingredientsNumber, setIngredientsNumber] = useState(1)
  const [instructionsNumber, setInstructionsNumber] = useState(1)
  const titleRef = useRef()

  const allInputs = { imageUrl: '' }
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)

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
          maxLength="10"
          data-testid="tag1"
        />
        <TagsInput
          type="text"
          id="tags"
          onChange={storeInput}
          name="tag2"
          value={formData.tag2}
          minLength="2"
          maxLength="10"
          data-testid="tag2"
        />
        <TagsInput
          type="text"
          id="tags"
          onChange={storeInput}
          name="tag3"
          value={formData.tag3}
          minLength="2"
          maxLength="10"
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
        <UploadImage setImageAsUrl={setImageAsUrl} imageAsUrl={imageAsUrl} />
        <ButtonWrapper>
          <ButtonStyled>Submit</ButtonStyled>
        </ButtonWrapper>
      </FormStyled>
    </MainStyled>
  )

  function saveNewRecipetoLocalStorage(event) {
    event.preventDefault()
    let ingredients = []
    for (let i = 1; i <= 20; i++) {
      let fieldName = 'ingredientsname' + i
      let fieldAmount = 'ingredientsamount' + i
      if (formData[fieldName]) {
        ingredients.push(formData[fieldAmount], formData[fieldName])
      }
    }
    let instructions = []
    for (let i = 1; i <= 20; i++) {
      let fieldName = 'instruction' + i
      if (formData[fieldName]) {
        instructions.push(formData[fieldName])
      }
    }
    let imageForUpload
    imageAsUrl.imageUrl === ''
      ? (imageForUpload =
          'https://firebasestorage.googleapis.com/v0/b/get-cooking.appspot.com/o/images%2Fdefault.png?alt=media&token=c009d7d1-ba9f-44b1-93ee-4c984c244a97')
      : (imageForUpload = imageAsUrl.imageUrl)

    let newRecipe = {
      title: formData.title,
      tags: [formData.tag1, formData.tag2, formData.tag3],
      image: imageForUpload,
      serving: formData.serving,
      timehour: formData.timehour,
      timeminutes: formData.timeminutes,
      ingredients: ingredients,
      instructions: instructions,
      isFavourite: false,
    }
    let newId
    db.collection('recipes')
      .add(newRecipe)
      .then((doc) => {
        newId = doc.id
      })
    setRecipes([...recipes, { ...newRecipe, id: newId }])
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
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.2),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.2),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.15);
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
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #f2efe9;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.1),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.2),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.15);
`
