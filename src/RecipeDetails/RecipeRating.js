import React from 'react'
import styled from 'styled-components/macro'
import { AiOutlineStar } from 'react-icons/ai'

export default function RecipeRating() {
  return (
    <>
      <FavouritesSection>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </FavouritesSection>
      <p>ratings</p>
    </>
  )
}
const FavouritesSection = styled.section`
  display: flex;
  justify-content: center;
`

const StarIcon = styled(AiOutlineStar)``
