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
  const [displayElement, setDisplayElement] = useState('userRecipes')

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
              onClick={() => setDisplayElement('userRecipes')}
              displayElement={displayElement}
            >
              CreatedRecipes
            </UserRecipesSelector>
            <UserDetailsSelector
              onClick={() => setDisplayElement('userDetails')}
              displayElement={displayElement}
            >
              UserDetails
            </UserDetailsSelector>
          </DisplaySelection>
          {displayElement === 'userRecipes' && (
            <>
              {userRecipes && (
                <ImageSection>
                  {userRecipes.map((recipe) => (
                    <Link to={`/recipe/${recipe.id}`}>
                      <RecipeImage
                        src={recipe.image}
                        alt=""
                        onClick={() => setPreviousPage('Profile')}
                      />
                    </Link>
                  ))}
                </ImageSection>
              )}
            </>
          )}
          {displayElement === 'userDetails' && (
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
          <LogoutButton onClick={logoutUser} alt="logout" />
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
  border-top: 1px solid var(--primary);
  border-bottom: 1px solid var(--primary);
  margin-bottom: 4px;
`
const ParagraphStyled = styled.p`
  margin: 0;
  padding-top: 4px;
  padding-bottom: 4px;
  width: 50%;
  text-align: center;
  cursor: default;
`
const UserDetailsSelector = styled(ParagraphStyled)`
  color: ${(props) =>
    props.displayElement === 'userDetails'
      ? 'var(--primary)'
      : 'rgba(81, 79, 75, 0.4)'};
  background: ${(props) =>
    props.displayElement === 'userDetails'
      ? 'var(--primary-background)'
      : 'rgba(242, 239, 233, 0.4)'};
  font-weight: ${(props) => (props.display === 'userDetails' ? 300 : 200)};
`
const UserRecipesSelector = styled(ParagraphStyled)`
  color: ${(props) =>
    props.displayElement === 'userRecipes'
      ? 'var(--primary)'
      : 'rgba(81, 79, 75, 0.4)'};
  background: ${(props) =>
    props.displayElement === 'userRecipes'
      ? 'var(--primary-background)'
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
  background: var(--primary-background);
  margin-top: 12px;
`
const ButtonEditStyled = styled(ButtonStyled)`
  width: 85px;
`
const ButtonSaveStyled = styled(ButtonStyled)`
  width: 50px;
`
const ButtonCancelStyled = styled(ButtonStyled)`
  width: 50px;
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
