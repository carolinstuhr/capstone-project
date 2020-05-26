import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { db } from '../firebaseConfig'

export default function DetailsSection({ user }) {
  const [editProfile, setEditProfile] = useState(false)
  const [details, setDetails] = useState({
    internationalCuisine: '',
    childhoodDish: '',
    restaurant: '',
  })

  return (
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
            className="input-international"
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
          <ButtonSaveStyled
            onClick={() => addDetails(user)}
            className="save-button"
          >
            save
          </ButtonSaveStyled>
          <ButtonCancelStyled
            onClick={() => setEditProfile(false)}
            className="cancel-button"
          >
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
                  <UserInput className="user-input">
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
          {user.details === [] ||
            (details.internationalCuisine === '' &&
              details.childhoodDish === '' &&
              details.restaurant === '' && (
                <NoUserInput>
                  you haven't provided any additional information yet
                </NoUserInput>
              ))}
          <ButtonEditStyled
            onClick={() => changeEditMode()}
            className="edit-button"
          >
            edit profile
          </ButtonEditStyled>
        </>
      )}
    </UserDetails>
  )
  function storeDetails(event) {
    setDetails({ ...details, [event.target.name]: event.target.value })
  }

  function changeEditMode() {
    setEditProfile(true)

    console.log(details)

    details && setDetails(user.details)
  }

  function addDetails(user) {
    db.collection('users')
      .doc(user.id)
      .update({ details })
      .then(() => {
        setEditProfile(false)
      })
      .catch((err) =>
        alert('Something went wrong. Please try again later.', err)
      )
  }
}
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
  color: var(--primary);
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
const NoUserInput = styled.p`
  font-weight: 200;
  font-size: 16px;
`
