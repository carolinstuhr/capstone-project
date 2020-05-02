import React from 'react'
import { render } from '@testing-library/react'
import RecipeList from './RecipeList'

test('rendering Recipe List', () => {
  const { getByText } = render(<RecipeList />)
  const linkElement = getByText(/Spanish Tortilla/i)
  expect(linkElement).toBeInTheDocument()
})
