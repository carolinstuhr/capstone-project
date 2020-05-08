import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'

test('Should call localStorage getItem on render App', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  expect(localStorage.getItem).toBeCalledWith('recipes')
})

test('renders content of App.js', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  const linkElement = getByText(/recipe/i)
  expect(linkElement).toBeInTheDocument()
})

test('should load from localStorage', () => {
  const KEY = 'recipes'
  expect(localStorage.getItem).toHaveBeenCalledTimes(2)
  expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY)
})
