import React from 'react'
import recipeData from './RecipeList.json'
import styled from 'styled-components/macro'

export default function RecipeList() {
  return (
    <main>
      <SectionStyled>
        {recipeData.map((recipe, index) => (
          <RecipeSectionStyled key={index}>
            <ImageStyled src={recipe.image} alt="Recipe" />
            <TitleStyled>{recipe.title}</TitleStyled>
            <ListStyled>
              {recipe.tags.slice(0, 3).map((tag, index) => (
                <ListItemsStyled key={index}>{tag}</ListItemsStyled>
              ))}
            </ListStyled>
          </RecipeSectionStyled>
        ))}
      </SectionStyled>
    </main>
  )
}

const SectionStyled = styled.main`
  margin-top: 30px;
`

const RecipeSectionStyled = styled.section`
  margin-bottom: 44px;
  margin-left: 16px;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
`

const ImageStyled = styled.img`
  height: 80px;
  width: 80px;
  grid-row: 1 / 3;
  border-radius: 12px;
  object-fit: cover;
  margin-right: 8px;
`

const TitleStyled = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 300;
  margin-top: 4px;
  margin-bottom: 8px;
  width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ListStyled = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 4px;
  margin-left: 0;
`

const ListItemsStyled = styled.li`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 200;
  display: inline;
  margin-right: 8px;
  margin-top: 8px;
  background: #f2efe9;
  padding: 6px;
  border-radius: 12px;
  font-size: 16px;
  text-transform: lowercase;
  color: #696660;
`
