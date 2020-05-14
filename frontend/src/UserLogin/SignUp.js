import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components/macro'
import { auth } from '../firebaseConfig'
import LoginButton from './LoginButton'

export default function SignUp({ storeUserLoginInput, userLoginInput }) {
  const [checked, setChecked] = useState(false)

  const nameRef = useRef()
  useEffect(() => {
    nameRef.current.focus()
  }, [])

  return (
    <FormStyled onSubmit={registerUser}>
      <LabelStyled htmlFor="name">name</LabelStyled>
      <InputStyled
        type="text"
        id="name"
        name="name"
        value={userLoginInput.name}
        onChange={storeUserLoginInput}
        ref={nameRef}
        required
      />
      <LabelStyled htmlFor="email">e-mail</LabelStyled>
      <InputStyled
        type="email"
        id="email"
        name="email"
        value={userLoginInput.email}
        onChange={storeUserLoginInput}
        required
      />
      <LabelStyled htmlFor="password">password</LabelStyled>
      <InputStyled
        type="password"
        id="password"
        name="password"
        value={userLoginInput.password}
        onChange={storeUserLoginInput}
        required
      />
      <LabelStyled htmlFor="passwordRepeat">repeat password</LabelStyled>
      <InputStyled
        type="password"
        id="passwordRepeat"
        name="passwordRepeat"
        value={userLoginInput.passwordRepeat}
        onChange={storeUserLoginInput}
        required
      />
      <CheckboxStyled
        type="checkbox"
        id="tc"
        checked={checked}
        required
        onChange={() => setChecked(!checked)}
      />
      <CheckboxLabel htmlFor="tc">
        Accept the terms and conditions
      </CheckboxLabel>
      <LoginButton>Register</LoginButton>
      {console.log(userLoginInput.email)}
    </FormStyled>
  )
  function registerUser(event, userLoginInput) {
    console.log(userLoginInput)
    auth
      .createUserWithEmailAndPassword(
        userLoginInput.email,
        userLoginInput.password
      )
      .then((response) => {
        console.log(response)
      })
  }
}
const FormStyled = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  text-align: center;
  font-weight: 300;
`

const InputStyled = styled.input`
  display: block;
  margin-bottom: 18px;
  justify-self: center;
  grid-column: 1 / 3;
  border-radius: 4px;
  height: 32px;
  width: 180px;
`
const LabelStyled = styled.label`
  justify-self: center;
  grid-column: 1 / 3;
`
const CheckboxStyled = styled.input`
  justify-self: right;
  transform: scale(1.5);
`

const CheckboxLabel = styled.label`
  justify-self: left;
  margin-left: 4px;
`
