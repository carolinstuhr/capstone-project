import React from 'react'
import AdditionalLineButton from './AdditionalLineButton'
import { action } from '@storybook/addon-actions'

export default {
  component: AdditionalLineButton,
  title: 'AdditionalLineButton',
}

export const click = () => (
  <AdditionalLineButton addAdditionalLine={action('clicked')} />
)
