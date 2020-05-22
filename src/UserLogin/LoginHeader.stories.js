import React from 'react'
import LoginHeader from './LoginHeader'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  component: LoginHeader,
  title: 'LoginHeader',
  decorators: [withKnobs],
}

export const signIn = () => (
  <LoginHeader>{text('Children', 'sign in')}</LoginHeader>
)

export const register = () => (
  <LoginHeader>{text('Children', 'register')}</LoginHeader>
)
