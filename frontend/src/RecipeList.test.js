import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import RecipeList from './RecipeList'
import { MemoryRouter } from 'react-router-dom'

test('rendering Recipe List', () => {
  const { getByText } = render(
    <MemoryRouter>
      <RecipeList />
    </MemoryRouter>
  )
  const linkElement = getByText(/Chocolate chip cookies/i)
  expect(linkElement).toBeInTheDocument()
})

test('test filter to search matching recipe', () => {
  const { getByPlaceholderText, getByText } = render(
    <MemoryRouter>
      <RecipeList />
    </MemoryRouter>
  )
  const input = getByPlaceholderText(/Search for recipes.../i)
  fireEvent.change(input, { target: { value: 'porridge' } })
  expect(getByText(/porridge/i)).toHaveTextContent(/porridge/i)
})

test('test filter with no match', () => {
  const { getByPlaceholderText, getByText } = render(
    <MemoryRouter>
      <RecipeList />
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
