import React, { useState } from 'react'
import styled from 'styled-components'
import recipeData from './RecipeList.json'

export default function RecipeDetails() {
  const [recipeDetails, setRecipeDetails] = useState('ingredients')

  function loadFromStorage(name) {
    try {
      return JSON.parse(localStorage.getItem(name))
    } catch (error) {
      console.log(error.message)
    }
  }
  const recipeID = loadFromStorage('recipeID')

  return (
    <main>
      {recipeData.map(
        (recipe) =>
          recipe.id === recipeID && (
            <>
              <ImageSectionStyled key={recipe.id}>
                <ImageStyled src={recipe.image} alt="Recipe" />
              </ImageSectionStyled>
              <RecipeInfoSectionStyled>
                <TitleStyled key={recipe.id}>{recipe.title}</TitleStyled>
                <span>serves {recipe.serving}</span>
                <SpanTimeStyled>
                  {recipe.timehour} hours {recipe.timeminutes} mins
                </SpanTimeStyled>
                <DetailSelectionStyled>
                  <span onClick={displayIngredients}>Ingredients</span>
                  <span onClick={displayInstructions}>Instructions</span>
                </DetailSelectionStyled>
              </RecipeInfoSectionStyled>
              {recipeDetails === 'ingredients' ? (
                <IngredientsSection>
                  {recipe.ingredients.map((ingredient, index) => (
                    <p key={index}>{ingredient}</p>
                  ))}
                </IngredientsSection>
              ) : (
                <InstructionsSection>
                  {recipe.instructions.map((instruction, index) => (
                    <p key={index}>
                      {index + 1}. {instruction}
                    </p>
                  ))}
                </InstructionsSection>
              )}
            </>
          )
      )}
    </main>
  )

  function displayIngredients() {
    setRecipeDetails('ingredients')
  }
  function displayInstructions() {
    setRecipeDetails('intructions')
  }
}

const ImageSectionStyled = styled.section`
  height: 250px;
`

const ImageStyled = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
`

const RecipeInfoSectionStyled = styled.section`
  padding-left: 8px;
  padding-right: 8px;
`

const TitleStyled = styled.h3`
  text-align: center;
`

const SpanTimeStyled = styled.span`
  float: right;
`
const DetailSelectionStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 8px;
`

const IngredientsSection = styled.section`
  padding-left: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const InstructionsSection = styled.section`
  padding-left: 8px;
`
