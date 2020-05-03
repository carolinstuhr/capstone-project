import React from 'react'
import { render } from '@testing-library/react'
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
