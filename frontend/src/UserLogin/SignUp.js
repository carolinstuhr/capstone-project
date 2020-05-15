import React, { useState, useRef, useEffect } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import styled from 'styled-components/macro'
import { auth } from '../firebaseConfig'
import LoginButton from './LoginButton'

function SignUp({ history }) {
  const [checked, setChecked] = useState(false)
  // const [userInput, setUserLoginInput] = useState({
  //   userName: '',
  //   email: '',
  //   password: '',
  //   passwordRepeat: '',
  // })

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
        name="userName"
        // value={userInput.userName}
        // onChange={storeUserLoginInput}
        ref={nameRef}
        required
      />
      <LabelStyled htmlFor="email">e-mail</LabelStyled>
      <InputStyled
        type="email"
        id="email"
        name="email"
        // value={userInput.email}
        // onChange={storeUserLoginInput}
        required
      />
      <LabelStyled htmlFor="password">password</LabelStyled>
      <InputStyled
        type="password"
        id="password"
        name="password"
        // value={userInput.password}
        // onChange={storeUserLoginInput}
        required
      />
      <LabelStyled htmlFor="passwordRepeat">repeat password</LabelStyled>
      <InputStyled
        type="password"
        id="passwordRepeat"
        name="passwordRepeat"
        // value={userInput.passwordRepeat}
        // onChange={storeUserLoginInput}
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
      {/* {console.log(userInput)} */}
    </FormStyled>
  )
  // function storeUserLoginInput(event) {
  //   setUserLoginInput({
  //     ...userInput,
  //     [event.target.name]: event.target.value,
  //   })
  // }

  function registerUser(event) {
    event.preventDefault()
    const { email, password } = event.target.elements
    auth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then(() => {
        history.push('/')
      })
      .catch((err) => alert(err))
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

export default withRouter(SignUp)
