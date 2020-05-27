import React from 'react'
import { render } from '@testing-library/react'
import ProfilePage from './ProfilePage'
import { MemoryRouter } from 'react-router-dom'
import recipeData from '../RecipeList.json'
import userEvent from '@testing-library/user-event'

const user = {
  id: 1,
  name: 'Caro',
  favourites: [1, 3],
  details: { childhoodDish: 'pizza' },
}

test('rendering ProfilePage', () => {
  const { getByText } = render(
    <MemoryRouter>
      <ProfilePage recipes={recipeData} user={user} />
    </MemoryRouter>
  )
  const linkElement = getByText(/Caro/i)
  expect(linkElement).toBeInTheDocument()
})
test('rendering images created by the user', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <ProfilePage recipes={recipeData} user={user} />
    </MemoryRouter>
  )
  const linkElement = getByTestId(/Chocolate Chip Cookies/i)
  expect(linkElement).toBeInTheDocument()
})

test('onClick render user details and onClick edit details', () => {
  const { getByText, getByTestId, getByPlaceholderText } = render(
    <MemoryRouter>
      <ProfilePage recipes={recipeData} user={user} />
    </MemoryRouter>
  )
  const detailsButton = getByTestId(/detailsSelector/i)
  userEvent.click(detailsButton)
  const detailsElement = getByText(/pizza/i)
  expect(detailsElement).toBeInTheDocument()
  const editButton = getByText(/edit profile/i)
  userEvent.click(editButton)
  const inputField = getByPlaceholderText(/e.g. mexican/i)
  expect(inputField).toBeInTheDocument()
})
