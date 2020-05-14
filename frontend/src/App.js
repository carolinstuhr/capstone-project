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
import SignUp from './UserLogin/SignUp'
import LoginHeader from './UserLogin/LoginHeader'
import SignIn from './UserLogin/SignIn'

export default function App() {
  // const [recipes, setRecipes] = useState(loadFromStorage('recipes') || [])
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const RecipeList = db.collection('recipes').onSnapshot((snapshot) => {
      const recipes = snapshot.docs.map((doc) => ({
        DocId: doc.id,
        ...doc.data(),
      }))
      setRecipes(recipes)
    })
    return () => {
      RecipeList()
    }
  }, [recipes])

  const [recipeDetails, setRecipeDetails] = useState('ingredients')
  const [previousPage, setPreviousPage] = useState('All')

  const [userLoginInput, setUserLoginInput] = useState({})

  // useEffect(() => {
  //   saveToStorage('recipes', recipes)
  // }, [recipes])

  return (
    <>
      <Switch>
        <Route path="/signin">
          <LoginSection>
            <LoginHeader>sign in</LoginHeader>
            <SignIn
              storeUserLoginInput={storeUserLoginInput}
              userLoginInput={userLoginInput}
            />
          </LoginSection>
        </Route>
        <Route path="/signup">
          <LoginSection>
            <LoginHeader>register</LoginHeader>
            <SignUp
              storeUserLoginInput={storeUserLoginInput}
              userLoginInput={userLoginInput}
            />
          </LoginSection>
        </Route>
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

  function storeUserLoginInput(event) {
    setUserLoginInput({
      ...userLoginInput,
      [event.target.name]: event.target.value,
    })
  }

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
