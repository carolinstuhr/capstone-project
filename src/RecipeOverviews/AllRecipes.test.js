import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import AllRecipes from './AllRecipes'
import { MemoryRouter } from 'react-router-dom'
import recipeData from '../RecipeList.json'
import userEvent from '@testing-library/user-event'

test('rendering Recipe List', () => {
  const { getByText } = render(
    <MemoryRouter>
      <AllRecipes recipes={recipeData} />
    </MemoryRouter>
  )
  const linkElement = getByText(/Chocolate chip cookies/i)
  expect(linkElement).toBeInTheDocument()
})

test('test filter to search matching recipe', () => {
  const { getByPlaceholderText, getByText } = render(
    <MemoryRouter>
      <AllRecipes recipes={recipeData} />
    </MemoryRouter>
  )
  const input = getByPlaceholderText(/Search for recipes.../i)
  userEvent.type(input, 'break')
  expect(getByText(/porridge/i)).toBeTruthy()
})

test('test when input is entered, the right amount of recipes is returned', () => {
  const { getByPlaceholderText, getAllByText } = render(
    <MemoryRouter>
      <AllRecipes recipes={recipeData} />
    </MemoryRouter>
  )
  const input = getByPlaceholderText(/Search for recipes.../i)
  userEvent.type(input, 'break')
  expect(getAllByText(/break/i)).toHaveLength(6)
})

test('test filter with no match', () => {
  const { getByPlaceholderText, getByText } = render(
    <MemoryRouter>
      <AllRecipes recipes={recipeData} />
    </MemoryRouter>
  )
  const input = getByPlaceholderText(/Search for recipes.../i)
  userEvent.type(input, 'hdhdh')
  expect(
    getByText(
      /Unfortunately, we did not find any recipe matching your search request./i
    )
  ).toBeTruthy()
})
