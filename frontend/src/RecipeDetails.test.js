import React from 'react'
import RecipeDetails from './RecipeDetails'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import recipeData from './RecipeList.json'
import * as renderer from 'react-test-renderer'

test('renders content of RecipeDetails', () => {
  const renderWithProps = () => {
    const defaultProps = {
      match: { params: { id: 1 } },
    }
    return renderer.create(
      <RecipeDetails recipes={recipeData} {...defaultProps} />
    )
  }
  renderWithProps({})
  const wrapper = render(
    <MemoryRouter>
      <RecipeDetails />
    </MemoryRouter>
  )
  expect(wrapper.find('main')).toHaveLength(1)
})
