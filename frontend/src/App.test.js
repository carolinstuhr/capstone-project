import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'

// const localStorageMock = {
//   getItem: jest.fn(),
//   setItem: jest.fn(),
// }
// global.localStorage = localStorageMock

// test('Should call localStorage getItem on render App', () => {
//   render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   )
//   expect(localStorageMock.getItem).toBeCalledWith('recipes')
// })

// test('renders content of App.js', () => {
//   const { getByText } = render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   )
//   const linkElement = getByText(/recipe/i)
//   expect(linkElement).toBeInTheDocument()
// })

// jest.mock('recipeData')

// test('should fetch recipes', () => {
//   const recipes = [{ title: 'Porridge' }]
//   const resp = { data: recipes }
//   recipeData.get.mockResolvedValue(resp)
//   return recipes.all().then((data) => expect(data).toEqual(recipes))
// })

//Storage Mock

test('should save to localStorage', () => {
  const KEY = 'foo',
    VALUE = 'bar'

  expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE)
  expect(localStorage.__STORE__[KEY]).toBe(VALUE)
  expect(Object.keys(localStorage.__STORE__).length).toBe(1)
})
