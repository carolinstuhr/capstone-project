import React, { useState } from 'react'
import styled from 'styled-components/macro'
import LeftArrow from '../images/left-arrow.svg'
import FavouritesBookmark from './FavouritesBookmark'
import { Link, useParams } from 'react-router-dom'
import { db } from '../firebaseConfig'

export default function RecipeDetails({ user, recipes, previousPage }) {
  const params = useParams()

  const [recipeDetails, setRecipeDetails] = useState('ingredients')

  let recipe = recipes && recipes.find((recipe) => recipe.id === params.id)

  const [isFavourite, setIsFavourite] = useState(
    user && user.favourites.some((favourite) => favourite === recipe.id)
  )
  let favouriteCheck =
    user && user.favourites.some((favourite) => favourite === recipe.id)

  return (
    <>
      {recipe && (
        <MainStyled>
          <ImageSectionStyled>
            {previousPage === 'All' && (
              <Link exact to="/">
                <ArrowIconStyled
                  src={LeftArrow}
                  alt="return to all recipes"
                  onClick={() => setRecipeDetails('ingredients')}
                  className="return-all"
                />
              </Link>
            )}
            {previousPage === 'Favourites' && (
              <Link exact to="/favourites">
                <ArrowIconStyled
                  src={LeftArrow}
                  alt="return to favourite recipes"
                  onClick={() => setRecipeDetails('ingredients')}
                  className="returnFavourites"
                />
              </Link>
            )}
            {previousPage === 'Profile' && (
              <Link to="/profile">
                <ArrowIconStyled
                  src={LeftArrow}
                  alt="return to profile page"
                  onClick={() => setRecipeDetails('ingredients')}
                  className="return-profile"
                />
              </Link>
            )}
            <FavouritesBookmark
              onClick={() => {
                toggleHeartIcon(recipe)
              }}
              isFavourite={isFavourite || favouriteCheck}
              alt="bookmark recipe"
              className="heart-icon"
            />
            <ImageStyled src={recipe.image} alt="" />
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
                className="ingredients-selector"
              >
                Ingredients
              </IngredientsSelectionSpan>
              <InstructionsSelectionSpan
                onClick={() => setRecipeDetails('instructions')}
                recipeDetails={recipeDetails}
                data-testid="instructionsButton"
                className="instructions-selector"
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
              {recipe.instructions.map((instruction, index) => (
                <>
                  <StyledParagraph key={index}>{index + 1}.</StyledParagraph>
                  <StyledParagraph>{instruction}</StyledParagraph>
                </>
              ))}
            </InstructionsSection>
          )}
        </MainStyled>
      )}
    </>
  )
  function toggleHeartIcon(recipe) {
    let index = user.favourites.indexOf(recipe.id)
    index >= 0
      ? db
          .collection('users')
          .doc(user.id)
          .update({
            favourites: [
              ...user.favourites.slice(0, index),
              ...user.favourites.slice(index + 1),
            ],
          })
          .then(() => {
            setIsFavourite(false)
          })
          .catch((err) =>
            alert('Something went wrong. Please try again later.', err)
          )
      : db
          .collection('users')
          .doc(user.id)
          .update({ favourites: [...user.favourites, recipe.id] })
          .then(() => {
            setIsFavourite(true)
          })
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
  background: var(--primary-backgroundopaque);
  border-radius: 4px;
  height: 32px;
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
  background: var(--primary-background);
`

const TitleStyled = styled.h3`
  text-align: center;
  margin-top: 0;
  margin-bottom: 8px;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 22px;
  animation-duration: 1s;
  animation-duration: 2s;
  animation-name: fadein;
  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 100;
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
  animation-duration: 2s;
  animation-name: fadein;
  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 100;
    }
  }
`

const DetailSelectionStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
  font-weight: 300;
  animation-duration: 1s;
  animation-duration: 2s;
  animation-name: fadein;
  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 100;
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
      ? 'var(--primary-background)'
      : 'rgba(255, 255, 255, 0.4)'};
  color: ${(props) =>
    props.recipeDetails === 'ingredients'
      ? 'var(--primary)'
      : 'var(--primary-opaque)'};
`

const InstructionsSelectionSpan = styled.span`
  padding: 4px;
  border: 2px solid white;
  border-left-width: 1px;
  cursor: default;
  background: ${(props) =>
    props.recipeDetails === 'instructions'
      ? 'var(--primary-background)'
      : 'rgba(255, 255, 255, 0.4)'};
  color: ${(props) =>
    props.recipeDetails === 'instructions'
      ? 'var(--primary)'
      : 'var(--primary-opaque)'};
`

const IngredientsSection = styled.section`
  padding-left: 12px;
  padding-right: 12px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  font-weight: 300;
  animation-duration: 2s;
  animation-name: fadein;
  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 100;
    }
  }
`

const InstructionsSection = styled.section`
  padding-left: 12px;
  padding-right: 8px;
  display: grid;
  grid-template-columns: 1fr 20fr;
  font-weight: 300;
  animation-duration: 2s;
  animation-name: fadein;
  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 100;
    }
  }
`

const StyledParagraph = styled.p`
  margin-top: 4px;
`
