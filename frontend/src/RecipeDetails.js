import React, { useState } from 'react'
import styled from 'styled-components/macro'
import recipeData from './RecipeList.json'
import LeftArrow from './images/left-arrow.svg'
import FavouritesBookmark from './FavouritesBookmark'
import { Link } from 'react-router-dom'

export default function RecipeDetails({
  displayIngredients,
  displayInstructions,
  recipeDetails,
}) {
  function loadFromStorage(name) {
    try {
      return JSON.parse(localStorage.getItem(name))
    } catch (error) {
      console.log(error.message)
    }
  }
  const recipeID = loadFromStorage('recipeID')

  const [recipes, setRecipeData] = useState(recipeData)

  return (
    <main>
      {recipes.map(
        (recipe, index) =>
          recipe.id === recipeID && (
            <>
              {console.log(recipe.isFavourite)}
              <ImageSectionStyled key={recipe.id}>
                <Link exact to="/">
                  <ArrowIconStyled
                    src={LeftArrow}
                    alt="home Button"
                    onClick={displayIngredients}
                  />
                </Link>
                <FavouritesBookmark
                  toggleFavourites={() => {
                    toggleHeartIcon(index)
                  }}
                  isFavourite={recipe.isFavourite}
                />
                <ImageStyled src={recipe.image} alt="Recipe" />
              </ImageSectionStyled>
              <RecipeInfoSectionStyled>
                <TitleStyled key={recipe.id}>{recipe.title}</TitleStyled>
                <InfoSection>
                  <span>serves: {recipe.serving}</span>
                  <span>
                    time: {recipe.timehour}:{recipe.timeminutes}
                  </span>
                </InfoSection>
                <DetailSelectionStyled>
                  <IngredientsSelectionSpan
                    onClick={displayIngredients}
                    recipeDetails={recipeDetails}
                  >
                    Ingredients
                  </IngredientsSelectionSpan>
                  <InstructionsSelectionSpan
                    onClick={displayInstructions}
                    recipeDetails={recipeDetails}
                  >
                    Instructions
                  </InstructionsSelectionSpan>
                </DetailSelectionStyled>
              </RecipeInfoSectionStyled>
              {recipeDetails === 'ingredients' ? (
                <IngredientsSection>
                  {recipe.ingredients.map((ingredient, index) => (
                    <StyledParagraph key={index}>{ingredient}</StyledParagraph>
                  ))}
                </IngredientsSection>
              ) : (
                <InstructionsSection>
                  {recipe.instructions.map((instruction, index) => (
                    <>
                      <StyledParagraph key={index}>
                        {index + 1}.
                      </StyledParagraph>
                      <StyledParagraph>{instruction}</StyledParagraph>
                    </>
                  ))}
                </InstructionsSection>
              )}
            </>
          )
      )}
    </main>
  )
  function toggleHeartIcon(selectedIndex) {
    const recipe = recipes[selectedIndex]
    setRecipeData([
      ...recipes.slice(0, selectedIndex),
      { ...recipe, isFavourite: !recipe.isFavourite },
      ...recipes.slice(selectedIndex + 1),
    ])
  }
}

const ImageSectionStyled = styled.section`
  height: 288px;
  position: relative;
`

const ArrowIconStyled = styled.img`
  background: rgba(242, 239, 233, 0.6);
  border-radius: 4px;
  hight: 32px;
  width: 32px;
  position: absolute;
  left: 12px;
  top: 12px;
  padding: 4px;
`

const ImageStyled = styled.img`
  height: 288px;
  width: 100%;
  object-fit: cover;
`

const RecipeInfoSectionStyled = styled.section`
  border-radius: 8px;
  background: lightblue;
  position: relative;
  bottom: 12px;
  padding: 12px;
  font-family: 'Josefin Sans', sans-serif;
  background: rgba(242, 239, 233, 1);
`

const TitleStyled = styled.h3`
  text-align: center;
  margin-top: 0;
  margin-bottom: 8px;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 20px;
`
const InfoSection = styled.section`
  display: flex;
  margin-left: 12px;
  margin-right: 12px;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 12px;
  font-weight: 300;
`

const DetailSelectionStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
  font-weight: 300;
`
const IngredientsSelectionSpan = styled.span`
  padding: 4px;
  border: 2px solid white;
  border-right-width: 1px;
  background: ${(props) =>
    props.recipeDetails === 'ingredients'
      ? 'rgba(221, 216, 206, 1)'
      : 'rgba(242, 239, 233, 0.6)'};
`

const InstructionsSelectionSpan = styled.span`
  padding: 4px;
  border: 2px solid white;
  border-left-width: 1px;
  background: ${(props) =>
    props.recipeDetails === 'instructions'
      ? 'rgba(221, 216, 206, 1)'
      : 'rgba(242, 239, 233, 0.6)'};
`

const IngredientsSection = styled.section`
  padding-left: 12px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 200;
`

const InstructionsSection = styled.section`
  padding-left: 12px;
  display: grid;
  grid-template-columns: 1fr 20fr;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 200;
`

const StyledParagraph = styled.p`
  margin-top: 4px;
`
