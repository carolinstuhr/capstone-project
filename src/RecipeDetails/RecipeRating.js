import React from 'react'
import styled from 'styled-components/macro'
import { IoMdStar } from 'react-icons/io'

export default function RecipeRating({
  setIsRatingWindowVisible,
  recipeRating,
  recipe,
}) {
  return (
    <>
      <section onClick={() => setIsRatingWindowVisible(true)}>
        <StarIcon1 recipeRating={recipeRating} />
        <StarIcon2 recipeRating={recipeRating} />
        <StarIcon3 recipeRating={recipeRating} />
        <StarIcon4 recipeRating={recipeRating} />
        <StarIcon5 recipeRating={recipeRating} />
        {recipe.numberOfRatings !== 1 && (
          <ParagraphStyled>({recipe.numberOfRatings} ratings)</ParagraphStyled>
        )}
        {recipe.numberOfRatings === 1 && (
          <ParagraphStyled>({recipe.numberOfRatings} rating)</ParagraphStyled>
        )}
      </section>
    </>
  )
}

const StarIcon = styled(IoMdStar)`
  height: 20px;
  width: 20px;
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

const ParagraphStyled = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 12px;
`
