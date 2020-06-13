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
}) {
  const [userRating, setUserRating] = useState(0)
  console.log(isRecipeRated)

  return (
    <RatingSection>
      <CloseRatingIcon onClick={() => setIsRatingWindowVisible(false)} />
      {isRecipeRated || (
        <>
          <RatingText>Please rate the recipe</RatingText>
          <StarSection>
            <StarIcon1
              userRating={userRating}
              onClick={() => setUserRating(1)}
            />
            <StarIcon2
              userRating={userRating}
              onClick={() => setUserRating(2)}
            />
            <StarIcon3
              userRating={userRating}
              onClick={() => setUserRating(3)}
            />
            <StarIcon4
              userRating={userRating}
              onClick={() => setUserRating(4)}
            />
            <StarIcon5
              userRating={userRating}
              onClick={() => setUserRating(5)}
            />
          </StarSection>
          <RatingButton onClick={() => addUserRating(userRating)}>
            Submit
          </RatingButton>
        </>
      )}
      {isRecipeRated && <RatingText>You already rated this recipe</RatingText>}
    </RatingSection>
  )

  function addUserRating(rating) {
    if (recipe.numberOfRatings === 0) {
      db.collection('recipes')
        .doc(recipe.id)
        .update({ numberOfRatings: 1, accumulatedRatings: rating })
      db.collection('users')
        .doc(user.id)
        .update({ ratedRecipes: [...user.ratedRecipes, recipe.id] })
        .then(() => {
          setRecipeRating(rating)
          setIsRatingWindowVisible(false)
        })
        .catch((err) =>
          alert('Something went wrong. Please try again later.', err)
        )
    } else {
      db.collection('recipes')
        .doc(recipe.id)
        .update({
          numberOfRatings: recipe.numberOfRatings + 1,
          accumulatedRatings: recipe.accumulatedRatings + rating,
        })
      db.collection('users')
        .doc(user.id)
        .update({ ratedRecipes: [...user.ratedRecipes, recipe.id] })
        .then(() => {
          setRecipeRating(
            Math.round(
              (recipe.accumulatedRatings + rating) /
                (recipe.numberOfRatings + 1)
            )
          )
          setIsRatingWindowVisible(false)
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
  height: 150px;
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
  color: ${(props) => (props.userRating > 0 ? '#c82a1a' : 'white')};
`
const StarIcon2 = styled(StarIcon)`
  color: ${(props) => (props.userRating > 1 ? '#c82a1a' : 'white')};
`
const StarIcon3 = styled(StarIcon)`
  color: ${(props) => (props.userRating > 2 ? '#c82a1a' : 'white')};
`
const StarIcon4 = styled(StarIcon)`
  color: ${(props) => (props.userRating > 3 ? '#c82a1a' : 'white')};
`
const StarIcon5 = styled(StarIcon)`
  color: ${(props) => (props.userRating > 4 ? '#c82a1a' : 'white')};
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

const RatingText = styled.p`
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
