import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import FilterRecipes from './FilterRecipes'

export default function RecipeFavourites({ showRecipeDetails, recipes }) {
  let filteredRecipeData = recipes.filter(
    (recipe) => recipe.isFavourite === true
  )

  return (
    <SectionStyled>
      <Link exact to="/">
        All
      </Link>
      <FilterRecipes />
      {filteredRecipeData.map((recipe, index) => (
        <RecipeSectionStyled key={index}>
          {console.log(recipe.isFavourite)}
          <ImageSection>
            <Link to="/recipe">
              <ImageStyled
                src={recipe.image}
                alt="Recipe"
                onClick={() => showRecipeDetails('recipeID', recipe.id)}
              />
            </Link>
          </ImageSection>
          <TitleStyled onClick={() => showRecipeDetails('recipeID', recipe.id)}>
            <LinkStyled to="/recipe">{recipe.title}</LinkStyled>
          </TitleStyled>
          <TagSectionStyled>
            {recipe.tags.slice(0, 3).map((tag, index) => (
              <TagsStyled key={index}>{tag}</TagsStyled>
            ))}
          </TagSectionStyled>
        </RecipeSectionStyled>
      ))}
    </SectionStyled>
  )
}

const SectionStyled = styled.main`
  margin-top: 18px;
`

const RecipeSectionStyled = styled.section`
  margin-bottom: 44px;
  margin-left: 16px;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr 1fr;
`

const ImageSection = styled.section`
  height: 80px;
  width: 80px;
  grid-row: 1 / 3;
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
  margin-bottom: 4px;
  width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #514f4b;
`

const TagSectionStyled = styled.section`
  padding-left: 0;
  margin-left: 0;
`

const TagsStyled = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 200;
  margin-right: 8px;
  margin-top: 4px;
  background: #f2efe9;
  padding: 6px;
  border-radius: 12px;
  font-size: 16px;
  text-transform: lowercase;
  color: #696660;
`