import React from 'react'
import styled from 'styled-components/macro'

export default function GridArea({ children }) {
  return <GridDiv>{children}</GridDiv>
}
const GridDiv = styled.div`
  display: grid;
  grid-template-rows: 48px auto;
  height: 100vh;
`
