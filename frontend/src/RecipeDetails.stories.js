import React from 'react'
import RecipeDetails from './RecipeDetails'
import recipeData from './RecipeList.json'

export default {
  component: RecipeDetails,
  title: 'RecipeDetails',
}

export const simple = () => <RecipeDetails recipes={recipeData} />
