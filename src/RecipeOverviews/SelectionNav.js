import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function DisplaySelection() {
  return (
    <SectionStyled>
      <NavItem exact to="/" activeClassName="selected">
        all
      </NavItem>
      <NavItem
        to="/favourites"
        activeClassName="selected"
        className="favourite-recipes"
      >
        favourites
      </NavItem>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  font-weight: 300;
`

const NavItem = styled(NavLink)`
  color: var(--primary);
  text-decoration: none;
  &.selected {
    text-decoration: underline;
  }
`
