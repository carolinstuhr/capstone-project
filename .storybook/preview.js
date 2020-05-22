import React from 'react'
import { addDecorator } from '@storybook/react'
import { MemoryRouter as Router } from 'react-router-dom'
import GlobalStyles from '../src/GlobalStyles'
import { addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addDecorator((storyFn) => (
  <Router>
    <GlobalStyles />
    {storyFn()}
  </Router>
))

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})
