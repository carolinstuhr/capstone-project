import React from 'react'
import FilterRecipes from './FilterRecipes'
import { render } from '@testing-library/react'

test('entering matching recipe', () => {
  const mockSetUserInput = jest.fn()
  const wrapper = render(<FilterRecipes setUserInput={mockSetUserInput} />)
  const input = wrapper.find('.input')
  input.simulate('change')
  expect(mockSetUserInput).toHaveBeenCalledTimes(1)
})
