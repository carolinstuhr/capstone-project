import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import RecipeList from './RecipeList'
import Header from './Header'
import RecipeDetails from './RecipeDetails'

export default function App() {
  const [recipeDetails, setRecipeDetails] = useState('ingredients')

  return (
    <>
      <Switch>
        <Route exact path="/">
          <GridDiv>
            <Header>recipes</Header>
            <RecipeList showRecipeDetails={showRecipeDetails} />
          </GridDiv>
        </Route>
        <Route path="/recipe">
          <RecipeDetails
            displayIngredients={showIngredients}
            displayInstructions={showInstructions}
            recipeDetails={recipeDetails}
          />
        </Route>
      </Switch>
    </>
  )

  function showRecipeDetails(name, clickedRecipe) {
    localStorage.setItem(name, JSON.stringify(clickedRecipe))
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
