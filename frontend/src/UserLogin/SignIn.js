import React, { useRef, useEffect, useContext, useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { auth } from '../firebaseConfig'
import LoginButton from './LoginButton'
import { AuthContext } from '../Auth'

import LoginHeader from './LoginHeader'
import Pending from './Pending'

function SignIn({ history }) {
  const emailRef = useRef()

  useEffect(() => {
    if (emailRef) {
      emailRef.current.focus()
    }
  }, [])
  const [pending, setPending] = useState(false)

  const { currentUser } = useContext(AuthContext)

  if (pending) {
    return <Pending>welcome back</Pending>
  }

  if (currentUser) {
    return <Redirect exact to="/" />
  }

  return (
    <>
      <LoginHeader>sign in</LoginHeader>
      <FormStyled onSubmit={userLogin}>
        <LabelStyled htmlFor="email">e-mail</LabelStyled>
        <InputStyled
          type="email"
          id="email"
          name="email"
          ref={emailRef}
          required
        />
        <LabelStyled htmlFor="password">password</LabelStyled>
        <InputStyled type="password" id="password" name="password" required />
        <LoginButton buttonStatus={false}>Login</LoginButton>
      </FormStyled>
      <ParagraphStyled>Forgot your password?</ParagraphStyled>
      <ParagraphStyled>
        New to get cooking? <Link to="/signup">Sign-up</Link>
      </ParagraphStyled>
    </>
  )

  async function userLogin(event) {
    setPending(true)
    event.preventDefault()
    const { email, password } = event.target.elements
    return await auth
      .signInWithEmailAndPassword(email.value, password.value)
      .then(() => {
        setTimeout(() => {
          setPending(false)
          history.push('/')
        }, 1000)
      })
      .catch((err) => {
        alert(err)
        setPending(false)
      })
  }
}
const FormStyled = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  text-align: center;
  font-weight: 300;
  margin-top: 40px;
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
const ParagraphStyled = styled.p`
  margin-top: 26px;
  text-align: center;
  font-weight: 300;
  font-size: 14px;
`

export default withRouter(SignIn)
