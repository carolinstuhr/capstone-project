import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import { MemoryRouter } from 'react-router-dom'

test('renders Recipe in Header', () => {
  const container = document.createElement('div')
  ReactDOM.render(
    <MemoryRouter>
      <Header>Recipe</Header>
    </MemoryRouter>,
    container
  )
  expect(container.textContent).toBe('Recipe')
})
