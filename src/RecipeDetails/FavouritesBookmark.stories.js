import React from 'react'
import FavouritesBookmark from './FavouritesBookmark'
import { action } from '@storybook/addon-actions'
import { withKnobs, color } from '@storybook/addon-knobs'

export default {
  component: FavouritesBookmark,
  title: 'FavouritesBookmark',
  decorators: [withKnobs],
}

const label = 'Color'
const noFavourite = 'white'
const favourite = '#c82a1a'

export const NotFavourite = () => (
  <FavouritesBookmark
    color={color(label, noFavourite)}
    onClick={action('changed')}
  />
)

export const Favourite = () => (
  <FavouritesBookmark
    color={color(label, favourite)}
    onClick={action('changed')}
  />
)
