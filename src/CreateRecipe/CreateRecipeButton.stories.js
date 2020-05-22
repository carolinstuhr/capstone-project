import React from 'react'
import CreateRecipeButton from './CreateRecipeButton'
import { withKnobs, color } from '@storybook/addon-knobs'

export default {
  component: CreateRecipeButton,
  title: 'CreateRecipeButton',
  decorators: [withKnobs],
}

const label = 'Color'
const defaultValue = '#c8461a'

export const ColorButton = () => (
  <CreateRecipeButton color={color(label, defaultValue)} />
)
