import React from 'react'
import { render, act } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'
import { AuthConsumer, AuthProvider } from './Auth'

let currentUser = { id: 1, name: 'caro' }
test('renders content of App.js', () => {
  act(() => {
    const tree = render(
      <AuthProvider>
        <AuthConsumer>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </AuthConsumer>
      </AuthProvider>
    )
  })
  expect(tree).toMatchSnapshot()
})

test('renders content of App.js', () => {
  const { getAllByAltText } = render(
    <MemoryRouter>
      <App currentUser={currentUser} />
    </MemoryRouter>
  )
  const linkElement = getAllByAltText(/loading/i)
  expect(linkElement).toBeInTheDocument()
})
