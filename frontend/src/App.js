import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import RecipeList from './AllRecipes'
import Header from './Header'
import RecipeDetails from './RecipeDetails'
import RecipeFavourites from './FavouriteRecipes'
import { saveToStorage, loadFromStorage } from './services'
import CreateRecipe from './CreateRecipe/CreateRecipe'
import CreateHeader from './CreateRecipe/CreateHeader'
import { db } from './firebaseConfig'

export default function App() {
  const [recipes, setRecipes] = useState(loadFromStorage('recipes') || [])

  useEffect(() => {
    fetch('https://us-central1-get-cooking.cloudfunctions.net/api/recipes')
      .then((res) => res.json())
      .then((data) => setRecipes(data))
    console.log(recipes)

    // const RecipeList = db.collection('recipes').onSnapshot((snapshot) => {
    //   const recipes = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }))
    //   setRecipes(recipes)
    // })
    // return () => {
    //   RecipeList()
    // }
  }, [recipes])

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
              savedPreviousPage={savedPreviousPage}
              recipes={recipes}
            />
          </GridDiv>
        </Route>
        <Route path="/favourites">
          <GridDiv>
            <Header>favourites</Header>
            <RecipeFavourites
              savedPreviousPage={savedPreviousPage}
              recipes={recipes}
            />
          </GridDiv>
        </Route>
        <Route path="/recipe/:id">
          <RecipeDetails
            displayIngredients={showIngredients}
            displayInstructions={showInstructions}
            recipeDetails={recipeDetails}
            recipes={recipes}
            setRecipes={setRecipes}
            previousPage={previousPage}
          />
        </Route>
        <Route path="/create">
          <GridDiv>
            <CreateHeader>create</CreateHeader>
            <CreateRecipe setRecipes={setRecipes} recipes={recipes} />
          </GridDiv>
        </Route>
      </Switch>
    </>
  )

  function savedPreviousPage(page) {
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
