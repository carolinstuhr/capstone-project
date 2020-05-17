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
  <FavouritesBookmark toggleFavourites={action('changed')} />
)

const label = 'Color'
const defaultValue = '#c8461a'

export const FavouritesColor = () => (
  <FavouritesBookmark color={color(label, defaultValue)} />
)
