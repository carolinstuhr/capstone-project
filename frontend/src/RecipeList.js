import React from 'react'
import recipeData from './RecipeList.json'
import styled from 'styled-components/macro'

export default function RecipeList() {
  return (
    <main>
      <SectionStyled>
        {recipeData.map((recipe) => (
          <RecipeSectionStyled key={recipe.name}>
            <TitleStyled>
              {recipe.title.length > 25
                ? recipe.title.substring(0, 25) + '...'
                : recipe.title}
            </TitleStyled>
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
  margin-bottom: 40px;
  margin-left: 16px;
`

const ListItemsStyled = styled.li`
  font-family: 'Roboto', sans-serif;
  display: inline;
  margin-right: 8px;
  margin-top: 8px;
  background: #f1ece1;
  padding: 8px;
  border-radius: 12px;
  font-size: 16px;
  text-transform: lowercase;
  color: #6e5824;
`

const ListStyled = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 12px;
  margin-left: 0;
`

const TitleStyled = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  text-transform: capitalize;
`
