import React from 'react'
import styled from 'styled-components/macro'

export default function PageLayout({ children }) {
  return <LayoutDiv>{children}</LayoutDiv>
}
const LayoutDiv = styled.div`
  background: #f2efe9;
  height: 100vh;
  margin: 0;
`
