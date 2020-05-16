import React from 'react'
import FilterRecipes from './FilterRecipes'
import { action } from '@storybook/addon-actions'

export default {
  component: FilterRecipes,
  title: 'FilterRecipes',
}

export const InputOnChange = () => (
  <FilterRecipes setUserInput={action('changed')} />
)
