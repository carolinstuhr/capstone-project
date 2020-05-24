import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthConsumer } from './Auth'

export default function PrivateRoute({ children, ...rest }) {
  return (
    <AuthConsumer>
      {(props) => {
        return props.currentUser ? (
          <Route {...rest}>{children}</Route>
        ) : (
          <Redirect to={'/signin'} />
        )
      }}
    </AuthConsumer>
  )
}
