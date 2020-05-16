import React from 'react'
import SearchIcon from '../images/search-icon.svg'
import styled from 'styled-components/macro'

export default function FilterRecipes({ setUserInput }) {
  return (
    <SectionCenter>
      <SearchSection>
        <InputFieldStyled
          type="search"
          onChange={(event) => filterResults(event)}
          placeholder="Search for recipes..."
        />
        <SearchIconStyled src={SearchIcon} alt="maginifier" />
      </SearchSection>
    </SectionCenter>
  )
  function filterResults(event) {
    setUserInput(event.target.value)
  }
}
const SectionCenter = styled.section`
  display: grid;
  justify-content: center;
  margin-bottom: 28px;
`

const SearchSection = styled.section`
  display: grid;
  grid-template-columns: 8fr 1fr;
  width: 200px;
`

const InputFieldStyled = styled.input`
  grid-column: 1 / 3;
  grid-row: 1;
  width: 200px;
  height: 28px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  font-weight: 200;
  padding-top: 4px;
  padding-left: 8px;
  border-radius: 4px;
  border: 1px solid #a09e9a;
`

const SearchIconStyled = styled.img`
  grid-column: 2 / 3;
  grid-row: 1;
  height: 16px;
  width: 16px;
  margin-top: 6px;
`
