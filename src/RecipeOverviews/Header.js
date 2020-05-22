import React from 'react'
import ProfileIcon from '../UserProfile/ProfileIcon'

export default function Header({ children }) {
  return (
    <header>
      <h1>{children}</h1>
      <ProfileIcon />
    </header>
  )
}
