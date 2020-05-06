import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
}
global.localStorage = localStorageMock

test('renders Recipe in Header', () => {
  const container = document.createElement('div')
  ReactDOM.render(<Header>Recipe</Header>, container)
  expect(container.textContent).toBe('Recipe')
})
