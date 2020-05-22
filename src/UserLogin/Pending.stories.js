import React from 'react'
import Pending from './Pending'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  component: Pending,
  title: 'Pending',
  decorators: [withKnobs],
}

export const WelcomeBack = () => (
  <Pending>{text('Children', 'welcome back')}</Pending>
)

export const Welcome = () => <Pending>{text('Children', 'welcome')}</Pending>
