import React from 'react'
import ReactDOM from 'react-dom'
import RecipeDetails from './RecipeDetails'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

it('Should call localStorage getItem on render', () => {
  render(<RecipeDetails />)
  expect(window.localStorage.getItem).toHaveBeenCalledTimes(1)
})
