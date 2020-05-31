import React from 'react'
import CreateHeader from './CreateHeader'
import { withKnobs, color } from '@storybook/addon-knobs'

export default {
  component: CreateHeader,
  title: 'CreateHeader',
  decorators: [withKnobs],
}

const label = 'Color'
const defaultValue = '#c8461a'

export const ColorButton = () => (
  <CreateHeader
    style={{
      textAlign: 'center',
      fontSize: 32,
      paddingTop: 8,
      fontFamily: 'Nanum Myeongjo',
      fontWeight: 400,
    }}
    color={color(label, defaultValue)}
  />
)
