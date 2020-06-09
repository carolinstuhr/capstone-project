import React from 'react'
import styled from 'styled-components/macro'
import { AiOutlineStar } from 'react-icons/ai'

export default function RecipeRating({
  setIsRatingWindowVisible,
  recipeRating,
}) {
  return (
    <>
      <FavouritesSection onClick={() => setIsRatingWindowVisible(true)}>
        <StarIcon1 recipeRating={recipeRating} />
        <StarIcon2 recipeRating={recipeRating} />
        <StarIcon3 recipeRating={recipeRating} />
        <StarIcon4 recipeRating={recipeRating} />
        <StarIcon5 recipeRating={recipeRating} />
        <ParagraphStyled>ratings</ParagraphStyled>
        {console.log(recipeRating)}
      </FavouritesSection>
    </>
  )
}
const FavouritesSection = styled.section``

const StarIcon1 = styled(AiOutlineStar)`
  color: ${(props) => (props.recipeRating > 0 ? '#c82a1a' : 'white')};
`
const StarIcon2 = styled(AiOutlineStar)`
  color: ${(props) => (props.recipeRating > 1 ? '#c82a1a' : 'white')};
`
const StarIcon3 = styled(AiOutlineStar)`
  color: ${(props) => (props.recipeRating > 2 ? '#c82a1a' : 'white')};
`
const StarIcon4 = styled(AiOutlineStar)`
  color: ${(props) => (props.recipeRating > 3 ? '#c82a1a' : 'white')};
`
const StarIcon5 = styled(AiOutlineStar)`
  color: ${(props) => (props.recipeRating > 4 ? '#c82a1a' : 'white')};
`

const ParagraphStyled = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 12px;
`
