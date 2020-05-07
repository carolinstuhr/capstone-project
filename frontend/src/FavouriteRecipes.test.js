import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import FavouriteRecipes from './FavouriteRecipes'
import { MemoryRouter } from 'react-router-dom'
import recipeData from './RecipeList.json'

test('rendering Recipe List', () => {
  const { getByText } = render(
    <MemoryRouter>
      <FavouriteRecipes recipes={recipeData} />
    </MemoryRouter>
  )
  const linkElement = getByText(/Chocolate chip cookies/i)
  expect(linkElement).toBeInTheDocument()
})
