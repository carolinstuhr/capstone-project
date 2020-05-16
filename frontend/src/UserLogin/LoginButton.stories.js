import React from 'react'
import LoginButton from './LoginButton'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  component: LoginButton,
  title: 'LoginButton',
  decorators: [withKnobs],
}

export const signIn = () => (
  <LoginButton>{text('Children', 'sign in')}</LoginButton>
)

export const register = () => (
  <LoginButton>{text('Children', 'register')}</LoginButton>
)
