import React from 'react'
import LogoutButton from './LogoutButton'
import { action } from '@storybook/addon-actions'

export default {
  component: LogoutButton,
  title: 'LogoutButton',
}

export const click = () => <LogoutButton logoutUser={action('clicked')} />
