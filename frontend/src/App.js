import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import RecipeList from './RecipeList'
import Header from './Header'
import RecipeDetails from './RecipeDetails'
import RecipeFavourites from './RecipeFavourites'
import recipeData from './RecipeList.json'
import { saveToStorage, loadFromStorage } from './services'

export default function App() {
  const [recipes, setRecipes] = useState(
    loadFromStorage('recipes') || saveToStorage('recipes', recipeData)
  )
  const [recipeDetails, setRecipeDetails] = useState('ingredients')
  const [previousPage, setPreviousPage] = useState('All')

  useEffect(() => {
    saveToStorage('recipes', recipes)
  }, [recipes])

  return (
    <>
      <Switch>
        <Route exact path="/">
          <GridDiv>
            <Header>recipes</Header>
            <RecipeList
              showRecipeDetails={showRecipeDetails}
              recipes={recipes}
            />
          </GridDiv>
        </Route>
        <Route path="/favourites">
          <GridDiv>
            <Header>favourites</Header>
            <RecipeFavourites
              showRecipeDetails={showRecipeDetails}
              recipes={recipes}
            />
          </GridDiv>
        </Route>
        <Route path="/recipe">
          <RecipeDetails
            displayIngredients={showIngredients}
            displayInstructions={showInstructions}
            recipeDetails={recipeDetails}
            recipes={recipes}
            setRecipes={setRecipes}
            previousPage={previousPage}
          />
        </Route>
      </Switch>
    </>
  )

  function showRecipeDetails(name, clickedRecipe, page) {
    localStorage.setItem(name, JSON.stringify(clickedRecipe))
    setPreviousPage(page)
  }

  function showIngredients() {
    setRecipeDetails('ingredients')
  }
  function showInstructions() {
    setRecipeDetails('instructions')
  }
}

const GridDiv = styled.div`
  display: grid;
  grid-template-rows: 48px auto;
  height: 100vh;
`
