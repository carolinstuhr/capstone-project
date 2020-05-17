import React, { useState } from 'react'
import styled from 'styled-components/macro'
import LeftArrow from '../images/left-arrow.svg'
import FavouritesBookmark from './FavouritesBookmark'
import { Link, useRouteMatch } from 'react-router-dom'
import { db } from '../firebaseConfig'

export default function RecipeDetails({ recipes, previousPage }) {
  const match = useRouteMatch()
  const [recipeDetails, setRecipeDetails] = useState('ingredients')

  return (
    <MainStyled>
      {recipes.map(
        (recipe, index) =>
          recipe.id === match.params.id && (
            <>
              <ImageSectionStyled key={index}>
                {previousPage === 'All' && (
                  <Link exact to="/">
                    <ArrowIconStyled
                      src={LeftArrow}
                      alt="return Button"
                      onClick={() => setRecipeDetails('ingredients')}
                    />
                  </Link>
                )}
                {previousPage === 'Favourites' && (
                  <Link exact to="/favourites">
                    <ArrowIconStyled
                      src={LeftArrow}
                      alt="home Button"
                      onClick={() => setRecipeDetails('ingredients')}
                    />
                  </Link>
                )}
                <FavouritesBookmark
                  toggleFavourites={() => {
                    toggleHeartIcon(recipe)
                  }}
                  isFavourite={recipe.isFavourite}
                />
                <ImageStyled src={recipe.image} alt="Recipe" />
              </ImageSectionStyled>
              <RecipeInfoSectionStyled>
                <TitleStyled>{recipe.title}</TitleStyled>
                <InfoSection>
                  <span>serves: {recipe.serving}</span>
                  <span>
                    time: {recipe.timehour}:{recipe.timeminutes}
                  </span>
                </InfoSection>
                <DetailSelectionStyled>
                  <IngredientsSelectionSpan
                    onClick={() => setRecipeDetails('ingredients')}
                    recipeDetails={recipeDetails}
                  >
                    Ingredients
                  </IngredientsSelectionSpan>
                  <InstructionsSelectionSpan
                    onClick={() => setRecipeDetails('instructions')}
                    recipeDetails={recipeDetails}
                  >
                    Instructions
                  </InstructionsSelectionSpan>
                </DetailSelectionStyled>
              </RecipeInfoSectionStyled>
              {recipeDetails === 'ingredients' ? (
                <IngredientsSection>
                  {recipe.ingredients.map((ingredient, index) => (
                    <>
                      <StyledParagraph key={index}>
                        {ingredient.amount}
                      </StyledParagraph>
                      <StyledParagraph>{ingredient.name}</StyledParagraph>
                    </>
                  ))}
                </IngredientsSection>
              ) : (
                <InstructionsSection>
                  {recipe.instructions
                    .filter((instructions) => instructions)
                    .map((instruction, index) => (
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
    </MainStyled>
  )

  function toggleHeartIcon(recipe) {
    db.collection('recipes')
      .doc(recipe.id)
      .update({ isFavourite: !recipe.isFavourite })
      .then(() => console.log('Favourite updated!'))
      .catch((err) =>
        alert('Something went wrong. Please try again later.', err)
      )
  }
}
const MainStyled = styled.main`
  overflow-x: hidden;
  padding-top: 0;
`

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
  position: relative;
  bottom: 12px;
  padding: 12px;
  background: rgba(242, 239, 233, 1);
`

const TitleStyled = styled.h3`
  text-align: center;
  margin-top: 0;
  margin-bottom: 8px;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 20px;
  animation-duration: 1s;
  animation-name: slidein;
  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 100%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`
const InfoSection = styled.section`
  display: flex;
  padding-left: 12px;
  padding-right: 12px;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 12px;
  font-weight: 300;
  animation-duration: 1s;
  animation-name: slidein;
  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 100%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`

const DetailSelectionStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
  font-weight: 300;
  animation-duration: 1s;
  animation-name: slidein;
  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 100%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`
const IngredientsSelectionSpan = styled.span`
  padding: 4px;
  border: 2px solid white;
  border-right-width: 1px;
  cursor: default;
  background: ${(props) =>
    props.recipeDetails === 'ingredients'
      ? 'rgba(221, 216, 206, 1)'
      : 'rgba(242, 239, 233, 0.6)'};
`

const InstructionsSelectionSpan = styled.span`
  padding: 4px;
  border: 2px solid white;
  border-left-width: 1px;
  cursor: default;
  background: ${(props) =>
    props.recipeDetails === 'instructions'
      ? 'rgba(221, 216, 206, 1)'
      : 'rgba(242, 239, 233, 0.6)'};
`

const IngredientsSection = styled.section`
  padding-left: 12px;
  padding-right: 12px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  font-weight: 300;
  animation-duration: 1s;
  animation-name: slidein;
  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 100%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`

const InstructionsSection = styled.section`
  padding-left: 12px;
  padding-right: 8px;
  display: grid;
  grid-template-columns: 1fr 20fr;
  font-weight: 300;
  animation-duration: 1s;
  animation-name: slidein;
  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 100%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`

const StyledParagraph = styled.p`
  margin-top: 4px;
`
