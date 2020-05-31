import React, { useState } from 'react'
import styled from 'styled-components/macro'
import FilterRecipes from './FilterRecipes'
import SelectionNav from './SelectionNav'
import RecipeList from './RecipeList'
import CreateRecipeButton from './CreateRecipeButton'
import { Link } from 'react-router-dom'
import GridArea from '../Shared/GridArea'
import HeaderOverview from './HeaderOverview'
import LoadingLogo from './LoadingLogo'
import { filterUserRecipes } from './useFilterRecipes'

export default function AllRecipes({ setPreviousPage, recipes, pending }) {
  const [userFilterInput, setUserFilterInput] = useState('')
  let filteredRecipeData = filterUserRecipes(userFilterInput, recipes)

  return (
    <GridArea>
      <HeaderOverview />
      {pending ? (
        <LoadingLogo />
      ) : (
        <main>
          <SelectionNav />
          <FilterRecipes setUserInput={setUserFilterInput} />
          {filteredRecipeData.length === 0 ? (
            <FallBackStyled className="fallback-all">
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
            <CreateRecipeButton className="create-recipe-button" />
          </Link>
        </main>
      )}
    </GridArea>
  )
}

const FallBackStyled = styled.p`
  margin-left: 16px;
  font-weight: 300;
`
