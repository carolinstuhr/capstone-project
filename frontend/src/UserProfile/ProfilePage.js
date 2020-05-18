import React, { useEffect, useState } from 'react'
import { db } from '../firebaseConfig'
import CreateHeader from '../CreateRecipe/CreateHeader'
import styled from 'styled-components/macro'
import LogoutButton from './LogoutButton'

export default function ProfilePage() {
  const [users, setUser] = useState('')

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
    <>
      <CreateHeader>profile</CreateHeader>
      {user && (
        <MainStyled>
          <ParagraphStyled>Name: </ParagraphStyled>
          <UserInfo>{user[0].name}</UserInfo>
          <ParagraphStyled>E-mail address: </ParagraphStyled>
          <UserInfo>{user[0].email}</UserInfo>
          <ParagraphStyled>Favourite Recipe: </ParagraphStyled>
          {user[0].food ? (
            <UserInfo>{user[0].food}</UserInfo>
          ) : (
            <>
              <InputStyled
                type="text"
                placeholder="Add your favourite recipe"
              />

              <ButtonStyled>Add</ButtonStyled>
            </>
          )}
          <LogoutButton />
        </MainStyled>
      )}
    </>
  )
}
const MainStyled = styled.main`
  padding-left: 16px;
`

const ParagraphStyled = styled.p`
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 4px;
`
const UserInfo = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-top: 4px;
`
const InputStyled = styled.input`
  font-size: 14px;
  padding-left: 4px;
  color: #514f4b;
  height: 28px;
`
const ButtonStyled = styled.button`
  width: 80px;
  padding: 4px;
  justify-self: center;
  margin-top: 4px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 300;
  background: rgba(242, 239, 233, 1);
  margin-left: 4px;
`
