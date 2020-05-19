import React, { useEffect, useState } from 'react'
import { db, auth } from '../firebaseConfig'
import CreateHeader from '../CreateRecipe/CreateHeader'
import styled from 'styled-components/macro'
import LogoutButton from './LogoutButton'
import GridArea from '../GridArea'
import ChefsHat from '../images/chefs-hat.png'

export default function ProfilePage({ logout }) {
  const [users, setUser] = useState('')

  const [editProfile, setEditProfile] = useState(true)

  const [details, setDetails] = useState({
    internationalCuisine: '',
    childhoodDish: '',
    restaurant: '',
  })

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
          <Wrapper>
            <ImageStyled src={ChefsHat} alt="" />
          </Wrapper>
          <UserInfoName>{user.name}</UserInfoName>

          {editProfile && (
            <>
              <LabelStyled htmlFor="internationalCuisine">
                favourite international cuisine:
              </LabelStyled>
              <InputStyled
                type="text"
                placeholder="e.g. mexican"
                value={
                  details.internationalCuisine ||
                  user.details.internationalCuisine
                }
                name="internationalCuisine"
                id="internationalCuisine"
                onChange={storeDetails}
              />
              <LabelStyled htmlFor="internationalCuisine">
                dish of your childhood:
              </LabelStyled>
              <InputStyled
                type="text"
                placeholder="e.g. mum's pancakes"
                value={details.childhoodDish || user.details.childhoodDish}
                name="childhoodDish"
                onChange={storeDetails}
              />
              <LabelStyled htmlFor="internationalCuisine">
                favourite restaurant:
              </LabelStyled>
              <InputStyled
                type="text"
                placeholder="e.g. NENI, Hamburg"
                value={details.restaurant || user.details.restaurant}
                name="restaurant"
                onChange={storeDetails}
              />
              <ButtonSaveStyled onClick={() => addDetails(user)}>
                save
              </ButtonSaveStyled>
              <ButtonCancelStyled onClick={() => setEditProfile(false)}>
                cancel
              </ButtonCancelStyled>
            </>
          )}
          {editProfile || (
            <>
              <Title>favourite international cuisine:</Title>
              <UserInput>{user.details.internationalCuisine}</UserInput>
              <Title>dish of your childhood:</Title>
              <UserInput>{user.details.childhoodDish}</UserInput>
              <Title>favourite restaurant:</Title>
              <UserInput>{user.details.restaurant}</UserInput>
              <ButtonEditStyled onClick={() => setEditProfile(true)}>
                edit profile
              </ButtonEditStyled>
            </>
          )}

          <LogoutButton logoutUser={logoutUser} />
        </MainStyled>
      )}
    </GridArea>
  )
  function storeDetails(event) {
    setDetails({ ...details, [event.target.name]: event.target.value })
  }

  function addDetails(user) {
    db.collection('users')
      .doc(user.id)
      .update({ details })
      .then(() => {
        setEditProfile(false)
        console.log('Favourites updated!')
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
const Wrapper = styled.div`
  text-align: center;
`

const ImageStyled = styled.img`
  height: 150px;
  width: 150px;
  border: 1px solid;
  padding: 4px;
`
const UserInfoName = styled.p`
  font-weight: 400;
  font-size: 22px;
  margin-top: 8px;
  text-align: center;
`

const LabelStyled = styled.label`
  display: block;
  font-weight: 400;
  font-size: 16px;
  margin-top: 12px;
`
const Title = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-top: 12px;
  margin-bottom: 4px;
`

const UserInput = styled.p`
  font-weight: 200;
  font-size: 16px;
  margin-top: 0;
`

const InputStyled = styled.input`
  font-size: 14px;
  padding-left: 4px;
  color: #514f4b;
  height: 28px;
  display: block;
`
const ButtonStyled = styled.button`
  height: 30px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 200;
  background: rgba(242, 239, 233, 1);
`
const ButtonEditStyled = styled(ButtonStyled)`
  width: 85px;
`
const ButtonSaveStyled = styled(ButtonStyled)`
  width: 50px;
  margin-top: 12px;
`
const ButtonCancelStyled = styled(ButtonStyled)`
  width: 50px;
  margin-top: 12px;
  margin-left: 4px;
  padding: 2px;
`
