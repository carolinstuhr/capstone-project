import React from 'react'
import RecipeDetails from './RecipeDetails'
import { render } from '@testing-library/react'
import { MemoryRouter, useRouteMatch } from 'react-router-dom'
import recipeData from '../RecipeList.json'

describe('<RecipeDetails />', () => {
  jest.mock('react-router-dom', () => ({
    useRouteMatch: jest.fn(() => ({ params: { id: 1 } })),
  }))

  test.only('renders', () => {
    const { getByText } = render(
      <MemoryRouter>
        <RecipeDetails recipes={recipeData} />
      </MemoryRouter>
    )

    expect(getByText('Chocolate')).toBeInTheDocument()
    expect(getByText('Chocolate')).toMatchSnapshot()
  })
})
