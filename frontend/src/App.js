import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import RecipeList from './RecipeOverviews/AllRecipes'
import Header from './RecipeOverviews/Header'
import RecipeDetails from './RecipeDetails/RecipeDetails'
import RecipeFavourites from './RecipeOverviews/FavouriteRecipes'
import CreateRecipe from './CreateRecipe/CreateRecipe'
import CreateHeader from './CreateRecipe/CreateHeader'
import { db } from './firebaseConfig'
import SignUp from './UserLogin/SignUp'
import LoginHeader from './UserLogin/LoginHeader'
import SignIn from './UserLogin/SignIn'
import PrivateRoute from './PrivateRoute'
import ChefsHat from './images/chefs-hat.png'
import ProfilePage from './UserProfile/ProfilePage'

export default function App() {
  const [recipes, setRecipes] = useState([])
  const [pending, setPending] = useState(true)

  useEffect(() => {
    db.collection('recipes').onSnapshot((snapshot) => {
      const recipes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setRecipes(recipes)
      setPending(false)
    })
  }, [])

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
            {pending ? (
              <LoadingLogo src={ChefsHat} alt="loading" />
            ) : (
              <RecipeList setPreviousPage={setPreviousPage} recipes={recipes} />
            )}
          </GridDiv>
        </PrivateRoute>
        <PrivateRoute path="/favourites">
          <GridDiv>
            <Header>favourites</Header>
            {pending ? (
              <LoadingLogo src={ChefsHat} alt="loading" />
            ) : (
              <RecipeFavourites
                setPreviousPage={setPreviousPage}
                recipes={recipes}
              />
            )}
          </GridDiv>
        </PrivateRoute>
        <PrivateRoute path="/recipe/:id">
          <RecipeDetails
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
        <PrivateRoute path="/profile">
          <GridDiv>
            <ProfilePage />
          </GridDiv>
        </PrivateRoute>
      </Switch>
    </>
  )
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
const LoadingLogo = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 40%;
  right: 40%;
`
