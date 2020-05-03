import React from 'react'
import RecipeDetails from './RecipeDetails'
import { render } from '@testing-library/react'

test('Should call localStorage getItem on render', () => {
  render(<RecipeDetails />)
  expect(window.localStorage.getItem).toHaveBeenCalledTimes(1)
})

test('should return recipeID from localStorage', () => {
  const KEY = 'recipeID'
  render(<RecipeDetails />)
  expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY)
})
