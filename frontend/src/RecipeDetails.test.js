import React from 'react'
import RecipeDetails from './RecipeDetails'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
}
global.localStorage = localStorageMock

// test('Should call localStorage getItem on render', () => {
//   render(<RecipeDetails />)
//   expect(window.localStorageMock.getItem).toHaveBeenCalledTimes(1)
// })

// test('should return recipeID from localStorage', () => {
//   const KEY = 'recipeID'
//   render(<RecipeDetails />)
//   expect(localStorageMock.getItem).toHaveBeenLastCalledWith(KEY)
// })

// test('renders content of RecipeDetails', () => {
//   const { getByText } = render(
//     <MemoryRouter>
//       <RecipeDetails />
//     </MemoryRouter>
//   )
//   const linkElement = getByText(/recipe/i)
//   expect(linkElement).toBeInTheDocument()
// })
