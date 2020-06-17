import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { db } from '../firebaseConfig'
import { IoMdStar } from 'react-icons/io'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export default function RecipeRatingWindow({
  recipe,
  setIsRatingWindowVisible,
  setRecipeRating,
  isRecipeRated,
  user,
  setIsRecipeRated,
  userRating,
  setUserRating,
}) {
  const [userInput, setUserInput] = useState(0)

  return (
    <RatingSection isRecipeRated={isRecipeRated}>
      <CloseRatingIcon onClick={() => setIsRatingWindowVisible(false)} />
      {/* {isRecipeRated || ( */}
      <>
        <ParagraphStyled>Please rate the recipe</ParagraphStyled>
        <StarSection>
          <StarIcon1
            onClick={() => setUserInput(1)}
            userInput={userInput || userRating}
          />
          <StarIcon2
            onClick={() => setUserInput(2)}
            userInput={userInput || userRating}
          />
          <StarIcon3
            onClick={() => setUserInput(3)}
            userInput={userInput || userRating}
          />
          <StarIcon4
            onClick={() => setUserInput(4)}
            userInput={userInput || userRating}
          />
          <StarIcon5
            onClick={() => setUserInput(5)}
            userInput={userInput || userRating}
          />
        </StarSection>
        <RatingButton onClick={() => addUserRating(userInput)}>
          Submit
        </RatingButton>
      </>
      {/* )} */}
      {isRecipeRated && (
        <ParagraphStyled>
          You already rated
          <br /> this recipe.
        </ParagraphStyled>
      )}
    </RatingSection>
  )

  function addUserRating(rating) {
    if (recipe.numberOfRatings === 0) {
      setIsRatingWindowVisible(false)
      db.collection('recipes')
        .doc(recipe.id)
        .update({ numberOfRatings: 1, accumulatedRatings: rating })
      db.collection('users')
        .doc(user.id)
        .update({ ratedRecipes: [{ recipeId: recipe.id, rating: rating }] })
        .then(() => {
          setRecipeRating(rating)
          setIsRecipeRated(true)
        })
        .catch((err) =>
          alert('Something went wrong. Please try again later.', err)
        )
    } else if (isRecipeRated) {
      let index = user.ratedRecipes.findIndex(
        (ratedRecipe) => ratedRecipe.recipeId === recipe.id
      )
      console.log(userRating)
      console.log(rating)
      setIsRatingWindowVisible(false)
      db.collection('recipes')
        .doc(recipe.id)
        .update({
          numberOfRatings: recipe.numberOfRatings,
          accumulatedRatings: recipe.accumulatedRatings - userRating + rating,
        })
      db.collection('users')
        .doc(user.id)
        .update({
          ratedRecipes: [
            ...user.ratedRecipes.slice(0, index),
            { recipeId: recipe.id, rating: rating },
            ...user.ratedRecipes.slice(index + 1),
          ],
        })
        .then(() => {
          setRecipeRating(
            Math.round(
              (recipe.accumulatedRatings - userRating + rating) /
                recipe.numberOfRatings
            )
          )
          setIsRecipeRated(true)
        })
        .catch((err) =>
          alert('Something went wrong. Please try again later.', err)
        )
    } else {
      setIsRatingWindowVisible(false)
      db.collection('recipes')
        .doc(recipe.id)
        .update({
          numberOfRatings: recipe.numberOfRatings + 1,
          accumulatedRatings: recipe.accumulatedRatings + rating,
        })
      db.collection('users')
        .doc(user.id)
        .update({
          ratedRecipes: [
            ...user.ratedRecipes,
            { recipeId: recipe.id, rating: rating },
          ],
        })
        .then(() => {
          setRecipeRating(
            Math.round(
              (recipe.accumulatedRatings + rating) /
                (recipe.numberOfRatings + 1)
            )
          )
          setIsRecipeRated(true)
        })
        .catch((err) =>
          alert('Something went wrong. Please try again later.', err)
        )
    }
  }
}

const RatingSection = styled.section`
  position: absolute;
  z-index: 2;
  background: var(--primary-background);
  bottom: 2px;
  width: 200px;
  height: ${(props) => (props.isRecipeRated ? '80px' : '150px')};
  top: 300px;
  left: 88px;
  border-radius: 4px;
  border: 1px solid var(--tertiary);
`

const StarIcon = styled(IoMdStar)`
  height: 30px;
  width: 30px;
`

const StarIcon1 = styled(StarIcon)`
  color: ${(props) => (props.userInput > 0 ? '#c82a1a' : 'white')};
`
const StarIcon2 = styled(StarIcon)`
  color: ${(props) => (props.userInput > 1 ? '#c82a1a' : 'white')};
`
const StarIcon3 = styled(StarIcon)`
  color: ${(props) => (props.userInput > 2 ? '#c82a1a' : 'white')};
`
const StarIcon4 = styled(StarIcon)`
  color: ${(props) => (props.userInput > 3 ? '#c82a1a' : 'white')};
`
const StarIcon5 = styled(StarIcon)`
  color: ${(props) => (props.userInput > 4 ? '#c82a1a' : 'white')};
`

const CloseRatingIcon = styled(IoIosCloseCircleOutline)`
  position: absolute;
  left: 178px;
  height: 20px;
  width: 20px;
`

const StarSection = styled.section`
  display: flex;
  justify-content: center;
`

const ParagraphStyled = styled.p`
  text-align: center;
  margin-top: 22px;
  margin-bottom: 8px;
  font-weight: 300;
`

const RatingButton = styled.button`
  width: 60px;
  padding: 4px;
  margin-top: 18px;
  margin-left: 70px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 200;
  background: white;
`
