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
  const [recipeDetails, setRecipeDetails] = useState('ingredients')
  const [recipes, setRecipes] = useState(
    JSON.parse(localStorage.getItem('recipes')) ||
      localStorage.setItem('recipes', JSON.stringify(recipeData))
  )

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
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
              setRecipes={setRecipes}
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
