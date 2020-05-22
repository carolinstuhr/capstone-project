import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthConsumer } from './Auth'

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  return (
    <AuthConsumer>
      {(props) => {
        return props.currentUser ? (
          <Route
            {...rest}
            render={(routeProps) => <RouteComponent {...routeProps} />}
          />
        ) : (
          <Redirect to={'/signin'} />
        )
      }}
    </AuthConsumer>
  )
}
