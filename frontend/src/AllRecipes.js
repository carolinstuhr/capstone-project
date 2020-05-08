import React, { useState } from 'react'
import styled from 'styled-components/macro'
import FilterRecipes from './FilterRecipes'
import DisplaySelection from './DisplaySelection'
import RecipeList from './RecipeList'
import CreateRecipeButton from './CreateRecipe/CreateRecipeButton'
import { Link } from 'react-router-dom'

export default function AllRecipes({ savedPreviousPage, recipes }) {
  const [userInput, setUserInput] = useState('')

  let filteredRecipeData = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(userInput.toLowerCase()) ||
      recipe.tags[0].toLowerCase().includes(userInput.toLowerCase()) ||
      recipe.tags[1].toLowerCase().includes(userInput.toLowerCase()) ||
      recipe.tags[2].toLowerCase().includes(userInput.toLowerCase())
  )
  return (
    <SectionStyled>
      <DisplaySelection />
      <FilterRecipes setUserInput={setUserInput} />
      {filteredRecipeData.length === 0 ? (
        <FallBackStyled>
          Unfortunately, we did not find any recipe matching your search
          request.
        </FallBackStyled>
      ) : (
        <RecipeList
          savedPreviousPage={savedPreviousPage}
          filteredRecipeData={filteredRecipeData}
          page={'All'}
        />
      )}
      <Link to="/create">
        <CreateRecipeButton />
      </Link>
    </SectionStyled>
  )
}

const SectionStyled = styled.main`
  margin-top: 18px;
`

const FallBackStyled = styled.p`
  margin-left: 16px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
`
