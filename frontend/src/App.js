import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import RecipeList from './RecipeOverviews/AllRecipes'
import RecipeDetails from './RecipeDetails/RecipeDetails'
import FavouriteRecipes from './RecipeOverviews/FavouriteRecipes'
import CreateRecipe from './CreateRecipe/CreateRecipe'
import { db } from './firebaseConfig'
import SignUp from './UserLogin/SignUp'
import SignIn from './UserLogin/SignIn'
import PrivateRoute from './PrivateRoute'
import ProfilePage from './UserProfile/ProfilePage'

export default function App() {
  const [recipes, setRecipes] = useState([])
  const [pending, setPending] = useState(true)
  const [users, setUsers] = useState('')
  const [user, setUser] = useState('')
  const [previousPage, setPreviousPage] = useState('All')

  useEffect(() => {
    db.collection('recipes').onSnapshot((snapshot) => {
      const recipes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setRecipes(recipes)
    })
    const currentUser = localStorage.getItem('uid')
    // db.collection('users')
    //   .where('id', '==', currentUser)
    //   .onSnapshot((snapshot) => {
    //     const user = snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       ...doc.data(),
    //     }))
    //     setUser(user[0])
    //     setPending(false)
    //   })

    db.collection('users').onSnapshot((snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setUsers(users)
      const userObject = users.find(
        (user) => user.id === localStorage.getItem('uid')
      )
      setUser(userObject)
      setPending(false)
    })
  }, [])

  return (
    <>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <PrivateRoute exact path="/">
          <RecipeList
            setPreviousPage={setPreviousPage}
            recipes={recipes}
            pending={pending}
          />
        </PrivateRoute>
        <PrivateRoute path="/favourites">
          <FavouriteRecipes
            setPreviousPage={setPreviousPage}
            recipes={recipes}
            pending={pending}
            user={user}
          />
        </PrivateRoute>
        <PrivateRoute path="/recipe/:id">
          <RecipeDetails
            recipes={recipes}
            setRecipes={setRecipes}
            previousPage={previousPage}
            user={user}
          />
        </PrivateRoute>
        <PrivateRoute path="/create">
          <CreateRecipe setRecipes={setRecipes} recipes={recipes} />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <ProfilePage
            recipes={recipes}
            setPreviousPage={setPreviousPage}
            user={user}
          />
        </PrivateRoute>
      </Switch>
    </>
  )
}
