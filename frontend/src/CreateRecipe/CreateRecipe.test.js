import React from 'react'
import { render } from '@testing-library/react'
import CreateRecipe from './CreateRecipe'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

test('renders content of CreateRecipe.js', () => {
  const { getByPlaceholderText } = render(
    <MemoryRouter>
      <CreateRecipe />
    </MemoryRouter>
  )
  const element = getByPlaceholderText(/Title of Recipe.../i)
  expect(element).toBeInTheDocument()
})

test('should cycle elements in document tab order', () => {
  const { getByPlaceholderText, getByTestId } = render(
    <MemoryRouter>
      <CreateRecipe />
    </MemoryRouter>
  )
  const title = getByPlaceholderText(/Title of Recipe.../i)
  const tag1 = getByTestId('tag1')
  const tag2 = getByTestId('tag2')
  const tag3 = getByTestId('tag3')
  const servings = getByPlaceholderText(/1/i)
  const hour = getByTestId('hour')
  const minute = getByTestId('minute')
  const amount = getByPlaceholderText(/amount/i)
  const ingredient = getByPlaceholderText(/ingredient/i)
  const instruction = getByPlaceholderText(/description/i)

  expect(title).toHaveFocus()

  userEvent.tab()
  expect(tag1).toHaveFocus()

  userEvent.tab()
  expect(tag2).toHaveFocus()

  userEvent.tab()
  expect(tag3).toHaveFocus()

  userEvent.tab()
  expect(servings).toHaveFocus()

  userEvent.tab()
  expect(hour).toHaveFocus()

  userEvent.tab()
  expect(minute).toHaveFocus()

  userEvent.tab()
  expect(amount).toHaveFocus()

  userEvent.tab()
  expect(ingredient).toHaveFocus()

  userEvent.tab()
  expect(instruction).toHaveFocus()
})
