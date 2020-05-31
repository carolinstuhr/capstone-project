import React from 'react'
import CreateRecipeButton from './CreateRecipeButton'
import { action } from '@storybook/addon-actions'

export default {
  component: CreateRecipeButton,
  title: 'CreateRecipeButton',
}

export const ColorButton = () => (
  <CreateRecipeButton onClick={action('changed')} />
)
