import React from 'react'
import RecipeRatingWindow from './RecipeRatingWindow'

export default {
  component: RecipeRatingWindow,
  title: 'RecipeRatingWindow',
}

export const notRated = () => <RecipeRatingWindow isRecipeRated={false} />

export const rated = () => <RecipeRatingWindow isRecipeRated={true} />
