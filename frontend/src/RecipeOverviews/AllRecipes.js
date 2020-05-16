import React from 'react'
import styled from 'styled-components/macro'
import FilterRecipes from './FilterRecipes'
import SelectionNav from './SelectionNav'
import RecipeList from './RecipeList'
import CreateRecipeButton from '../CreateRecipe/CreateRecipeButton'
import { Link } from 'react-router-dom'

export default function AllRecipes({
  setPreviousPage,
  recipes,
  userFilterInput,
  setUserFilterInput,
}) {
  let filteredRecipeData = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(userFilterInput.toLowerCase()) ||
      recipe.tags[0].toLowerCase().includes(userFilterInput.toLowerCase()) ||
      recipe.tags[1].toLowerCase().includes(userFilterInput.toLowerCase()) ||
      recipe.tags[2].toLowerCase().includes(userFilterInput.toLowerCase())
  )
  return (
    <MainStyled>
      <SelectionNav />
      <FilterRecipes setUserInput={setUserFilterInput} />
      {filteredRecipeData.length === 0 ? (
        <FallBackStyled>
          Unfortunately, we did not find any recipe matching your search
          request.
        </FallBackStyled>
      ) : (
        <RecipeList
          setPreviousPage={setPreviousPage}
          filteredRecipeData={filteredRecipeData}
          page={'All'}
        />
      )}
      <Link to="/create">
        <CreateRecipeButton />
      </Link>
    </MainStyled>
  )
}

const MainStyled = styled.main`
  margin-top: 18px;
`

const FallBackStyled = styled.p`
  margin-left: 16px;
  font-weight: 300;
`
