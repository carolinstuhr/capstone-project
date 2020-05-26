import React, { useState } from 'react'
import { auth } from '../firebaseConfig'
import CreateHeader from '../CreateRecipe/CreateHeader'
import styled from 'styled-components/macro'
import LogoutButton from './LogoutButton'
import GridArea from '../GridArea'
import ChefsHat from '../images/chefs-hat.png'
import { Link } from 'react-router-dom'
import DetailsSection from './DetailsSection'

export default function ProfilePage({
  recipes,
  setPreviousPage,
  user,
  setUserStatus,
}) {
  const [displayElement, setDisplayElement] = useState('userRecipes')

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
              data-testid="detailsSelector"
              className="profile-user-details"
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
                        data-testid={recipe.title}
                        className={recipe.title}
                      />
                    </Link>
                  ))}
                </ImageSection>
              )}
            </>
          )}
          {displayElement === 'userDetails' && <DetailsSection user={user} />}
          <LogoutButton onClick={logoutUser} alt="logout" />
        </main>
      )}
    </GridArea>
  )

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
      : 'var(--primary-opaque)'};
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
      : 'var(--primary-opaque)'};
  background: ${(props) =>
    props.displayElement === 'userRecipes'
      ? 'var(--primary-background)'
      : 'rgba(242, 239, 233, 0.4)'};
  font-weight: ${(props) => (props.display === 'userRecipes' ? 300 : 200)};
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
