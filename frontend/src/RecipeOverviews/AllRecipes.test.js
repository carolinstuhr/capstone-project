import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import AllRecipes from './AllRecipes'
import { MemoryRouter } from 'react-router-dom'
import recipeData from '../RecipeList.json'

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
  fireEvent.change(input, { target: { value: 'break' } })
  expect(getByText(/porridge/i)).toBeTruthy()
})

test('test when input is entered, the right amount of recipes is returned', () => {
  const { getByPlaceholderText, getAllByText } = render(
    <MemoryRouter>
      <AllRecipes recipes={recipeData} />
    </MemoryRouter>
  )
  const input = getByPlaceholderText(/Search for recipes.../i)
  fireEvent.change(input, { target: { value: 'break' } })
  expect(getAllByText(/break/i)).toHaveLength(6)
})

test('test filter with no match', () => {
  const { getByPlaceholderText, getByText } = render(
    <MemoryRouter>
      <AllRecipes recipes={recipeData} />
    </MemoryRouter>
  )
  const input = getByPlaceholderText(/Search for recipes.../i)
  fireEvent.change(input, { target: { value: 'hdhdh' } })
  expect(
    getByText(
      /Unfortunately, we did not find any recipe matching your search request./i
    )
  ).toHaveTextContent(/Unfortunately/i)
})
