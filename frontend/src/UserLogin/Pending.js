import React, { useEffect, useState } from 'react'
import { db } from '../firebaseConfig'
import LoginHeader from './LoginHeader'
import ChefsHat from '../images/chefs-hat.png'
import styled from 'styled-components/macro'
import PageLayout from './PageLayout'

export default function Pending({ children }) {
  const currentUser = localStorage.getItem('uid')
  const [users, setUsers] = useState([])

  // useEffect(() => {
  //   db.collection('users').onSnapshot((snapshot) => {
  //     const user = snapshot.docs.map((doc) => ({
  //       docId: doc.id,
  //       ...doc.data(),
  //     }))
  //     setUsers(user)
  //   })
  // }, [])

  // let user = users.filter((user) => user.id === currentUser)[0]

  return (
    <PageLayout>
      <LoginHeader></LoginHeader>
      <PendingHeading>{children}</PendingHeading>
      {/* <h1>{user.name}</h1> */}
      <Wrapper>
        <LoadingLogo src={ChefsHat} alt="loading" />
      </Wrapper>
    </PageLayout>
  )
}

const Wrapper = styled.div`
  height: 50px;
`

const LoadingLogo = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 40%;
  margin-left: 45%;

  animation-duration: 3s;
  animation-iteration-count: 2;
  animation-name: fadein;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const PendingHeading = styled.h1`
  margin-top: 70px;
`
