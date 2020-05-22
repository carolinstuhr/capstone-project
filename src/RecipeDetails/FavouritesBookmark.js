import React from 'react'
import { FaHeart } from 'react-icons/fa'
import styled from 'styled-components/macro'

export default styled(FaHeart)`
  position: absolute;
  text-align: right;
  left: 88%;
  top: 12px;
  height: 32px;
  width: 32px;
  padding: 4px;
  background: var(--primary-backgroundopaque);
  border-radius: 4px;
  color: ${(props) => (props.isFavourite ? '#c82a1a' : 'white')};
  transition-duration: 0.8s;
`
