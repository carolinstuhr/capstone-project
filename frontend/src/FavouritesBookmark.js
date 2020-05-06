import React from 'react'
import { FaHeart } from 'react-icons/fa'
import styled from 'styled-components'

export default function FavouritesBookmark({ toggleFavourites, isFavourite }) {
  return <HeartStyled onClick={toggleFavourites} isFavourite={isFavourite} />
}

const HeartStyled = styled(FaHeart)`
  position: absolute;
  text-align: right;
  left: 88%;
  top: 12px;
  height: 32px;
  width: 32px;
  padding: 4px;
  background: rgba(242, 239, 233, 0.6);
  border-radius: 4px;
  color: ${(props) => (props.isFavourite ? '#c82a1a' : 'white')};
`
