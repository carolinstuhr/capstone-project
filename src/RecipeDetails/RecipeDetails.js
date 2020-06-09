import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import FavouritesBookmark from './FavouritesBookmark'
import { Link, useParams } from 'react-router-dom'
import { db } from '../firebaseConfig'
import ReturnIcon from './ReturnIcon'
import RecipeRating from './RecipeRating'
import { IoMdStar } from 'react-icons/io'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export default function RecipeDetails({ user, recipes, previousPage }) {
  const params = useParams()

  const [recipeDetails, setRecipeDetails] = useState('ingredients')
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

  const [userRating, setUserRating] = useState()

  const [isFavourite, setIsFavourite] = useState(
    user && user.favourites.some((favourite) => favourite === recipe.id)
  )
  let isFavouriteInitially =
    user && user.favourites.some((favourite) => favourite === recipe.id)

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
                    onClick={() => setRecipeDetails('ingredients')}
                    className="return"
                  />
                </Link>
              )}
              {previousPage === 'Favourites' && (
                <Link to="/favourites">
                  <ReturnIcon
                    alt="return"
                    onClick={() => setRecipeDetails('ingredients')}
                    className="return"
                  />
                </Link>
              )}
              {previousPage === 'Profile' && (
                <Link to="/profile">
                  <ReturnIcon
                    alt="return"
                    onClick={() => setRecipeDetails('ingredients')}
                    className="return"
                  />
                </Link>
              )}
              <FavouritesBookmark
                onClick={() => {
                  toggleHeartIcon(recipe)
                }}
                isFavourite={isFavourite || isFavouriteInitially}
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
            ) : (
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
            )}
          </MainStyled>
          {isRatingWindowVisible && (
            <RatingSection>
              <CloseRatingIcon
                onClick={() => setIsRatingWindowVisible(false)}
              />
              <RatingText>Please rate the recipe</RatingText>
              <StarSection>
                <StarIcon1 onClick={() => addUserRating(1)} />
                <StarIcon2 onClick={() => addUserRating(2)} />
                <StarIcon3 onClick={() => addUserRating(3)} />
                <StarIcon4 onClick={() => addUserRating(4)} />
                <StarIcon5 onClick={() => addUserRating(5)} />
              </StarSection>
            </RatingSection>
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

  function addUserRating(rating) {
    if (recipe.numberOfRatings === 0) {
      db.collection('recipes')
        .doc(recipe.id)
        .update({ numberOfRatings: 1, accumulatedRatings: rating })
        .then(() => {
          setUserRating(rating)
          setRecipeRating(rating)
          setIsRatingWindowVisible(false)
        })
    } else {
      db.collection('recipes')
        .doc(recipe.id)
        .update({
          numberOfRatings: recipe.numberOfRatings + 1,
          accumulatedRatings: recipe.accumulatedRatings + rating,
        })
        .then(() => {
          setUserRating(rating)
          setRecipeRating(
            Math.round(
              (recipe.accumulatedRatings + rating) /
                (recipe.numberOfRatings + 1)
            )
          )
          setIsRatingWindowVisible(false)
        })
    }
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
`

const TitleStyled = styled.h3`
  text-align: center;
  margin-top: 0;
  margin-bottom: 8px;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 22px;
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
const InfoSection = styled.section`
  display: flex;
  padding-left: 12px;
  padding-right: 12px;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 12px;
  font-weight: 300;
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

const DetailSelectionStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
  font-weight: 300;
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
const IngredientsSelectionSpan = styled.span`
  padding: 4px;
  border: 2px solid white;
  border-right-width: 1px;
  cursor: default;
  background: ${(props) =>
    props.recipeDetails === 'ingredients'
      ? 'var(--secondary-background)'
      : 'rgba(255, 255, 255, 0.4)'};
  color: ${(props) =>
    props.recipeDetails === 'ingredients'
      ? 'var(--primary)'
      : 'var(--primary-opaque)'};
  font-weight: ${(props) =>
    props.recipeDetails === 'ingredients' ? '300' : '200'};
`

const InstructionsSelectionSpan = styled.span`
  padding: 4px;
  border: 2px solid white;
  border-left-width: 1px;
  cursor: default;
  background: ${(props) =>
    props.recipeDetails === 'instructions'
      ? 'var(--secondary-background)'
      : 'rgba(255, 255, 255, 0.4)'};
  color: ${(props) =>
    props.recipeDetails === 'instructions'
      ? 'var(--primary)'
      : 'var(--primary-opaque)'};
  font-weight: ${(props) =>
    props.recipeDetails === 'instructions' ? '300' : '200'};
`

const IngredientsSection = styled.section`
  padding-left: 12px;
  padding-right: 12px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  font-weight: 300;
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

const InstructionsSection = styled.section`
  padding-left: 12px;
  padding-right: 8px;
  display: grid;
  grid-template-columns: 1fr 20fr;
  font-weight: 300;
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

const ParagraphStyled = styled.p`
  margin-top: 4px;
`
const StarIcon = styled(IoMdStar)`
  height: 30px;
  width: 30px;
`

const StarIcon1 = styled(StarIcon)`
  color: ${(props) => (props.recipeRating > 0 ? '#c82a1a' : 'white')};
`
const StarIcon2 = styled(StarIcon)`
  color: ${(props) => (props.recipeRating > 1 ? '#c82a1a' : 'white')};
`
const StarIcon3 = styled(StarIcon)`
  color: ${(props) => (props.recipeRating > 2 ? '#c82a1a' : 'white')};
`
const StarIcon4 = styled(StarIcon)`
  color: ${(props) => (props.recipeRating > 3 ? '#c82a1a' : 'white')};
`
const StarIcon5 = styled(StarIcon)`
  color: ${(props) => (props.recipeRating > 4 ? '#c82a1a' : 'white')};
`

const CloseRatingIcon = styled(IoIosCloseCircleOutline)`
  position: absolute;
  left: 178px;
  height: 20px;
  width: 20px;
`

const RatingSection = styled.section`
  position: absolute;
  z-index: 2;
  background: var(--primary-background);
  bottom: 2px;
  width: 200px;
  height: 100px;
  top: 300px;
  left: 88px;
  border-radius: 4px;
  border: 1px solid var(--tertiary);
`
const StarSection = styled.section`
  display: flex;
  justify-content: center;
`

const RatingText = styled.p`
  text-align: center;
  margin-top: 22px;
  margin-bottom: 8px;
  font-weight: 300;
`
