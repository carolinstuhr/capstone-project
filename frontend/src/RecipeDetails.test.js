import React from 'react'
import RecipeDetails from './RecipeDetails'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import recipeData from './RecipeList.json'

test('renders content of RecipeDetails', () => {
  const { getByText } = render(
    <MemoryRouter>
      <RecipeDetails recipes={recipeData} match={{ params: { id: 1 } }} />
    </MemoryRouter>
  )

  expect(getByText(/porridge/i)).toBeInTheDocument()
})

describe('<RecipeDetails />', () => {
  jest.mock('react-router', () => ({
    useRouteMatch: jest.fn().mockReturnValue({ params.id: '1' }),
  }))

  test('renders', () => {
    const wrapper = render(<RecipeDetails />)
    expect(wrapper).toBeTruthy()
  })
})
