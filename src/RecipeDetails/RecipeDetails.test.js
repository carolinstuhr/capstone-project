import React from 'react'
import RecipeDetails from './RecipeDetails'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import recipeData from '../RecipeList.json'
import userEvent from '@testing-library/user-event'

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

test('onClick renders instructions', () => {
  const { getByText, getByTestId } = render(
    <MemoryRouter>
      <RecipeDetails recipes={recipeData} />
    </MemoryRouter>
  )
  const instructionsButton = getByTestId(/instructionsButton/i)
  userEvent.click(instructionsButton)
  const instructionsElement = getByText(/Put the dry ingredients into a bowl./i)
  expect(instructionsElement).toBeInTheDocument()
})

test('ratings window opens and user can rate recipe', () => {
  const { getByText } = render(
    <MemoryRouter>
      <RecipeDetails recipes={recipeData} />
    </MemoryRouter>
  )
  const ratings = getByText(/rating/i)
  userEvent.click(ratings)
  const ratingsWindow = getByText(/Please rate the recipe/i)
  expect(ratingsWindow).toBeInTheDocument()
})
