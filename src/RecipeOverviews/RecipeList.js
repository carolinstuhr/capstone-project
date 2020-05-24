import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function RecipeList({
  filteredRecipeData,
  setPreviousPage,
  page,
}) {
  return (
    <>
      {filteredRecipeData.map((recipe, index) => (
        <RecipeSectionStyled key={index}>
          <ImageSection>
            <Link to={`/recipe/${recipe.id}`}>
              <ImageStyled
                src={recipe.image}
                alt=""
                onClick={() => setPreviousPage(page)}
                className={`recipe${index}`}
              />
            </Link>
          </ImageSection>
          <TitleStyled onClick={() => setPreviousPage(page)}>
            <LinkStyled to={`/recipe/${recipe.id}`} className={recipe.title}>
              {recipe.title}
            </LinkStyled>
          </TitleStyled>
          <TagSectionStyled>
            {recipe.tags.slice(0, 3).map((tag, index) => (
              <TagsStyled key={index}>{tag}</TagsStyled>
            ))}
          </TagSectionStyled>
        </RecipeSectionStyled>
      ))}
    </>
  )
}

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
  border-radius: 12px;
  object-fit: cover;
  margin-right: 8px;
`

const TitleStyled = styled.h3`
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
  color: var(--primary);
`

const TagSectionStyled = styled.section`
  padding-left: 0;
  margin-left: 0;
`

const TagsStyled = styled.span`
  font-weight: 200;
  margin-right: 8px;
  margin-top: 4px;
  background: var(--primary-background);
  padding: 6px;
  border-radius: 12px;
  font-size: 16px;
  text-transform: lowercase;
  color: var(--secondary);
`
