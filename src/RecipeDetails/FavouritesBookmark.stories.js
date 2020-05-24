import React from 'react'
import FavouritesBookmark from './FavouritesBookmark'
import { action } from '@storybook/addon-actions'
import { withKnobs, color } from '@storybook/addon-knobs'

export default {
  component: FavouritesBookmark,
  title: 'FavouritesBookmark',
  decorators: [withKnobs],
}

export const ToggleHeart = () => (
  <FavouritesBookmark onClick={action('changed')} />
)

const label = 'Color'
const defaultValue = 'white'

export const FavouritesColor = () => (
  <FavouritesBookmark color={color(label, defaultValue)} />
)
