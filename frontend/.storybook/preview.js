import React from 'react'
import { addDecorator } from '@storybook/react'
import GlobalStyles from '../src/GlobalStyles'
import { addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})
