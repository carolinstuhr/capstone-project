import React from 'react'
import RecipeDetails from './RecipeDetails'
import { withKnobs, number } from '@storybook/addon-knobs'

export default {
  component: RecipeDetails,
  title: 'Recipe',
  decorators: [withKnobs],
}

export const simple = () => <RecipeDetails />
