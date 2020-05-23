import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import FavouriteRecipes from './FavouriteRecipes'
import { MemoryRouter } from 'react-router-dom'
import recipeData from '../RecipeList.json'
import userEvent from '@testing-library/user-event'

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
  userEvent.type(input, 'chocolate')
  const linkElement = getByText(
    /Unfortunately, you haven't selected any favourites yet./i
  )
  expect(linkElement).toBeInTheDocument()
})

const user = {
  id: 1,
  name: 'Caro',
  favourites: [1, 3, 20],
  details: { childhoodDish: 'pizza' },
}
test('should render filtered favourite recipe of user', () => {
  const { getByText, getByPlaceholderText } = render(
    <MemoryRouter>
      <FavouriteRecipes recipes={recipeData} user={user} />
    </MemoryRouter>
  )
  const input = getByPlaceholderText(/Search for recipes.../i)
  userEvent.type(input, 'break')
  expect(getByText(/porridge/i)).toBeTruthy()
})

test('test filter with no favourites match', () => {
  const { getByPlaceholderText, getByText } = render(
    <MemoryRouter>
      <FavouriteRecipes recipes={recipeData} user={user} />
    </MemoryRouter>
  )
  const input = getByPlaceholderText(/Search for recipes.../i)
  userEvent.type(input, 'granola')
  expect(
    getByText(
      /Unfortunately, we did not find any of your favourite recipes matching your search request./i
    )
  ).toBeTruthy()
})
