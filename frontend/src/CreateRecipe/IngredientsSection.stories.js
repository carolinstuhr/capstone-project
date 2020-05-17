import React from 'react'
import IngredientsSection from './IngredientsSection'

export default {
  component: IngredientsSection,
  title: 'IngredientsSection',
}

export const simple = () => (
  <IngredientsSection ingredients={[{ amount: '', name: '' }]} />
)
