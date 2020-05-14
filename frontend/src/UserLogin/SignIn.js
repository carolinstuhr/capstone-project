import React, { useRef, useEffect } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import LoginButton from './LoginButton'

export default function SignIn({ storeUserLoginInput, userLoginInput }) {
  const emailRef = useRef()
  useEffect(() => {
    emailRef.current.focus()
  }, [])

  return (
    <>
      <FormStyled onSubmit={userLogin}>
        <LabelStyled htmlFor="email">e-mail</LabelStyled>
        <InputStyled
          type="email"
          id="email"
          name="email"
          value={userLoginInput.email}
          onChange={(event) => storeUserLoginInput(event)}
          ref={emailRef}
          required
        />
        <LabelStyled htmlFor="password">password</LabelStyled>
        <InputStyled
          type="password"
          id="password"
          name="password"
          value={userLoginInput.password}
          onChange={(event) => storeUserLoginInput(event)}
          required
        />
        {console.log(userLoginInput)}
        <LoginButton>Login</LoginButton>
      </FormStyled>
      <ParagraphStyled>Forgot your password?</ParagraphStyled>
      <ParagraphStyled>
        New to get cooking? <Link to="signup">Sign-up</Link>
      </ParagraphStyled>
    </>
  )
  function userLogin() {}
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
  width: 180px;
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
