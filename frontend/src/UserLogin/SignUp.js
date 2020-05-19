import React, { useState, useRef, useEffect, useContext } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import styled from 'styled-components/macro'
import { auth, db } from '../firebaseConfig'
import LoginButton from './LoginButton'
import { AuthContext } from '../Auth'
import LoginHeader from './LoginHeader'
import PageLayout from './PageLayout'
import Pending from './Pending'

function SignUp({ history }) {
  const [checked, setChecked] = useState(false)
  const [buttonStatus, setButtonStatus] = useState(true)
  const [userName, setUserName] = useState('')

  const nameRef = useRef()
  useEffect(() => {
    if (nameRef) {
      nameRef.current.focus()
    }
  }, [])

  const [pending, setPending] = useState(false)

  const { currentUser } = useContext(AuthContext)

  if (pending) {
    return <Pending>welcome</Pending>
  }

  if (currentUser) {
    return <Redirect exact to="/" />
  }

  return (
    <PageLayout>
      <LoginHeader>register</LoginHeader>
      <FormStyled onSubmit={registerUser}>
        <LabelStyled htmlFor="name">name</LabelStyled>
        <InputStyled
          type="text"
          id="name"
          name="userName"
          ref={nameRef}
          required
          onChange={(event) => {
            setUserName(event.target.value)
          }}
          value={userName}
        />
        <LabelStyled htmlFor="email">e-mail</LabelStyled>
        <InputStyled type="email" id="email" name="email" required />
        <LabelStyled htmlFor="password">password</LabelStyled>
        <InputStyled type="password" id="password" name="password" required />
        <LabelStyled htmlFor="passwordRepeat">repeat password</LabelStyled>
        <InputStyled
          type="password"
          id="passwordRepeat"
          name="passwordRepeat"
          required
        />
        <CheckboxStyled
          type="checkbox"
          id="tc"
          checked={checked}
          onChange={() => clickCheckbox(checked)}
        />
        <CheckboxLabel htmlFor="tc">
          Accept the terms and conditions
        </CheckboxLabel>
        <LoginButton buttonStatus={buttonStatus}>Register</LoginButton>
      </FormStyled>
    </PageLayout>
  )

  function registerUser(event) {
    setPending(true)
    event.preventDefault()
    const { email, password } = event.target.elements
    auth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        createNewUser(res.user)
        setTimeout(() => {
          setPending(false)
          history.push('/')
        }, 2000)
      })
      .catch((err) => alert(err))
  }

  function createNewUser(user) {
    return db.collection('users').doc(user.uid).set({
      id: user.uid,
      email: user.email,
      name: userName,
    })
  }

  function clickCheckbox(checked) {
    setChecked(!checked)
    if (checked) {
      setButtonStatus(true)
    } else {
      setButtonStatus(false)
    }
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
  width: 200px;
  font-size: 16px;
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
