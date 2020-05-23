import React from 'react'
import RecipeDetails from './RecipeDetails'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import recipeData from '../RecipeList.json'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: 1 }),
}))

test('renders page with recipe id 1', () => {
  const tree = render(
    <MemoryRouter>
      <RecipeDetails recipes={recipeData} />
    </MemoryRouter>
  )
  expect(tree).toMatchSnapshot()
})

test('renders title of recipe id 1', () => {
  const { getByText } = render(
    <MemoryRouter>
      <RecipeDetails recipes={recipeData} />
    </MemoryRouter>
  )
  expect(getByText('Chocolate chip cookies')).toBeInTheDocument()
})
