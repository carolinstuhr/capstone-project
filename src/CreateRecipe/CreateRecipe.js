import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import InstructionsSection from './InstructionsSection'
import { Redirect } from 'react-router-dom'
import IngredientsSection from './IngredientsSection'
import { db } from '../firebaseConfig'
import UploadImage from './UploadImage'
import TagSection from './TagSection'
import CreateHeader from './CreateHeader'
import GridArea from '../GridArea'

export default function CreateRecipe({ recipes, setRecipes }) {
  const titleRef = useRef()
  useEffect(() => {
    titleRef.current.focus()
  }, [])

  const [formData, setFormData] = useState({
    title: '',
    serving: '',
    timehour: '',
    timeminutes: '',
  })
  const currentUser = localStorage.getItem('uid')
  const [ingredients, setIngredients] = useState([{ amount: '', name: '' }])
  const [instructions, setInstructions] = useState([''])
  const [tags, setTags] = useState(['', '', ''])

  const allInputs = { imageUrl: '' }
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)

  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  const [recipeSaved, setRecipeSaved] = useState(false)
  if (recipeSaved) {
    return <Redirect exact to="/" />
  }

  return (
    <GridArea>
      <CreateHeader>create</CreateHeader>
      <MainStyled>
        <form onSubmit={saveNewRecipetoLocalStorage}>
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
            className="create-title"
          />
          <LabelStyled htmlFor="tags">Tags</LabelStyled>
          <TagSection tags={tags} setTags={setTags} />
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
            className="create-serving"
          />
          <TimeLabel htmlFor="hour">Time</TimeLabel>
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
            className="create-timehour"
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
            className="create-timeminutes"
          />
          <DetailTimeLabel htmlFor="minute">minutes</DetailTimeLabel>
          <IngredientsLabel htmlFor="ingredients">Ingredients</IngredientsLabel>
          <IngredientsSection
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
          <InstructionsLabel htmlFor="instructions">
            Instructions
          </InstructionsLabel>
          <InstructionsSection
            instructions={instructions}
            setInstructions={setInstructions}
          />
          <UploadImage setImageAsUrl={setImageAsUrl} imageAsUrl={imageAsUrl} />
          <ButtonWrapper>
            <ButtonStyled disabled={isButtonDisabled}>Submit</ButtonStyled>
          </ButtonWrapper>
        </form>
      </MainStyled>
    </GridArea>
  )

  function saveNewRecipetoLocalStorage(event) {
    event.preventDefault()
    let tagsFiltered = tags.filter((tag) => tag !== '')
    let timehour = formData.timehour.padStart(2, '0')
    let timeminutes = formData.timeminutes.padStart(2, '0')
    let imageForUpload
    imageAsUrl.imageUrl === ''
      ? (imageForUpload =
          'https://firebasestorage.googleapis.com/v0/b/get-cooking.appspot.com/o/images%2Fdefault.png?alt=media&token=c009d7d1-ba9f-44b1-93ee-4c984c244a97')
      : (imageForUpload = imageAsUrl.imageUrl)

    let newRecipe = {
      title: formData.title,
      tags: tagsFiltered,
      image: imageForUpload,
      serving: formData.serving,
      timehour: timehour,
      timeminutes: timeminutes,
      ingredients: ingredients,
      instructions: instructions,
      isFavourite: false,
      userId: currentUser,
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
    setIsButtonDisabled(false)
  }
}

const MainStyled = styled.main`
  padding-left: 20px;
`
const LabelStyled = styled.label`
  font-weight: 300;
  font-size: 20px;
`
const InputStyled = styled.input`
  font-size: 14px;
  padding-left: 4px;
  color: var(--primary);
  background: var(--input-background);
`

const TitleInput = styled(InputStyled)`
  display: block;
  width: 200px;
  height: 28px;
  margin-bottom: 22px;
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
  font-size: 18px;
  font-weight: 400;
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  color: var(--primary-background);
  background: ${(props) =>
    props.isButtonDisabled ? 'rgba(81, 79, 75, 0.7)' : 'var(--primary)'};
`
