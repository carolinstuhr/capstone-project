import React, { useEffect, useState } from 'react'
import { db, auth } from '../firebaseConfig'
import CreateHeader from '../CreateRecipe/CreateHeader'
import styled from 'styled-components/macro'
import LogoutButton from './LogoutButton'
import GridArea from '../GridArea'

export default function ProfilePage({ logout }) {
  const [users, setUser] = useState('')
  const [internationalCuisine, setIinternationalCuisine] = useState('')
  const [childhoodDish, setChildhoodDish] = useState('')
  const [restaurant, setRestaurant] = useState('')

  const currentUser = localStorage.getItem('uid')

  useEffect(() => {
    db.collection('users').onSnapshot((snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        docId: doc.id,
        ...doc.data(),
      }))
      setUser(users)
    })
  }, [])

  let user = users && users.filter((user) => user.id === currentUser)[0]

  return (
    <GridArea>
      <CreateHeader>profile</CreateHeader>
      {user && (
        <MainStyled>
          <ParagraphStyled>username: </ParagraphStyled>
          <UserInfo>{user.name}</UserInfo>
          <ParagraphStyled>e-mail: </ParagraphStyled>
          <UserInfo>{user.email}</UserInfo>
          <ParagraphStyled>favourite international cuisine: </ParagraphStyled>
          {user.internationalCuisine ? (
            <UserInfo>{user.internationalCuisine}</UserInfo>
          ) : (
            <>
              <InputStyled
                type="text"
                placeholder="e.g. mexican"
                value={internationalCuisine}
                name="favourites"
                onChange={(event) =>
                  setIinternationalCuisine(event.target.value)
                }
              />

              <ButtonStyled
                onClick={() =>
                  addNewDetail(
                    user,
                    'internationalCuisine',
                    internationalCuisine
                  )
                }
              >
                Add
              </ButtonStyled>
            </>
          )}
          <ParagraphStyled>dish of your childhood: </ParagraphStyled>
          {user.childhoodDish ? (
            <UserInfo>{user.childhoodDish}</UserInfo>
          ) : (
            <>
              <InputStyled
                type="text"
                placeholder="e.g. mum's pancakes"
                value={childhoodDish}
                name="favourites"
                onChange={(event) => setChildhoodDish(event.target.value)}
              />

              <ButtonStyled
                onClick={() =>
                  addNewDetail(user, 'childhoodDish', childhoodDish)
                }
              >
                Add
              </ButtonStyled>
            </>
          )}
          <ParagraphStyled>favourite restaurant: </ParagraphStyled>
          {user.restaurant ? (
            <UserInfo>{user.restaurant}</UserInfo>
          ) : (
            <>
              <InputStyled
                type="text"
                placeholder="e.g. NENI, Hamburg"
                value={restaurant}
                name="favourites"
                onChange={(event) => setRestaurant(event.target.value)}
              />

              <ButtonStyled
                onClick={() => addNewDetail(user, 'restaurant', restaurant)}
              >
                Add
              </ButtonStyled>
            </>
          )}
          <LogoutButton logoutUser={logoutUser} />
        </MainStyled>
      )}
    </GridArea>
  )

  function addNewDetail(user, key, value) {
    db.collection('users')
      .doc(user.id)
      .update({ [key]: value })
      .then(() => {
        console.log('Favourite updated!')
        setRestaurant('')
      })
      .catch((err) =>
        alert('Something went wrong. Please try again later.', err)
      )
  }

  function logoutUser(event) {
    event.preventDefault()
    auth
      .signOut()
      .then(() => {
        logout()
      })
      .catch((err) => console.log(err))
  }
}
const MainStyled = styled.main`
  padding-left: 16px;
`

const ParagraphStyled = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 4px;
`
const UserInfo = styled.p`
  font-weight: 300;
  font-size: 16px;
  margin-top: 4px;
  margin-bottom: 22px;
`
const InputStyled = styled.input`
  font-size: 14px;
  padding-left: 4px;
  color: #514f4b;
  height: 28px;
`
const ButtonStyled = styled.button`
  width: 50px;
  padding: 4px;
  justify-self: center;
  margin-top: 4px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 300;
  background: rgba(242, 239, 233, 1);
  margin-left: 4px;
`
