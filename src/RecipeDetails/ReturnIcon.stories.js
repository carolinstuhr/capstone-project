import React from 'react'
import ReturnIcon from './ReturnIcon'
import { action } from '@storybook/addon-actions'

export default {
  component: ReturnIcon,
  title: 'ReturnIcon',
}

export const simple = () => <ReturnIcon onClick={action('changed')} />
