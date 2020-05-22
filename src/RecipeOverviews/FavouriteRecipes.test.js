import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import FavouriteRecipes from './FavouriteRecipes'
import { MemoryRouter } from 'react-router-dom'
import recipeData from '../RecipeList.json'

test('Not rendering any recipes with no favourites selected', () => {
  const { getByText } = render(
    <MemoryRouter>
      <FavouriteRecipes recipes={recipeData} />
    </MemoryRouter>
  )
  const linkElement = getByText(
    /Unfortunately, you haven't selected any favourites yet./i
  )
  expect(linkElement).toBeInTheDocument()
})

test('should still render first default message when no favourites selected when user enters input', () => {
  const { getByText, getByPlaceholderText } = render(
    <MemoryRouter>
      <FavouriteRecipes recipes={recipeData} />
    </MemoryRouter>
  )
  const input = getByPlaceholderText(/Search for recipes.../i)
  fireEvent.change(input, { target: { value: 'chocolate' } })
  const linkElement = getByText(
    /Unfortunately, you haven't selected any favourites yet./i
  )
  expect(linkElement).toBeInTheDocument()
})
