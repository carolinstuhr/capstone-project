import React from 'react'
import ProfileHeader from './ProfileHeader'

export default {
  component: ProfileHeader,
  title: 'ProfileHeader',
}

export const simple = () => (
  <ProfileHeader
    style={{
      textAlign: 'center',
      fontSize: 32,
      paddingTop: 8,
      fontFamily: 'Nanum Myeongjo',
      fontWeight: 400,
    }}
  />
)
