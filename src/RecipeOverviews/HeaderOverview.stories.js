import React from 'react'
import HeaderOverview from './HeaderOverview'

export default {
  component: HeaderOverview,
  title: 'HeaderOverview',
}

export const recipes = () => (
  <HeaderOverview
    style={{
      textAlign: 'center',
      fontSize: 32,
      paddingTop: 8,
      fontFamily: 'Nanum Myeongjo',
      fontWeight: 400,
    }}
  />
)
