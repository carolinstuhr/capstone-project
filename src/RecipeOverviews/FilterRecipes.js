import React from 'react'
import SearchIcon from '../images/search-icon.svg'
import styled from 'styled-components/macro'

export default function FilterRecipes({ setUserInput }) {
  return (
    <SectionCenter>
      <SearchSection>
        <InputFieldStyled
          type="search"
          onChange={(event) => setUserInput(event.target.value)}
          placeholder="Search for recipes..."
          className="recipes-filter"
        />
        <SearchIconStyled src={SearchIcon} alt="" />
      </SearchSection>
    </SectionCenter>
  )
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
  font-size: 16px;
  padding-top: 4px;
  padding-left: 8px;
`

const SearchIconStyled = styled.img`
  grid-column: 2 / 3;
  grid-row: 1;
  height: 16px;
  width: 16px;
  margin-top: 6px;
`
