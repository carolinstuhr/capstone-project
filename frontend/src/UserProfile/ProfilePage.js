import React, { useEffect, useState } from 'react'
import { db, auth } from '../firebaseConfig'
import CreateHeader from '../CreateRecipe/CreateHeader'
import styled from 'styled-components/macro'
import LogoutButton from './LogoutButton'
import GridArea from '../GridArea'

export default function ProfilePage({ logout }) {
  const [users, setUser] = useState('')
  const [international, setInternational] = useState('')
  const [addedInternational, setAddedInternational] = useState('')
  const [childhood, setChildhood] = useState('')
  const [addedChildhood, setAddedChildhood] = useState('')
  const [restaurant, setRestaurant] = useState('')
  const [addedRestaurant, setAddedRestaurant] = useState('')

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

  let user = users && users.filter((user) => user.id === currentUser)

  return (
    <GridArea>
      <CreateHeader>profile</CreateHeader>
      {user && (
        <MainStyled>
          <ParagraphStyled>username: </ParagraphStyled>
          <UserInfo>{user[0].name}</UserInfo>
          <ParagraphStyled>e-mail: </ParagraphStyled>
          <UserInfo>{user[0].email}</UserInfo>
          <ParagraphStyled>favourite international cuisine: </ParagraphStyled>
          {addedInternational ? (
            <UserInfo>{addedInternational}</UserInfo>
          ) : (
            <>
              <InputStyled
                type="text"
                placeholder="e.g. mexican"
                value={international}
                name="favourites"
                onChange={(event) => setInternational(event.target.value)}
              />

              <ButtonStyled
                onClick={() => setAddedInternational(international)}
              >
                Add
              </ButtonStyled>
            </>
          )}
          <ParagraphStyled>dish of your childhood: </ParagraphStyled>
          {addedChildhood ? (
            <UserInfo>{addedChildhood}</UserInfo>
          ) : (
            <>
              <InputStyled
                type="text"
                placeholder="e.g. mum's pancakes"
                value={childhood}
                name="favourites"
                onChange={(event) => setChildhood(event.target.value)}
              />

              <ButtonStyled onClick={() => setAddedChildhood(childhood)}>
                Add
              </ButtonStyled>
            </>
          )}
          <ParagraphStyled>favourite restaurant: </ParagraphStyled>
          {addedRestaurant ? (
            <UserInfo>{addedRestaurant}</UserInfo>
          ) : (
            <>
              <InputStyled
                type="text"
                placeholder="e.g. NENI, Hamburg"
                value={restaurant}
                name="favourites"
                onChange={(event) => setRestaurant(event.target.value)}
              />

              <ButtonStyled onClick={() => setAddedRestaurant(restaurant)}>
                Add
              </ButtonStyled>
            </>
          )}
          <LogoutButton logoutUser={logoutUser} />
        </MainStyled>
      )}
    </GridArea>
  )
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
