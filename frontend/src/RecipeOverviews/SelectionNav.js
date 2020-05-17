import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function DisplaySelection() {
  return (
    <SelectionSection>
      <NavItem exact to="/" activeClassName="selected">
        All
      </NavItem>
      <NavItem exact to="/favourites" activeClassName="selected">
        Favourites
      </NavItem>
    </SelectionSection>
  )
}

const SelectionSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  font-weight: 300;
`

const NavItem = styled(NavLink)`
  color: #514f4b;
  text-decoration: none;
  &.selected {
    text-decoration: underline;
  }
`
