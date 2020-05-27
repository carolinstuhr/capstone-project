import React from 'react'
import ReactDOM from 'react-dom'
import HeaderOverview from './HeaderOverview'
import { MemoryRouter } from 'react-router-dom'

test('renders Recipe in Header', () => {
  const container = document.createElement('div')
  ReactDOM.render(
    <MemoryRouter>
      <HeaderOverview />
    </MemoryRouter>,
    container
  )
  expect(container.textContent).toBe('recipes')
})
