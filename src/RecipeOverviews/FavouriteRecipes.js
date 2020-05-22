import React, { useState } from 'react'
import styled from 'styled-components/macro'
import FilterRecipes from './FilterRecipes'
import SelectionNav from './SelectionNav'
import RecipeList from './RecipeList'
import CreateRecipeButton from '../CreateRecipe/CreateRecipeButton'
import { Link } from 'react-router-dom'
import GridArea from '../GridArea'
import Header from './Header'
import LoadingLogo from './LoadingLogo'

export default function FavouriteRecipes({
  setPreviousPage,
  recipes,
  pending,
  user,
}) {
  const [userFilterInput, setUserFilterInput] = useState('')

  let favouriteRecipes = recipes.filter(
    (recipe) => user && user.favourites.includes(recipe.id)
  )

  const userInput = userFilterInput.toLowerCase()
  let filteredRecipeData = favouriteRecipes.filter((recipe) => {
    return (
      recipe.title.toLowerCase().includes(userInput) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(userInput))
    )
  })

  return (
    <GridArea>
      <Header>recipes</Header>
      {pending ? (
        <LoadingLogo />
      ) : (
        <main>
          <SelectionNav />
          <FilterRecipes setUserInput={setUserFilterInput} />
          {favouriteRecipes.length === 0 && (
            <FallBackStyled>
              Unfortunately, you haven't selected any favourites yet.
            </FallBackStyled>
          )}
          {favouriteRecipes.length > 0 && filteredRecipeData.length === 0 ? (
            <FallBackStyled>
              Unfortunately, we did not find any of your favourite recipes
              matching your search request.
            </FallBackStyled>
          ) : (
            <RecipeList
              setPreviousPage={setPreviousPage}
              filteredRecipeData={filteredRecipeData}
              page={'Favourites'}
            />
          )}
          <Link to="/create" className="create_recipe_button">
            <CreateRecipeButton />
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
