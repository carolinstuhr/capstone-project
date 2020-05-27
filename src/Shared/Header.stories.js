import React from 'react'
import Header from './Header'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  component: Header,
  title: 'Header',
  decorators: [withKnobs],
}

export const simple = () => (
  <Header
    style={{
      textAlign: 'center',
      fontSize: 32,
      paddingTop: 8,
      fontFamily: 'Nanum Myeongjo',
      fontWeight: 400,
    }}
  >
    {text('Children', 'recipes')}
  </Header>
)
