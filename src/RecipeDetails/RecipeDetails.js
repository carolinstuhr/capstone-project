import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import FavouritesBookmark from './FavouritesBookmark'
import { Link, useParams } from 'react-router-dom'
import { db } from '../firebaseConfig'
import ReturnIcon from './ReturnIcon'
import RecipeRating from './RecipeRating'
import RecipeRatingWindow from './RecipeRatingWindow'
import { CSSTransition } from 'react-transition-group'

export default function RecipeDetails({ user, recipes, previousPage }) {
  const params = useParams()

  const [areIngredientsVisible, setAreIngredientsVisible] = useState(true)
  const [isRatingWindowVisible, setIsRatingWindowVisible] = useState(false)

  const [recipe, setRecipe] = useState({})
  useEffect(() => {
    setRecipe(recipes.find((recipe) => recipe.id === params.id))
  }, [recipes])

  const [recipeRating, setRecipeRating] = useState(0)
  useEffect(() => {
    setRecipeRating(
      recipe && Math.round(recipe.accumulatedRatings / recipe.numberOfRatings)
    )
  }, [recipe])

  const [isFavourite, setIsFavourite] = useState()

  const [isRecipeRated, setIsRecipeRated] = useState()

  const [userRating, setUserRating] = useState()

  useEffect(() => {
    setIsRecipeRated(
      user &&
        user.ratedRecipes.some(
          (ratedRecipe) => ratedRecipe.recipeId === recipe.id
        )
    )
    setIsFavourite(
      user && user.favourites.some((favourite) => favourite === recipe.id)
    )
  }, [user, recipe])

  useEffect(() => {
    setUserRating(
      isRecipeRated &&
        user.ratedRecipes.find(
          (ratedRecipe) => ratedRecipe.recipeId === recipe.id
        ).rating
    )
  }, [isRecipeRated, user])

  return (
    <>
      {recipe && (
        <>
          <MainStyled isRatingWindowVisible={isRatingWindowVisible}>
            <ImageSectionStyled>
              {previousPage === 'All' && (
                <Link exact to="/">
                  <ReturnIcon
                    alt="return"
                    onClick={() => setAreIngredientsVisible(true)}
                    className="return"
                  />
                </Link>
              )}
              {previousPage === 'Favourites' && (
                <Link to="/favourites">
                  <ReturnIcon
                    alt="return"
                    onClick={() => setAreIngredientsVisible(true)}
                    className="return"
                  />
                </Link>
              )}
              {previousPage === 'Profile' && (
                <Link to="/profile">
                  <ReturnIcon
                    alt="return"
                    onClick={() => setAreIngredientsVisible(true)}
                    className="return"
                  />
                </Link>
              )}
              <FavouritesBookmark
                onClick={() => {
                  toggleHeartIcon(recipe)
                }}
                isFavourite={isFavourite}
                alt="bookmark recipe"
                className="heart-icon"
              />
              <ImageStyled src={recipe.image} alt="" />
            </ImageSectionStyled>
            <RecipeInfoSectionStyled>
              <TitleStyled>{recipe.title}</TitleStyled>
              <InfoSection>
                <span>serves: {recipe.serving}</span>
                <RecipeRating
                  setIsRatingWindowVisible={setIsRatingWindowVisible}
                  recipeRating={recipeRating}
                  recipe={recipe}
                />
                <span>
                  time: {recipe.timehour}:{recipe.timeminutes}
                </span>
              </InfoSection>
              <DetailSelectionStyled>
                <IngredientsSelectionSpan
                  onClick={() => setAreIngredientsVisible(true)}
                  areIngredientsVisible={areIngredientsVisible}
                  className="ingredients-selector"
                >
                  Ingredients
                </IngredientsSelectionSpan>
                <InstructionsSelectionSpan
                  onClick={() => setAreIngredientsVisible(false)}
                  areIngredientsVisible={areIngredientsVisible}
                  data-testid="instructionsButton"
                  className="instructions-selector"
                >
                  Instructions
                </InstructionsSelectionSpan>
              </DetailSelectionStyled>
            </RecipeInfoSectionStyled>
            <SectionStyled>
              <CSSTransition
                in={areIngredientsVisible}
                timeout={700}
                classNames="ingredients"
                unmountOnExit
              >
                <IngredientsSection>
                  {recipe.ingredients &&
                    recipe.ingredients.map((ingredient, index) => (
                      <>
                        <ParagraphStyled key={index}>
                          {ingredient.amount}
                        </ParagraphStyled>
                        <ParagraphStyled>{ingredient.name}</ParagraphStyled>
                      </>
                    ))}
                </IngredientsSection>
              </CSSTransition>
              <CSSTransition
                in={areIngredientsVisible === false}
                timeout={700}
                classNames="instructions"
                unmountOnExit
              >
                <InstructionsSection>
                  {recipe.instructions &&
                    recipe.instructions.map((instruction, index) => (
                      <>
                        <ParagraphStyled key={index}>
                          {index + 1}.
                        </ParagraphStyled>
                        <ParagraphStyled>{instruction}</ParagraphStyled>
                      </>
                    ))}
                </InstructionsSection>
              </CSSTransition>
            </SectionStyled>
          </MainStyled>
          {isRatingWindowVisible && (
            <RecipeRatingWindow
              setIsRatingWindowVisible={setIsRatingWindowVisible}
              recipe={recipe}
              setRecipeRating={setRecipeRating}
              isRecipeRated={isRecipeRated}
              user={user}
              setIsRecipeRated={setIsRecipeRated}
              userRating={userRating}
              setUserRating={setUserRating}
            />
          )}
        </>
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
  opacity: ${(props) => (props.isRatingWindowVisible ? 0.3 : 1)};
`

const ImageSectionStyled = styled.section`
  height: 288px;
  position: relative;
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
  animation: 1.5s slidein;
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

const TitleStyled = styled.h3`
  text-align: center;
  margin-top: 0;
  margin-bottom: 8px;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 22px;
`
const InfoSection = styled.section`
  display: flex;
  padding-left: 12px;
  padding-right: 12px;
  justify-content: space-between;
  align-items: center;
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
  background: var(--secondary-background);
  cursor: default;
  background: ${(props) =>
    props.areIngredientsVisible
      ? 'var(--secondary-background)'
      : 'rgba(255, 255, 255, 0.4)'};
  color: ${(props) =>
    props.areIngredientsVisible ? 'var(--primary)' : 'var(--primary-opaque)'};
  font-weight: ${(props) => (props.areIngredientsVisible ? '300' : '200')};
`

const InstructionsSelectionSpan = styled.span`
  padding: 4px;
  border: 2px solid white;
  border-left-width: 1px;
  cursor: default;
  background: ${(props) =>
    props.areIngredientsVisible === false
      ? 'var(--secondary-background)'
      : 'rgba(255, 255, 255, 0.4)'};
  color: ${(props) =>
    props.areIngredientsVisible === false
      ? 'var(--primary)'
      : 'var(--primary-opaque)'};
  font-weight: ${(props) =>
    props.areIngredientsVisible === false ? '300' : '200'};
`

const IngredientsSection = styled.section`
  padding-left: 12px;
  padding-right: 12px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  font-weight: 300;
  width: 100%;
  &.ingredients-enter {
    opacity: 0;
  }
  &.ingredients-enter-active {
    opacity: 1;
    position: absolute;
    transition: all 700ms 700ms;
  }
  &.ingredients-exit {
    opacity: 1;
    position: absolute;
  }
  &.ingredients-exit-active {
    opacity: 0;
    transition: all 700ms;
  }
`

const InstructionsSection = styled.section`
  padding-left: 12px;
  padding-right: 8px;
  display: grid;
  grid-template-columns: 1fr 20fr;
  font-weight: 300;
  width: 100%;
  &.instructions-enter {
    opacity: 0;
  }
  &.instructions-enter-active {
    opacity: 1;
    position: absolute;
    transition: opacity 700ms 700ms;
  }
  &.instructions-exit {
    opacity: 1;
    position: absolute;
  }
  &.instructions-exit-active {
    opacity: 0;
    transition: opacity 700ms;
  }
`

const ParagraphStyled = styled.p`
  margin-top: 4px;
`
const SectionStyled = styled.section`
  animation: 1.5s slidein;
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
