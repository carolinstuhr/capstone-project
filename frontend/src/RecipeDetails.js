import React from 'react'
import styled from 'styled-components/macro'
import recipeData from './RecipeList.json'
import LeftArrow from './images/left-arrow.svg'
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

  return (
    <main>
      {recipeData.map(
        (recipe) =>
          recipe.id === recipeID && (
            <>
              <ImageSectionStyled key={recipe.id}>
                <Link exact to="/">
                  <ArrowImageStyled src={LeftArrow} alt="home Button" />
                </Link>
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
                  <IngredientsSpan
                    onClick={displayIngredients}
                    recipeDetails={recipeDetails}
                  >
                    Ingredients
                  </IngredientsSpan>
                  <InstructionsSpan
                    onClick={displayInstructions}
                    recipeDetails={recipeDetails}
                  >
                    Instructions
                  </InstructionsSpan>
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
}

const ImageSectionStyled = styled.section`
  height: 288px;
  position: relative;
`

const ArrowImageStyled = styled.img`
  background: rgba(242, 239, 233, 0.6);
  border-radius: 4px;
  hight: 28px;
  width: 28px;
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
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  padding-bottom: 8px;
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
  margin-bottom: 16px;
  font-weight: 300;
`

const DetailSelectionStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 8px;
  font-weight: 300;
`
const IngredientsSpan = styled.span`
  text-decoration: ${(props) =>
    props.recipeDetails === 'ingredients' ? 'underline' : 'none'};
`

const InstructionsSpan = styled.span`
  text-decoration: ${(props) =>
    props.recipeDetails === 'instructions' ? 'underline' : 'none'};
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
