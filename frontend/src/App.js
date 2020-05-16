import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import RecipeList from './AllRecipes'
import Header from './Header'
import RecipeDetails from './RecipeDetails'
import RecipeFavourites from './FavouriteRecipes'
import CreateRecipe from './CreateRecipe/CreateRecipe'
import CreateHeader from './CreateRecipe/CreateHeader'
import { db } from './firebaseConfig'
import SignUp from './UserLogin/SignUp'
import LoginHeader from './UserLogin/LoginHeader'
import SignIn from './UserLogin/SignIn'
import PrivateRoute from './PrivateRoute'

export default function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    db.collection('recipes').onSnapshot((snapshot) => {
      const recipes = snapshot.docs.map((doc) => ({
        DocId: doc.id,
        ...doc.data(),
      }))
      setRecipes(recipes)
    })
  }, [])

  const [recipeDetails, setRecipeDetails] = useState('ingredients')
  const [previousPage, setPreviousPage] = useState('All')

  return (
    <>
      <Switch>
        <Route path="/signin">
          <LoginSection>
            <LoginHeader>sign in</LoginHeader>
            <SignIn />
          </LoginSection>
        </Route>
        <Route path="/signup">
          <LoginSection>
            <LoginHeader>register</LoginHeader>
            <SignUp />
          </LoginSection>
        </Route>
        <PrivateRoute exact path="/">
          <GridDiv>
            <Header>recipes</Header>
            <RecipeList
              savedPreviousPage={savedPreviousPage}
              recipes={recipes}
            />
          </GridDiv>
        </PrivateRoute>
        <PrivateRoute path="/favourites">
          <GridDiv>
            <Header>favourites</Header>
            <RecipeFavourites
              savedPreviousPage={savedPreviousPage}
              recipes={recipes}
            />
          </GridDiv>
        </PrivateRoute>
        <PrivateRoute path="/recipe/:id">
          <RecipeDetails
            displayIngredients={showIngredients}
            displayInstructions={showInstructions}
            recipeDetails={recipeDetails}
            recipes={recipes}
            setRecipes={setRecipes}
            previousPage={previousPage}
          />
        </PrivateRoute>
        <PrivateRoute path="/create">
          <GridDiv>
            <CreateHeader>create</CreateHeader>
            <CreateRecipe setRecipes={setRecipes} recipes={recipes} />
          </GridDiv>
        </PrivateRoute>
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

const LoginSection = styled.div`
  background: #f2efe9;
  height: 100vh;
  margin: 0;
`
