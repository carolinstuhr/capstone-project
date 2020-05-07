import React from 'react'
import RecipeList from './RecipeList'
import recipeData from './RecipeList.json'

export default {
  component: RecipeList,
  title: 'RecipeList',
}

export const simple = () => <RecipeList filteredRecipeData={recipeData} />
