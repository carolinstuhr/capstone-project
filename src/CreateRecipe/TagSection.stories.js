import React from 'react'
import TagSection from './TagSection'

export default {
  component: TagSection,
  title: 'TagSection',
}

export const oneTag = () => <TagSection tags={['quick']} />
export const threeTags = () => <TagSection tags={['quick', 'easy', 'summer']} />
