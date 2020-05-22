import React, { useState } from 'react'
import { db, auth } from '../firebaseConfig'
import CreateHeader from '../CreateRecipe/CreateHeader'
import styled from 'styled-components/macro'
import LogoutButton from './LogoutButton'
import GridArea from '../GridArea'
import ChefsHat from '../images/chefs-hat.png'
import { Link } from 'react-router-dom'

export default function ProfilePage({
  recipes,
  setPreviousPage,
  user,
  setUserStatus,
}) {
  const [display, setDisplay] = useState('userRecipes')

  const [editProfile, setEditProfile] = useState(false)

  const [details, setDetails] = useState({
    internationalCuisine: '',
    childhoodDish: '',
    restaurant: '',
  })

  let userRecipes = recipes.filter(
    (recipe) => recipe.userId && recipe.userId === user.id
  )

  return (
    <GridArea>
      <CreateHeader>profile</CreateHeader>
      {user && (
        <main>
          <TopSection>
            <UserImage src={ChefsHat} alt="" />
            <UserName>{user.name}</UserName>
            <UserInfo>created recipes: {userRecipes.length}</UserInfo>
            <UserInfo>liked recipes: {user.favourites.length}</UserInfo>
          </TopSection>
          <DisplaySelection>
            <UserRecipesSelector
              onClick={() => setDisplay('userRecipes')}
              display={display}
            >
              CreatedRecipes
            </UserRecipesSelector>
            <UserDetailsSelector
              onClick={() => setDisplay('userDetails')}
              display={display}
            >
              UserDetails
            </UserDetailsSelector>
          </DisplaySelection>
          {display === 'userRecipes' && (
            <>
              {userRecipes && (
                <ImageSection>
                  {userRecipes.map((recipe) => (
                    <LinkStyled to={`/recipe/${recipe.id}`}>
                      <RecipeImage
                        src={recipe.image}
                        alt=""
                        onClick={() => setPreviousPage('Profile')}
                      />
                    </LinkStyled>
                  ))}
                </ImageSection>
              )}
            </>
          )}
          {display === 'userDetails' && (
            <UserDetails>
              {editProfile && (
                <>
                  <LabelStyled htmlFor="internationalCuisine">
                    favourite international cuisine:
                  </LabelStyled>
                  <InputStyled
                    type="text"
                    placeholder="e.g. mexican"
                    value={details.internationalCuisine}
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
                    value={details.childhoodDish}
                    name="childhoodDish"
                    onChange={storeDetails}
                  />
                  <LabelStyled htmlFor="internationalCuisine">
                    favourite restaurant:
                  </LabelStyled>
                  <InputStyled
                    type="text"
                    placeholder="e.g. NENI, Hamburg"
                    value={details.restaurant}
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
                  {user.details && (
                    <>
                      {user.details.internationalCuisine && (
                        <>
                          <Title>favourite international cuisine:</Title>
                          <UserInput>
                            {user.details.internationalCuisine}
                          </UserInput>
                        </>
                      )}
                      {user.details.childhoodDish && (
                        <>
                          <Title>dish of your childhood:</Title>
                          <UserInput>{user.details.childhoodDish}</UserInput>
                        </>
                      )}
                      {user.details.restaurant && (
                        <>
                          <Title>favourite restaurant:</Title>
                          <UserInput>{user.details.restaurant}</UserInput>
                        </>
                      )}
                    </>
                  )}
                  {user.details.internationalCuisine === '' &&
                    user.details.childhoodDish === '' &&
                    user.details.restaurant === '' && (
                      <NoUserInput>
                        you haven't provided any additional information yet
                      </NoUserInput>
                    )}
                  <ButtonEditStyled onClick={() => changeEditMode()}>
                    edit profile
                  </ButtonEditStyled>
                </>
              )}
            </UserDetails>
          )}
          <LogoutButton logoutUser={logoutUser} />
        </main>
      )}
    </GridArea>
  )
  function storeDetails(event) {
    setDetails({ ...details, [event.target.name]: event.target.value })
  }

  function changeEditMode() {
    setEditProfile(true)
    details && setDetails(user.details)
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
        localStorage.removeItem('uid')
        setUserStatus(false)
      })
      .catch((err) => console.log(err))
  }
}

const TopSection = styled.section`
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: 40px auto;
  align-content: center;
  padding-left: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
`

const UserImage = styled.img`
  height: 100px;
  width: 100px;
  border: 1px solid;
  padding: 4px;
  border-radius: 50%;
  grid-column: 1 / 2;
  grid-row: 1 / 4;
`
const UserName = styled.p`
  font-weight: 400;
  font-size: 20px;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 12px;
`

const UserInfo = styled.p`
  font-weight: 200;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 12px;
`
const DisplaySelection = styled.section`
  margin-top: 22px;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid;
  border-bottom: 1px solid;
  margin-bottom: 4px;
`
const UserDetailsSelector = styled.p`
  margin: 0;
  padding-top: 4px;
  padding-bottom: 4px;
  width: 50%;
  text-align: center;
  border-right: 0.5px solid;
  cursor: default;
  color: ${(props) =>
    props.display === 'userDetails'
      ? 'rgba(81, 79, 75, 1)'
      : 'rgba(81, 79, 75, 0.4)'};
  background: ${(props) =>
    props.display === 'userDetails'
      ? 'rgba(242, 239, 233, 1)'
      : 'rgba(242, 239, 233, 0.4)'};
  font-weight: ${(props) => (props.display === 'userDetails' ? 300 : 200)};
`
const UserRecipesSelector = styled.p`
  margin: 0;
  padding-top: 4px;
  padding-bottom: 4px;
  width: 50%;
  text-align: center;
  border-left: 0.5px solid;
  cursor: default;
  color: ${(props) =>
    props.display === 'userRecipes'
      ? 'rgba(81, 79, 75, 1)'
      : 'rgba(81, 79, 75, 0.4)'};
  background: ${(props) =>
    props.display === 'userRecipes'
      ? 'rgba(242, 239, 233, 1)'
      : 'rgba(242, 239, 233, 0.4)'};
  font-weight: ${(props) => (props.display === 'userRecipes' ? 300 : 200)};
`

const UserDetails = styled.section`
  padding-left: 16px;
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
  margin-top: 12px;
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
const ImageSection = styled.section`
  margin-left: 3.75px;
`

const RecipeImage = styled.img`
  height: 120px;
  width: 120px;
  object-fit: cover;
  margin-right: 3.75px;
`

const NoUserInput = styled.p`
  font-weight: 200;
  font-size: 16px;
`

const LinkStyled = styled(Link)`
  display: inline-block;
  padding: 0;
  height: 0;
`
