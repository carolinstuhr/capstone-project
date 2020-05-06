import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function DisplaySelection() {
  return (
    <SelectionSection>
      <AllRecipesLink exact to="/" activeClassName="selected">
        All
      </AllRecipesLink>
      <FavouritesLink exact to="/favourites" activeClassName="selected">
        Favourites
      </FavouritesLink>
    </SelectionSection>
  )
}

const SelectionSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
`

const AllRecipesLink = styled(NavLink)`
  color: #514f4b;
  text-decoration: none;
  &.selected {
    text-decoration: underline;
  }
`

const FavouritesLink = styled(NavLink)`
  color: #514f4b;
  text-decoration: none;
  &.selected {
    text-decoration: underline;
  }
`
